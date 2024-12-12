import { useParams } from "react-router-dom";
import DashboardAdminContainer from "../../dashboard/components/dashboard.admin.jsx";
import HistoryReports from "./HistoryReports.jsx";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import useDetailReport from "../hooks/useDetailReport.jsx";
import { FaArrowLeft } from "react-icons/fa";

export default function DetailReport() {
  const { id: reportId } = useParams();
  const { report, error, loading, defaultImageUrl } = useDetailReport(reportId);

  return (
    <DashboardAdminContainer header={"Detail Laporan"}>
      <div className="py-2 px-6 md:py-10 md:px-24 bg-green-50 max-w-[1440px]">
        <button
          className="flex items-center space-x-2 mb-10 hover:bg-slate-200 px-2 py-2 rounded"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft size={24} />
        </button>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : report ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-12 pl-7 py-12 rounded-lg border bg-white border-slate-200 shadow-lg items-center mb-6">
              {/* Elemen H1 di bagian atas */}
              <div className="col-span-12 pb-5">
                <h1 className="text-2xl font-extrabold font-inter mb-5">
                  Pelapor
                </h1>
              </div>
              <div className="col-span-1 md:col-span-2 flex">
                <img
                  src={report.user.photo || defaultImageUrl}
                  alt=""
                  className="object-cover w-28 h-28 rounded-full mb-4 md:mb-0"
                />
              </div>
              <div className="col-span-1 md:col-span-10 h-full">
                <h1 className="text-2xl font-bold mb-4">
                  {report.user.nama_lengkap}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-3 space-y-4 md:space-y-0">
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">Email</p>
                    <p className="text-sm font-normal text-slate-500 break-words">
                      {report.user.email}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">No Telepon</p>
                    <p className="text-sm font-normal text-slate-500 break-words">
                      {report.user.no_telepon}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">Tanggal Lahir</p>
                    <p className="text-sm font-normal text-slate-500">
                      {report.user.tanggal_lahir}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <HistoryReports report={report} />
          </>
        ) : (
          <p className="text-center text-gray-500">Laporan tidak ditemukan</p>
        )}
      </div>
    </DashboardAdminContainer>
  );
}
