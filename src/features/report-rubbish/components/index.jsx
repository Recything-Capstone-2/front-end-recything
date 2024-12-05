import { SiGooglemaps } from "react-icons/si";
import FormTextarea from "../../../components/ui/FormTextarea.jsx";
import FormInput from "../../../components/ui/FormInput.jsx";
import Button from "../../../components/ui/Button.jsx";
import { MdEventNote } from "react-icons/md";
import { FaCheck, FaCoins, FaIdCard } from "react-icons/fa";
import background from "../../../assets/images/background-2.png"
import useMaps from "../hooks/useMaps.jsx";
import Autosuggest from "react-autosuggest";
import useReportRubbish from "../hooks/useReportRubbish.jsx";
import SuccessReport from "./successReport.jsx";
import FormSelect from "../../../components/ui/FormSelect.jsx";
import { MenuActive } from "./menu.active.jsx";

const options = [
  { value: '', label: 'Pilih jenis laporan' },
  { value: 'rubbish', label: 'Report Rubbish' },
  { value: 'littering', label: 'Report Littering' },
]

export default function ReportRubbish() {
  const { address, suggestions, position, handleSelect, renderSuggestion, inputProps, fetchSuggestions, setSuggestions } = useMaps();

  const { success, loading, errorDate, errorLocation, errorDescription, handleSubmitReport } = useReportRubbish(address, position);

  return (
    <main className="bg-slate-50 font-inter">
      { success ? (
        <SuccessReport />
      ) : (
        <section className='container mx-auto grid grid-cols-12 font-inter py-20'>
          <div className="col-span-12 flex gap-x-5 mb-5 px-4">
            <MenuActive label="Laporan Sampah" href="/report" />
            <MenuActive label="Riwayat Laporan" href="/history-report" />
          </div>

          <div className='hidden md:col-span-5 md:flex items-center justify-center py-20 rounded-lg shadow-slate-300 drop-shadow-lg' style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
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
          <div className='col-span-12 md:col-span-7 flex items-center justify-center'>
            <form action="" className=" md:w-3/4 mx-auto space-y-6" onSubmit={handleSubmitReport}>
              <FormInput id="tanggal_laporan" label="Tanggal" type="date" placeholder="Masukkan Tanggal" disabled={loading} error={errorDate} errorMessage={errorDate} />
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
              <FormSelect id={"jenis_sampah"} label="Jenis Sampah" options={options} disabled={loading} />
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