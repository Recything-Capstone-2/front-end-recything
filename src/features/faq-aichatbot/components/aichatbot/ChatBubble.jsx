import React from "react";

const ChatBubble = ({ message, user, time }) => {
  const isUser = user !== "Greenly Assistant";

  return (
    <div
      className={`flex gap-2 mb-4 px-28 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {!isUser && (
        <img
          className="w-8 h-8 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/89a0/09b7/37013342c9970b94dd4fd014220e545f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T20oUcKmoWYp-OJgS1hFuMbQsvnY4fw4aOJH95yRhvHTT5el3idBAop50B1cCDr7pkMq0Q2dvlMZUVQ2cvGUNX8TGNDyiPFnG2pFEpkh9o18gra8dxfbA3s0gIyPir278QbQn~H8I0sJmOWk45vrgWpoPfPmVCrLRlmGFzlsSt5KE2Z28hjMlya7IWoEV4Y49teFK8wEbMvFjZwuVL95M9~yBb8JGAYjcd7rccAVK7B9zuh0uzTEkL04sWmBUGcySF2-44K7KcGQBKOL990-YZ-D6jeqV04S8A1beQtloAO6rvkjLpehK1nuuJgjC4fz2OPdId-pTo9SixIxGSvP0w__"
          alt={`${user} image`}
        />
      )}
      <div
        className={`flex flex-col w-full max-w-[320px] p-4 ${
          isUser ? "bg-gray-100" : "bg-primary-05"
        } rounded-xl`}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm font-semibold ${
              isUser ? "text-gray-900" : "text-white"
            }`}
          >
            {isUser ? user : "Greenly Assistant"}
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
      {isUser && (
        <img
          className="w-8 h-8 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/9afa/40e6/7f9adfb6486c67063d80474f4d89a506?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z0XVl44YZBON7R4DCoDwDykGv-W5Q3XfhfAVN0h5-x~5Qiz1SHOjXDy9MfRoN5DpVzkcTIRNcra9XLlcGqM6njoKkOHyPrJd0EtuxpDfnQ6X46CVq5jLL89LXo9AjdPK3wZ3R3QHANo0GRG-b9HJnk9eE0fj7DiGa5mjg5fPkCL-sJgzmPPAEl8d4z8ZpWsiQbt6eVTdZ1O5H33GG5S0wAEErSpJBBmY7~5qRYyXfuMBl8Q9HelVHRlmQB-A4Bp349l-U47iix7L6NJABkeuQQSb1zoj4EM-tH2Teg-EieTD4gv9kYwT1dWbqhbUIr28U38ZPdsMhjVMxlHtUkgWAw__"
          alt={`${user} image`}
        />
      )}
    </div>
  );
};

export default ChatBubble;
