import { useEffect } from "react";
import { useState } from "react";
import instance from "../../../utils/instance.js";

const months = [
  { value: "0", label: "1 Bulan" },
  { value: "1", label: "3 Bulan" },
  { value: "2", label: "6 Bulan" },
  { value: "3", label: "9 Bulan" },
  { value: "4", label: "12 Bulan" },
];

export default function useStatistics() {
  const [selectedMonth, setSelectedMonth] = useState("4");
  const [dataUsers, setDataUsers] = useState([]);
  const [dataReports, setDataReports] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await instance.get("/admin/reports/statistics");
        const data = response.data.data;
        const statistics = data[selectedMonth];
        console.log(statistics);
        setDataUsers(statistics.user_counts);
        setDataReports(statistics.report_counts);
      } catch (error) {
        console.error("Gagal mengambil data poin:", error);
      }
    }  
    getStats();
  }, [selectedMonth]);


  // Handle month change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return { months, selectedMonth, dataUsers, dataReports, handleMonthChange };
}
