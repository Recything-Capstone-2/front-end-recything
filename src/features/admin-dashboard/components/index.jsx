import StatusBadge from "../../../components/ui/StatusBadge.jsx";
import { DashboardAdminLayout } from "../../dashboard/index.js";
import LineChart from "./LineChart.jsx";
import { MdPeopleAlt } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { formatDate } from "../../../utils/formatdate.js";
import { Link } from "react-router-dom";
import useDashboardData from "../hooks/useDashboardData.jsx";
import LoadingSpinnerInComponent from "../../../components/ui/LoadingSpinnerInComponent.jsx";

const DashboardAdmin = () => {
  const { latestReport, reportCount, userCount, error, isLoading } =
    useDashboardData();

  return (
    <div>
      <DashboardAdminLayout>
        <div className="px-4 md:px-24 py-10 bg-green-50">
          <div className="grid grid-cols-12 bg-white shadow-md gap-4 px-4 py-5 rounded-lg">
            <div className="col-span-12 space-y-3">
              <h1 className="text-2xl font-bold">Laporan Terbaru</h1>
              {/* <p className="text-base font-normal">Admin hebat bergerak cepat! <span className="text-primary-05">18 laporan baru</span> sudah siap untuk ditindaklanjuti.</p> */}
              <p className="text-base font-normal">
                Silakan periksa laporan yang siap untuk ditindaklanjuti.
              </p>

              <div className="overflow-x-auto w-full mt-3">
                <table className="w-full text-black-neutral08 table-fixed md:table-auto">
                  <thead>
                    <tr className="text-left uppercase border-b text-xs font-semibold">
                      <th className="p-4 md:whitespace-nowrap w-28 md:w-auto">
                        NAMA PENGGUNA
                      </th>
                      <th className="p-4 w-28 md:w-auto">Tangal Laporan</th>
                      <th className="p-4 w-40 md:w-auto">Lokasi</th>
                      <th className="p-4 w-28 md:w-auto">Status</th>
                      <th className="p-4">aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td className="p-4 text-center" colSpan="5">
                          <LoadingSpinnerInComponent />
                        </td>
                      </tr>
                    ) : error ? (
                      <tr>
                        <td className="p-4 text-center" colSpan="5">
                          Error: {error}
                        </td>
                      </tr>
                    ) : latestReport.length === 0 ? (
                      <tr>
                        <td className="p-4 text-center" colSpan="5">
                          Tidak ada laporan baru
                        </td>
                      </tr>
                    ) : (
                      latestReport.map((report, index) => (
                        <tr key={index} className="border-b text-sm">
                          <td className="px-4 py-4 leading-light font-normal text-neutral-500">
                            {report.user.nama_lengkap}
                          </td>
                          <td className="px-4 py-4 md:whitespace-nowrap leading-light font-normal text-neutral-500">
                            {formatDate(report.tanggal_laporan)}
                          </td>
                          <td className="px-4 py-4 leading-light font-normal text-neutral-500">
                            {report.location}
                          </td>
                          <td className="px-4 py-4">
                            <StatusBadge status={report.status} />
                          </td>
                          <td className="px-4 py-4 leading-light font-normal text-neutral-800">
                            <Link
                              to={`/dashboard/report/all`}
                              className="underline whitespace-nowrap"
                            >
                              Tanggapi
                            </Link>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <LineChart />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col md:gap-y-4 gap-y-3 md:gap-0">
              <div className="md:h-1/2 flex justify-center items-center">
                <div className="flex items-center gap-4 rounded-3xl h-full p-4 md:p-8 bg-primary-05 text-white shadow-lg w-full">
                  <div>
                    <MdPeopleAlt size={70} />
                  </div>
                  <div>
                    <h1 className="text-base md:text-2xl font-bold">
                      Total User
                    </h1>
                    <h1 className="text-base md:text-2xl font-bold">
                      {isLoading ? "Loading..." : userCount}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="md:h-1/2 flex justify-center items-center">
                <div className="flex items-center gap-4 rounded-3xl bg-secondary-04 p-4 md:p-8 w-full h-full">
                  <div>
                    <IoNewspaperOutline size={70} />
                  </div>
                  <div>
                    <h1 className="text-base md:text-2xl font-bold">
                      Total Laporan
                    </h1>
                    <h1 className="text-base md:text-2xl font-bold">
                      {isLoading ? "Loading..." : reportCount}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardAdminLayout>
    </div>
  );
};

export default DashboardAdmin;
