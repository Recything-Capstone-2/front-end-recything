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
    <section className="bg-white py-20 px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Tim Pengembang
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Tim kami mengembangkan solusi teknologi untuk mendukung keberlanjutan
          dan inovasi ramah lingkungan.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCards.map((data, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                className="rounded-lg w-64 h-48 mx-auto mb-4"
                src={data.image}
                alt={data.name}
              />
              <h5 className="text-xl font-bold text-gray-900 mb-2">
                {data.name}
              </h5>
              <p className="text-sm text-primary-05 font-normal mb-4">
                {data.job}
              </p>
              <p className="text-gray-700">{data.comment}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="w-8 h-8 flex justify-center items-center rounded-full border bg-white shadow-md text-gray-500 hover:text-white hover:bg-gray-800"
            onClick={handlePrev}
          >
            ❮
          </button>
          <button
            className="w-8 h-8 flex justify-center items-center rounded-full border bg-white shadow-md text-gray-500 hover:text-white hover:bg-gray-800"
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
                  ? "bg-gray-800"
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
