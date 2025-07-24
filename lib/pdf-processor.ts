import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

export interface ProcessedDocument {
  text: string;
  chunks: string[];
  metadata: {
    title: string;
    pages: number;
    info?: any;
  };
}

export async function processPDF(filePath: string): Promise<ProcessedDocument> {
  try {
    const pdfBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(pdfBuffer);
    
    const chunks = chunkText(data.text, 500);
    
    return {
      text: data.text,
      chunks,
      metadata: {
        title: path.basename(filePath),
        pages: data.numpages,
        info: data.info
      }
    };
  } catch (error) {
    console.error('Error processing PDF:', error);
    throw new Error('Failed to process PDF');
  }
}

function chunkText(text: string, chunkSize: number = 500): string[] {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const chunks: string[] = [];
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (!trimmedSentence) continue;
    
    if (currentChunk.length + trimmedSentence.length + 1 <= chunkSize) {
      currentChunk += (currentChunk ? '. ' : '') + trimmedSentence;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk + '.');
      }
      currentChunk = trimmedSentence;
    }
  }
  
  if (currentChunk) {
    chunks.push(currentChunk + '.');
  }
  
  return chunks.filter(chunk => chunk.trim().length > 0);
}