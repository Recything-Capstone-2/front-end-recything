import React, { useState } from "react";
import { DashboardAdminLayout } from "../../dashboard/index.js";
import useAllDataReport from "../hooks/useAllDataReport.jsx";
import { LuExternalLink } from "react-icons/lu";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import { useFilter } from "../../dashboard/context/FilterContext.jsx";

const DashboardAdminReportAll = () => {
  const { filter } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);

  // Ambil data dari hook dengan parameter sort dan pagination
  const { reports, loading, error, totalPages, updateReportStatus } =
    useAllDataReport(null, null, filter, currentPage, 10);

  const statusMapping = {
    process: "Diterima",
    completed: "Diproses",
    approved: "Selesai",
    rejected: "Ditolak",
  };

  const handleStatusChange = (id, newStatus) => {
    updateReportStatus(id, newStatus);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <DashboardAdminLayout header="Semua Laporan">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="relative max-w-[1440px] overflow-x-auto rounded-lg py-10 px-24 bg-green-50">
            <table className="w-full table-fixed text-sm text-left text-black-neutral08 border-collapse rounded-lg">
              <thead className="text-sm text-black-neutral08 uppercase bg-primary-01 rounded-t-lg">
                <tr>
                  <th scope="col" className="px-6 py-3 w-12 rounded-tl-lg">
                    No
                  </th>
                  <th scope="col" className="px-6 py-4 w-36">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-4 w-52">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-4 w-60">
                    Foto
                  </th>
                  <th scope="col" className="px-6 py-4 w-96">
                    Deskripsi
                  </th>
                  <th scope="col" className="px-6 py-4 w-40">
                    Aksi
                  </th>
                  <th scope="col" className="px-6 py-4 w-32 rounded-tr-lg">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr
                    key={report.id}
                    className="odd:bg-white even:bg-primary-01 rounded-lg"
                  >
                    <th className="px-6 py-4">
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
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <LuExternalLink className="flex-none w-4 h-4" />
                        <span>{report.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={
                          report.photo ||
                          "https://fakeimg.pl/600x400?text=Image"
                        }
                        alt="Report"
                        className="size-52 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{report.description}</td>
                    <td className="px-6 py-4 space-y-3">
                      {Object.entries(statusMapping).map(
                        ([dbStatus, label]) => (
                          <button
                            key={dbStatus}
                            className="px-2 py-1 text-xs font-semibold rounded-lg bg-slate-200"
                            onClick={() =>
                              handleStatusChange(report.id, dbStatus)
                            }
                          >
                            {label}
                          </button>
                        )
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {statusMapping[report.status] || "Unknown"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-primary-05 text-white rounded-lg disabled:bg-gray-400"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 bg-primary-05 text-white rounded-lg disabled:bg-gray-400"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </DashboardAdminLayout>
    </div>
  );
};

export default DashboardAdminReportAll;
