import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button.jsx";
import FormInput from "../../../components/ui/FormInput.jsx";
import AuthLayout from "./auth.layout.jsx";
import imglogo from "../../../assets/logo/logo-greenly.png";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Login() {
  return (
    <main>
      <AuthLayout>
        <div>
          <div className='text-center space-y-6'>
            <img src={imglogo} alt="Greenly Logo" className="mx-auto" />
            <h1 className='text-5xl font-bold'>Masuk Akun</h1>
            <p className='text-lg font-normal'>Selamat datang kembali! Kelola daur ulang Anda dengan mudah.</p>
          </div>
          <div>
            <form action="">
              <div className='my-14 space-y-6'>
                <FormInput id="email" label="Email" type="email" placeholder="contoh: emailanda@example.com" startIcon={<IoMail size={20} color="gray" />} />
                <FormInput id="password" label="Password" type="password" placeholder="Minimal 8 karakter" startIcon={<FaLock size={20} color="gray" />} />
              </div>
              <Button type="submit" fullWidth size='large'>Masuk</Button>
            </form>
          </div>
          <p className='text-lg font-normal text-center mt-6'>Belum punya akun? <Link to="/register" className='text-primary-05'> Buat akun baru </Link></p>
        </div>
      </AuthLayout>
    </main>
  )
}
