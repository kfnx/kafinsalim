import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { processPDF } from '@/lib/pdf-processor';
import { VectorStore } from '@/lib/embeddings';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let vectorStoreInstance: VectorStore | null = null;

const RESUME_FILENAME = 'resume-2025.pdf'

async function initializeVectorStore(): Promise<VectorStore> {
  if (vectorStoreInstance && vectorStoreInstance.getDocumentCount() > 0) {
    return vectorStoreInstance;
  }

  vectorStoreInstance = new VectorStore();
  
  try {
    const resumePath = path.join(process.cwd(), 'public', RESUME_FILENAME);
    const processedDoc = await processPDF(resumePath);
    console.log("🚀 ~ initializeVectorStore ~ processedDoc:", processedDoc)
    
    const documents = processedDoc.chunks.map((chunk, index) => ({
      id: `resume-chunk-${index}`,
      text: chunk,
      metadata: {
        source: RESUME_FILENAME,
        chunkIndex: index,
        title: processedDoc.metadata.title
      }
    }));
    
    await vectorStoreInstance.addDocuments(documents);
    console.log(`Initialized vector store with ${documents.length} document chunks`);
    
  } catch (error) {
    console.error('Error initializing vector store:', error);
    throw new Error('Failed to initialize vector store');
  }
  
  return vectorStoreInstance;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const vectorStore = await initializeVectorStore();
    const relevantDocs = await vectorStore.searchSimilar(message, 3);
    
    const context = relevantDocs
      .map(doc => doc.text)
      .join('\n\n');

    const systemPrompt = `You are a helpful assistant that answers questions about Kafin Salim based on his resume. 
Use the provided context from his resume to answer questions accurately and professionally.

Context from Kafin's resume:
${context}

Instructions:
- Answer questions based primarily on the provided context
- If the question is not directly addressed in the context, provide a helpful response based on what information is available
- Keep responses concise but informative
- Maintain a professional and friendly tone
- If you don't have enough information to answer a question, politely explain what information is available`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 
      "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({ response });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}