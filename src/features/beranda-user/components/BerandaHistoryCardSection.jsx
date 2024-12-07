import React from "react";
import useStatus from "../hooks/useStatus";

const BerandaHistoryCardSection = () => {
  const { statusCounts, loading, error } = useStatus();

  return (
    <div className="bg-green-50 dark:bg-gray-800 pb-20 mt-16 px-6 sm:px-12 lg:px-24 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-black-neutral08 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-bold pb-3">
          Pelaporan
        </h2>
        <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base">
          Lihat Jumlah dan Status Laporan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-primary-01 flex flex-col items-start py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-10 rounded-lg shadow-md space-y-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 animate-pulse rounded-full"></div>
                  <div className="w-2/3 h-6 sm:h-8 bg-green-100 animate-pulse rounded"></div>
                  <div className="w-1/2 h-4 sm:h-6 bg-green-100 animate-pulse rounded"></div>
                </div>
              ))
          : error
          ? Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-primary-01 flex flex-col items-center justify-center py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-10 rounded-lg shadow-md space-y-4"
                >
                  <p className="text-red-600 text-center text-sm sm:text-base">
                    Terjadi kesalahan: {JSON.stringify(error)}
                  </p>
                </div>
              ))
          : statusCounts.map((status) => (
              <div
                key={status.label}
                className="bg-primary-01 flex flex-col items-start py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-10 rounded-lg shadow-md space-y-4"
              >
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
