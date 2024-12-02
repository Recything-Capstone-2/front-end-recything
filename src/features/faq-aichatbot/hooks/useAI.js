import { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export const useAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (userPrompt, history = []) => {
    setIsLoading(true);
    setError(null);
    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error("API Key is not defined. Check your .env file.");
      }

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig,
        safetySettings,
      });

      const contextPrompt = history
        .map((item) => `User: ${item.user}\nAI: ${item.response}`)
        .join("\n");

      const fullPrompt = `
        You are an AI assistant named Greenly for a website named Greenly. 
        Greenly focuses on guiding and reporting for end users to access all features and manage their reports. 
        Our app also has a gamification feature, where users can earn achievements after completing specific tasks. 
        Additionally, our app is equipped with a web dashboard.
      
        We divide user groups as follows:
        
        End Users:
        End users are the main users who use the application to see how trash bin recycling works and report if they see littering. 
        They can earn achievements if they successfully complete specific tasks.
      
        Please assist users with consultations about the website and its features, and help them navigate through the tasks and achievements they can accomplish.

        Use Indonesian langguage for the answer.
        
        ${contextPrompt}
        User: ${userPrompt}
        Greenly Assistant:
      `;

      const result = await model.generateContent(fullPrompt);
      const response = await result.response.text();
      console.log("AI Response:", response);
      return response;
    } catch (err) {
      console.error("Gemini AI Error:", err);
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (userInput, history) => {
    if (!userInput.trim()) return history;

    const userMessage = {
      user: "User",
      message: userInput,
      time: new Date().toLocaleTimeString(),
    };

    const updatedHistory = [...history, userMessage];

    const aiResponse = await generateResponse(userInput, updatedHistory);
    if (aiResponse) {
      const aiMessage = {
        user: "Greenly Assistant",
        message: aiResponse,
        time: new Date().toLocaleTimeString(),
      };
      updatedHistory.push(aiMessage);
    } else {
      const errorMessage = {
        user: "Greenly Assistant",
        message: "Maaf, terjadi kesalahan dalam mengambil respons. Coba lagi.",
        time: new Date().toLocaleTimeString(),
      };
      updatedHistory.push(errorMessage);
    }
    return updatedHistory;
  };

  return { generateResponse, handleSend, isLoading, error };
};
