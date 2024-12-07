export default function StatusBadge({ status }) {
  const statusStyles = {
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    process: "bg-slate-200 text-grey-800",
    completed: "bg-yellow-100 text-yellow-800",
  };

  const statusLabels = {
    approved: "Selesai",
    rejected: "Ditolak",
    process: "Diterima",
    completed: "Diproses",
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[status]}`}
    >
      {statusLabels[status] || "Tidak Diketahui"}
    </span>
  );
}