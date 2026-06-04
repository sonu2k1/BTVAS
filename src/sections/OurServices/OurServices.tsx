"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { services, type Service } from "@/data/services";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
  ariaHidden?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, ariaHidden }) => {
  const isComingSoon = service.comingSoon === true;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInCenter, setIsInCenter] = useState(false);
  const hasMultipleImages = service.images && service.images.length > 0;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMultipleImages) return;

    const checkPosition = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const viewportCenter = window.innerWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      // Check if card center is close to viewport center
      const threshold = rect.width ? rect.width / 2 + 15 : 220;
      setIsInCenter(distance < threshold);
    };

    checkPosition();
    const intervalId = setInterval(checkPosition, 200);

    return () => clearInterval(intervalId);
  }, [hasMultipleImages]);

  useEffect(() => {
    if (!hasMultipleImages) return;

    if (!isInCenter) {
      setCurrentImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.images!.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isInCenter, service.images]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isComingSoon) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(service);
    }
  };

  const isInteractive = !ariaHidden && !isComingSoon;

  return (
    <div
      ref={cardRef}
      className="services-marquee-item"
      aria-hidden={ariaHidden || undefined}
      style={ariaHidden ? { pointerEvents: "none" } : undefined}
    >
      <button
        type="button"
        disabled={!isInteractive}
        tabIndex={isInteractive ? 0 : -1}
        aria-label={
          isComingSoon
            ? `${service.title} — coming soon`
            : `Learn more about ${service.title}`
        }
        onClick={() => isInteractive && onSelect(service)}
        onKeyDown={handleKeyDown}
        className={`flex flex-col items-center bg-transparent services-card relative overflow-visible border-0 p-0 text-left${isComingSoon ? " services-card--coming-soon" : ""}`}
        style={{
          width: "410px",
          height: "474px",
          boxSizing: "border-box",
          filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.06))",
        }}
      >
        <div
          className="flex flex-col items-center bg-white w-full border-t border-l border-r border-[#E2E8F0] services-card-body"
          style={{
            height: "434px",
            borderRadius: "20px 20px 0 0",
            padding: "18px 18px 0px 18px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="services-card-img-wrap relative"
            style={{
              width: "374px",
              height: "238px",
              borderRadius: "14px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {hasMultipleImages ? (
              service.images!.map((imgSrc, idx) => (
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: idx === 0 ? 1 : 0 }}
                  animate={{ opacity: currentImageIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: currentImageIndex === idx ? 1 : 0,
                  }}
                >
                  <Image
                    src={imgSrc}
                    alt={service.alt}
                    width={374}
                    height={238}
                    className="w-full h-full object-cover object-center"
                    style={{
                      width: "100%",
                      height: "100%",
                      ...(isComingSoon ? { filter: "grayscale(0.35) brightness(0.92)" } : {}),
                    }}
                    priority={idx === 0}
                  />
                </motion.div>
              ))
            ) : (
              <Image
                src={service.image}
                alt={service.alt}
                width={374}
                height={238}
                className="w-full h-full object-cover object-center"
                style={{
                  width: "100%",
                  height: "100%",
                  ...(isComingSoon ? { filter: "grayscale(0.35) brightness(0.92)" } : {}),
                }}
              />
            )}
            {isComingSoon && (
              <span className="services-coming-soon-badge" aria-hidden>
                Coming Soon
              </span>
            )}
          </div>

          <h3
            className="text-center"
            style={{
              fontFamily: "'Mochiy Pop One', sans-serif",
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: "27.3px",
              marginTop: "20px",
              marginBottom: "12px",
              width: "187px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: service.titleColor1 }}>
              {service.title.split(" ")[0]}{" "}
            </span>
            <span style={{ color: service.titleColor2 }}>
              {service.title.split(" ").slice(1).join(" ")}
            </span>
          </h3>

          <p
            className="text-center"
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#666666",
              width: "310px",
              height: "76px",
              margin: 0,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {service.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[40px] flex w-full select-none pointer-events-none services-card-scoop">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path d="M 0 0 C 0 15, 8 30, 24 40 L 40 40 L 40 0 Z" fill="#ffffff" />
            <path
              d="M 0 0 C 0 15, 8 30, 24 40 L 40 40"
              stroke="#E2E8F0"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <div className="grow bg-white h-[40px]" style={{ borderBottom: "1.2px solid #E2E8F0" }} />
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path d="M 40 0 C 40 15, 32 30, 16 40 L 0 40 L 0 0 Z" fill="#ffffff" />
            <path
              d="M 40 0 C 40 15, 32 30, 16 40 L 0 40"
              stroke="#E2E8F0"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export const OurServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: Service) => {
    if (service.comingSoon) return;
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    window.setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section
      className="bg-white flex flex-col items-center justify-start overflow-hidden relative services-section site-section-root"
      style={{ width: "100%", maxWidth: "1440px", height: "540px", margin: "0 auto", boxSizing: "border-box" }}
      id="services"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Prompt&display=swap');

        .services-card {
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
          appearance: none;
          -webkit-appearance: none;
        }
        .services-card:disabled {
          cursor: default;
        }
        .services-card--coming-soon {
          cursor: default;
        }
        .services-card--coming-soon:hover {
          transform: none;
          filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.06));
        }
        .services-card--coming-soon:hover .services-card-img-wrap img {
          transform: none !important;
        }
        .services-coming-soon-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #753DBE 0%, #FF4880 100%);
          color: #fff;
          font-family: 'Prompt', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(117, 61, 190, 0.35);
          z-index: 2;
        }
        .services-card:hover {
          transform: translateY(-10px) scale(1.02);
          filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.10));
        }
        .services-card:focus-visible {
          outline: 3px solid #753DBE;
          outline-offset: 4px;
          border-radius: 20px;
        }
        .services-card-img-wrap img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .services-card:hover .services-card-img-wrap img {
          transform: scale(1.06) !important;
        }

        .services-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }

        .services-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: services-marquee-scroll 50s linear infinite;
        }

        .services-marquee-container:hover .services-marquee-track {
          animation-play-state: paused;
        }

        .services-marquee-item {
          flex-shrink: 0;
          margin-right: 28px;
        }

        .services-marquee-item[aria-hidden="true"] {
          pointer-events: none;
          user-select: none;
        }

        @keyframes services-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .services-section {
            height: auto !important;
            padding: 32px clamp(16px, 3vw, 40px) 40px !important;
          }
          .services-card {
            width: min(360px, 88vw) !important;
            max-width: 360px !important;
          }
          .services-card-body {
            width: 100% !important;
          }
          .services-card-img-wrap {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 1024px) {
          .services-section {
            width: 100% !important;
            height: auto !important;
            padding: 40px 0 48px !important;
          }
          .services-container {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
          }
          .services-marquee-item {
            margin-right: 16px;
          }
          .services-card {
            width: 300px !important;
            max-width: 300px !important;
            height: auto !important;
            overflow: hidden !important;
            border-radius: 20px !important;
          }
          .services-card-body {
            height: auto !important;
            min-height: 380px !important;
            padding: 16px 16px 20px 16px !important;
            border-radius: 20px !important;
            border-bottom: 1px solid #E2E8F0 !important;
          }
          .services-card-scoop {
            display: none !important;
          }
          .services-card-img-wrap {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 1.57 !important;
          }
          .services-card-body p,
          .services-card-body h3 {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            white-space: normal !important;
          }
          .services-marquee-track {
            animation-duration: 40s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            gap: 24px;
            padding: 0 16px;
            box-sizing: border-box;
          }
          .services-marquee-container {
            overflow: visible;
          }
          .services-marquee-item[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>

      <div className="flex flex-col items-center" style={{ marginBottom: "30px", padding: "0 16px" }}>
        <h2
          style={{
            fontFamily: "'Mochiy Pop One', sans-serif",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "#FF4880",
              textUnderlineOffset: "8px",
              textDecorationThickness: "4px",
            }}
          >
            Beyond
          </span>{" "}
          <span style={{ color: "#FF4880" }}>Just Care</span>
        </h2>
      </div>

      <div className="relative services-container" style={{ width: "100%", minHeight: "474px" }}>
        <div className="services-marquee-container">
          <div className="services-marquee-track">
            {services.map((service) => (
              <ServiceCard
                key={`service-1-${service.title}`}
                service={service}
                onSelect={openServiceModal}
              />
            ))}
            {services.map((service) => (
              <ServiceCard
                key={`service-2-${service.title}`}
                service={service}
                onSelect={openServiceModal}
                ariaHidden
              />
            ))}
          </div>
        </div>
      </div>



      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={closeServiceModal}
        service={selectedService}
      />
    </section>
  );
};
