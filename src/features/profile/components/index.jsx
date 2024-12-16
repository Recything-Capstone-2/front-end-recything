import background from "../../../assets/images/background-1.png";
import Button from "../../../components/ui/Button.jsx";
import { MdOutlineEdit } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import useUser from "../../../store/userStore.js";
import { useNavigate } from "react-router-dom";
import useUpdatePhoto from "../hooks/useUpdatePhoto.jsx";
import bgfoto from "../../../assets/images/bg-profile.jpeg";
import profilefoto from "../../../assets/images/profile-foto.jpg";

export default function Profile() {
  const { user } = useUser();
  const {
    fileInputRef,
    handleFileChange,
    handleFileUpload,
    loadingChangePhoto,
  } = useUpdatePhoto(user.id_user);
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen max-w-[1440px] py-12"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <section className="container mx-auto bg-white dark:bg-gray-800 grid grid-cols-12 py-12 rounded-lg relative">
        <div className="col-span-10 col-start-2">
          <img
            src={bgfoto}
            alt="ilustration"
            className="h-64 object-cover w-full rounded"
          />
        </div>

        <div className="col-span-10 col-start-2 grid grid-cols-10 md:px-4 px-2 items-end gap-x-4 absolute top-52">
          <div className="col-span-6 md:col-span-2 relative">
            <img
              src={user.photo || profilefoto}
              alt=""
              className={`h-48 object-cover w-full rounded ${
                loadingChangePhoto ? "blur-sm" : ""
              }`}
            />
            <button
              className="bg-secondary-04 p-2 rounded-s absolute bottom-0 right-0 hover:bg-yellow-400"
              onClick={handleFileChange}
            >
              <MdOutlineEdit size={24} />
            </button>
            <input
              type="file"
              id="photo"
              className="hidden"
              ref={fileInputRef}
              accept="jpg, png, jpeg"
              onChange={handleFileUpload}
            />
            {loadingChangePhoto && (
              <p className="text-white text-base font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Loading...
              </p>
            )}
          </div>
          <div className="col-span-4">
            <h2 className="text-base md:text-3xl dark:text-white font-bold">
              {user.nama_lengkap}
            </h2>
            <p className="text-sm md:text-base font-normal text-slate-500 dark:text-gray-200 flex items-center gap-x-2">
              <SiGooglemaps size={16} />
              {user.alamat || "Indonesia"}
            </p>
          </div>

          <div className="col-span-10 md:col-span-4 flex items-center justify-end my-3 md:my-0">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate("/profile/edit")}
            >
              <MdOutlineEdit size={20} />
              Edit
            </Button>
          </div>
        </div>

        <div className="col-span-10 col-start-2 space-y-4 px-4 md:mt-32 mt-40">
          {/* email */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 md:gap-x-5 gap-y-1 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-7 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Email</p>
            </div>
            <div className="col-span-7 text-base md:text-lg font-normal dark:text-white">
              {user?.email}
            </div>
          </div>
          {/* password */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 md:gap-x-5 gap-y-1 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-7 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Password</p>
            </div>
            <div className="col-span-7 text-base md:text-lg font-normal dark:text-white">
              ********
            </div>
          </div>
          {/* tanggal lahir */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 md:gap-x-5 gap-y-1 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-7 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Tanggal Lahir</p>
            </div>
            <div className="col-span-7 text-base md:text-lg font-normal dark:text-white">
              {user?.tanggal_lahir}
            </div>
          </div>
          {/* nomor telepon */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 md:gap-x-5 gap-y-1 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-7 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Nomor Telepon</p>
            </div>
            <div className="col-span-7 dark:text-white">{user?.no_telepon}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
