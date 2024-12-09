import React from "react";

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
              src="https://s3-alpha-sig.figma.com/img/7e19/f254/8358e06b1008997efa0c30c53a146d00?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdM4cORFWiUraIQqg0OvNo36WIM~tV3x-f8ZIgno1v8Z-kE9Oa89UtJ2Gfub-v-0lERsBcZ2LnGYYrf90AcEc4G9QizSJ-teCakQTQUD5EDIgG7eozL0nNizDziyhg-XrgjimlgFHvulEMawLZz21V9E7fbaHe8Mhq6mLMuWBMgCzmZDdIxBAyvIGHjtEbmGyG-i7iBhlNk53mq9F97FJp6PRMrNlKBTQEnIR9y4NB0x1gstgX7n~RtWdTjmEZuUCVp-Plk3IqN6duacpg2IVHRXF8h~e~oHysHA8cQ2upGBxjFDL2X6Pf01N45UP~sY9DYx4WVvlFW15PTGCTMlgA__"
              alt="Foto 1"
              className="rounded-lg object-cover h-full w-full translate-y-[30%] md:translate-y-[10%]"
            />
          </div>

          {/* Foto 2 */}
          <div className="w-1/2 md:w-1/4 h-32 md:h-40 relative z-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/f85f/7cf2/a02f68075f780263340af0ea089c4e24?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6oin-ychTxulv-jZUiLlLFkIAgy88T-GbFRIodm3njrR3eNVfRFIzaW6-UQmQAELtNXemkBqx17unZXfrAvKaWx1QGuPxlNToIN0b18CRWonHCrEIvniaUjiHyB36lpcIM77hMPA~gQDlrYAE7WUoDEAp4gTCVOUrS9DCJfXXPulr3Dh8DG0ztw3XicPEhWMjzjmNukkwIrI-9v5ZSBoMkmdcfqNS-nNwkLiiBYGF~ktHALgVVG2FgDgCj3RUREguPq-wl7RCnwD44NOn335Vk5zEuEt~0BRQ1e~CUMOD1Ns8Wju7Usyo01UW2iitMz5D0o5uTeFrcRcxy14LY4oQ__"
              alt="Foto 2"
              className="rounded-lg object-cover h-full w-full translate-y-[60%] md:translate-y-[25%]"
            />
          </div>

          {/* Foto 3 (Sembunyikan pada mobile) */}
          <div className="w-1/4 h-80 relative z-20 hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/439b/a71d/90d5250045387afc1778ccae74b442fe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxr-b~gW2BjZjKgeD-9Ox2BP75PCJnN4E6tYOOvgl3n1DDjnK8SgEUqU5zHFup~4JhudGkxdgJo9b9GIEi0yL0W2uisOXv64d-Plefl-ndyaHsiCWiWyVqgM3PLKhijPbT4ao5eqdUAFwe7HJQUzfPdKCdnli~DyHId4btp8UzoeqFt0SiBPTKyxFHdiKgSZEufoBwlxQTi~4qW40kP0ETKrhMzYsdJsZo6SceabdFfJ06Qz44jcRK4lWOwpRW5rT8BDdJNDmtgbbn2SPLimFsaDAU1Mm2BRadLpRXZbV0lCOKN9tlUGnbmoyF3K-L-2nlK59mPZt2nRAWsfOdmhYA__"
              alt="Foto 3"
              className="rounded-lg object-cover h-full w-full translate-y-[10%]"
            />
          </div>

          {/* Foto 4 (Sembunyikan pada mobile) */}
          <div className="w-1/4 h-40 relative z-20 hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/a3ad/3f86/f12f9d47ac3db0f7ab954e1745a0068e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fHLqm~sq0WK-c7aoBIpoIalMaNXDHnnhtm5BWXqkCsuqJmqnwfidKcQhBOFm5X7pbO9WrNC9uV8flLV0sjOux~GrhwZRjg75NJ1ExUQF9PzCI-~~XBWYKaerrMZgarbVTwTAMYUFAlF04l3vuvaV3TBm1A826hjQUnqF63HiIBhZGDHJynj5NaGhMeb8hE2vn2AvuJlx3HKe4aMFS6kFob3L-HcooSvF7-~sYwRDPUa4Wyyg7CrZSfINhb8S6zJq0p4vZQcvUhbi1wqovfaOXPlyklfLipUxQ8iVwtCEBDBVCZS6sgDfrMXUfeb-UANkCoZy3cytaJpnDIGQCcsZMg__"
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
