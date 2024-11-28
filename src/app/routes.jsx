import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../features/landing-page/components";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
