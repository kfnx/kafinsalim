import { pipeline } from '@xenova/transformers';

let embedder: any = null;

export async function initializeEmbedder() {
  if (!embedder) {
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  }
  return embedder;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const embedder = await initializeEmbedder();
  const output = await embedder(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export interface VectorDocument {
  id: string;
  text: string;
  embedding: number[];
  metadata?: any;
}

export class VectorStore {
  private documents: VectorDocument[] = [];
  
  async addDocument(id: string, text: string, metadata?: any): Promise<void> {
    const embedding = await generateEmbedding(text);
    this.documents.push({
      id,
      text,
      embedding,
      metadata
    });
  }
  
  async addDocuments(docs: { id: string; text: string; metadata?: any }[]): Promise<void> {
    for (const doc of docs) {
      await this.addDocument(doc.id, doc.text, doc.metadata);
    }
  }
  
  async searchSimilar(query: string, topK: number = 3): Promise<VectorDocument[]> {
    if (this.documents.length === 0) {
      return [];
    }
    
    const queryEmbedding = await generateEmbedding(query);
    
    const similarities = this.documents.map(doc => ({
      document: doc,
      similarity: cosineSimilarity(queryEmbedding, doc.embedding)
    }));
    
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK)
      .map(item => item.document);
  }
  
  getDocumentCount(): number {
    return this.documents.length;
  }
}