import React from "react";
import { useNavigate } from "react-router-dom";
import { groupByTime } from "../../utils/timeUtils";

const ChatDrawer = ({ history }) => {
  const navigate = useNavigate();
  const groupedHistory = groupByTime(history);

  const handleNavigate = () => {
    navigate("/faq");
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="w-1/5 bg-white h-screen p-4 border-r">
      <h3 className="text-xl font-semibold mb-4">Hari Ini</h3>
      <ul className="space-y-3">
        {groupedHistory.today.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg text-sm"
          >
            {item.message}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4 mt-6">Seminggu yang Lalu</h3>
      <ul className="space-y-3">
        {groupedHistory.lastWeek.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg text-sm"
          >
            {item.message}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4 mt-6">Sebulan yang Lalu</h3>
      <ul className="space-y-3">
        {groupedHistory.lastMonth.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg text-sm"
          >
            {item.message}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <button
          onClick={handleNewChat}
          className="w-full bg-green-500 text-white py-2 rounded-md mb-3 hover:bg-green-600 transition-all duration-300"
        >
          Mulai Chat Baru
        </button>
        <button
          onClick={handleNavigate}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-800 transition-all duration-300"
        >
          Kembali ke FAQ
        </button>
      </div>
    </div>
  );
};

export default ChatDrawer;
