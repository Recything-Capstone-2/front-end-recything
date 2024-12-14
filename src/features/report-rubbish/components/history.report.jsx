import { MenuActive } from "./menu.active.jsx";
import background from "../../../assets/images/background-2.png";
import StatusBadge from "../../../components/ui/StatusBadge.jsx";
import useHistoryReport from "../hooks/useHistoryReport.jsx";
import { formatDate } from "../../../utils/formatdate.js";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";

export default function ReportRubbish() {
  const { reports, isLoading, error } = useHistoryReport();

  return (
    <main className="bg-slate-50 dark:bg-gray-800 font-inter max-w-[1440px]">
      <section className="container mx-auto grid grid-cols-12 font-inter py-20">
        <div className="col-span-12 flex gap-x-5 mb-5 px-4 dark:text-white">
          <MenuActive label="Laporan Sampah" href="/report" />
          <MenuActive label="Riwayat Laporan" href="/history-report" />
        </div>

        <div className="hidden md:block md:col-span-3 min-h-screen rounded-s-xl overflow-hidden">
          <img src={background} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-12 md:col-span-9 rounded-e-xl bg-white dark:bg-gray-700 shadow-lg px-4 md:px-0">
          <div className="relative overflow-x-auto sm:rounded-e-lg max-h-screen">
            <table className="w-full text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-white">
              <thead className="text-xs text-gray-700 dark:text-white uppercase bg-gray-200 dark:bg-gray-500 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-3 md:w-52">
                    Tanggal Laporan
                  </th>
                  <th scope="col" className="px-6 py-3 w-72">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-3 w-92">
                    Gambar
                  </th>
                  <th scope="col" className="px-6 py-3 w-40">
                    Jenis Laporan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      <LoadingSpinner />
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      Terjadi kesalahan: {error.message}
                    </td>
                  </tr>
                ) : reports.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      Tidak ada laporan sampah
                    </td>
                  </tr>
                ) : (
                  reports.map((report, index) => (
                    <tr className="" key={index}>
                      <td className="px-6 py-4">
                        {formatDate(report.tanggal_laporan)}
                      </td>
                      <td className="px-6 py-4">{report.location}</td>
                      <td className="px-6 py-4">
                        <img
                          src={report.photo}
                          alt=""
                          className="h-16 md:h-32 object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">
                        {report.category === "report_rubbish"
                          ? "Report Rubbish"
                          : "Report Littering"}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={report.status} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
