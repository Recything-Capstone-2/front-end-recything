import { useEffect, useState } from "react";
import { historyReportApi } from "../service/history.report.js";

export default function useHistoryReport() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getHistoryReport = async () => {
    setIsLoading(true);
    try {
      const response = await historyReportApi();
      console.log(response);
      setReports(response);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHistoryReport();
  }, []);

  return { reports, isLoading, error };
}
