import { useState, useEffect } from "react";
import instance from "../../../utils/instance.js";

const useDashboardData = () => {
  const [latestReport, setLatestReport] = useState([]);
  const [reportCount, setReportCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLatestReport = async () => {
    try {
      const response = await instance.get("/admin/latest-report");
      setLatestReport(response.data.data.slice(0, 5));
    } catch (error) {
      setError("Gagal memuat laporan terbaru. Silakan coba lagi.");
    }
  };

  const getReportCount = async () => {
    try {
      const response = await instance.get("/admin/report-rubbish");
      setReportCount(response.data.data.length);
    } catch (error) {
      setError("Gagal memuat jumlah laporan. Silakan coba lagi.");
    }
  };

  const getUserCount = async () => {
    try {
      const response = await instance.get("/admin/users");
      setUserCount(response.data.data.length);
    } catch (error) {
      setError("Gagal memuat jumlah pengguna. Silakan coba lagi.");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getLatestReport();
    getReportCount();
    getUserCount();
    setIsLoading(false);
  }, []);

  return { latestReport, reportCount, userCount, error, isLoading };
};

export default useDashboardData;
