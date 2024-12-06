import { useState, useEffect } from "react";
import instance from "../../../utils/instance";

const useAllDataReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllDataReport = async () => {
      try {
        const response = await instance.get("/report-rubbish");
        if (response.status === 200) {
          setReports(response.data.data);
        } else {
          setError(response.data.meta.message || "Terjadi kesalahan.");
        }
      } catch (err) {
        setError("Gagal memuat data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllDataReport();
  }, []);

  const updateReportStatus = async (id, newStatus) => {
    try {
      const response = await instance.put(`/report-rubbish/${id}/status`, {
        status: newStatus,
      });

      if (response.status === 200) {
        setReports((prevReports) =>
          prevReports.map((report) =>
            report.id === id ? { ...report, status: newStatus } : report
          )
        );
      } else {
        console.error("Failed to update status:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return { reports, loading, error, updateReportStatus };
};

export default useAllDataReport;
