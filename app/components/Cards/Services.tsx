import React from "react";
import CardComponent from "./Card";

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    features: [
      "Responsive & Mobile-Friendly Websites",
      "SEO-Optimized Pages",
      "High Performance & Fast Loading",
      "Clean & Modern UI/UX Design",
      "Secure & Scalable Architecture",
      "Custom Web Applications",
    ],
    image: "/1.png",
  },
  {
    id: 2,
    title: "App Development",
    features: [
      "Android & iOS Apps",
      "Cross-Platform Solutions",
      "Intuitive UI/UX",
      "Fast & Smooth Performance",
      "Push Notifications Integration",
      "App Store Deployment Support",
    ],
    image: "/2.png",
  },
  {
    id: 3,
    title: "SEO",
    features: [
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Technical SEO Improvements",
      "Backlink Analysis & Building",
      "Local SEO for Businesses",
      "Analytics & Performance Tracking",
    ],
    image: "/3.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    features: [
      "Logo & Brand Identity Design",
      "Social Media Graphics",
      "Flyers & Brochures",
      "Illustrations & Infographics",
      "UI Elements for Web & Apps",
      "Creative Concept Design",
    ],
    image: "/3.png",
  },
  {
    id: 5,
    title: "Marketing",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "Content Strategy",
      "PPC & Paid Ads Management",
      "Conversion Optimization",
      "Brand Awareness Campaigns",
    ],
    image: "/2.png",
  },
  {
    id: 6,
    title: "Banner Design",
    features: [
      "Website Banners",
      "Social Media Banners",
      "Event & Promotion Banners",
      "Animated Banner Support",
      "Custom Graphics",
      "High-Resolution Designs",
    ],
    image: "/1.png",
  },
];

function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-10">
      <div className="text-center mb-12">
        <p className="bg-linear-to-r from-blue-800 to-blue-500 jetbrain bg-clip-text text-sm lg:text-2xl font-extrabold text-transparent">
          Services
        </p>
        <p className="bg-linear-to-r from-blue-800 to-[#0DABF5] bg-clip-text text-xl lg:text-5xl font-extrabold text-transparent">
          Build Smart, Perform Better.
        </p>
        <p className="text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
          Explore our professional services designed to help your business grow.
        </p>
      </div>

      {/* Map over servicesData */}
      <div className="flex flex-wrap justify-center">
        {servicesData.map((service) => (
          <CardComponent
            key={service.id}
            title1={service.title}
            title2=""
            features={service.features.map((f) => ({ text: f }))}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
