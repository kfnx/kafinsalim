"use client";

import { Chatbot } from "./chatbot";

export function ChatbotProvider() {
  const handleSendMessage = async (message: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      return data.response || "I apologize, but I couldn't generate a response.";
    } catch (error) {
      console.error('Error sending message:', error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };

  return <Chatbot onSendMessage={handleSendMessage} />;
}