import { useState, useEffect } from "react";
import instance from "../../../utils/instance";

const useStatusDataReport = (
  status = "",
  startDate = "",
  endDate = "",
  sortOrder = "desc",
  page = 1,
  perPage = 10
) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [totalReport, setTotalReport] = useState(0);

  useEffect(() => {
    const fetchStatusDataReport = async () => {
      setLoading(true);
      try {
        const response = await instance.get("/admin/report-rubbish", {
          params: {
            status,
            sort: sortOrder,
            start_date: startDate,
            end_date: endDate,
            page,
            per_page: perPage,
          },
        });

        console.log("Response Data:", response.data);

        if (
          response.data?.meta?.code === 200 &&
          response.data?.data?.data?.items
        ) {
          const { items, pagination } = response.data.data.data;
          setReports(items || []);
          setTotalPages(pagination?.total_pages || 1);
          setTotalReport(pagination?.total_report || 0);
        } else {
          setError(
            response.data?.meta?.message || "Terjadi kesalahan tidak dikenal"
          );
        }
      } catch (err) {
        setError("Gagal memuat data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchStatusDataReport();
  }, [status, startDate, endDate, sortOrder, page, perPage]);

  return {
    reports,
    loading,
    error,
    totalPages,
    totalReport,
  };
};

export default useStatusDataReport;
