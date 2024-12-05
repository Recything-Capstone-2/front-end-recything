import React from "react";
import useStatus from "../hooks/useStatus";

const BerandaHistoryCardSection = () => {
  const { statusCounts, loading, error } = useStatus();

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-medium">Memuat data laporan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-medium text-red-600">
          Terjadi kesalahan saat memuat data: {JSON.stringify(error)}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 pb-20 mt-16 px-6 sm:px-12 lg:px-24 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-3">
          Pelaporan
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Lihat Jumlah dan Status Laporan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Menampilkan status dan ikon */}
        {statusCounts.map((status) => (
          <div
            key={status.label}
            className="bg-primary-01 flex flex-col items-start py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-10 rounded-lg shadow-md space-y-4"
          >
            {/* Menampilkan ikon status */}
            <img
              src={status.icon}
              alt={`${status.label} icon`}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold break-words">
              {status.label.charAt(0).toUpperCase() + status.label.slice(1)}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {status.count} Pelaporan
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BerandaHistoryCardSection;
