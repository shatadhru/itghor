"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowDownRight, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";


function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Full screen without overflow */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg.webp"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>
      {/* Navbar - Fixed at top */}
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-8xl z-50">
        <div className="w-full h-16 flex justify-between items-center bg-white/90 backdrop-blur-md rounded-xl px-4 border border-white/20 shadow-lg">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/itghor.png"
              alt="Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <span className="hidden sm:block text-lg font-bold text-[#000944]">
              IT Ghor
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Service", "Projects", "Blogs", "News"].map(
              (item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-[#000944] font-medium transition-all duration-300 hover:scale-105"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Call Section & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Call Section */}
            <div className="hidden sm:flex items-center space-x-3 bg-[#000944]/10 rounded-full pr-4 pl-2 py-1">
              <div className="bg-[#000944] rounded-full p-2 flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-900 font-light">Call Anytime</p>
                <p className="text-sm font-bold text-[#000944]">01796262338</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#000944]"
              >
                {/* Top bar */}
                <line
                  x1="4"
                  y1="7"
                  x2="20"
                  y2="7"
                  className={`transition-all duration-300 origin-center stroke-current stroke-[2.2] ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-[5px]" // ✔ Perfect align for X
                      : ""
                  }`}
                />

                {/* Middle bar */}
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  className={`transition-all duration-300 origin-center stroke-current stroke-[2.2] ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-x-0"
                      : "opacity-100 scale-x-100"
                  }`}
                />

                {/* Bottom bar */}
                <line
                  x1="4"
                  y1="17"
                  x2="20"
                  y2="17"
                  className={`transition-all duration-300 origin-center stroke-current stroke-[2.2] ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-[5px]" // ✔ Perfect align for X
                      : ""
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`
      md:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl 
      transform transition-all duration-500 ease-out overflow-hidden
      ${
        isMobileMenuOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
      }
    `}
        >
          {/* Mobile Call Section */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-[#000944]/5 border-b border-gray-200/50">
            <div className="bg-[#000944] rounded-full p-3 flex items-center justify-center shadow-lg">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 font-thin">Call Anytime</p>
              <p className="text-lg font-bold text-[#000944]">01796262338</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-4">
            {["Home", "About", "Service", "Projects", "Blogs", "News"].map(
              (item, index) => (
                <button
                  key={item}
                  className="w-full text-left p-4 text-gray-700 hover:text-[#000944] font-medium rounded-xl hover:bg-[#000944]/5 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Footer Section */}
          <div className="p-4 border-t border-gray-200/50 bg-gradient-to-r from-[#000944]/5 to-transparent">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Ready to start your project?
              </p>
              <button className="mt-2 bg-[#000944] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div>
        {/* Hero Content */}
        <div className="relative z-10 w-full h-full flex max-md:flex-col max-md:items-center max-md:text-center px-10 max-md:px-6 pt-30 max-md:pt-40">
          <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
            <div className="w-fit h-10 jetbrain gap-6 items-center justify-center flex text-white bg-white/30 rounded-full px-2 lg:px-6 py-2 mt-10 mb-10 max-md:mt-4 max-md:mb-6 max-md:px-4 max-md:gap-4 shadow-lg backdrop-blur-md border border-white/30">
              <h1 className="max-md:text-sm">Creative. Smart. Scalable.</h1>

              <div className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-gray-200"></span>
              </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-center">
             <Fade>
               <p className="bg-linear-to-r from-white to-gray-600 bg-clip-text text-xl lg:text-7xl max-md:text-4xl font-extrabold text-transparent ...">
                We Build Brands
              </p>
               </Fade>
              <p className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-7xl max-md:text-3xl font-extralight tracking-tight max-md:tracking-normal">
                That Last Beyond Trends.
              </p>

              <div className="flex gap-6 items-center mx-2 mt-6 jetbrain text-white max-md:flex-wrap max-md:justify-center max-md:gap-3 max-md:mx-0 max-md:mt-4">
                <h1 className="max-md:text-sm">Graphics Design</h1>
                <h1 className="max-md:text-sm">Web Development</h1>
                <h1 className="max-md:text-sm">SEO Optimization</h1>
                <h1 className="max-md:text-sm max-md:hidden">
                  Social Media Marketing
                </h1>
              </div>

              <p className="max-w-3xl text-white mt-6 mx-2 max-md:max-w-full max-md:text-sm max-md:mx-0 max-md:mt-4 max-md:px-4">
                We create modern websites, impactful designs, and smart digital
                strategies helping your brand grow, engage, and stand out online
                with It Ghor Ltd.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-10 max-md:mt-6 max-md:gap-3">
                {/* Whatsapp Button */}
                <div className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-blue-950 group max-md:w-full max-md:justify-center max-md:px-3 max-md:py-3">
                  <span className="text-blue-950 font-medium group-hover:text-white ml-2 max-md:text-sm">
                    Whatsapp Now
                  </span>
                  <div className="rounded-full bg-blue-950 p-2 flex items-center transition-all duration-300 group-hover:bg-white">
                    <FaWhatsapp
                      size={20}
                      className="text-white group-hover:text-blue-950 transition-colors duration-300 max-md:w-4 max-md:h-4"
                    />
                  </div>
                </div>

                {/* Explore More Button */}
                <div className="flex items-center gap-2 text-white cursor-pointer transition-transform duration-300 hover:scale-105 max-md:text-sm">
                  Explore More
                  <GoArrowUpRight className="transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 max-md:w-4 max-md:h-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative hidden lg:block pt-20">
            <div className="absolute bottom-0 right-4 mt-20">
              <Image
                src="/model1.webp"
                alt="Model"
                width={350}
                height={350}
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
                priority
                className="z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default Hero;