import { useParams } from "react-router-dom";
import DashboardAdminContainer from "../../dashboard/components/dashboard.admin.jsx";
import HistoryReports from "./HistoryReports.jsx";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import useDetailUser from "../hooks/useDetailUser.jsx";
import { FaArrowLeft } from "react-icons/fa";

export default function DetailUser() {
  const { id: userId } = useParams();
  const { user, reports, error, loading, defaultImageUrl } =
    useDetailUser(userId);

  return (
    <DashboardAdminContainer header={"Detail Pengguna"}>
      <div className="py-2 px-6 max-w-[1440px] md:py-10 md:px-24 bg-neutral-50">
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
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-12 p-12 rounded-lg border border-slate-200 shadow-lg items-center mb-6">
              <div className="col-span-1 md:col-span-2 flex justify-center">
                <img
                  src={user?.photo || defaultImageUrl}
                  alt=""
                  className="object-cover w-28 h-28 rounded-full mb-4 md:mb-0"
                />
              </div>
              <div className="col-span-1 md:col-span-10 md:col-start-4 h-full">
                <h1 className="text-2xl font-bold mb-4">
                  {user?.nama_lengkap}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-4 space-y-4 md:space-y-0">
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">Email</p>
                    <p className="text-sm font-normal text-slate-500 break-words">
                      {user?.email}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">No Telepon</p>
                    <p className="text-sm font-normal text-slate-500 break-words">
                      {user?.no_telepon}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">Tanggal Lahir</p>
                    <p className="text-sm font-normal text-slate-500">
                      {user?.tanggal_lahir}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-sm font-semibold mb-2">
                      Jumlah Pelaporan
                    </p>
                    <p className="text-sm font-normal text-slate-500">
                      {reports?.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <HistoryReports reports={reports} />
          </>
        )}
      </div>
    </DashboardAdminContainer>
  );
}
