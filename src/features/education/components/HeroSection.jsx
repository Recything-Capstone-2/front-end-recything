import React from "react";
import imghero from "../../../assets/images/bgEdu.png";

const HeroSection = () => {
  return (
    <header className="relative">
      <div className="relative w-full">
        <img
          src={imghero}
          alt="Hero Illustration"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay gelap */}
      </div>
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center px-8 md:px-12 lg:px-32">
        <h1 className="text-2xl font-bold text-white sm:text-5xl text-shadow-md text-left">
          Daur Ulang Dimulai <br /> dari Pemahaman
        </h1>
        <p className="mt-4 text-[16px] text-white sm:text-[24px]">
          Temukan informasi lengkap tentang daur ulang dan <br /> jadilah bagian
          dari solusi.
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
