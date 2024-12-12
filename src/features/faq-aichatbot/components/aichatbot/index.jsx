import React from "react";
import ChatDrawer from "./ChatDrawer";
import AiChatbotSection from "./AiChatbotSection";
import { history } from "../../constant/history";

const AiChatbotPage = () => {
  return (
    <div className="flex max-w-[1440px] bg-green-50 dark:bg-gray-800">
      {/* <ChatDrawer history={history} /> */}
      <AiChatbotSection />
    </div>
  );
};

export default AiChatbotPage;
