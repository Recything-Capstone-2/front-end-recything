import { useState, useEffect } from "react";
import instance from "../../../utils/instance";

const useAllDataReport = (
  startDate,
  endDate,
  sortOrder,
  page = 1,
  perPage = 10
) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1); // Tetap ada state totalPages

  useEffect(() => {
    const fetchAllDataReport = async () => {
      setLoading(true);
      try {
        const response = await instance.get("/admin/report-rubbish", {
          params: {
            sort: sortOrder,
            start_date: startDate,
            end_date: endDate,
            page,
            per_page: perPage,
          },
        });

        if (response.status === 200) {
          setReports(response.data.data.reports);

          // Pastikan totalPages tersedia dan bukan undefined
          const totalPagesFromApi = response.data.data.totalPages;
          setTotalPages(
            totalPagesFromApi !== undefined ? totalPagesFromApi : 1
          );
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
  }, [startDate, endDate, sortOrder, page, perPage]);

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

  return {
    reports,
    loading,
    error,
    totalPages, // Return totalPages yang berasal dari API
    updateReportStatus,
  };
};

export default useAllDataReport;
