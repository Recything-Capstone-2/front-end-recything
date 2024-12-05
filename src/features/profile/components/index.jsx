import background from "../../../assets/images/background-1.png"
import Button from "../../../components/ui/Button.jsx"
import { MdOutlineEdit } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import useUser from "../../../store/userStore.js";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const image = "https://s3-alpha-sig.figma.com/img/4235/914f/770551e87140cb0652c365d2d7a7d9e4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QBrNmoEB9PTkDqZ26olTdRNLs1xjgecfdR341-tVz1ZsniopYNasR20u0DO7dqSFqAosDNTyxv7YA6NADINrTSYu2flN0akLTGTeCIZtyC1Hsa4dAlerB~d1gkLs2i3IBmeaxCvEd8DWS1EPNUG4kQRinzn78Mvva0N7yPX4HH~xdqST1mYJTZ1DVr7amkVtcNGve11pNukj1dwmzlLS-ZTGG-IY79VL3frF9Vt3OhUUab2Tsi849t17Qv7mmtF7Me5CY~F6sZu0l4e2CiGdbqMlUaGV4JqzQLIgnftAI1qeF71fBP4TUSQGHV~aVZN6jjENmIs2z1Bm6aMe10aBHA__"

const image2 = "https://s3-alpha-sig.figma.com/img/9afa/40e6/7f9adfb6486c67063d80474f4d89a506?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z0XVl44YZBON7R4DCoDwDykGv-W5Q3XfhfAVN0h5-x~5Qiz1SHOjXDy9MfRoN5DpVzkcTIRNcra9XLlcGqM6njoKkOHyPrJd0EtuxpDfnQ6X46CVq5jLL89LXo9AjdPK3wZ3R3QHANo0GRG-b9HJnk9eE0fj7DiGa5mjg5fPkCL-sJgzmPPAEl8d4z8ZpWsiQbt6eVTdZ1O5H33GG5S0wAEErSpJBBmY7~5qRYyXfuMBl8Q9HelVHRlmQB-A4Bp349l-U47iix7L6NJABkeuQQSb1zoj4EM-tH2Teg-EieTD4gv9kYwT1dWbqhbUIr28U38ZPdsMhjVMxlHtUkgWAw__"


export default function Profile() {
  const { user } = useUser();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = () => {
    fileInputRef.current.click();
  };

  return (
    <main className="min-h-screen py-12" style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
      <section className="container mx-auto bg-white grid grid-cols-12 py-12 rounded-lg relative"> 
        <div className="col-span-10 col-start-2">
          <img src={image} alt="" className="h-64 object-cover w-full rounded" />
        </div>

        <div className="col-span-10 col-start-2 grid grid-cols-10 px-4 items-end gap-x-4 absolute top-52">
          <div className="col-span-2 relative">
            <img src={user.photo || image2} alt="" className="object-cover w-full rounded" />
            <button className="bg-secondary-04 p-2 rounded-s absolute bottom-0 right-0 hover:bg-yellow-400" onClick={handleFileChange}><MdOutlineEdit size={24} /></button>
            <input type="file" className="hidden" ref={fileInputRef} accept="jpg,png,jpeg" />
          </div>
          <div className="col-span-4">
            <h2 className="text-3xl font-bold">{user.nama_lengkap}</h2>
            <p className="text-base font-normal text-slate-500 flex items-center gap-x-2"> 
              <SiGooglemaps size={16} /> 
              {user.alamat || "Tidak ada alamat"}
            </p>
          </div>

          <div className="col-span-4 flex items-center justify-end">
            <Button variant="secondary" size="sm" onClick={() => navigate("/profile/edit")}>
              <MdOutlineEdit size={20} />
              Edit
            </Button>
          </div>
        </div>

        <div className="col-span-10 col-start-2 space-y-4 px-4 mt-32">
          {/* email */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-2 text-xl font-bold"><p>Email</p></div>
            <div className="col-span-7 text-lg font-normal">
              {user?.email}
            </div>
          </div>
          {/* password */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-2 text-xl font-bold"><p>Password</p></div>
            <div className="col-span-7 text-lg font-normal">
              ********
            </div>
          </div>
          {/* tanggal lahir */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-2 text-xl font-bold"><p>Tanggal Lahir</p></div>
            <div className="col-span-7 text-lg font-normal">
              {user?.tanggal_lahir}
            </div>
          </div>
          {/* nomor telepon */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-2 text-xl font-bold"><p>Nomor Telepon</p></div>
            <div className="col-span-7">
              {user?.no_telepon}
            </div>
          </div>
          {/* jenis kelamin */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-2 text-xl font-bold"><p>Jenis Kelamin</p></div>
            <div className="col-span-7">
              {user?.jenis_kelamin || "belum diisi"}
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}