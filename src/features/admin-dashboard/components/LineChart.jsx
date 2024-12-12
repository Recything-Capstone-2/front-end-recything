import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import FormSelect from "../../../components/ui/FormSelect.jsx";

const months = [
  { value: "1", label: "1 Bulan" },
  { value: "3", label: "3 Bulan" },
  { value: "6", label: "6 Bulan" },
  { value: "9", label: "9 Bulan" },
  { value: "12", label: "12 Bulan" },
];

const generateRandomData = (length, min, max) =>
  Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const LineChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("12");

  const [seriesData, setSeriesData] = useState({
    user: generateRandomData(12, 50, 150),
    laporan: generateRandomData(12, 60, 160),
  });

  useEffect(() => {
    const monthsCount = parseInt(selectedMonth, 10);
    setSeriesData({
      user: generateRandomData(monthsCount, 50, 150),
      laporan: generateRandomData(monthsCount, 60, 160),
    });
  }, [selectedMonth]);

  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: [
      {
        name: "User",
        data: seriesData.user,
        color: "#45A135",
      },
      {
        name: "Laporan",
        data: seriesData.laporan,
        color: "#FCCD2A",
      },
    ],
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
    },
  };

  // Handle month change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="max-w-[1440px] bg-white rounded-lg shadow md:p-6 p-4">
      {/* Chart Header: Title and Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Data Laporan</h2>
        <FormSelect
          id={"month"}
          value={selectedMonth}
          onChange={handleMonthChange}
          options={months}
        />
      </div>

      {/* Chart */}
      <div id="line-chart">
        <ApexCharts
          options={options}
          series={options.series}
          type="line"
          height="200"
        />
      </div>

      {/* Chart Footer */}
      <div className="mt-4 flex text-sm font-bold gap-x-3">
        <div className="flex items-center gap-x-2">
          <span className="p-2 rounded-full bg-[#45A135]"></span>
          <p>Jumlah User</p>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="p-2 rounded-full bg-[#FCCD2A]"></span>
          <p>Jumlah Laporan</p>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
