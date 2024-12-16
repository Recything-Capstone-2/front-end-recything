import React from "react";
import fotoVisi from "../../../assets/images/foto-visi.jpeg";

const VisionSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-800 py-16 px-8 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Section Kiri (Judul dan Deskripsi) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
            Visi
          </h2>
          <p className="text-lg text-center leading-relaxed text-gray-700 dark:text-gray-200">
            Mewujudkan dunia yang lebih bersih dan hijau melalui edukasi dan
            teknologi, di mana setiap orang berperan aktif dalam mengurangi,
            mendaur ulang, dan mengelola sampah dengan cara yang bertanggung
            jawab.
          </p>
        </div>

        {/* Section Kanan (Gambar) */}
        <div className="md:w-1/2">
          <img
            src={fotoVisi}
            alt="Foto Visi"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
