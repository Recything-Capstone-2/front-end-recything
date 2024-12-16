import React from "react";
import fotoMisi from "../../../assets/images/foto-misi.jpeg";

const MissionSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-800 py-16 px-8 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Section Kiri (Gambar) */}
        <div className="md:w-1/2 order-2 md:order-1 overflow-hidden">
          <img
            src={fotoMisi}
            alt="Foto Misi"
            className="rounded-lg shadow-lg object-cover object-center w-full md:h-[500px]"
          />
        </div>

        {/* Section Kanan (Judul dan Deskripsi) */}
        <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
            Misi
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 pl-0 md:pl-12">
            1. Meningkatkan Kesadaran tentang pentingnya daur ulang. <br />
            2. Memudahkan Daur Ulang melalui platform praktis. <br />
            3. Mendukung Kebiasaan Sehat dalam daur ulang. <br />
            4. Mewujudkan Masa Depan Bersih bagi generasi mendatang. <br />
            5. Mengurangi Limbah ke TPA melalui pengelolaan yang lebih efisien.{" "}
            <br />
            6. Mendorong Ekonomi Sirkular dengan memanfaatkan limbah sebagai
            sumber daya. <br />
            7. Menyediakan Edukasi Berkelanjutan tentang cara memilah dan
            mendaur ulang sampah. <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
