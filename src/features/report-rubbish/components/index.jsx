import { FaIdCard } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import FormTextarea from "../../../components/ui/FormTextarea.jsx";
import FormSelect from "../../../components/ui/FormSelect.jsx";
import FormInput from "../../../components/ui/FormInput.jsx";
import Button from "../../../components/ui/Button.jsx";
import { MdEventNote } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import background from "../../../assets/images/background-2.png"
import useMaps from "../hooks/useMaps.jsx";
import Autosuggest from "react-autosuggest";
import { useState } from "react";
import instance from "../../../utils/instance.js";
import { HiThumbUp } from "react-icons/hi";
import background2 from "../../../assets/images/background-3.png"
import { FaCheckCircle } from "react-icons/fa";
import { reportRubbishSchemaValidation } from "../validation/validation.report.js";

const options = [
  { value: "", label: "Pilih jenis sampah" },
  { value: "oraganik", label: "Sampah Organik" },
  { value: "anorganik", label: "Sampah Anorganik" },
  { value: "berbahaya", label: "Sampah Berbahaya" },
  { value: "medis", label: "Sampah Medis" },
  { value: "campuran", label: "Sampah Campuran" },
]

export default function ReportRubbish() {
  const { address, suggestions, position, handleSelect, renderSuggestion, inputProps, fetchSuggestions, setSuggestions } = useMaps();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorDate, setErrorDate] = useState("");
  const [errorLocation, setErrorLocation] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmitReport = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorDate("");
    setErrorLocation("");
    setErrorDescription("");

    const formData = new FormData(event.target);
    formData.append("location", address);

    const date = formData.get("date");
    const location = formData.get("location");
    const description = formData.get("description");

    // VALOIDATION
    const validationErrors = reportRubbishSchemaValidation({date, location, description});
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      setLoading(false);
      validationErrors.map((error, index) => {
        if (error.includes("Date")) {
          setErrorDate("Date is required");
        } 
        if (error.includes("Location")) {
          setErrorLocation("Location is required");
        }
        if (error.includes("Description")) {
          setErrorDescription("Description is required");
        }
      });
      return;
    }

    // HIT API
    try {
      setLoading(true);
      const response = await instance.post("/report-rubbish", formData);
      setSuccess(true);
      setLoading(false);
      console.log("Laporan berhasil dikirim:", response.data);
    } catch (error) {
      console.error("Gagal mengirim laporan:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 font-inter">
      { success ? (
        <section className="space-y-6 py-8">
          <h1 className="text-5xl font-bold text-center text-primary-05">Terima Kasih !</h1>
          <div className="bg-[#C1E8BA]" style={{backgroundImage: `url(${background2})`, backgroundSize: "cover"}}>
            <div className="bg-transparent max-w-xl mx-auto flex justify-center items-center py-12">
              <div className="bg-white rounded-full p-12">
                <HiThumbUp size={100} className="text-primary-05" />
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto text-center space-y-5">
            <div className="flex gap-x-2 justify-center items-center">
              <FaCheckCircle size={40} className="text-primary-05" />
              <h2 className="text-2xl font-medium">Laporan Berhasil Dikirim</h2>
            </div>
            <p className="text-lg font-normal">Greenly akan segera memproses laporan Anda hingga selesai. Pantau terus prosesnya, dan jangan khawatir, poin Anda akan segera diperoleh setelah laporan selesai. Bersama Greenly, mari kita wujudkan lingkungan yang lebih bersih dan berkelanjutan!</p>
            <Button fullWidth onClick={() => navigate("/beranda-user")}> Kembali Ke Beranda </Button>
          </div>
        </section>
      ) : (
        <section className='container mx-auto grid grid-cols-12 font-inter py-20'>
        <div className="col-span-12 flex gap-x-5 mb-5">
          <MenuActive label="Laporan Sampah" href="/report-rubbish" />
          <MenuActive label="Laporan Sampah Sembarangan" href="/report-litter" />
          <MenuActive label="Riwayat Laporan" href="/" />
        </div>

        <div className='col-span-5 flex items-center justify-center py-20 rounded-lg shadow-slate-300 drop-shadow-lg' style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
          <div className='w-56'>
            <h2 className='text-2xl font-bold leading-tight mb-14'>TAHAPAN LAPORAN</h2>

            <div className="space-y-20 border-s-2 border-primary-05">

              <div className="flex items-center justify-center gap-x-3 relative">
                <div className="flex items-center justify-center p-2 bg-primary-05 rounded-full absolute top-0 -left-5">
                  <FaIdCard size={24} className="text-white" />
                </div>
                <div>
                  <h5 className='text-lg font-bold leading-tight'>Diterima</h5>
                  <p className='text-sm font-normal'>Laporan user diterima.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-x-3 relative">
                <div className="flex items-center justify-center p-2 bg-primary-05 rounded-full absolute top-0 -left-5">
                  <MdEventNote size={24} className="text-white" />
                </div>
                <div>
                  <h5 className='text-lg font-bold leading-tight'>Diproses</h5>
                  <p className='text-sm font-normal'>Laporan user diproses.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-x-3 relative">
                <div className="flex items-center justify-center p-2 bg-primary-05 rounded-full absolute top-0 -left-5">
                  <FaCheck size={24} className="text-white" />
                </div>
                <div>
                  <h5 className='text-lg font-bold leading-tight'>Selesai</h5>
                  <p className='text-sm font-normal'>Laporan user telah selesai.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-x-3 relative">
                <div className="flex items-center justify-center p-2 bg-primary-05 rounded-full absolute bottom-0 -left-5">
                  <FaCoins size={24} className="text-secondary-04" />
                </div>
                <div>
                  <h5 className='text-lg font-bold leading-tight'>+ POIN</h5>
                  <p className='text-sm font-normal'>User medapatkan poin.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* form */}
        <div className='col-span-7 flex items-center justify-center'>
          <form action="" className="w-3/4 mx-auto space-y-6" onSubmit={handleSubmitReport}>
            <FormInput id="date" label="Tanggal" type="date" placeholder="Masukkan Tanggal" disabled={loading} error={errorDate} errorMessage={errorDate} />
            <div>
              <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">Lokasi Sampah</label>
              <div className="relative">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) => fetchSuggestions(value)}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={(suggestion) => suggestion.label}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={handleSelect}
                inputProps={inputProps}
                theme={{
                  input: 'border rounded-lg border-gray-300 px-3 py-2 w-full',
                  suggestionsContainer: 'z-10 bg-white border border-gray-200 rounded w-full mt-1',
                  suggestion: 'p-2 hover:bg-blue-100 cursor-pointer',
                  suggestionHighlighted: 'bg-blue-100',
                }}
              />
              <SiGooglemaps size={20} color="gray" className="absolute top-3 left-3" />                 
              </div>
              {errorLocation && <p className="text-red-500 text-sm mt-1">{errorLocation}</p>}
            </div>
            {/* <FormSelect id={"category"} label="Jenis Sampah" options={options} startIcon={<FaTrashAlt size={20} color="gray" />} /> */}
            <FormTextarea id="description" label="Deskripsi" type="text" placeholder="Masukkan Deskripsi Sampah" disabled={loading} error={errorDescription} errorMessage={errorDescription} />
            <FormInput id="photo" label="Upload Gambar" type="file" size="" disabled={loading} required />

            <Button fullWidth type="submit" disabled={loading}>
              {loading ? "Loading..." : "Laporkan"}
            </Button>
          </form>
        </div>
        </section>
      )}
    </main>
  )
}

// eslint-disable-next-line react/prop-types
const MenuActive = ({ label, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `text-base font-medium ${
          isActive ? "text-primary-05 border-b-2 border-primary-05" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
};