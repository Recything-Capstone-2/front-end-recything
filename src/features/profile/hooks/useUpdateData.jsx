import { useState } from "react";
import { showAlert } from "../../../components/share/Alert.jsx";
import useUser from "../../../store/userStore.js";
import { updateSchemaValidation } from "../validation/update.validation.js";
import { confirmAlert } from "../../../components/share/Confirm.jsx";
import { useNavigate } from "react-router-dom";
import { updateData } from "../service/update.data.js";

export default function useUpdateData(user) {
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.nama_lengkap);
  const [email, setEmail] = useState(user?.email);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [phone, setPhone] = useState(user?.no_telepon);
  const [date, setDate] = useState(user?.tanggal_lahir);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [loadingUpdateData, setLoadingUpdateData] = useState(false);

  //error
  const [errorName, setErrorName] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorNewPassword, setErrorNewPassword] = useState("");
  const [errorOldPassword, setErrorOldPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmitUpdate = async () => {
    setLoadingUpdateData(true);
    setErrorName("");
    setErrorDate("");
    setErrorPhone("");
    setErrorEmail("");
    setErrorNewPassword("");
    setErrorOldPassword("");

    // Handle form submission
    let formData = {
      nama_lengkap: name,
      email: email,
      new_password: newPassword,
      old_password: oldPassword,
      no_telepon: phone,
      tanggal_lahir: date,
    }

    // VALIDATION
    const validationErrors = updateSchemaValidation(formData);
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      setLoadingUpdateData(false);
      // eslint-disable-next-line no-unused-vars
      validationErrors.map((error, index) => {
        if (error.includes("Name")) {
          setErrorName(error);
        }
        if (error.includes("Date")) {
          setErrorDate("Required");
        }
        if (error.includes("Phone")) {
          setErrorPhone(error);
        }
        if (error.includes("email")) {
          setErrorEmail(error);
        } 
        if (error.includes("New Password")) {
          setErrorNewPassword(error);
        }
        if (error.includes("Old Password")) {
          setErrorOldPassword(error);
        }
      })
      return;
    }

    setLoadingUpdateData(true);

    const confirm = await confirmAlert({
      title: 'Apakah Anda Yakin?',
      text: 'Anda akan melakukan perubahan?',
      confirmButtonText: 'Ya, perbarui!',
      cancelButtonText: 'Batal',
      confirmButtonColor: 'bg-red-600 hover:bg-red-700',
      cancelButtonColor: 'bg-blue-600 hover:bg-blue-700 ml-2',
    })
  
    if (!confirm.isConfirmed) {
      setLoadingUpdateData(false);
      return
    }

    try {
      const response = await updateData(user.id_user, formData);
      console.log("Data berhasil diupdate:", response.data.data);
      if (response.status !== 200) {
        showAlert({ 
          icon: 'error', 
          title: 'Gagal', 
          text: response.data.meta.message ||  "Gagal Mengganti Data Profil" 
        });
      } else {
        showAlert({ 
          icon: 'success', 
          title: 'Berhasil', 
          text: "Berhasil Mengganti Data Profil, Silahkan Login Kembali",
          onConfirm: () => {
            navigate("/profile"); 
            updateUser(response.data.data);
          }
        });
      }
      return response;
    } catch (error) {
      showAlert({ 
        icon: 'error', 
        title: 'Terjadi Kesalahan', 
        text: error.data.meta.message || "Terjadi kesalahan saat mengupdate data. Silakan coba lagi nanti." 
      });
      return { error: true };
    } finally {
      setLoadingUpdateData(false);
    }
  }

  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  }

  const handleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  }

  return { showNewPassword, showOldPassword, loadingUpdateData, handleDateChange, handleEmailChange, handleNameChange, handlePhoneChange, handleNewPasswordChange, handleOldPasswordChange, handleShowNewPassword, handleShowOldPassword, handleSubmitUpdate , errorName, errorDate, errorPhone, errorEmail, errorNewPassword, errorOldPassword };
}
