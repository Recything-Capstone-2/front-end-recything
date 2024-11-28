import React from "react";
import Header from "../../../components/share/Header";
import Footer from "../../../components/share/Footer";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import WhyGreenlySection from "./WhyGreenlySection";
import AboutUsSection from "./AboutUsSection";
import TestimonialsSection from "./TestimonialsSection";

const LandingPage = () => {
  return (
    <main>
      {/* Header */}
      <Header />

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

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default LandingPage;
