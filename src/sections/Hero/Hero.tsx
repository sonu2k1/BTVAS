"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroCard } from "./HeroCard";

const IMAGES = ["/images/Hero-1.png", "/images/Hero-2.png"];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 6000); // Changes image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center overflow-hidden rounded-[1rem] md:rounded-[1.25rem] -top-[57px] mt-0 min-h-[520px] md:min-h-[700px] lg:min-h-[850px] hero-section"
    >
      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 480px !important;
            border-radius: 0px !important;
            top: 0px !important;
          }
          .hero-content-wrapper {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            width: 100% !important;
            padding: 16px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            z-index: 10 !important;
          }
        }
      `}</style>

      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {IMAGES.map((src, idx) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: idx === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          >
            <Image
              src={src}
              alt={`Hero background ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/20 via-black/5 to-transparent" />

      {/* Content — bottom-left positioned */}
      <div className="absolute top-26 left-10 z-[2] hero-content-wrapper">
        <HeroCard />
      </div>
    </section>
  );
};