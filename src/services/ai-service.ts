import axios, { AxiosResponse } from "axios";
import { AIResponse } from "../interfaces/ai-response";

export const getAIResponse = async (
  prompt: string
): Promise<AIResponse | null> => {
  try {
    const response: AxiosResponse<AIResponse> = await axios.post(
      import.meta.env.VITE_OPENROUTER_BASE_URL,
      {
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
