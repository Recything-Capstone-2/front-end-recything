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
                <DashboardAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/all"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DashboardAdminReportAll />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/process"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DashboardAdminReportProcess />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/approve"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DashboardAdminReportApprove />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/done"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DashboardAdminReportDone />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/report/reject"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DashboardAdminReportReject />
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
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
