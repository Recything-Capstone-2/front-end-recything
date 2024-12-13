import ApexCharts from "react-apexcharts";
import FormSelect from "../../../components/ui/FormSelect.jsx";
import useStatistics from "../hooks/useStatistics.jsx";

const LineChart = () => {
  const { months, selectedMonth, dataUsers, dataReports, handleMonthChange } = useStatistics();

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
        data: dataUsers,
        color: "#45A135",
      },
      {
        name: "Laporan",
        data: dataReports,
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