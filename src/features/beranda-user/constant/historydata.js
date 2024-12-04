import diterima from "../../../assets/images/icon_diterima.png";
import diproses from "../../../assets/images/icon_diproses.png";
import selesai from "../../../assets/images/icon_selesai.png";
import ditolak from "../../../assets/images/icon_ditolak.png";

export const statuses = [
  {
    id: 1,
    label: "Diterima",
    icon: diterima,
    count: 12,
    bgColor: "bg-gray-100",
    textColor: "text-gray-700",
  },
  {
    id: 2,
    label: "Diproses",
    icon: diproses,
    count: 6,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    id: 3,
    label: "Selesai",
    icon: selesai,
    count: 28,
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: 4,
    label: "Ditolak",
    icon: ditolak,
    count: 4,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
];
