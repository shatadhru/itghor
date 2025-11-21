"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Rabeya akter",
      role: "Web Developer and Consultant",
      image: "/rabeya.jpg",
    },
    {
      id: 2,
      name: "Qayum Patwary",
      role: "Account Officer",
      image: "/qayum.jpeg",
    },
    {
      id: 3,
      name: "Shatadhru",
      role: "Web Developer and Consultant",
      image: "/shatadhru.png",
    },
    {
      id: 4,
      name: "Amith Chowdhury",
      role: ".NET, Laravel & PHP Developer",
      image: "/amit.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Passionate professionals dedicated to creating exceptional
            experiences
          </p>
        </div>

        {/* Team Members - Mobile Layout (All Open) */}
        {isMobile ? (
          <div className="flex flex-col items-center gap-6 md:hidden">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative w-full max-w-md h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
              >
                <Image
                  alt={member.name}
                  src={member.image}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-200 mb-4">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                      <button
                        key={social}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-colors"
                      >
                        {social}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Team Members - Desktop Layout */
          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative h-[480px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "w-80 scale-105 shadow-blue-200/50"
                      : "w-32 opacity-90 hover:opacity-100"
                  }`}
                >
                  <Image
                    alt={member.name}
                    src={member.image}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${
                      activeIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-200 font-medium">{member.role}</p>
                    <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                        <button
                          key={social}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-colors"
                        >
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  );
}

export default Team;
