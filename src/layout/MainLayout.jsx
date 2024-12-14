import React from "react";
import { useLocation, Outlet, matchPath } from "react-router-dom";
import Header from "../components/share/Header";
import Footer from "../components/share/Footer";

const MainLayout = () => {
  const location = useLocation();

  const hideHeaderPaths = [];

  const hideFooterPaths = [
    "/login",
    "/register",
    "/aichatbot",
    "/profile",
    "/profile/edit",
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
