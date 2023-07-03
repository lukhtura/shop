//Core
import { useState, RefObject, TouchEvent } from "react";



interface useProductPageGalleryMobileProps {
  activeSlideImgRef: RefObject<HTMLDivElement>,
  lastSlide: number
}

interface ReturningValues {
  sliderCounter: number;
  activeSlide: number;
  handleTouchStart: (event: TouchEvent) => void;
  handleTouchMove: (event: TouchEvent) => void;
  handleTouchEnd: () => void;
}



function useProductPageGalleryMobile({ activeSlideImgRef, lastSlide }: useProductPageGalleryMobileProps): ReturningValues {

  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderCounter, setSliderCounter] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  function turnSlide(direction: "next" | "prev"): void {
    if (activeSlideImgRef.current) {
      if (direction === "next" && sliderCounter < lastSlide) {
        setActiveSlide(activeSlide - activeSlideImgRef.current.offsetWidth);
        setSliderCounter(sliderCounter + 1);
      }

      if (direction === "prev" && sliderCounter > 1) {
        setActiveSlide(activeSlide + activeSlideImgRef.current.offsetWidth);
        setSliderCounter(sliderCounter - 1);
      }
    }
  }

  function handleTouchStart(event: TouchEvent): void {
    setTouchStartX(event.touches[0].clientX);
  }

  function handleTouchMove(event: TouchEvent): void {
    setTouchEndX(event.touches[0].clientX);
  }

  function handleTouchEnd(): void {
    const slideWidth: number = activeSlideImgRef.current?.offsetWidth || 0;
    const halfSlideWidth: number = slideWidth / 4;
    const deltaX = touchEndX - touchStartX;

    if (deltaX < -halfSlideWidth && sliderCounter < lastSlide && touchEndX !== 0) {
      turnSlide("next");
    }

    if (deltaX > halfSlideWidth && sliderCounter > 1 && touchEndX !== 0) {
      turnSlide("prev");
    }

    setTouchStartX(0);
    setTouchEndX(0);
  }

  return {
    sliderCounter,
    activeSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export default useProductPageGalleryMobile;

