import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";
import { useFilter } from "../context/FilterContext";

const NavbarDashboard = ({ title, onSortChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const { filter, changeFilter } = useFilter();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const pathsToShowSortButton = [
    "/dashboard/report/all",
    "/dashboard/report/approve",
    "/dashboard/report/process",
    "/dashboard/report/done",
    "/dashboard/report/reject",
  ];
  const showSortButton = pathsToShowSortButton.includes(location.pathname);

  return (
    <nav className="bg-white border-gray-200 p-3 md:p-0">
      <div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap md:items-center justify-between mx-auto p-0 md:py-5 md:px-10 relative gap-3 md:gap-0">
        {/* Logo Section */}
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            {title}
          </span>
        </p>

        {/* User Menu & Mobile Menu Button */}
        <div className="flex items-center justify-end w-full md:w-auto order-first md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative md:gap-3">
          {showSortButton && (
            <div className="relative">
              <button
                className="px-4 py-2 bg-white text-black rounded-lg border-2 border-gray-300"
                onClick={toggleDropdown}
              >
                <div className="flex items-center gap-4">
                  <LuSettings2 className="flex-none" />
                  <span className="flex-1">Filter</span>
                  <svg
                    className={`w-3 h-3 transform transition-transform flex-shrink-0 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-lg shadow">
                  <button
                    onClick={() => changeFilter("desc")}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                      filter === "desc" ? "font-semibold" : ""
                    }`}
                  >
                    Terbaru ke Terlama
                  </button>
                  <button
                    onClick={() => changeFilter("asc")}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                      filter === "asc" ? "font-semibold" : ""
                    }`}
                  >
                    Terlama ke Terbaru
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 md:w-10 md:h-10 rounded-full"
              src="https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
