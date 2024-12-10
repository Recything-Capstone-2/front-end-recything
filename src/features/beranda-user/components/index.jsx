import React from "react";
import BerandaHeroSection from "./BerandaHeroSection";
import BerandaHistoryCardSection from "./BerandaHistoryCardSection";

export default function BerandaUser() {
  return (
    <div className="bg-green-50 dark:bg-gray-800">
      <div className="max-w-[1440px] mx-auto">
        <BerandaHeroSection />
        <BerandaHistoryCardSection />
      </div>
    </div>
  );
}
