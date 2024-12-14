import StatusBadge from "../../../components/ui/StatusBadge.jsx";
import { formatDate } from "../../../utils/formatdate.js";
import { LuExternalLink } from "react-icons/lu";

export default function HistoryReports({ report }) {
  const defaultReport = {
    id: "-",
    tanggal_laporan: "-",
    location: "Tidak ada lokasi",
    status: "unknown",
  };

  const isEmpty = !report || Object.keys(report).length === 0;
  const reportData = isEmpty ? [defaultReport] : [report];

  const categoryMapping = {
    report_littering: "Report Littering",
    report_rubbish: "Report Rubbish",
  };

  return (
    <div className="relative max-w-[1440px] w-full overflow-x-auto bg-white border py-10 px-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-extrabold font-inter mb-5">Laporan</h1>
      <table className="w-full table-fixed text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 dark:text-white uppercase bg-gray-100/50 dark:bg-gray-500 sticky top-0">
          <tr className="border-b-2 border-primary-05">
            <th scope="col" className="px-6 py-3 w-12">
              ID
            </th>
            <th scope="col" className="px-6 py-3 w-44">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3 w-56">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3 w-44">
              Jenis Laporan
            </th>
            <th scope="col" className="px-6 py-3 w-60">
              Deskripsi
            </th>
            <th scope="col" className="px-6 py-4 w-60">
              Foto
            </th>
            <th scope="col" className="px-6 py-3 w-28">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item, index) => (
            <tr className="border-b border-primary-05" key={index}>
              <td className="px-6 py-4">{report.id}</td>
              <td className="px-6 py-4">{formatDate(item.tanggal_laporan)}</td>
              <td
                className="px-6 py-4 hover:text-blue-600 cursor-pointer"
                onClick={() => {
                  const googleMapsUrl = `https://www.google.com/maps?q=${report.latitude},${report.longitude}`;
                  window.open(googleMapsUrl, "_blank");
                }}
              >
                <div className="flex items-center gap-2">
                  <LuExternalLink className=" flex-none w-4 h-4" />
                  <span className="flex-1">{report.location}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                {categoryMapping[report.category] || report.category}
              </td>
              <td className="px-6 py-4">{report.description}</td>
              <td className="px-6 py-4">
                <div className="size-52 overflow-hidden">
                  <img
                    src={
                      report.photo || "https://fakeimg.pl/600x400?text=Image"
                    }
                    alt="Report"
                    className="w-full object-cover h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://fakeimg.pl/600x400?text=Image";
                    }}
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={item.status} />
              </td>
            </tr>
          ))}
          {isEmpty && (
            <tr>
              <td colSpan={4} className="text-center px-6 py-4">
                Tidak ada laporan yang ditampilkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
