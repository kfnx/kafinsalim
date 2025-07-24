# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the Next.js application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15 portfolio website with an AI-powered chatbot feature that uses RAG (Retrieval Augmented Generation) to answer questions about the owner's resume.

### Key Architecture Components

**Main Application Structure:**
- Built with Next.js 15 (App Router) and React 19
- Uses TypeScript throughout the codebase
- Styled with Tailwind CSS and uses shadcn/ui components
- Features dark/light theme support via next-themes

**AI Chatbot System:**
- **Vector Store (`lib/embeddings.ts`):** Custom implementation using @xenova/transformers for client-side text embeddings with all-MiniLM-L6-v2 model
- **PDF Processing (`lib/pdf-processor.ts`):** Processes resume PDF from `/public/resume-2025.pdf`, chunks text by sentences (500 chars max), and creates searchable documents
- **Chat API (`app/api/chat/route.ts`):** Handles chatbot requests by searching vector store for relevant resume chunks, then sends context to OpenAI GPT-3.5-turbo for response generation
- **Chatbot UI (`components/chatbot.tsx` + `components/chatbot-provider.tsx`):** Floating chat widget with motion animations

**UI Component Structure:**
- **Core Components:** Portfolio sections (hero, about, skills, projects, contact)
- **Magic UI Components:** Enhanced components in `components/magicui/` including AuroraText, RetroGrid, ScrollProgress, InteractiveHoverButton
- **shadcn/ui:** Complete UI component library in `components/ui/`
- **Animation System:** Custom scroll animations via `components/scroll-animation-wrapper.tsx` and `hooks/use-scroll-animation.tsx`

### Environment Setup

The chatbot requires `OPENAI_API_KEY` environment variable to function. Without it, the chat API will return a 500 error.

### Development Patterns

- Components use "use client" directive when client-side features are needed (state, effects, animations)
- Consistent use of TypeScript interfaces for type safety
- Motion/framer-motion used extensively for animations and transitions
- Responsive design patterns with Tailwind's mobile-first approach
- Error boundaries and proper error handling in API routes

### Notable Technical Decisions

- Custom vector store implementation instead of external service for simplicity
- Client-side embedding generation to avoid server costs
- Sentence-based text chunking for better semantic coherence
- Resume content is loaded from static PDF in public directory
- Build configuration ignores TypeScript and ESLint errors for faster iteration