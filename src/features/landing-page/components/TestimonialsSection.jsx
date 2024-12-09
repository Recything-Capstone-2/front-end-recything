import React from "react";
import testimonials from "../constant/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-800 py-10 px-4">
      {/* Main Section */}
      <div className="text-center mb-6">
        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">
          Apa Kata Mereka?
        </h2>
        {/* Description */}
        <p className="text-gray-700 max-w-4xl mx-auto dark:text-gray-200 text-sm sm:text-base">
          Kami percaya bahwa setiap langkah kecil untuk menjaga lingkungan dapat
          memberikan dampak besar. Jangan hanya percaya kata kami, lihat apa
          yang dikatakan oleh pengguna Greenly yang telah merasakan manfaatnya!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-500 rounded-lg shadow-lg p-3 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              className="rounded-lg w-full h-32 md:h-48 object-cover mx-auto mb-2"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h5 className="text-sm md:text-xl font-bold text-gray-900 mb-1 dark:text-white">
              {testimonial.name}
            </h5>
            <p className="text-xs md:text-base text-primary-05 font-normal mb-1">
              {testimonial.job}
            </p>
            <p className="text-gray-700 text-xs md:text-base dark:text-gray-200">
              {testimonial.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
