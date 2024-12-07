import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/logo-greenly.png";
import { FaBell } from "react-icons/fa";
import { MdOutlineWbSunny, MdNightlightRound } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useUser from "../../store/userStore.js";
import Button from "../ui/Button.jsx";
import useLogout from "../../features/auth/hooks/useLogout.jsx";

const MenuBeforeLogin = [
  { name: "Beranda", path: "#home" },
  { name: "Fitur", path: "#features" },
  { name: "Tentang Kami", path: "#about" },
  { name: "Testimoni", path: "#testimonials" },
  { name: "Kontak", path: "#contact" },
];

const MenuAfterLogin = [
  { name: "Beranda", path: "/beranda-user" },
  { name: "Pelaporan", path: "/report" },
  { name: "Edukasi", path: "/education" },
  { name: "Faq", path: "/faq" },
  { name: "Tentang", path: "/tentang" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDownBellOpen, setIsDropDownBellOpen] = useState(false);

  const { user } = useUser();
  const { handleLogout } = useLogout();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleDropDownBell = () => {
    setIsDropDownBellOpen((prev) => !prev);
  };
  // Toggle Dark Mode
  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark mode class to <html>
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme); // Save theme preference
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle dark class
  };

  return (
    <nav className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-700 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Greenly Logo" className="" />
        </a>

        {/* User Menu & Mobile Menu Button */}
        <div className="dark:bg-gray-700 dark:text-white flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative md:gap-3 gap-0">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex text-sm rounded-full focus:ring-2 focus:ring-gray-300"
          >
            {isDarkMode ? (
              <MdNightlightRound size={24} className="text-yellow-400" />
            ) : (
              <MdOutlineWbSunny size={24} className="text-secondary-04" />
            )}
          </button>

          {user && (
            <button
              type="button"
              className="flex text-sm rounded-full focus:ring-2 focus:ring-gray-300 relative"
              onClick={toggleDropDownBell}
            >
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                1
              </span>
              <FaBell size={24} className="text-secondary-04" />
            </button>
          )}

          {isDropDownBellOpen && (
            <div className="z-50 absolute top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                  Notifications
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
          )}

          {user && (
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
              // onClick={toggleDropdown}
              onClick={() => {
                if (user.role === "admin") {
                  navigate("/dashboard-admin");
                }
                navigate("/profile");
              }}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={
                  user?.photo ||
                  "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                }
                alt="user photo"
              />
            </button>
          )}

          <div className="mx-3 border-l border-gray-300 h-6"></div>

          {user ? (
            <button
              className="md:block hidden text-sm font-medium px-2 py-2 rounded focus:ring-4 text-red-eror hover:text-red-400"
              onClick={handleLogout}
            >
              Keluar
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-primary-05 md:block hidden"
              >
                Masuk
              </Link>
              <Link to="/register">
                <Button variant="primary">Daftar</Button>
              </Link>
            </>
          )}

          {/* {isDropdownOpen && (
            <div className="z-50 absolute top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">Bonnie Green</span>
                <span className="block text-sm text-gray-500 truncate">name@flowbite.com</span>
              </div>
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )} */}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 dark:text-white">
            {(!user || user?.role === "admin") &&
              MenuBeforeLogin.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-05 md:p-0 dark:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            {user?.role === "user" &&
              MenuAfterLogin.map((item, index) => (
                <li key={index}>
                  <MenuActive label={item.name} href={item.path} />
                </li>
              ))}

            {user && (
              <li className="md:hidden">
                <button
                  className="w-full text-sm font-medium px-3 py-2 rounded focus:ring-4 text-white bg-red-700"
                  onClick={handleLogout}
                >
                  Keluar
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const MenuActive = ({ label, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-700 md:hover:bg-transparent md:border-0 md:p-0 ${
          isActive
            ? "md:text-primary-05 md:bg-transparent bg-primary-05 dark:text-primary-05 text-white dark:bg-gray-700"
            : "md:hover:text-primary-05 dark:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
};
