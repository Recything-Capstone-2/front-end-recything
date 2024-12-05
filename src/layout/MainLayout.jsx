import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../components/share/Header";
import Footer from "../components/share/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/register", "/dashboard-admin", "/dashboard/report/process", "/dashboard/report/approve", "/dashboard/report/done", "/dashboard/report/reject", "/dashboard/report/all"];
  const hideFooterPaths = [
    "/login",
    "/register",
    "/aichatbot",
    "/dashboard-admin",
    "/profile",
    "/dashboard/report/all",
    "/dashboard/report/process",
    "/dashboard/report/approve",
    "/dashboard/report/done",
    "/dashboard/report/reject",
    "/profile/edit",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default MainLayout;
