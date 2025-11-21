"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function SliderNew() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/carousel/banner26.jpg", alt: "Slide 1" },
    { src: "/carousel/banner27.jpg", alt: "Slide 2" },
    { src: "/carousel/banner28.jpg", alt: "Slide 3" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-8 md:mb-16 mt-10">
        <h1 className="text-xl md:text-2xl font-bold jetbrain bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
Super Fast        </h1>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
           We Build What People Love to Use
        </h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Passionate professionals dedicated to creating exceptional experiences
        </p>
      </div>
      <div className="relative group">
        {/* Aspect Ratio Container */}
        <div className="relative w-full pb-[31.58%] overflow-hidden rounded-xl bg-gray-100">
          {/* Slides Container */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-3"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m15 19-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-3"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m9 5 7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderNew;
