import { useNavigate } from "react-router-dom";
import useUser from "../../../store/userStore.js";
import { confirmAlert } from "../../../components/share/Confirm.jsx";
import { showAlert } from "../../../components/share/Alert.jsx";

export default function useLogout() {
 const navigate = useNavigate();
 const { clearUser } = useUser();

 async function handleLogout() {
  const confirm = await confirmAlert({
    title: 'Apakah Anda Yakin?',
    text: 'Anda akan keluar dari akun?',
    confirmButtonText: 'Ya, keluar!',
    cancelButtonText: 'Batal',
    confirmButtonColor: 'bg-red-600 hover:bg-red-700',
    cancelButtonColor: 'bg-blue-600 hover:bg-blue-700 ml-2',
  })

  if (!confirm.isConfirmed) return

  showAlert({ icon: 'success', title: 'Berhasil', text: "Berhasil Keluar" });

  clearUser();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
 }

 return { handleLogout }
}
