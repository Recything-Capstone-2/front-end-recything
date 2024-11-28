import FormInput from "../../../components/ui/FormInput.jsx";
import AuthLayout from "./auth.layout.jsx";
import Button from "../../../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import imglogo from "../../../assets/logo/logo-greenly.png";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Register() {
  return (
    <main>
      <AuthLayout>
        <div>
          <div className='text-center space-y-2'>
            <img src={imglogo} alt="Greenly Logo" className="mx-auto h-7" />
            <h1 className='text-3xl font-bold'>Daftar</h1>
            <p className='text-base font-normal'>Isi data Anda dengan benar untuk pengalaman terbaik bersama Greenly.</p>
          </div>
          <div>
            <form action="">
              <div className='my-4 space-y-4'>
                <FormInput id="name" label="Nama Lengkap" type="text" placeholder="contoh: Budi Santoso" startIcon={<IoPersonSharp size={20} color="gray" />} />
                <FormInput id="date" label="Tanggal Lahir" type="date" />
                <FormInput id="phone" label="Nomor Telepon" type="text" placeholder="123 4567 890" startIcon={<FaPhoneAlt size={20} color="gray" />} />
                <FormInput id="email" label="Email" type="email" placeholder="contoh: emailanda@example.com" startIcon={<IoMail size={20} color="gray" />} />
                <FormInput id="password" label="Password" type="password" placeholder="Minimal 8 karakter" startIcon={<FaLock size={20} color="gray" />} />
              </div>
              <Button type="submit" fullWidth>Masuk</Button>
            </form>
          </div>
          <p className='text-base font-normal text-center mt-2'>Sudah punya akun? <Link to="/login" className='text-primary-05'> Masuk </Link></p>
        </div>
      </AuthLayout>
    </main>
  )
}
