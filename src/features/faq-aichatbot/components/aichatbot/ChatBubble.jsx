import React from "react";
import useUser from "../../../../store/userStore.js";

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
        className="w-8 h-8 rounded-full"
        src={
          isUser
            ? currentUser?.photo ||
              "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
            : "https://s3-alpha-sig.figma.com/img/89a0/09b7/37013342c9970b94dd4fd014220e545f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T20oUcKmoWYp-OJgS1hFuMbQsvnY4fw4aOJH95yRhvHTT5el3idBAop50B1cCDr7pkMq0Q2dvlMZUVQ2cvGUNX8TGNDyiPFnG2pFEpkh9o18gra8dxfbA3s0gIyPir278QbQn~H8I0sJmOWk45vrgWpoPfPmVCrLRlmGFzlsSt5KE2Z28hjMlya7IWoEV4Y49teFK8wEbMvFjZwuVL95M9~yBb8JGAYjcd7rccAVK7B9zuh0uzTEkL04sWmBUGcySF2-44K7KcGQBKOL990-YZ-D6jeqV04S8A1beQtloAO6rvkjLpehK1nuuJgjC4fz2OPdId-pTo9SixIxGSvP0w__"
        }
        alt={`${userName} image`}
      />
      {/* Bubble chat */}
      <div
        className={`flex flex-col w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[320px] p-4 ${
          isUser ? "bg-gray-100" : "bg-primary-05"
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
