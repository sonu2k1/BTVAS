"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HeroCard } from "./HeroCard";

const HERO_IMAGES_DESKTOP = [
  "https://ik.imagekit.io/sonu2k1/TEst/Hero-vidd.mp4?updatedAt=1780417586204",
  "https://ik.imagekit.io/sonu2k1/TEst/Services/Hero1.4.png",
  "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2854.jpg?updatedAt=1780577328321",
];

const HERO_IMAGES_MOBILE = [
  "https://ik.imagekit.io/sonu2k1/TEst/Hero-mobile1.1.png",
  "https://ik.imagekit.io/sonu2k1/TEst/Services/Hero-mobile1.2.3.png",
  "https://ik.imagekit.io/sonu2k1/TEst/Hero-mobile1.3.png",
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES_DESKTOP.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (currentIndex === 0) {
        videoRef.current.play().catch((err) => {
          console.log("Video play interrupted or blocked:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex]);

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
            min-height: auto !important;
            height: auto !important;
            aspect-ratio: 992 / 1586 !important;
          }
          .hero-content-wrapper {
            position: absolute !important;
            top: 15% !important;
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
            object-position: center center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content-wrapper {
            top: 15% !important;
            max-width: min(320px, 86vw) !important;
          }
        }

        @media (max-width: 375px) {
          .hero-content-wrapper {
            top: 15% !important;
          }
        }

        @media (max-width: 320px) {
          .hero-content-wrapper {
            top: 15% !important;
          }
        }
      `}</style>

      {/* Background Images with smooth cross-fade */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {HERO_IMAGES_DESKTOP.map((src, index) => (
          <React.Fragment key={src}>
            {/* Mobile version */}
            <Image
              src={HERO_IMAGES_MOBILE[index]}
              alt={`Hero background ${index + 1} (Mobile)`}
              fill
              priority={index === 0}
              className="block md:hidden w-full h-full object-cover hero-bg-image absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                objectFit: "cover",
                opacity: index === currentIndex ? 1 : 0,
              }}
            />
            {/* Desktop version */}
            {index === 0 ? (
              <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="hidden md:block w-full h-full object-cover hero-bg-image absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  objectFit: "cover",
                  opacity: index === currentIndex ? 1 : 0,
                }}
              />
            ) : (
              <Image
                src={src}
                alt={`Hero background ${index + 1} (Desktop)`}
                fill
                priority={index === 0}
                className="hidden md:block w-full h-full object-cover hero-bg-image absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  objectFit: "cover",
                  opacity: index === currentIndex ? 1 : 0,
                }}
              />
            )}
          </React.Fragment>
        ))}
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