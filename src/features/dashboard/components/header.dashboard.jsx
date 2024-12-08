import React, { useState } from "react";
import FormInput from "../../../components/ui/FormInput.jsx";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";

const NavbarDashboard = ( {title} ) => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDownBellOpen, setIsDropDownBellOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen((prev) => !prev);
  // };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleDropDownBell = () => {
    setIsDropDownBellOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 p-3 md:p-0">
      <div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap md:items-center justify-between mx-auto p-0 md:py-5 md:px-10 relative gap-3 md:gap-0">
        {/* Logo Section */}
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">{title}</span>
        </p>

        {/* User Menu & Mobile Menu Button */}
        {/* <div className="flex items-center"> */}
        <div className="flex items-center order-first md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative md:gap-3">
          <FormInput placeholder={"Search"} startIcon={<IoIosSearch size={20} />} />

          <button type="button" className=""><MdOutlineWbSunny size={24} /></button>

          <button type="button" className="flex text-sm rounded-full focus:ring-2 focus:ring-gray-300 relative" onClick={toggleDropDownBell}>
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">1</span>
            <FaBell size={24} className="text-secondary-04" />
          </button>

          {isDropDownBellOpen && (
            <div className="z-50 absolute top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">Notifications</span>
              </div>
              <ul className="py-2">
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
          )}

          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 md:w-10 md:h-10 rounded-full"
              src="https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
              alt="user photo"
            />
          </button>

          {/* {isDropdownOpen && (
            <div className="z-50 absolute top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">Bonnie Green</span>
                <span className="block text-sm text-gray-500 truncate">name@example.com</span>
              </div>
              <ul className="py-2">
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )} */}
        </div>
        {/* </div> */}

      </div>
    </nav>
  );
};

export default NavbarDashboard;