import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import WhyGreenlySection from "./WhyGreenlySection";
import AboutUsSection from "./AboutUsSection";
import TestimonialsSection from "./TestimonialsSection";

const LandingPage = () => {
  return (
    <main className="max-w-[1440px]">
      {/* Hero */}
      <HeroSection />

      {/* Feature */}
      <FeatureSection />

      {/* Why Choose Greenly */}
      <WhyGreenlySection />

      {/* About Us */}
      <AboutUsSection />

      {/* Testimonials */}
      <TestimonialsSection />
    </main>
  );
};

export default LandingPage;
