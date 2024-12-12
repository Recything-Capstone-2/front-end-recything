import StatusBadge from "../../../components/ui/StatusBadge.jsx";
import { formatDate } from "../../../utils/formatdate.js";

export default function HistoryReports({ reports }) {
  return (
    <div className="relative max-w-[1440px] overflow-x-auto bg-white border py-10 px-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold font-inter my-5">Riwayat Laporan</h1>
      <table className="w-full table-fixed text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 dark:text-white uppercase bg-gray-100/50 dark:bg-gray-500 sticky top-0">
          <tr className="border-b-2 border-primary-05">
            <th scope="col" className="px-6 py-3 w-12">
              ID
            </th>
            <th scope="col" className="px-6 py-3 w-32">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3 w-40 md:w-96">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3 w-28">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-6 py-4">
                Tidak ada laporan yang ditampilkan
              </td>
            </tr>
          ) : (
            reports.map((report, index) => (
              <tr className="border-b border-primary-05" key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {formatDate(report.tanggal_laporan)}
                </td>
                <td className="px-6 py-4 ">{report.location}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={report.status} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
