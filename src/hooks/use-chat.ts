import { useState } from "react";
import { getAIResponse } from "../services/ai-service";
import { toast } from "react-toastify";

const useChat = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (prompt.trim() === "") {
      toast("Prompt can't be empty!");
      return;
    }

    setResult("");
    setLoading(true);

    try {
      const response = await getAIResponse(prompt);
      const content =
        response?.choices?.[0]?.message?.content ??
        "Rate limit is exceeded. Please wait for a couple of seconds.";
      setResult(content);
    } catch (error) {
      toast.error("Failed to get response. Please try again.");
      setResult("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return {
    prompt,
    setPrompt,
    result,
    isLoading,
    handleSubmit,
  };
};

export default useChat;
