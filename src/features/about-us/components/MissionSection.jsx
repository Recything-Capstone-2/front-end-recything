import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-green-50 py-16 px-8 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Section Kiri (Gambar) */}
        <div className="md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/d9cd/c735/df4ce20dd345792e690069b747bb0e00?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZC5buAabu2EpxSdi0PI~ygh601L~GQNWoWidFrUIpWFJRzJU6L77KI4Bydc~hCZ85dTtPHpHB5MWbEvmiaZWBbgACOzkRXaNyFzOHfBpTg3gydT75U5VZalfcJU03RV-CrDsQaCT0j4FSS-LppirAwaDOZPE3llo73~mZYMEs0XBA2Hlpc9AbHZRQWK753r~wmDvsQnlXeXpuFSPsh29XwcBA44dL45iVuzAwewoyinI~EBE0ikaDRT233m9X0WmekbRdmhCxzbJZPkgKrK-vtC0LFDvDcQ5BC17BUk8WxHp~Tm8l4olezK0pKWpR3gBDhtS2-vfOm5mXOwf1Tf3VA__"
            alt="Foto Misi"
            className="rounded-lg shadow-lg object-cover w-full h-[500px]"
          />
        </div>

        {/* Section Kanan (Judul dan Deskripsi) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
            Misi
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 pl-12">
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
