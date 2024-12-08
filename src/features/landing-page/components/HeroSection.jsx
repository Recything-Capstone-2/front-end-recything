import React from "react";
import imghero from "../../../assets/images/image-hero.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12"
    >
      {/* Left Content */}
      <div className="flex flex-col space-y-4 md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-relaxed text-gray-900 dark:text-white">
          Bergabunglah dalam Misi <br />
          Bersama untuk Dunia <br />
          Lebih Hijau!
        </h1>
        <p className="text-gray-600 text-lg dark:text-gray-200">
          Aplikasi pelaporan sampah dan edukasi daur ulang yang mempermudah Anda
          dalam menjaga kebersihan dan lingkungan.
        </p>
        <button className="bg-primary-05 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md w-fit">
          Mulai Sekarang!
        </button>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <img src={imghero} alt="Hero Illustration" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
