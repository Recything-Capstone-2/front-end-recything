import background from "../../../assets/images/background-1.png";
import Button from "../../../components/ui/Button.jsx";
import FormInput from "../../../components/ui/FormInput.jsx";
import useUser from "../../../store/userStore.js";
import { MdOutlineEdit } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaEye, FaEyeSlash, FaLock, FaPhoneAlt } from "react-icons/fa";
import { IoClose, IoPersonSharp, IoMail } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useUpdatePhoto from "../hooks/useUpdatePhoto.jsx";
import useUpdateData from "../hooks/useUpdateData.jsx";
import bgfoto from "../../../assets/images/bg-profile.jpeg";
import profilefoto from "../../../assets/images/profile-foto.jpg";

export default function ProfileEdit() {
  const { user } = useUser();
  const navigate = useNavigate();
  const {
    fileInputRef,
    handleFileChange,
    handleFileUpload,
    loadingChangePhoto,
  } = useUpdatePhoto(user.id_user);

  const {
    showNewPassword,
    showOldPassword,
    loadingUpdateData,
    handleDateChange,
    handleEmailChange,
    handleNameChange,
    handlePhoneChange,
    handleNewPasswordChange,
    handleOldPasswordChange,
    handleShowNewPassword,
    handleShowOldPassword,
    handleSubmitUpdate,
    errorName,
    errorDate,
    errorPhone,
    errorEmail,
    errorNewPassword,
    errorOldPassword,
  } = useUpdateData(user);

  return (
    <main
      className="min-h-screen max-w-[1440px] py-12"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <section className="container mx-auto bg-white dark:bg-gray-800 grid grid-cols-12 py-12 rounded-lg relative">
        <div className="col-span-10 col-start-2">
          <img
            src={bgfoto}
            alt=""
            className="h-64 object-cover w-full rounded"
          />
        </div>

        <div className="col-span-10 col-start-2 grid grid-cols-10 md:px-4 items-end gap-x-4 absolute top-52">
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
            <FormInput
              type="text"
              placeholder="Nama Lengkap"
              defaultValue={user?.nama_lengkap}
              onChange={handleNameChange}
              startIcon={<IoPersonSharp size={20} className="text-slate-500" />}
              error={errorName}
              errorMessage={errorName}
            />
            <div className="text-base font-normal text-slate-50 flex items-center gap-x-2 pt-2">
              <SiGooglemaps size={16} />
              <p className="dark:text-gray-200">Indonesia</p>
            </div>
          </div>

          <div className="col-span-10 md:col-span-4 flex items-center gap-x-2 justify-end my-3 md:my-0">
            <Button variant="danger" size="sm" onClick={() => navigate(-1)}>
              <IoClose size={20} /> Batal
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSubmitUpdate}
              disabled={loadingUpdateData}
            >
              <FaClipboardCheck size={20} />{" "}
              {loadingUpdateData ? "Loading..." : "Simpan Perubahan"}
            </Button>
          </div>
        </div>

        <div className="col-span-10 col-start-2 space-y-4 px-4 md:mt-32 mt-40">
          {/* email */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 gap-y-2 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-6 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Email</p>
            </div>
            <div className="col-span-10 md:col-span-4">
              <FormInput
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                startIcon={<IoMail size={18} color="gray" />}
                onChange={handleEmailChange}
                error={errorEmail}
                errorMessage={errorEmail}
              />
            </div>
          </div>
          {/* password baru */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 gap-y-2 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-6 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Password Baru</p>
            </div>
            <div className="col-span-10 md:col-span-4">
              <FormInput
                type={showNewPassword ? "text" : "password"}
                placeholder="Password"
                endButton={
                  showNewPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )
                }
                onEndButtonClick={handleShowNewPassword}
                startIcon={<FaLock size={18} color="gray" />}
                onChange={handleNewPasswordChange}
                error={errorNewPassword}
                errorMessage={errorNewPassword}
              />
            </div>
          </div>
          {/* password lama*/}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 gap-y-2 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-6 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Password Lama</p>
            </div>
            <div className="col-span-10 md:col-span-4">
              <FormInput
                type={showOldPassword ? "text" : "password"}
                placeholder="Password"
                endButton={
                  showOldPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )
                }
                onEndButtonClick={handleShowOldPassword}
                startIcon={<FaLock size={18} color="gray" />}
                onChange={handleOldPasswordChange}
                error={errorOldPassword}
                errorMessage={errorOldPassword}
              />
            </div>
          </div>
          {/* tanggal lahir */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 gap-y-2 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-6 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Tanggal Lahir</p>
            </div>
            <div className="col-span-10 md:col-span-4">
              <FormInput
                type="date"
                placeholder="Tanggal Lahir"
                defaultValue={user?.tanggal_lahir}
                onChange={handleDateChange}
                error={errorDate}
                errorMessage={errorDate}
              />
            </div>
          </div>
          {/* phone */}
          <div className="col-span-10 col-start-2 grid grid-cols-10 gap-x-5 gap-y-2 md:gap-y-0 items-center border-b-2 border-slate-300 pb-3">
            <div className="col-span-6 md:col-span-2 text-base md:text-xl font-bold">
              <p className="dark:text-white">Nomor Telepon</p>
            </div>
            <div className="col-span-10 md:col-span-4">
              <FormInput
                type="text"
                placeholder="Nomor Telepon"
                defaultValue={user?.no_telepon}
                startIcon={<FaPhoneAlt size={18} color="gray" />}
                onChange={handlePhoneChange}
                error={errorPhone}
                errorMessage={errorPhone}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
