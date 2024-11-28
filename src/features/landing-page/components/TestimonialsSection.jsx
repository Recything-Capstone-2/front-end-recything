import React from "react";
import testimonials from "../constant/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      {/* Main Section */}
      <div className="text-center mb-8">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Apa Kata Mereka?
        </h2>
        {/* Description */}
        <p className="text-gray-700 max-w-4xl mx-auto">
          Kami percaya bahwa setiap langkah kecil untuk menjaga lingkungan dapat
          memberikan dampak besar. Jangan hanya percaya kata kami, lihat apa
          yang dikatakan oleh pengguna Greenly yang telah merasakan manfaatnya!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              className="rounded-lg w-64 h-48 mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              {testimonial.name}
            </h5>
            <p className="text-sm text-primary-05 font-normal mb-4">
              {testimonial.job}
            </p>
            <p className="text-gray-700">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
