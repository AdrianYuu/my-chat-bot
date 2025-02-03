import useChat from "../hooks/use-chat";

const ChatPage = () => {
  const { prompt, setPrompt, result, isLoading, handleSubmit } = useChat();

  return (
    <div className="w-full min-h-screen bg-orange-400 flex items-center justify-center p-8">
      <div className="w-full flex justify-center items-center flex-col gap-8 max-w-[92rem]">
        <form onSubmit={handleSubmit} className="flex gap-3 w-3/5">
          <input
            type="text"
            placeholder="Enter your prompt here..."
            className="bg-white py-3 px-3 w-full rounded-xl outline-0"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="bg-white px-6 py-3 rounded-xl cursor-pointer hover:opacity-90"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>

        {!isLoading && result && result.length > 0 && (
          <div className="w-3/5 flex flex-col gap-3 text-black">
            <p className="text-2xl text-white font-semibold">Result</p>
            <div className="bg-white p-4 rounded-xl max-h-96 overflow-scroll overflow-x-hidden">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
