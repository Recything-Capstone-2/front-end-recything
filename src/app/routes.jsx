import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../features/landing-page/components";
import Login from "../features/auth/components/login.jsx";
import Register from "../features/auth/components/register.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import FAQChatbotAI from "../features/faq-aichatbot/components/faq/index.jsx";
import AiChatbotPage from "../features/faq-aichatbot/components/aichatbot/index.jsx";
import ReportRubbish from "../features/report-rubbish/components/index.jsx";
import BerandaUser from "../features/beranda-user/components/index.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faq" element={<FAQChatbotAI />} />
          <Route path="/aichatbot" element={<AiChatbotPage />} />
           <Route path="/beranda-user" element={<BerandaUser />} />
          <Route path="/report-rubbish" element={<ReportRubbish />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
