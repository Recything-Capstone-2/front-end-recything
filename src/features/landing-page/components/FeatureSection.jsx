import React from "react";
import features from "../constant/featuresData";

const FeatureSection = () => {
  return (
    <section id="features" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-20 ">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Fitur Unggulan Aplikasi
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-primary-05 border border-gray-200 rounded-lg shadow-md md:flex-row transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={feature.img}
                alt={feature.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-base font-bold tracking-tight text-white-feature">
                  {feature.title}
                </h5>
                <p className="mb-3 text-xs font-normal text-white-feature">
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
