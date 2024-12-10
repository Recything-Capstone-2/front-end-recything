import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Menggunakan useNavigate
import { DashboardAdminLayout } from "../../dashboard/index.js";
import useAllDataReport from "../hooks/useAllDataReport.jsx";
import { LuExternalLink } from "react-icons/lu";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import { useFilter } from "../../dashboard/context/FilterContext.jsx";

const DashboardAdminReportAll = () => {
  const { filter } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate(); // Menggunakan useNavigate

  // Ambil page dari query params di URL, default page=1
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(pageFromUrl); // Update state dengan nilai page dari URL
  }, [pageFromUrl]);

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
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      console.log(
        "Next page clicked. Current page:",
        currentPage,
        "Next page:",
        nextPage
      );
      setCurrentPage(nextPage);
      navigate(`?page=${nextPage}`); // Update URL dengan halaman baru
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      console.log(
        "Previous page clicked. Current page:",
        currentPage,
        "Previous page:",
        prevPage
      );
      setCurrentPage(prevPage);
      navigate(`?page=${prevPage}`); // Update URL dengan halaman baru
    }
  };

  console.log("Rendering page:", currentPage, "Total pages:", totalPages);

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
                    <td className="px-6 py-4 space-y-3">
                      {Object.entries(statusMapping).map(
                        ([dbStatus, label]) => (
                          <button
                            key={dbStatus}
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-lg ${
                              dbStatus === "process"
                                ? "bg-slate-200 text-grey-800"
                                : dbStatus === "completed"
                                ? "bg-yellow-100 text-yellow-800"
                                : dbStatus === "approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
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
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${
                          report.status === "process"
                            ? "bg-slate-200 text-grey-800"
                            : report.status === "completed"
                            ? "bg-yellow-100 text-yellow-800"
                            : report.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {statusMapping[report.status] || "Unknown"}
                      </span>
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
