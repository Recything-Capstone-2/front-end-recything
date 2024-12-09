import React from "react";
import AboutUsHeroSection from "./AboutUsHeroSection";
import SolutionSection from "./SolutionSection";
import VisionSection from "./VisionSection";
import MissionSection from "./MissionSection";
import DevelopCardSection from "./DevelopCardSection";

const AboutUsPage = () => {
  return (
    <div className="max-w-[1440px]">
      <AboutUsHeroSection />
      <SolutionSection />
      <VisionSection />
      <MissionSection />
      <DevelopCardSection />
    </div>
  );
};

export default AboutUsPage;
