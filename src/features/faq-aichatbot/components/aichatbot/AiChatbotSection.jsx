import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import logo from "../../../../assets/logo/logo-only-big.png";
import { IoMdSend } from "react-icons/io";
import { useAI } from "../../hooks/useAI";
import ReactMarkdown from "react-markdown";

const AiChatbotSection = ({ user }) => {
  const { handleSend, isLoading, error } = useAI();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const chatContainerRef = useRef(null);

  const onSendMessage = async () => {
    if (input.trim()) {
      const updatedMessages = await handleSend(input, messages);
      setMessages(updatedMessages);
      setInput("");
      setIsMessageSent(true);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTopicClick = (text) => {
    setInput(text);
  };

  return (
    <div className="flex flex-col h-screen w-full p-4 md:p-6 lg:px-10">
      {!isMessageSent && (
        <>
          <div className="flex justify-center py-8 md:py-10 mt-8">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="text-lg md:text-2xl font-bold mb-6 text-center">
            Halo {user},<br /> Bagaimana kita bisa membantu hari ini?
          </h2>
          <p className="text-gray-500 text-center py-4 text-sm md:text-base">
            Gunakan topik dibawah untuk memulai:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() =>
                handleTopicClick(
                  "Halo, saya ingin mengecek status laporan sampah yang sudah saya kirim. Bisa bantu saya melacaknya?"
                )
              }
              className="bg-gray-200 text-sm px-4 py-2 rounded-lg flex flex-col items-start min-h-[100px] w-full max-w-xs md:w-80 text-left"
            >
              <span className="font-bold mb-2">
                Laporan Sampah yang Saya Kirim
              </span>
              <span className="text-xs text-gray-600 mt-2">
                "Halo, saya ingin mengecek status laporan sampah yang sudah saya
                kirim. Bisa bantu saya melacaknya?"
              </span>
            </button>

            <button
              onClick={() =>
                handleTopicClick(
                  "Hai, bagaimana cara saya mendapatkan lebih banyak poin dan hadiah dengan Greenly?"
                )
              }
              className="bg-gray-200 text-sm px-4 py-2 rounded-lg flex flex-col items-start min-h-[100px] w-full max-w-xs md:w-80 text-left"
            >
              <span className="font-bold mb-2">
                Mengumpulkan Poin dan Reward
              </span>
              <span className="text-xs text-gray-600 mt-2">
                "Hai, bagaimana cara saya mendapatkan lebih banyak poin dan
                hadiah dengan Greenly?"
              </span>
            </button>
          </div>
        </>
      )}

      {messages.length > 0 && (
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto mb-4 flex flex-col-reverse"
        >
          <div>
            {messages.map((msg, index) => (
              <ChatBubble
                key={index}
                message={<ReactMarkdown>{msg.message}</ReactMarkdown>}
                user={msg.user}
                time={msg.time}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mt-auto mb-8">
        <div className="flex items-center gap-2 p-2 bg-gray-100 shadow-md rounded-md w-full max-w-md md:max-w-lg mx-auto mb-3">
          <input
            type="text"
            placeholder="Tuliskan pertanyaan Anda disini ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
            className="flex-1 p-3 ml-5 outline-none border-gray-300 rounded-lg text-gray-700 ring-primary-05 text-sm md:text-base"
          />
          <IoMdSend
            onClick={onSendMessage}
            className="text-primary-05 cursor-pointer hover:text-green-700 h-5 w-5 md:h-6 md:w-6"
          />
        </div>
        <p className="text-gray-neutral06 text-xs md:text-sm text-center">
          Butuh bantuan? Ketik pertanyaan Anda, dan kami akan segera menjawab!
        </p>
        {isLoading && <p className="text-primary-05">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AiChatbotSection;
