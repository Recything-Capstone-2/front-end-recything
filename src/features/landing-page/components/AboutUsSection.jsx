import React from "react";
import imgabout1 from "../../../assets/images/imgabout1.jpeg";
import imgabout2 from "../../../assets/images/imgabout2.jpeg";
import imgabout3 from "../../../assets/images/imgabout3.jpeg";
import imgabout4 from "../../../assets/images/imgabout4.jpeg";

const AboutUsSection = () => {
  return (
    <div>
      <section
        id="about"
        className="bg-white dark:bg-gray-800 relative py-16 max-w-[1440px]"
      >
        {/* Title */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-extrabold text-center mb-0 md:mb-20 text-gray-900 dark:text-white">
            Tentang Kami
          </h2>
        </div>

        {/* Photo Grid (Hidden on mobile) */}
        <div className="md:flex flex relative justify-center items-center gap-4 px-10 md:px-24">
          {/* Foto 1 */}
          <div className="w-1/2 md:w-1/4 h-52 md:h-80 relative z-20">
            <img
              src={imgabout1}
              alt="Foto 1"
              className="rounded-lg object-cover h-full w-full translate-y-[30%] md:translate-y-[10%]"
            />
          </div>

          {/* Foto 2 */}
          <div className="w-1/2 md:w-1/4 h-32 md:h-40 relative z-20">
            <img
              src={imgabout2}
              alt="Foto 2"
              className="rounded-lg object-cover h-full w-full translate-y-[60%] md:translate-y-[25%]"
            />
          </div>

          {/* Foto 3 (Sembunyikan pada mobile) */}
          <div className="w-1/4 h-80 relative z-20 hidden md:block">
            <img
              src={imgabout3}
              alt="Foto 3"
              className="rounded-lg object-cover h-full w-full translate-y-[10%]"
            />
          </div>

          {/* Foto 4 (Sembunyikan pada mobile) */}
          <div className="w-1/4 h-40 relative z-20 hidden md:block">
            <img
              src={imgabout4}
              alt="Foto 4"
              className="rounded-lg object-cover h-full w-full translate-y-[25%]"
            />
          </div>
        </div>

        {/* Overlay Background (Hidden on mobile) */}
        <div className="absolute md:block hidden inset-x-0 bottom-0 bg-primary-05 z-0 h-1/2 w-full"></div>

        {/* Description */}
        <div className="relative w-full bg-primary-05 text-white text-center py-28 md:py-14 md:px-44 md:mt-8 z-10">
          <p className="text-lg md:text-xl font-bold">
            Kami berkomitmen untuk menciptakan masa depan yang lebih hijau.
          </p>
          <p className="mt-8 leading-relaxed px-5 md:px-24">
            Melalui Greenly, kami menghadirkan inovasi untuk menghubungkan
            setiap individu dengan aksi nyata dalam melindungi lingkungan.
            Dengan fitur yang memudahkan pelaporan sampah, edukasi tentang daur
            ulang, dan sistem reward yang memotivasi, kami mengajak Anda untuk
            berperan dalam menciptakan dunia yang lebih bersih dan
            berkelanjutan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
