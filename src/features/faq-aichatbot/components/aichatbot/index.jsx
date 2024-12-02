import React from "react";
import ChatDrawer from "./ChatDrawer";
import AiChatbotSection from "./AiChatbotSection";
import { history } from "../../constant/history";

const AiChatbotPage = () => {
  const user = "User";

  return (
    <div className="flex">
      {/* <ChatDrawer history={history} /> */}
      <AiChatbotSection user={user} />
    </div>
  );
};

export default AiChatbotPage;
