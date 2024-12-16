import React from "react";
import useUser from "../../../../store/userStore.js";
import avatarAI from "../../../../assets/images/avatar-ai.png";

const ChatBubble = ({ message, user, time }) => {
  const isUser = user !== "Greenly Assistant";
  const { user: currentUser } = useUser();
  const userName = isUser
    ? currentUser?.nama_lengkap || "User"
    : "Greenly Assistant";

  return (
    <div
      className={`flex gap-2 mb-4 px-4 sm:px-8 md:px-20 lg:px-44 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Foto profil untuk masing-masing user */}
      <img
        className="w-8 h-8 object-cover rounded-full"
        src={
          isUser
            ? currentUser?.photo ||
              "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
            : avatarAI
        }
        alt={`${userName} image`}
      />
      {/* Bubble chat */}
      <div
        className={`flex flex-col w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[320px] p-4 ${
          isUser ? "bg-gray-200" : "bg-primary-05"
        } ${
          isUser
            ? "rounded-s-xl rounded-ss-xl rounded-ee-xl"
            : "rounded-e-xl rounded-es-xl"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm font-semibold ${
              isUser ? "text-gray-900" : "text-white"
            }`}
          >
            {userName}
          </span>
          <span
            className={`text-xs ${isUser ? "text-gray-500" : "text-white"}`}
          >
            {time}
          </span>
        </div>
        <p className={`text-sm ${isUser ? "text-gray-900" : "text-white"}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
