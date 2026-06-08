"use client";

import React from "react";
import Image from "next/image";
import { HeroCard } from "./HeroCard";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center overflow-hidden rounded-[1rem] md:rounded-[1.25rem] -top-[57px] mt-0 min-h-[520px] md:min-h-[700px] lg:min-h-[850px] hero-section"
    >
      <style>{`
        .hero-bg-image {
          object-position: center center !important;
        }

        @media (min-width: 768px) {
          .hero-content-wrapper {
            left: 54.5% !important;
            transform: translateX(-50%) !important;
            top: 80px !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            min-height: 480px !important;
          }
          .hero-content-wrapper {
            position: absolute !important;
            top: 115px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 100% !important;
            max-width: min(340px, 88vw) !important;
            padding: 0 !important;
            z-index: 10 !important;
            display: flex !important;
            justify-content: center !important;
          }
          .hero-bg-image {
            object-position: 50% 28% !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 420px !important;
          }
          .hero-content-wrapper {
            top: 95px !important;
            max-width: min(320px, 86vw) !important;
          }
        }

        @media (max-width: 375px) {
          .hero-section {
            min-height: 380px !important;
          }
          .hero-content-wrapper {
            top: 85px !important;
          }
        }

        @media (max-width: 320px) {
          .hero-section {
            min-height: 340px !important;
          }
          .hero-content-wrapper {
            top: 75px !important;
          }
        }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <Image
          src="https://ik.imagekit.io/sonu2k1/TEst/Hero-1.png"
          alt="Hero background"
          fill
          priority
          className="w-full h-full object-cover hero-bg-image"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/20 via-black/5 to-transparent" />

      {/* Content — centered */}
      <div className="absolute top-26 left-4 md:left-8 lg:left-10 z-[2] hero-content-wrapper w-full max-w-[580px] px-4 md:px-0 box-border">
        <HeroCard />
      </div>
    </section>
  );
};