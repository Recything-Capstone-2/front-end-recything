import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const DropdownStatus = ({ statusMapping, reportId, handleStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeDropdown);
    } else {
      document.removeEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isOpen]);

  return (
    <td className="px-6 py-4">
      <div className="relative dropdown-container">
        <button
          onClick={toggleDropdown}
          className="bg-primary-05 w-28 text-white px-4 py-2 focus:ring-primary-05 text-sm font-semibold rounded-lg inline-flex items-center"
        >
          Tanggapi
          <span className="ml-2 transform transition-transform">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>

        {isOpen && (
          <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-28 z-10">
            {Object.entries(statusMapping).map(([dbStatus, label]) => (
              <button
                key={dbStatus}
                className={`w-full text-center px-4 py-2 text-sm font-medium hover:bg-green-50 hover:rounded-lg focus:outline-none focus:bg-gray-100 ${
                  dbStatus === "process"
                    ? "text-gray-800"
                    : dbStatus === "completed"
                    ? "text-yellow-800"
                    : dbStatus === "approved"
                    ? "text-green-800"
                    : "text-red-800"
                }`}
                onClick={() => {
                  handleStatusChange(reportId, dbStatus);
                  setIsOpen(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </td>
  );
};

export default DropdownStatus;
