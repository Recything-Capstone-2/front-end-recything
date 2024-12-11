import React from "react";
import { useLocation, Outlet, matchPath } from "react-router-dom";
import Header from "../components/share/Header";
import Footer from "../components/share/Footer";

const MainLayout = () => {
  const location = useLocation();

  const hideHeaderPaths = [
    "/login",
    "/register",
    "/dashboard-admin",
    "/dashboard/report/process",
    "/dashboard/report/approve",
    "/dashboard/report/done",
    "/dashboard/report/reject",
    "/dashboard/report/all",
    "/dashboard/user",
    "/dashboard/coin",
    "/dashboard/user/:id",
  ];

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
    "/dashboard/user",
    "/dashboard/coin",
    "/dashboard/user/:id",
  ];

  const isPathHidden = (pathList) =>
    pathList.some((path) => matchPath({ path, end: true }, location.pathname));

  return (
    <div className="flex flex-col min-h-screen">
      {!isPathHidden(hideHeaderPaths) && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isPathHidden(hideFooterPaths) && <Footer />}
    </div>
  );
};

export default MainLayout;
