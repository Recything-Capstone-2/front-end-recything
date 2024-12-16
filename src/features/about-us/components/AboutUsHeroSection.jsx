import React from "react";
import imgaboutUs from "../../../assets/images/about-us.jpeg";

const AboutUsHeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{
        backgroundImage: `url(${imgaboutUs})`,
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full absolute inset-0"></div>
      <div className="relative z-10 max-w-4xl px-8 md:px-12 lg:px-32">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Tentang Kami
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl">
          Greenly hadir untuk membantu dunia menjadi lebih hijau melalui aksi
          daur ulang dan edukasi lingkungan.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
