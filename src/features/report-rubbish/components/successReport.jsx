import { useNavigate } from "react-router-dom";
import { HiThumbUp } from "react-icons/hi";
import background2 from "../../../assets/images/background-3.png";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../../components/ui/Button.jsx";

export default function SuccessReport() {
  const navigate = useNavigate();

  return (
    <section className="space-y-6 pt-20 pb-10 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-primary-05">
        Terima Kasih !
      </h1>
      <div
        className="bg-[#C1E8BA]"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-transparent max-w-xl mx-auto flex justify-center items-center py-12">
          <div className="bg-white rounded-full p-12">
            <HiThumbUp size={100} className="text-primary-05 animate-bounce" />
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-center space-y-5">
        <div className="flex gap-x-2 justify-center items-center">
          <FaCheckCircle size={40} className="text-primary-05" />
          <h2 className="text-2xl font-medium dark:text-white">
            Laporan Berhasil Dikirim
          </h2>
        </div>
        <p className="text-base font-normal pb-5 dark:text-gray-200">
          Greenly akan segera memproses laporan Anda hingga selesai. Pantau
          terus prosesnya, dan jangan khawatir, poin Anda akan segera diperoleh
          setelah laporan selesai. Bersama Greenly, mari kita wujudkan
          lingkungan yang lebih bersih dan berkelanjutan!
        </p>
        <Button fullWidth onClick={() => navigate("/beranda-user")}>
          {" "}
          Kembali Ke Beranda{" "}
        </Button>
      </div>
    </section>
  );
}
