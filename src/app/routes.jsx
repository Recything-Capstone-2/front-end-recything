import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../features/landing-page/components";
import Login from "../features/auth/components/login.jsx";
import Register from "../features/auth/components/register.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import FAQChatbotAI from "../features/faq-aichatbot/components/faq/index.jsx";
import AiChatbotPage from "../features/faq-aichatbot/components/aichatbot/index.jsx";
import ReportRubbish from "../features/report-rubbish/components/index.jsx";
import BerandaUser from "../features/beranda-user/components/index.jsx";
import PrivateRoute from "../middleware/PrivateRoute.jsx";
import DashboardAdmin from "../features/admin-dashboard/components/index.jsx";
import Profile from "../features/profile/components/index.jsx";
import HistoryReport from "../features/report-rubbish/components/history.report.jsx";
import DashboardAdminReportProcess from "../features/admin-dashboard-report/components/report.process.jsx";
import DashboardAdminReportApprove from "../features/admin-dashboard-report/components/report.approve.jsx";
import DashboardAdminReportDone from "../features/admin-dashboard-report/components/report.done.jsx";
import DashboardAdminReportReject from "../features/admin-dashboard-report/components/report.reject.jsx";
import DashboardAdminReportAll from "../features/admin-dashboard-report/components/index.jsx";
import ProfileEdit from "../features/profile/components/form.edit,profile.jsx";
import AboutUsPage from "../features/about-us/components/index.jsx";
import AdminDataUsersPage from "../features/admin-data-users/components/index.jsx";
import DetailReport from "../features/admin-dashboard-report/components/DetailReport.jsx";
import { FilterProvider } from "../features/dashboard/context/FilterContext.jsx";
import AdminManageCoins from "../features/admin-manage-coins/components/index.jsx";
import DetailUser from "../features/admin-data-users/components/DetailUser.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/faq"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <FAQChatbotAI />
              </PrivateRoute>
            }
          />
          <Route
            path="/aichatbot"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <AiChatbotPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/beranda-user"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <BerandaUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/report"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <ReportRubbish />
              </PrivateRoute>
            }
          />
          <Route
            path="/history-report"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <HistoryReport />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard-admin"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DashboardAdmin />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/all"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DashboardAdminReportAll />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/process"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DashboardAdminReportProcess />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/approve"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DashboardAdminReportApprove />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/done"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DashboardAdminReportDone />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/reject"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DashboardAdminReportReject />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <ProfileEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/tentang"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <AboutUsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/user"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <AdminDataUsersPage />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/coin"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <AdminManageCoins />
                </FilterProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/user/:id"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <FilterProvider>
                  <DetailUser />
                </FilterProvider>
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/dashboard/report/all/:id"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <FilterProvider>
                <DetailReport />
              </FilterProvider>
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
