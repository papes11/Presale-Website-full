"use client";
import React from "react";
import Image from "next/image";

interface CardWithImageProps {
  title: string;
  content: string;
  imageSrc: string; // Path to the image
  reverse?: boolean; // Whether to reverse the layout (image on the left)
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  title,
  content,
  imageSrc,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-8 px-4 py-16`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-[2rem] border-4 border-black shadow-[4px_4px_0_0_#000]"
        />
      </div>

      {/* Card */}
      <div className="w-full md:w-1/2">
        <div className="bg-[#2A2B35] rounded-[2rem] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] relative overflow-hidden">
          {/* Ghostly glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent animate-pulse" />

          {/* Content */}
          <div className="relative text-center">
            <h2
              className="text-2xl font-black text-[#E6E7FF] mt-4"
              style={{ textShadow: "2px 2px 0 #000, 0 0 15px #E6E7FF" }}
            >
              {title}
            </h2>
            <p className="text-lg font-bold text-[#E6E7FF] mt-4">{content}</p>
            <p
              className="text-xl font-black text-[#FF3A8C] animate-pulse mt-2"
              style={{ textShadow: "1px 1px 0 #000, 0 0 15px #FF3A8C" }}
            >
              Glowing Effects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;