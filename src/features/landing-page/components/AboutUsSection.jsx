import React from "react";

const AboutUsSection = () => {
  return (
    <div>
      <section
        id="about"
        className="bg-white dark:bg-gray-800 relative px-24 py-16"
      >
        {/* Title */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-extrabold text-center mb-20 text-gray-900 dark:text-white">
            Tentang Kami
          </h2>
        </div>

        {/* Photo Grid (Hidden on mobile) */}
        <div className="hidden md:flex relative justify-center items-center gap-4 px-4">
          <div className="w-1/4 h-80 relative z-10 shadow-xl">
            <img
              src="https://s3-alpha-sig.figma.com/img/7e19/f254/8358e06b1008997efa0c30c53a146d00?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hY0radMQ8POKV57HfzJIglVR38NrlnqqgGWw5aAyLGqrd9Owi06wh2YLhBXpCnBJpXQSXt-fxaVmI4EC-IbZ9DPE49Y0MPx29EWeq3g8FuyBstUVXim0pNiVmqIn4mydA2QyHyqfGlTGGCa4r9A6QJlOFhJJsL0XDO60-bTHiteaseOtFUQ8ty2QqaOgqwq9gEAZNmQk4pXec~vTH5MANVywYaHtyFFMPLMC76tplMNeQ2oGBGv79KBbdz7CPkwHkNjw~8IeK5utHXksbWiHhTgPDFmhNuwkg3cpHtojBS2TY3HCP1-7FGdtrmaHZfXTc-Zz1QXbut7~fhArESMplQ__"
              alt="Foto 1"
              className="rounded-lg object-cover h-full w-full translate-y-[50%%]"
            />
          </div>
          <div className="w-1/4 h-40 relative z-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/f85f/7cf2/a02f68075f780263340af0ea089c4e24?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DJjRNjOmRai4gNccjTZ2nQaaOydOm7qhHJ~sMeIfYODfCMVm6OrhsDt7u37ukbQuukBUUmhKJDQnXbAV~LiOP0SDYWmh-oiLFA5EoctypgFZ8HdtwcMu5Simz6~XIA6gZmmld1P~SQF4s02I9drNOD74OSYoWrJ1-JXczGiknMi2ulGqXFPTJf6B~s7yKEAEphsJ3W1~FiMm4qOcF~UDxErgTOYj~W~nqSdbAJ4RJgPu46i-W5f3DccAX-jSyZnFo92QUMdvjlHupsL2Yj7yAxsFizYrkjE1biXABPu0oeMtBePblaqwizKUm6gHOgG1y-2t6SHJ5odXFVodfjpz5w__"
              alt="Foto 2"
              className="rounded-lg object-cover h-full w-full translate-y-[25%%]"
            />
          </div>
          <div className="w-1/4 h-80 relative z-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/439b/a71d/90d5250045387afc1778ccae74b442fe?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTTlH4EnOZsM1V7h9SGutzWLyfBXZ9dGa32WKVKFkPy--LHZjfQ--jpffmaMPjngWqjcEvB5Yj2J8xwjC8Ihur7csMSey6o-ddEiKQ0aEAIO0Vk32CqaLs5pua1WGTVDq2RrNeDBcI060alG1vC~2vyv9LY1-LaxAamsHSKztPJTsxm6XgHOXbhIQUoEbnPnF5TW~B-lQoWwzgwrhwYk2lXeeEc4PjIQC0xlvXBdgd9mQVnfqsNT4Bu30269oChkA8Q~UsLn22SZnPkozegacATQHBWd36T2zWfq3tlOqudqAmiRUil3tF~Xhbj1Z0L2ldpN3Se7zzMPSG-UZr4HFw__"
              alt="Foto 3"
              className="rounded-lg object-cover h-full w-full translate-y-[50%%]"
            />
          </div>
          <div className="w-1/4 h-40 relative z-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/a3ad/3f86/f12f9d47ac3db0f7ab954e1745a0068e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAzAcePkFBTRkJTvPGMYIFQv42LaI5A8~l4UEhoqD2u1FiFL~rEqFaap-OHXxdbAvT8uN1fD~akvCLnnLeBLpLkXNzJIXiB~s8CZizOlNLRkoD7axIWn5f4bmW9-6~tLfAiu099drk9AWM~KH2ywLX0BwgMiVKNBvkEWXLPvFYlCxLeYiPElpYo~SQSp1mGIN628cRU6XQ2kiJZLuLiJpEUeawHwt6GgMILuYmE0LiBR1ycnNaIe6u2fleTTmjyPtdALNEfslAmODhF57jhzYewrwnGN02Amnrwe5UExrKux2FBqptHLkwAmO-p7aVxrw~xZWhzrgEkcsHqz3nJSzA__"
              alt="Foto 4"
              className="rounded-lg object-cover h-full w-full translate-y-[25%%]"
            />
          </div>
        </div>

        {/* Overlay Background (Hidden on mobile) */}
        <div className="absolute inset-x-0 bottom-0 bg-primary-05 z-0 h-1/2 md:block hidden"></div>

        {/* Description */}
        <div className="relative bg-primary-05 text-white text-center py-14 px-6 md:px-44 mt-8 z-10">
          <p className="text-lg md:text-xl font-bold">
            Kami berkomitmen untuk menciptakan masa depan yang lebih hijau.
          </p>
          <p className="mt-8 leading-relaxed">
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
