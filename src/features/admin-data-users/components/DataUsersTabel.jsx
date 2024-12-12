import useFetchUsers from "../hooks/useFetchUsers";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import Button from "../../../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatDate } from "../../../utils/formatdate.js";

const DataUsersTabel = () => {
  const [page, setPage] = useState(1);
  const { users, loading, error, pagination } = useFetchUsers(page);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (pagination && page < pagination.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="max-w-[1440px] py-2 px-6 md:py-10 md:px-24 bg-green-50">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="overflow-x-auto w-full rounded-2xl">
            <table className="w-full border-collapse border text-black-neutral08 rounded-lg table-fixed">
              <thead>
                <tr className="bg-primary-01 border text-left text-sm">
                  <th className="px-4 py-4 rounded-tl-lg w-12">ID</th>
                  <th className="px-4 py-4 whitespace-nowrap w-32">
                    NAMA LENGKAP
                  </th>
                  <th className="px-4 py-4 whitespace-nowrap w-36">
                    TANGGAL LAHIR
                  </th>
                  <th className="px-4 py-4 w-32">NO. TELEPON</th>
                  <th className="px-4 py-4 w-48">EMAIL</th>
                  <th className="px-4 py-4 w-44">Detail</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id_user}
                    className={
                      index % 2 === 0
                        ? "bg-white text-sm"
                        : "bg-primary-01 text-sm"
                    }
                  >
                    <td className="px-4 py-4">{user.id_user}</td>
                    <td className="px-4 py-4">{user.nama_lengkap}</td>
                    <td className="px-4 py-4">
                      {formatDate(user.tanggal_lahir)}
                    </td>
                    <td className="px-4 py-4">{user.no_telepon}</td>
                    <td className="px-4 py-4 break-words">{user.email}</td>
                    <td className="px-4 py-4">
                      <Link to={`/dashboard/user/${user.id_user}`}>
                        <Button variant="primary" size="sm">
                          Lihat Detail User
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="flex flex-col mt-4">
            {pagination && (
              <span className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {(page - 1) * pagination.per_page + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900">
                  {Math.min(page * pagination.per_page, pagination.total_users)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {pagination.total_users}
                </span>{" "}
                entries
              </span>
            )}
            <div className="inline-flex mt-2">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="px-4 py-2 bg-primary-05 text-white rounded-l hover:bg-primary-01 disabled:bg-gray-400"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={pagination && page === pagination.total_pages}
                className="px-4 py-2 bg-primary-05 text-white rounded-r hover:bg-primary-01 disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DataUsersTabel;
