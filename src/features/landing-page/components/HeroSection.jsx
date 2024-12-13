import React from "react";
import imghero from "../../../assets/images/image-hero.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12"
    >
      {/* Right Content (Image) */}
      <div className="order-1 md:order-2 2xl:order-1 md:w-1/2">
        <img src={imghero} alt="Hero Illustration" className="w-full" />
      </div>

      {/* Left Content */}
      <div className="flex flex-col space-y-4 order-2 md:order-1 2xl:order-2 md:w-1/2">
        <h1 className="text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-relaxed text-gray-900 dark:text-white">
          Bergabunglah dalam Misi <br />
          Bersama untuk Dunia <br />
          Lebih Hijau!
        </h1>
        <p className="text-gray-600 text-lg dark:text-gray-200 text-center md:text-left">
          Aplikasi pelaporan sampah dan edukasi daur ulang yang mempermudah Anda
          dalam menjaga kebersihan dan lingkungan.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-primary-05 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md w-fit">
            <Link to="/login">Mulai Sekarang</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
