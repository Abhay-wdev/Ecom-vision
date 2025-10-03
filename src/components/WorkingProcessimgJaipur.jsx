"use client";
import React, { useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "SEO & Marketing",
    description: "Boost your brand's visibility with expert SEO strategies.",
    image: "/images/other/seo.webp",
  },
  {
    title: "Digital Marketing",
    description: "Reach your audience across all platforms with digital campaigns.",
    image: "/images/other/digital.webp",
  },
  {
    title: "Web Development",
    description: "Custom web development for your business needs and strategy.",
    image: "/images/other/dev.webp",
  },
  {
    title: "Media Marketing",
    description: "Grow engagement through creative media planning and execution.",
    image: "/images/other/media.webp",
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with impactful, SEO-friendly content tailored to your brand voice.",
    image: "/images/other/content-writing.webp",
  },
  {
    title: "PPC Advertising",
    description: "Drive instant traffic with data-driven PPC ad campaigns.",
    image: "/images/other/ppc.webp",
  },
];

const WorkingProcessimg = () =>
{
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      {/* ✅ Large Screen - Hover Slide Cards */}
      <div className="hidden sm:flex overflow-hidden w-[95%] h-[500px] rounded-xl shadow-2xl mx-auto">
        {cards.map((card, index) =>
        {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative transition-all duration-500 ease-in-out overflow-hidden cursor-pointer h-full group ${isActive ? "flex-[4] z-10" : "flex-[1] z-0"}`}
            >
              {/* ✅ Image with fill for full coverage */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/50  bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-500 z-10 ${isActive ? "opacity-100" : "opacity-60"}`}
              >
                <h2
                  className={`text-white font-bold text-xl transition-transform duration-500 ease-in-out ${isActive ? "rotate-0 mb-2" : "-rotate-90 origin-bottom-left mb-0"}`}
                >
                  {card.title}
                </h2>
                {isActive && (
                  <p className="text-sm text-gray-200 transition-opacity duration-500">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* ✅ Small Screen - Stacked Cards */}
      <div className="flex flex-col sm:hidden space-y-4 w-[95%] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-48">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <h2 className="text-green font-bold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-200">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkingProcessimg;