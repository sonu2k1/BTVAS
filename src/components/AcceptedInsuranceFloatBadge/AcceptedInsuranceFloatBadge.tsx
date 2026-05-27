"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { INSURANCE_LOGOS } from "@/constants";

const ROTATE_INTERVAL_MS = 1800;

export const AcceptedInsuranceFloatBadge: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const target = document.getElementById("accepted-insurance");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isSectionVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INSURANCE_LOGOS.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isSectionVisible]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("accepted-insurance");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  if (isSectionVisible) return null;

  const activeLogo = INSURANCE_LOGOS[activeIndex];

  return (
    <>
      <style>{`
        @keyframes insurance-badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .insurance-float-badge {
          position: fixed;
          bottom: 20px;
          right: 16px;
          z-index: 45;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 10px 12px 8px;
          min-width: 108px;
          background: #ffffff;
          border: 2px solid rgba(255, 72, 128, 0.35);
          border-radius: 14px;
          box-shadow: 0 8px 28px rgba(1, 12, 111, 0.18), 0 2px 8px rgba(255, 72, 128, 0.12);
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          animation: insurance-badge-float 3s ease-in-out infinite;
          max-width: calc(100vw - 32px);
        }

        .insurance-float-badge:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(1, 12, 111, 0.22), 0 4px 12px rgba(255, 72, 128, 0.2);
          background: #fffdf8;
        }

        .insurance-float-badge:active {
          transform: scale(0.98);
        }

        .insurance-float-badge-title {
          font-family: 'Nunito', sans-serif;
          font-size: 9px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #888c99;
          text-align: center;
          white-space: nowrap;
        }

        .insurance-float-badge-logo-slot {
          position: relative;
          width: 88px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insurance-float-badge-logo {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .insurance-float-badge-logo.is-active {
          opacity: 1;
        }

        .insurance-float-badge-logo img {
          width: auto !important;
          height: 32px !important;
          max-width: 84px;
          object-fit: contain;
        }

        @media (min-width: 480px) {
          .insurance-float-badge {
            bottom: 24px;
            right: 24px;
            padding: 12px 14px 10px;
            min-width: 120px;
            gap: 8px;
          }

          .insurance-float-badge-title {
            font-size: 10px;
          }

          .insurance-float-badge-logo-slot {
            width: 96px;
            height: 40px;
          }

          .insurance-float-badge-logo img {
            height: 36px !important;
            max-width: 92px;
          }
        }

        @media (min-width: 1024px) {
          .insurance-float-badge {
            bottom: 32px;
            right: 32px;
          }
        }
      `}</style>

      <a
        href="#accepted-insurance"
        onClick={handleClick}
        className="insurance-float-badge"
        aria-label={`Accepted insurance — ${activeLogo.alt}. Click to view all providers.`}
      >
        <span className="insurance-float-badge-title">Accepted Insurance</span>

        <div className="insurance-float-badge-logo-slot" aria-live="polite">
          {INSURANCE_LOGOS.map((logo, index) => (
            <div
              key={logo.src}
              className={`insurance-float-badge-logo${index === activeIndex ? " is-active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </a>
    </>
  );
};
