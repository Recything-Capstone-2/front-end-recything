import FormInput from "../../../components/ui/FormInput.jsx";
import AuthLayout from "./auth.layout.jsx";
import Button from "../../../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import imglogo from "../../../assets/logo/logo-greenly.png";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import useRegister from "../hooks/useRegister.jsx";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const {
    loading,
    errorEmail,
    errorDate,
    errorPhone,
    errorPassword,
    error,
    errorName,
    isRegistered,
    handleRegister,
  } = useRegister();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="max-w-[1440px]">
      <AuthLayout>
        <div>
          <div className="text-center space-y-2">
            <img src={imglogo} alt="Greenly Logo" className="mx-auto h-7" />
            <h1 className="text-4xl font-bold dark:text-white">Daftar</h1>
            <p className="text-base font-normal dark:text-white">
              Isi data Anda dengan benar untuk pengalaman terbaik bersama
              Greenly.
            </p>
          </div>
          <div>
            <form action="" onSubmit={handleRegister}>
              <div className="my-4 space-y-4">
                <FormInput
                  id="name"
                  label="Nama Lengkap"
                  type="text"
                  placeholder="contoh: Budi Santoso"
                  startIcon={<IoPersonSharp size={20} color="gray" />}
                  error={errorName}
                  errorMessage={errorName}
                  disabled={loading}
                />
                <FormInput
                  id="date"
                  label="Tanggal Lahir"
                  type="date"
                  error={errorDate}
                  errorMessage={errorDate}
                  disabled={loading}
                />
                <FormInput
                  id="phone"
                  label="Nomor Telepon"
                  type="text"
                  placeholder="123 4567 890"
                  startIcon={<FaPhoneAlt size={20} color="gray" />}
                  error={errorPhone}
                  errorMessage={errorPhone}
                  disabled={loading}
                />
                <FormInput
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="contoh: emailanda@example.com"
                  startIcon={<IoMail size={20} color="gray" />}
                  error={errorEmail}
                  errorMessage={errorEmail}
                  disabled={loading}
                />
                <FormInput
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimal 8 karakter"
                  startIcon={<FaLock size={20} color="gray" />}
                  error={errorPassword}
                  errorMessage={errorPassword}
                  disabled={loading}
                  endButton={showPassword ? <FaEyeSlash /> : <FaEye />}
                  onEndButtonClick={() =>
                    togglePasswordVisibility(!showPassword)
                  }
                />
                <input
                  type="hidden"
                  name="photo"
                  defaultValue={
                    "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                  }
                />
              </div>
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? "Loading..." : "Daftar"}
              </Button>
            </form>
          </div>
          <p className="text-sm font-normal text-center mt-2 text-red-500">
            {error}
          </p>
          {isRegistered && (
            <p className="text-sm font-semibold text-center mt-2 text-green-800 dark:text-primary-01">
              Akun berhasil dibuat. Silahkan login.
            </p>
          )}
          <p className="text-sm font-normal text-center mt-2 dark:text-white">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-primary-05">
              {" "}
              Masuk{" "}
            </Link>
          </p>
        </div>
      </AuthLayout>
    </main>
  );
}
