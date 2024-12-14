import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button.jsx";
import FormInput from "../../../components/ui/FormInput.jsx";
import AuthLayout from "./auth.layout.jsx";
import imglogo from "../../../assets/logo/logo-greenly.png";
import logoDarkmodeSmall from "../../../assets/logo/logo-darkmode-small.png";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import useLogin from "../hooks/useLogin.jsx";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { loading, errorEmail, errorPassword, error, handleLogin } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="max-w-[1440px]">
      <AuthLayout>
        <div>
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img
                src={imglogo}
                alt="Greenly Logo"
                className="mx-auto block dark:hidden"
              />
              <img
                src={logoDarkmodeSmall}
                alt="Greenly Logo Dark"
                className="mx-auto hidden dark:block"
              />
            </div>

            <h1 className="text-4xl font-bold dark:text-white">Masuk Akun</h1>
            <p className="text-base font-normal dark:text-white">
              Selamat datang kembali! Kelola daur ulang Anda dengan mudah.
            </p>
          </div>
          <div>
            <form action="" onSubmit={handleLogin}>
              <div className="my-14 space-y-6">
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
              </div>
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? "Loading..." : "Masuk"}
              </Button>
            </form>
          </div>
          <p className="text-sm text-center mt-2 text-red-500 font-semibold">
            {error}
          </p>
          <p className="text-sm font-normal text-center mt-6 dark:text-white">
            Belum punya akun?{" "}
            <Link to="/register" className="text-primary-05">
              {" "}
              Buat akun baru{" "}
            </Link>
          </p>
        </div>
      </AuthLayout>
    </main>
  );
}
