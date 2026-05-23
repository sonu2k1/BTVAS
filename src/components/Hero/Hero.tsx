"use client";

import React from "react";
import Image from "next/image";
import { HeroCard } from "./HeroCard";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center overflow-hidden rounded-[1rem] md:rounded-[1.25rem] -top-[57px] mt-0 min-h-[520px] md:min-h-[700px] lg:min-h-[900px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.webp"
          alt="Children in superhero costumes smiling"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/20 via-black/5 to-transparent" />

      {/* Content — bottom-left on desktop, centered with padding on mobile */}
      <div className="absolute z-[2] top-6 left-4 right-4 sm:top-16 sm:left-6 sm:right-auto md:top-26 md:left-10 md:right-auto">
        <HeroCard />
      </div>
    </section>
  );
};