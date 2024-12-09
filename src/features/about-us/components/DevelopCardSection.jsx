import React from "react";
import useCarousel from "../hooks/useCarousel";
import developdata from "../constant/developData.js";

const DevelopCardSection = () => {
  const {
    currentIndex,
    handlePrev,
    handleNext,
    displayedCards,
    totalDots,
    setCurrentIndex,
  } = useCarousel(developdata);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Tim Pengembang
        </h2>
        <p className="text-gray-700 dark:text-gray-200 max-w-4xl mx-auto">
          Tim kami mengembangkan solusi teknologi untuk mendukung keberlanjutan
          dan inovasi ramah lingkungan.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-6">
          {displayedCards.map((data, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-500 rounded-lg shadow-lg p-3 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                className="rounded-lg w-full h-32 md:h-48 object-cover mx-auto mb-2"
                src={data.image}
                alt={data.name}
              />
              <h5 className="text-sm md:text-xl font-bold text-gray-900 mb-1 dark:text-white">
                {data.name}
              </h5>
              <p className="text-xs md:text-base text-primary-05 font-normal mb-1">
                {data.job}
              </p>
              <p className="text-gray-700 text-xs md:text-base dark:text-gray-200">
                {data.comment}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="w-8 h-8 flex justify-center items-center rounded-full border bg-white shadow-md dark:border-gray-800 text-gray-500 hover:text-white hover:bg-gray-800 dark:hover:bg-black"
            onClick={handlePrev}
          >
            ❮
          </button>
          <button
            className="w-8 h-8 flex justify-center items-center rounded-full border bg-white shadow-md dark:border-gray-800 text-gray-500 hover:text-white hover:bg-gray-800 dark:hover:bg-black"
            onClick={handleNext}
          >
            ❯
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center mt-4">
          {Array.from({ length: totalDots }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                pageIndex === Math.floor(currentIndex)
                  ? "bg-gray-800 dark:bg-black"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(pageIndex)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopCardSection;
