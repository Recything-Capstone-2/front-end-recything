import { DashboardAdminLayout } from "../../dashboard/index.js";
import useAllDataReport from "../hooks/useAllDataReport.jsx";
import usePagination from "../hooks/usePagination.jsx";
import { LuExternalLink } from "react-icons/lu";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";

const DashboardAdminReportReject = () => {
  const { reports, loading, error } = useAllDataReport();

  const filteredReports = reports.filter(
    (report) => report.status === "rejected"
  );

  const { currentPage, totalPages, currentData, nextPage, prevPage } =
    usePagination(filteredReports, 10);

  return (
    <div>
      <DashboardAdminLayout header="Laporan Ditolak">
        {loading ? (
          <p>
            <LoadingSpinner />
          </p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="relative max-w-[1440px] overflow-x-auto rounded-lg py-10 px-24 bg-green-50">
            <table className="w-full table-fixed text-sm text-left text-black-neutral08 border-collapse rounded-lg">
              <thead className="text-sm text-black-neutral08 uppercase bg-primary-01 rounded-t-lg">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 whitespace-nowrap w-12 rounded-tl-lg"
                  >
                    No
                  </th>
                  <th scope="col" className="px-6 py-4 w-36">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-4 w-52">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-4 w-60">
                    Photo
                  </th>
                  <th scope="col" className="px-6 py-4 w-96">
                    Deskripsi
                  </th>
                  <th scope="col" className="px-6 py-4 w-32 rounded-tr-lg">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((report, index) => (
                  <tr
                    key={report.id}
                    className="odd:bg-white even:bg-primary-01 rounded-lg"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {(currentPage - 1) * 10 + index + 1}
                    </th>
                    <td className="px-6 py-4">
                      {new Date(report.tanggal_laporan).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </td>
                    <td
                      className="px-6 py-4 text-black-neutral08 hover:text-blue-600 cursor-pointer"
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
                      <div className="size-52 overflow-hidden">
                        <img
                          src={
                            report.photo ||
                            "https://fakeimg.pl/600x400?text=Image"
                          }
                          alt="Report"
                          className="w-full object-cover h-full"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://fakeimg.pl/600x400?text=Image";
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">{report.description}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                        Ditolak
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex flex-col mt-4">
              <span className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {(currentPage - 1) * 10 + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900">
                  {Math.min(currentPage * 10, filteredReports.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {filteredReports.length}
                </span>{" "}
                entries
              </span>
              <div className="inline-flex mt-2">
                <button
                  className="px-4 py-2 bg-primary-05 text-white rounded-l hover:bg-primary-01 disabled:bg-gray-400"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  className="px-4 py-2 bg-primary-05 text-white rounded-r hover:bg-primary-01 disabled:bg-gray-400"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </DashboardAdminLayout>
    </div>
  );
};

export default DashboardAdminReportReject;
