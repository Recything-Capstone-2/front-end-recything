import React from "react";
import ChatDrawer from "./ChatDrawer";
import AiChatbotSection from "./AiChatbotSection";
import { history } from "../../constant/history";

const AiChatbotPage = () => {
  return (
    <div className="flex bg-green-50">
      {/* <ChatDrawer history={history} /> */}
      <AiChatbotSection />
    </div>
  );
};

export default AiChatbotPage;
