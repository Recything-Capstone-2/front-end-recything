import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPrompt } from "../utils/promptBuilder";
import { generationConfig, safetySettings } from "../config/geminiConfig";
import useHistoryReport from "../../report-rubbish/hooks/useHistoryReport";
import usePoints from "../../beranda-user/hooks/usePoints";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const useAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    reports,
    isLoading: isReportsLoading,
    error: reportsError,
  } = useHistoryReport();
  const {
    points,
    isLoading: isPointsLoading,
    error: pointsError,
  } = usePoints();

  useEffect(() => {
    if (!isReportsLoading && reports.length > 0) {
      console.log("Reports fetched:", reports);
    }
    if (!isPointsLoading && points != null) {
      console.log("User points fetched:", points);
    }
  }, [reports, isReportsLoading, points, isPointsLoading]);

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

      const prompt = buildPrompt(userPrompt, history, reports, points);
      const result = await model.generateContent(prompt);
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

    const aiMessage = {
      user: "Greenly Assistant",
      message:
        aiResponse ||
        "Maaf, terjadi kesalahan dalam mengambil respons. Coba lagi.",
      time: new Date().toLocaleTimeString(),
    };

    return [...updatedHistory, aiMessage];
  };

  return {
    generateResponse,
    handleSend,
    isLoading,
    error,
    reports,
    reportsError,
    points,
    pointsError,
  };
};
