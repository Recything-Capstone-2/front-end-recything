import React from "react";

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
            src="https://s3-alpha-sig.figma.com/img/6930/9f18/b896e805a5bb3febd54339d45dbc7617?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f9-7GC8xiDcZfm~7hdHMx~P0lGMo8u8ipx0z53n3eZWN1G25OlCPtZI0A2H61hFk2sCXp9hts44LUwByb1vpms-O9hZcV5HqYLoSfHCvo~Z-jw1tnS4vBRtJo5C~8YJ-YvvN36HX~6Rj5UQ61e6JgA-VL9F0et88FPuAgFdGlf0CteVrQaq0R~PBWRH8~jNdwazqBhXK~c~LMO6WZXM-Teod1mE2w6WXOevtGrHRpIiqIwgOGiU4ZkuNBy6eAE1wkx0xFvAwTShpkbAjrJ63ScQFmI5CZaUtZUdLY3Iki1~xe8AoMe2w3vSiA2mBSuowtoKVGOEQfmDJ~KIndqxnKg__"
            alt="Foto Visi"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
