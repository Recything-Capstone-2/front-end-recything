import React from "react";
import useFetchUsers from "../hooks/useFetchUsers";

const DataUsersTabel = () => {
  const { users, loading, error } = useFetchUsers();
  return (
    <div className="flex justify-center max-w-[1440px] py-2 px-6 md:py-10 md:px-24 bg-green-50">
      {loading ? (
        <p>Memuat data...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse border text-black-neutral08 rounded-lg">
            <thead>
              <tr className="bg-primary-01 border text-left">
                <th className="px-4 py-4 rounded-tl-lg">ID</th>
                <th className="px-4 py-4">NAMA LENGKAP</th>
                <th className="px-4 py-4">TANGGAL LAHIR</th>
                <th className="px-4 py-4">NO. TELEPON</th>
                <th className="px-4 py-4 rounded-tr-lg">EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id_user}
                  className={index % 2 === 0 ? "bg-white" : "bg-primary-01"}
                >
                  <td className="px-4 py-4">{user.id_user}</td>
                  <td className="px-4 py-4">{user.nama_lengkap}</td>
                  <td className="px-4 py-4">
                    {new Date(user.tanggal_lahir).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-4">{user.no_telepon}</td>
                  <td className="px-4 py-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataUsersTabel;
