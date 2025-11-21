"use client";
import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

function Marque() {
  // Image index range 59–72
  const images = Array.from({ length: 72 - 59 + 1 }, (_, i) => 59 + i);

  return (
    <div className="w-full h-60">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent>
          {images.map((index) => (
            <MarqueeItem className="h-32 w-32 mt-10" key={index}>
              <img
                alt={`Placeholder ${index}`}
                className="overflow-hidden rounded-full"
                src={`/stacks/Group ${index}.png`}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

export default Marque;
