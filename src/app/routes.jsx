import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../features/landing-page/components";
import Login from "../features/auth/components/login.jsx";
import Register from "../features/auth/components/register.jsx";
import MainLayout from "../layout/MainLayout.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
