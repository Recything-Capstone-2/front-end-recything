import { useState, useEffect } from "react";
import instance from "../../../utils/instance";
import diterima from "../../../assets/images/icon_diterima.png";
import diproses from "../../../assets/images/icon_diproses.png";
import selesai from "../../../assets/images/icon_selesai.png";
import ditolak from "../../../assets/images/icon_ditolak.png";

const useStatus = () => {
  const [statusCounts, setStatusCounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await instance.get("/report-rubbish/history");
        const reports = response.data.data;
        console.log("Data reports:", reports);

        const statusMap = reports.reduce((acc, report) => {
          acc[report.status] = (acc[report.status] || 0) + 1;
          return acc;
        }, {});
        console.log("Status Map:", statusMap);

        const categorizedStatus = [
          "process",
          "approved",
          "completed",
          "rejected",
        ].map((statusType) => ({
          label: getStatusLabel(statusType),
          count: statusMap[statusType] || 0,
          icon: getStatusIcon(statusType),
        }));

        console.log("Categorized Status:", categorizedStatus);

        setStatusCounts(categorizedStatus);
      } catch (err) {
        setError(err);
        console.error("Gagal mengambil data status:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatusData();
  }, []);

  const getStatusIcon = (label) => {
    switch (label) {
      case "process":
        return diterima;
      case "approved":
        return diproses;
      case "completed":
        return selesai;
      case "rejected":
        return ditolak;
      default:
        return null;
    }
  };
  const getStatusLabel = (label) => {
    switch (label) {
      case "process":
        return "Diterima";
      case "approved":
        return "Diproses";
      case "completed":
        return "Selesai";
      case "rejected":
        return "Ditolak";
      default:
        return label;
    }
  };

  return { statusCounts, loading, error };
};

export default useStatus;
