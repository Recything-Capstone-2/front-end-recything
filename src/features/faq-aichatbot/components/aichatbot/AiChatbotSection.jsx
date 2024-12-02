import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import logo from "../../../../assets/logo/logo-only-big.png";

const AiChatbotSection = ({ user }) => {
  const [input, setInput] = useState(""); // Menyimpan input pengguna
  const [messages, setMessages] = useState([]); // Menyimpan pesan
  const [isChatStarted, setIsChatStarted] = useState(false); // Menentukan apakah chat sudah dimulai

  const handleSend = () => {
    if (input.trim()) {
      // Menambahkan pesan ke dalam chat jika ada input
      setMessages([...messages, { user, message: input, time: "11:46" }]);
      setInput("");
      setIsChatStarted(true); // Setelah pesan dikirim, set isChatStarted menjadi true
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen p-6">
      {/* Jika chat belum dimulai, tampilkan bagian topik */}
      {!isChatStarted ? (
        <>
          <div className="flex justify-center py-10">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Halo {user},<br /> Bagaimana kita bisa membantu hari ini?
          </h2>
          <p className="text-gray-500 text-center py-4">
            Gunakan topik dibawah untuk memulai :
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-lg flex flex-col items-start min-h-[100px] w-80">
              <span className="font-bold mb-auto">
                Laporan Sampah yang Saya Kirim
              </span>
              <span className="text-xs text-gray-600 mt-1 items-start">
                "Halo, saya ingin mengecek status laporan sampah yang sudah saya
                kirim. Bisa bantu saya melacaknya?"
              </span>
            </button>
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-lg flex flex-col items-start min-h-[100px] w-80">
              <span className="font-bold mb-auto items-start">
                Mengumpulkan Poin dan Reward
              </span>
              <span className="text-xs text-gray-600 mt-1 items-start">
                "Hai, bagaimana cara saya mendapatkan lebih banyak poin dan
                hadiah dengan Greenly?"
              </span>
            </button>
          </div>
        </>
      ) : (
        // Jika chat sudah dimulai, tampilkan chat bubbles
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.message}
              user={msg.user}
              time={msg.time}
            />
          ))}
        </div>
      )}

      {/* Input field tetap ditampilkan di bagian bawah */}
      <div className="flex items-center gap-2 mt-auto">
        <input
          type="text"
          placeholder="Tuliskan pertanyaan Anda di sini..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 border rounded-lg"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-4 py-3 rounded-lg"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default AiChatbotSection;
