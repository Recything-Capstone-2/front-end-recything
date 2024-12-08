import { useRef, useState } from "react";
import instance from "../../../utils/instance.js";
import { showAlert } from "../../../components/share/Alert.jsx";
import useUser from "../../../store/userStore.js";

export default function useUpdatePhoto(userId) {
  const fileInputRef = useRef(null);
  const [loadingChangePhoto, setLoadingChangePhoto] = useState(false);
  const { updateUser } = useUser();

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
          text: "Berhasil Mengganti Foto Profil",
        });
      }
      updateUser({ photo: res.data.photo });
    } catch (error) {
      showAlert({ icon: 'error', title: 'Error', text: "Terjadi kesalahan saat mengganti foto" });
    } finally {
      setLoadingChangePhoto(false);
    }
  }

  return { fileInputRef, handleFileChange, handleFileUpload, loadingChangePhoto };
}
