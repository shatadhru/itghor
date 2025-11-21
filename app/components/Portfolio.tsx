"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@heroui/button";

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "LR Food Marketplace",
      date: "2024-01-15",
      image: "/demo/lrfood.png",
      url: "https://lrfood.vercel.app/",
      description:
        "A premium food delivery platform with real-time ordering, secure payments, and seamless user experience.",
      technologies: ["Next.js", "TypeScript", "Stripe"],
      gradient: "from-blue-500 to-cyan-400",
      borderColor: "blue-500",
      techColors: [
        { bg: "bg-blue-100", text: "text-blue-700" },
        { bg: "bg-cyan-100", text: "text-cyan-700" },
        { bg: "bg-purple-100", text: "text-purple-700" },
      ],
      premium: true,
    },
    {
      id: 2,
      title: "Clipping Master",
      date: "2024-02-20",
      image: "/demo/clippingmaster.png",
      url: "https://clippingmaster.com",
      description: "Clipping Image Path order-taking website.",
      technologies: ["Wordpress", "Firebase", "AI Integration"],
      gradient: "from-cyan-500 to-blue-400",
      borderColor: "cyan-500",
      techColors: [
        { bg: "bg-cyan-100", text: "text-cyan-700" },
        { bg: "bg-green-100", text: "text-green-700" },
        { bg: "bg-orange-100", text: "text-orange-700" },
      ],
      premium: false,
    },
    {
      id: 3,
      title: "Miss. Rabeya Akter Portfolio",
      date: "2024-03-10",
      image: "/demo/rabeyaportfolio.png",
      url: "https://rabeya.itghour.com/",
      description:
        "A modern and elegant personal portfolio website with smooth animations, responsive UI, and clean design.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-400",
      borderColor: "purple-500",
      techColors: [
        { bg: "bg-purple-100", text: "text-purple-700" },
        { bg: "bg-pink-100", text: "text-pink-700" },
        { bg: "bg-yellow-100", text: "text-yellow-700" },
      ],
      premium: false,
    },
    {
      id: 3,
      title: "News Portal Websites",
      date: "2024-03-10",
      image: "/demo/newsportal.png",
      url: "https://newsportal.itghour.com/",
      description:
        "A professionally crafted personal portfolio website designed for showcasing achievements, skills, and projects .",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-400",
      borderColor: "purple-500",
      techColors: [
        { bg: "bg-purple-100", text: "text-purple-700" },
        { bg: "bg-pink-100", text: "text-pink-700" },
        { bg: "bg-yellow-100", text: "text-yellow-700" },
      ],
      premium: false,
    },
    {
      id: 3,
      title: "Alan Digital Ventures",
      date: "2024-03-10",
      image: "/demo/alandigitalventures.png",
      url: "https://alandigitalventures.com/",
      description:
        "A modern and responsive business website built to showcase digital services with a clean and professional interface.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-400",
      borderColor: "purple-500",
      techColors: [
        { bg: "bg-purple-100", text: "text-purple-700" },
        { bg: "bg-pink-100", text: "text-pink-700" },
        { bg: "bg-yellow-100", text: "text-yellow-700" },
      ],
      premium: false,
    },

    {
      id: 3,
      title: "Kivicoin Investment Website",
      date: "2024-03-10",
      image: "/demo/kivicoin.png",
      url: "https://kivicoin.com",
      description:
        "A secure and visually engaging investment platform featuring modern UI, smooth interactions, and optimized performance.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-400",
      borderColor: "purple-500",
      techColors: [
        { bg: "bg-purple-100", text: "text-purple-700" },
        { bg: "bg-pink-100", text: "text-pink-700" },
        { bg: "bg-yellow-100", text: "text-yellow-700" },
      ],
      premium: false,
    },
  ];

  return (
    <div>
      <div className="text-center mb-12 mt-10">
        <p className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-sm lg:text-2xl font-extrabold text-transparent">
          PREMIUM PORTFOLIO
        </p>
        <p className="bg-gradient-to-r from-blue-800 to-[#0DABF5] bg-clip-text text-xl lg:text-5xl font-extrabold text-transparent">
          Crafting Digital Excellence
        </p>
        <p className="text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
          Discover our premium projects that deliver exceptional results and
          drive business growth.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg relative"
          >
            {/* Premium Badge */}
            {item.premium && (
              <div className="absolute -top-3 -right-3">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  RUNNING
                </span>
              </div>
            )}

            {/* Image */}
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={350}
                height={350}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                priority
              />
            </div>

            {/* Title + Date */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-900 text-xl font-bold">{item.title}</h3>
              <span className="text-gray-500 text-sm">{item.date}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`${item.techColors[index].bg} ${item.techColors[index].text} px-3 py-1 rounded-full text-xs font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <Button
              color="primary"
              size="lg"
              radius="lg"
              className="w-full font-semibold text-white mt-4"
              onPress={() => window.open(item.url, "_blank")}
            >
              View Project
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
