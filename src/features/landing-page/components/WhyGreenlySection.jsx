import React from "react";
import whygreenlydata from "../constant/whyGreenlyData";

const WhyGreenlySection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-center">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 px-10">
        Kenapa Memilih Greenly?
      </h2>
      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {whygreenlydata.map((whygreenlydata, index) => (
          <div
            key={index}
            className="w-56 md:w-64 bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={whygreenlydata.image}
              alt={whygreenlydata.title}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {whygreenlydata.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              {whygreenlydata.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGreenlySection;
