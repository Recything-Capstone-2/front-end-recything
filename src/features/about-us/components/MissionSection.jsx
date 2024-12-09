import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-800 py-16 px-8 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Section Kiri (Gambar) */}
        <div className="md:w-1/2 order-2 md:order-1 overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/1149/d077/f09c8ac9dca83914fb9af682838b2944?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qavsZ~XkXG7aDTWyVVtIiLcb2iSN~jdx3x9b6HLu8oh7IH5t-IfLfexe2tbXvuIZfdHmUEa1vO6dsGVexJB~RpClBodQThUQpu4kAJpO7-oBVFXdA9w7wICPq-8br3EJwN1OI2W20z9Du30RAXwVXJ5-xQQw-l6fviNRvUNBQhATuJmUVEM~KHDsNTZpVd7uEVoNsfIwnCADVMMTqErI5Nv7spze~zOOUVNDC3~gGuEWvFHBxjIYZEC8CaTjIPLAADDeHUQY2Uj61e~OVf~4kYoHtBBRxbRI~KtSnqDz60Dym~6CKfr20BPBCmFLD~8nW1a9uMYMHy4~Af5Np64uIg__"
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
