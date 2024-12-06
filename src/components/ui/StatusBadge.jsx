export default function StatusBadge({ status }) {
  const statusStyles = {
    approved: "bg-slate-200 text-grey-800",
    rejected: "bg-red-100 text-red-800",
    process: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
  };

  const statusLabels = {
    approved: "Disetujui",
    rejected: "Ditolak",
    process: "Diproses",
    completed: "Selesai",
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[status]}`}
    >
      {statusLabels[status] || "Tidak Diketahui"}
    </span>
  );
}