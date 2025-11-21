"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

type Feature = { text: string };

type CardProps = {
  image?: string;
  title1?: string;
  title2?: string;
  description?: string;
  features?: Feature[];
};

export default function CardComponent({
  image = "/1.png",
  title1 = "Web",
  title2 = "Development",
  description = "We build fast, secure, and SEO-optimized websites that grow your business.",
  features = [
    { text: "Responsive & Mobile-Friendly Design" },
    { text: "SEO Optimized Structure" },
    { text: "High Performance & Speed" },
    { text: "Clean and Modern UI" },
  ],
}: CardProps) {
  return (
    <Card
      shadow="sm"
      className="
        min-w-[300px] h-fit m-4 px-6 py-4 
        rounded-3xl
        bg-white/70 backdrop-blur-xl 
        border border-gray-200/50 
        hover:shadow-2xl hover:-translate-y-1 
        transition-all duration-300
      "
    >
      <CardBody className="flex flex-col gap-3">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={image}
            height={90}
            width={90}
            alt={title2}
            className="rounded-xl"
          />
        </div>

        {/* Titles */}
        <h1 className="text-xl font-extrabold text-[#338CF1] tracking-tight">
          {title1}
        </h1>

        <h1 className="text-lg font-bold text-black tracking-tight -mt-2">
          {title2}
        </h1>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed max-w-[280px]">
          {description}
        </p>

        {/* Features */}
        <div className="mt-1 flex flex-col gap-3">
          {features.map((f, i) => (
            <div key={i} className="flex gap-3 items-center">
              <div
                className="
                  h-6 w-6 
                  flex items-center justify-center
                  rounded-full bg-gradient-to-br 
                  from-gray-100 to-gray-300
                  shadow-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-gray-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-sm text-gray-700">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
      
      </CardBody>
    </Card>
  );
}
