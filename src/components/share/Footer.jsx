import React from "react";
import imglogosecond from "../../assets/logo-greenly-second.png";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary-05 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-9">
            <img src={imglogosecond} alt="Greenly Logo" className="h-12 w-12" />
            <div className="text-start space-y-3">
              <h2 className="text-2xl font-semibold">Greenly</h2>
              <p className="text-sm text-secondary-04">
                Hijaulkan Dunia, Mulai dari Aksi Kecilmu.
              </p>
            </div>
          </div>

          {/* Description and Contact Button */}
          <div className="mt-6 md:mt-12 text-right md:text-right md:w-2/5">
            <p className="text-sm leading-relaxed">
              Mari bergabung bersama Greenly untuk menjaga kebersihan
              lingkungan! Setiap laporan yang kamu kirimkan membantu menciptakan
              perubahan positif Ayo, lakukan tindakan kecil hari ini untuk bumi
              yang lebih bersih!
            </p>
            <div id="contact" className="pt-12">
              <button
                type="button"
                class="text-secondary-04 hover:text-white border border-secondary-04 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white opacity-20" />

        {/* Botom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm">&copy; 2024 Greenly. All rights reserved.</p>

          {/* Social Media and Contak */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-1">
              <FaInstagram />
              <a href="#">Greenly</a>
            </div>
            <div className="flex items-center space-x-1">
              <MdOutlineLocalPhone />
              <a href="tel:+08123456789">08123456789</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
