
import { GoogleGenAI } from "@google/genai";
import { TEAM_NAME, MOCK_ROSTER, MOCK_SCHEDULE, TEAMS, TEAM_SLOGAN, TRAINING_HUBS } from '../constants';

const SYSTEM_PROMPT = `You are the official AI Assistant for the ${TEAM_NAME}. 
Our motto is: "${TEAM_SLOGAN}"

HOW TO ACCESS THE PORTAL:
- This web application (the one the user is currently looking at) IS the MO Dawgs Unified Portal.
- It acts as a command center, linking out to our two main tools:
  1. GameChanger: Used for team schedules, live game streaming, scoring, and messaging.
  2. The Futures App: Used for elite player development, drills, rep tracking, and video analysis.

TRAINING HUBS:
- We train at several elite hubs including:
  ${TRAINING_HUBS.map(h => `- ${h.name} (${h.address})`).join('\n')}

GUIDELINES FOR ANSWERS:
- If a user asks "How do I access the portal", explain that they are already in it! Tell them they can find direct links to GameChanger and The Futures App on the Home screen.
- Tone: Aggressive, high-energy, elite, and encouraging.
- Vocabulary: "The Dawghouse", "Join the Pack", "Fear the Dawg", "Grind", "Next Level".
- Mention our 10 teams ranging from 9U to Collegiate.
- Use Google Search for the most up-to-date regional scores or baseball news.`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async askAssistant(message: string, history: { role: 'user' | 'model', text: string }[] = []) {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_PROMPT,
          tools: [{ googleSearch: {} }]
        }
      });

      const response = await chat.sendMessage({ message });
      
      const text = response.text || "I'm sorry, I couldn't process that request.";
      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => chunk.web).filter(Boolean) || [];

      return { text, sources };
    } catch (error) {
      console.error("Gemini Assistant Error:", error);
      return { text: "The Kennel is offline for a moment. Please try again soon.", sources: [] };
    }
  }
}

export const geminiService = new GeminiService();
