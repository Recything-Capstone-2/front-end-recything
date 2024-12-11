import { useParams } from "react-router-dom";
import DashboardAdminContainer from "../../dashboard/components/dashboard.admin.jsx";
import instance from "../../../utils/instance.js";
import { useEffect, useState } from "react";
import HistoryReports from "./HistoryReports.jsx";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import useDetailUser from "../hooks/useDetailUser.jsx";

const DEFAULT_IMAGE_URL = "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg";

export default function DetailUser() {
  const { id: userId } = useParams();
  const { user, reports, error, loading, defaultImageUrl } = useDetailUser(userId);

  return (
    <DashboardAdminContainer>
      <div className="py-2 px-6 md:py-10 md:px-24 bg-green-50">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <h1 className="text-center text-4xl font-bold mb-5">Detail Pengguna</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="flex justify-center items-center rounded-md overflow-hidden">
                <img
                  src={user?.photo || defaultImageUrl}
                  alt={user?.nama_lengkap || "User"}
                  className="h-64 object-cover rounded-md"
                />
              </div>
              <div className="border border-gray-200 bg-white shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                  <tbody>
                    <tr className="border-b">
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">ID</th>
                      <td className="px-6 py-4">{user?.id_user}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Nama Lengkap
                      </th>
                      <td className="px-6 py-4">{user?.nama_lengkap}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Email</th>
                      <td className="px-6 py-4">{user?.email}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Telepon
                      </th>
                      <td className="px-6 py-4">{user?.no_telepon}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Tanggal Lahir
                      </th>
                      <td className="px-6 py-4">{user?.tanggal_lahir}</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Role</th>
                      <td className="px-6 py-4">{user?.role}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h1 className="text-center text-4xl font-bold mb-5">Riwayat Laporan</h1>
            <HistoryReports reports={reports} />
          </>
        )}
      </div>
    </DashboardAdminContainer>
  );
}
