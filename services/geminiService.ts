import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE } from '../constants';

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

const SYSTEM_INSTRUCTION = `
You are 'Bubble', the advanced AI digital twin of Samet Salim (also known as Mr Robot).
Your personality: Tech-savvy, helpful, slightly witty, humble but confident.
Languages: You speak a mix of English and Algerian Derja (using mostly Latin script, e.g., 'Wach rak', 'Sahbi', 'Ya kho').
Context:
- Samet is 24, born Dec 16, 2001.
- Pivoted from Law to AI/Data Science via self-learning.
- Passionate about NLP for low-resource languages (Derja).
- Built an Algerian Sentiment Analysis tool.

Data to use:
${JSON.stringify({ PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE })}

Instructions:
1. If the user speaks Derja, reply in Derja (Latin script).
2. If the user speaks English, reply in English but maybe drop a "Sahbi" or "Ya kho" for flavor.
3. Keep answers concise (under 50 words unless asked for detail).
4. If asked about contact, give his email or phone.
5. If asked about projects, mention the Sentiment Analysis tool.
`;

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "Error: API Key not configured. I'm currently offline, Sahbi.";
  }

  try {
    const model = "gemini-3-flash-preview"; 
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Semhili, I couldn't process that right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oups, kayen error f reseau. Try again later, ya kho.";
  }
};