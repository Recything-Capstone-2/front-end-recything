import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import imglogo from "../../assets/logo-greenly.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use to open mobile menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between md:px-20 px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="hidden md:flex items-center space-x-2">
        <img src={imglogo} alt="Greenly Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium text-gray-900">
        <ul className="flex space-x-6 text-sm">
          {[
            { name: "Beranda", path: "#home" },
            { name: "Fitur", path: "#features" },
            { name: "Tentang Kami", path: "#about" },
            { name: "Testimoni", path: "#testimonials" },
            { name: "Kontak", path: "#contact" },
          ].map((item, index) => (
            <li key={index}>
              <a href={item.path} className="hover:text-primary-05">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Buttons (Masuk and Daftar) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/login"
          className="text-sm font-medium text-gray-900 hover:text-primary-05"
        >
          Masuk {/* Gais ganti path login di sini */}
        </Link>
        <Button
          size="default"
          variant="primary"
          onClick={() => alert("Daftar clicked!")} // Gais ganti action untuk Daftar di sini
        >
          Daftar
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1 p-2"
        onClick={handleToggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={handleToggleMenu}
          >
            &times;
          </button>

          <ul className="flex flex-col items-center space-y-6 text-white">
            {[
              { name: "Beranda", path: "#home" },
              { name: "Fitur", path: "#features" },
              { name: "Tentang Kami", path: "#about" },
              { name: "Testimoni", path: "#testimonials" },
              { name: "Kontak", path: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="text-white text-xl hover:bg-white hover:text-primary-05 px-6 py-3 rounded-md"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="text-white text-xl hover:bg-white hover:text-primary-05 px-6 py-3 rounded-md"
              >
                Masuk
              </Link>
            </li>
            <li>
              <Button
                size="default"
                variant="primary"
                onClick={() => alert("Daftar clicked!")}
                className="text-white text-xl bg-main-green hover:bg-light-green px-6 py-3 rounded-md"
              >
                Daftar
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
