import React from "react";
import logo from "../../../assets/logo/logo-only-big.png";
import foto1 from "../../../assets/images/foto1-about.jpeg";
import foto2 from "../../../assets/images/foto2-about.jpeg";
import foto3 from "../../../assets/images/foto3-about.jpeg";
import foto4 from "../../../assets/images/foto4-about.jpeg";

const SolutionSection = () => {
  return (
    <div>
      <section
        id="about"
        className="bg-white dark:bg-gray-800 relative pt-16 max-w-[1440px]"
      >
        {/* Title */}
        <div className="flex items-center justify-center pt-5 md:py-10">
          <img src={logo} alt="logo" className="h-12 w-12 mr-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Greenly
          </h2>
        </div>

        {/* Photo Grid (Hidden on mobile) */}
        <div className="md:flex flex relative justify-center items-center gap-4 px-10 md:px-24">
          <div className="w-1/2 md:w-1/4 h-52 md:h-80  relative z-20">
            <img
              src={foto1}
              alt="Foto 1"
              className="rounded-lg object-cover h-full w-full translate-y-[70%] md:translate-y-[25%]"
            />
          </div>
          <div className="w-1/2 md:w-1/4 h-32 md:h-40  relative z-20">
            <img
              src={foto2}
              alt="Foto 2"
              className="rounded-lg object-cover h-full w-full translate-y-[140%] md:translate-y-[60%]"
            />
          </div>
          <div className="w-1/4 h-80 relative z-20 hidden md:block">
            <img
              src={foto3}
              alt="Foto 3"
              className="rounded-lg object-cover h-full w-full translate-y-[25%]"
            />
          </div>
          <div className="w-1/4 h-40 relative z-20 hidden md:block">
            <img
              src={foto4}
              alt="Foto 4"
              className="rounded-lg object-cover h-full w-full translate-y-[60%]"
            />
          </div>
        </div>

        {/* Overlay Background (Hidden on mobile) */}
        <div className="absolute inset-x-0 bottom-0 bg-primary-05 z-0 h-1/2 md:block hidden"></div>

        {/* Description */}
        <div className="relative bg-primary-05 text-white text-center pt-32 pb-20 md:py-14 px-6 md:px-44 mt-20 z-10">
          <p className="text-lg md:text-xl font-bold">
            Solusi Digital untuk Masa Depan yang Berkelanjutan
          </p>
          <p className="mt-8 leading-relaxed md:pb-10">
            Greenly didirikan pada tahun 2024, terinspirasi oleh meningkatnya
            volume sampah global dan kebutuhan mendesak untuk mengedukasi serta
            melibatkan masyarakat dalam gerakan daur ulang. Aplikasi ini lahir
            dari visi sekelompok profesional lingkungan dan teknologi untuk
            menciptakan solusi digital yang mempermudah manajemen limbah dan
            mendorong keberlanjutan. Menggunakan teknologi modern, Greenly
            menawarkan panduan daur ulang, pelacakan limbah pribadi, dan
            platform komunitas untuk berbagi pengetahuan dan kolaborasi. Dengan
            fokus pada edukasi dan solusi praktis, Greenly bertujuan untuk
            menjadi katalisator perubahan gaya hidup menuju dunia yang lebih
            bersih dan berkelanjutan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SolutionSection;
