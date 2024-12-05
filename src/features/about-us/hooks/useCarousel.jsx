import { useState } from "react";

const useCarousel = (data, visibleCards = 4) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedCards = data.slice(currentIndex, currentIndex + visibleCards);

  if (displayedCards.length < visibleCards) {
    displayedCards.push(...data.slice(0, visibleCards - displayedCards.length));
  }

  const totalDots = data.length;

  return {
    currentIndex,
    handlePrev,
    handleNext,
    displayedCards,
    totalDots,
    setCurrentIndex,
  };
};

export default useCarousel;
