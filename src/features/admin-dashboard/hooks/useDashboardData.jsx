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
      const data = response.data.data?.slice(0, 5) || [];
      setLatestReport(data);
    } catch (error) {
      setError("Gagal memuat laporan terbaru. Silakan coba lagi.");
    }
  };

  const getReportCount = async () => {
    try {
      const response = await instance.get("/admin/report-rubbish");
      const dataReport = response?.data.data.data; 
      const total = dataReport?.pagination.total_report;

      if(!total) {
        setReportCount(0);
        return;
      }

      setReportCount(total);
    } catch (error) {
      setError("Gagal memuat jumlah laporan. Silakan coba lagi.");
    }
  };

  const getUserCount = async () => {
    try {
      const response = await instance.get("/admin/users");
      const dataUser = response.data.data;
      const total = dataUser?.length;
      if(!total) {
        setUserCount(0);
        return;
      }
      setUserCount(total);
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
