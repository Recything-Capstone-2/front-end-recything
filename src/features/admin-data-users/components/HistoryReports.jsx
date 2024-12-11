import React from "react";
import StatusBadge from "../../../components/ui/StatusBadge.jsx";
import { formatDate } from "../../../utils/formatdate.js";

export default function HistoryReports({ reports }) {
  return (
    <div className="relative overflow-x-auto sm:rounded-e-lg bg-white border">
      <table className="w-full table-fixed text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 dark:text-white uppercase bg-primary-01 dark:bg-gray-500 sticky top-0">
          <tr>
            <th scope="col" className="px-6 py-3 w-40">
              Tanggal Laporan
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Gambar
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Jenis Laporan
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          { reports.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-6 py-4">Tidak ada laporan yang ditampilkan</td>
            </tr>
          ) : reports.map((report, index) => (
            <tr className="border-b-2" key={index}>
              <td className="px-6 py-4">
                {formatDate(report.tanggal_laporan)}
              </td>
              <td className="px-6 py-4 ">{report.location}</td>
              <td className="px-6 py-4">
                <img src={report.photo} alt="" className="object-cover rounded-md" />
              </td>
              <td className="px-6 py-4">
                {report.category === "report_rubbish"
                  ? "Report Rubbish"
                  : "Report Littering"}
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={report.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
