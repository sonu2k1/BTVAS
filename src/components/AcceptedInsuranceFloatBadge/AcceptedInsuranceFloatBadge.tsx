"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { INSURANCE_LOGOS } from "@/constants";

const ROTATE_INTERVAL_MS = 1800;

export const AcceptedInsuranceFloatBadge: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const faqSection = document.getElementById("faq");
    const insuranceSection = document.getElementById("accepted-insurance");
    const targets = [faqSection, insuranceSection].filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setIsSectionVisible(anyVisible);
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
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
          bottom: max(16px, env(safe-area-inset-bottom, 0px));
          right: max(12px, env(safe-area-inset-right, 0px));
          z-index: 45;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          padding: 8px 10px 7px;
          width: auto;
          min-width: 96px;
          max-width: min(132px, calc(100vw - 24px));
          background: #ffffff;
          border: 2px solid rgba(255, 72, 128, 0.35);
          border-radius: 12px;
          box-shadow: 0 6px 24px rgba(1, 12, 111, 0.16), 0 2px 6px rgba(255, 72, 128, 0.1);
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          animation: insurance-badge-float 3s ease-in-out infinite;
          box-sizing: border-box;
        }

        .insurance-float-badge:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 28px rgba(1, 12, 111, 0.2), 0 4px 10px rgba(255, 72, 128, 0.18);
          background: #fffdf8;
        }

        .insurance-float-badge:active {
          transform: scale(0.98);
        }

        .insurance-float-badge-title {
          font-family: 'Nunito', sans-serif;
          font-size: 8px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #888c99;
          text-align: center;
          white-space: nowrap;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .insurance-float-badge-logo-slot {
          position: relative;
          width: 100%;
          max-width: 80px;
          height: 30px;
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
          height: 28px !important;
          max-width: 76px;
          object-fit: contain;
        }

        @media (min-width: 380px) {
          .insurance-float-badge {
            bottom: max(18px, env(safe-area-inset-bottom, 0px));
            right: max(16px, env(safe-area-inset-right, 0px));
            padding: 9px 11px 8px;
            min-width: 104px;
            max-width: 140px;
            gap: 6px;
            border-radius: 13px;
          }

          .insurance-float-badge-title {
            font-size: 9px;
          }

          .insurance-float-badge-logo-slot {
            max-width: 88px;
            height: 34px;
          }

          .insurance-float-badge-logo img {
            height: 32px !important;
            max-width: 84px;
          }
        }

        @media (min-width: 480px) {
          .insurance-float-badge {
            bottom: max(22px, env(safe-area-inset-bottom, 0px));
            right: max(20px, env(safe-area-inset-right, 0px));
            padding: 10px 12px 9px;
            min-width: 112px;
            max-width: 148px;
            gap: 7px;
            border-radius: 14px;
          }

          .insurance-float-badge-title {
            font-size: 9.5px;
          }

          .insurance-float-badge-logo-slot {
            max-width: 92px;
            height: 36px;
          }

          .insurance-float-badge-logo img {
            height: 34px !important;
            max-width: 88px;
          }
        }

        @media (min-width: 640px) {
          .insurance-float-badge {
            bottom: max(24px, env(safe-area-inset-bottom, 0px));
            right: max(24px, env(safe-area-inset-right, 0px));
            padding: 11px 13px 9px;
            min-width: 118px;
          }

          .insurance-float-badge-title {
            font-size: 10px;
          }

          .insurance-float-badge-logo-slot {
            max-width: 96px;
            height: 38px;
          }

          .insurance-float-badge-logo img {
            height: 36px !important;
            max-width: 92px;
          }
        }

        @media (min-width: 768px) {
          .insurance-float-badge {
            bottom: max(26px, env(safe-area-inset-bottom, 0px));
            right: max(28px, env(safe-area-inset-right, 0px));
            min-width: 122px;
            max-width: 156px;
            gap: 8px;
            padding: 12px 14px 10px;
          }

          .insurance-float-badge-title {
            font-size: 10px;
            letter-spacing: 0.05em;
          }

          .insurance-float-badge-logo-slot {
            max-width: 100px;
            height: 40px;
          }
        }

        @media (min-width: 1024px) {
          .insurance-float-badge {
            bottom: max(28px, env(safe-area-inset-bottom, 0px));
            right: max(32px, env(safe-area-inset-right, 0px));
            min-width: 126px;
            box-shadow: 0 8px 28px rgba(1, 12, 111, 0.18), 0 2px 8px rgba(255, 72, 128, 0.12);
          }

          .insurance-float-badge-title {
            font-size: 10px;
          }
        }

        @media (min-width: 1280px) {
          .insurance-float-badge {
            bottom: max(32px, env(safe-area-inset-bottom, 0px));
            right: max(36px, env(safe-area-inset-right, 0px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .insurance-float-badge {
            animation: none;
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
                sizes="(max-width: 380px) 76px, (max-width: 640px) 88px, 92px"
                style={logo.src.includes("bcbs") ? { width: "auto", height: "auto", transform: "scale(1.8)", transformOrigin: "center" } : { width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </a>
    </>
  );
};
