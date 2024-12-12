import { useState, useEffect } from "react";
import instance from "../../../utils/instance.js";

const DEFAULT_IMAGE_URL =
  "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg";

export default function useDetailReport(reportId) {
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reportId) {
      setLoading(false);
      return;
    }

    const fetchReportById = async (id) => {
      setLoading(true);
      try {
        const response = await instance.get(`/admin/report-rubbish/${id}`);
        const dataReport = response?.data?.data;

        setReport(dataReport || null);
      } catch (error) {
        console.error("Error fetching report data:", error);
        setError("Gagal mengambil data laporan. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchReportById(reportId);
  }, [reportId]);

  return {
    report,
    error,
    loading,
    defaultImageUrl: DEFAULT_IMAGE_URL,
  };
}
