import React from "react";
import features from "../constant/featuresData";

const FeatureSection = () => {
  return (
    <section id="features" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-12 px-10 text-gray-900 dark:text-white">
          Fitur Unggulan Aplikasi
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-primary-05 border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Image Section (2/6) */}
              <div className="w-2/6 h-full">
                <img
                  className="w-full h-full object-cover rounded-l-lg"
                  src={feature.img}
                  alt={feature.title}
                />
              </div>
              {/* Content Section (4/6) */}
              <div className="w-4/6 p-4">
                <h5 className="text-sm font-bold tracking-tight text-white-feature mb-2">
                  {feature.title}
                </h5>
                <p className="text-xs font-normal text-white-feature">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
