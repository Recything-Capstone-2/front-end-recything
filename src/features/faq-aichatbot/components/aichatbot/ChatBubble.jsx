import React from "react";

const ChatBubble = ({ message, user, time }) => {
  return (
    <div className="flex gap-2 mb-4">
      <img
        className="w-8 h-8 rounded-full"
        src="/docs/images/people/profile-picture-3.jpg"
        alt={`${user} image`}
      />
      <div className="flex flex-col w-full max-w-[320px] p-4 bg-gray-100 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">{user}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
