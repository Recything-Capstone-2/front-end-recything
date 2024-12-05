import { useRef, useState } from "react";
import instance from "../../../utils/instance.js";
import { showAlert } from "../../../components/share/Alert.jsx";
import { useNavigate } from "react-router-dom";
import useUser from "../../../store/userStore.js";

export default function useUpdatePhoto(userId) {
  const navigate = useNavigate();
  const { clearUser } = useUser();
  const fileInputRef = useRef(null);
  const [loadingChangePhoto, setLoadingChangePhoto] = useState(false);

  const handleFileChange = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = async () => {
    const photo = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("photo", photo);

    setLoadingChangePhoto(true);
    try {
      const formData = new FormData();
      formData.append("photo", photo);
  
      const res = await instance.put(`/user/photo/${userId}`, formData);
  
      if (res.status !== 200) {
        showAlert({ icon: 'error', title: 'Gagal', text: "Gagal Mengganti Foto Profil" });
      } else {
        showAlert({ 
          icon: 'success', 
          title: 'Berhasil', 
          text: "Berhasil Mengganti Foto Profil, Silahkan Login Kembali",
          onConfirm: () => {
            clearUser();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login"); 
          }
        });
      }
    } catch (error) {
      showAlert({ icon: 'error', title: 'Error', text: "Terjadi kesalahan saat mengganti foto" });
    } finally {
      setLoadingChangePhoto(false);
    }
  }

  return { fileInputRef, handleFileChange, handleFileUpload, loadingChangePhoto };
}
