import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

const AccordionItem = ({ question, answer, index, isOpen, onToggle }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-neutral03 shadow-md">
      <h3>
        <button
          type="button"
          className={`flex justify-between items-center w-full text-lg font-medium text-left focus:outline-none p-3 rounded-lg transition-colors ${
            isOpen ? "bg-gray-100 text-black" : "bg-white text-gray-neutral06"
          }`}
          onClick={() => onToggle(index)} // Trigger the toggle function
        >
          {/* Container untuk icon dan teks */}
          <div className="flex items-center gap-x-3">
            <BsQuestionCircleFill
              className={`w-6 h-6 flex-shrink-0 transition-colors ${
                isOpen ? "text-black" : "text-gray-500"
              }`}
            />
            <span>{question}</span>
          </div>
          {/* Icon panah */}
          <svg
            className={`w-3 h-3 transform transition-transform flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
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
        </button>
      </h3>
      <div
        className={`mt-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="text-black bg-white p-3 rounded-lg">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
