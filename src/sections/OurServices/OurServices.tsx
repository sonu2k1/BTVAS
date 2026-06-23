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
  isDragging: () => boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, ariaHidden, isDragging }) => {
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const isClickable = !isComingSoon;
  const isFocusable = !ariaHidden && !isComingSoon;

  return (
    <div
      ref={cardRef}
      className="services-marquee-item"
      aria-hidden={ariaHidden || undefined}
    >
      <button
        type="button"
        disabled={!isClickable}
        tabIndex={isFocusable ? 0 : -1}
        aria-label={
          isComingSoon
            ? `${service.title} — coming soon`
            : `Learn more about ${service.title}`
        }
        onClick={(e) => {
          if (!isClickable) return;
          e.stopPropagation();
          if (isDragging()) return;
          onSelect(service);
        }}
        onKeyDown={handleKeyDown}
        className={`flex flex-col items-center bg-transparent services-card relative overflow-visible border-0 p-0 text-left${isComingSoon ? " services-card--coming-soon" : ""}`}
        style={{
          width: "410px",
          height: "440px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="flex flex-col items-center bg-white w-full border border-[#E2E8F0] services-card-body"
          style={{
            height: "100%",
            borderRadius: "24px",
            padding: "18px",
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
                    draggable={false}
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
                draggable={false}
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
              width: "100%",
              maxWidth: "340px",
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
              width: "100%",
              maxWidth: "340px",
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
      </button>
    </div>
  );
};

export const OurServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const autoScrollSpeed = 0.8; // px per frame

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isInteractingRef.current && !isDraggingRef.current) {
        container.scrollLeft += autoScrollSpeed;

        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const isDragging = () => dragDistanceRef.current > 5;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    
    isInteractingRef.current = true;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - containerRef.current!.offsetLeft;
    scrollLeftStartRef.current = containerRef.current!.scrollLeft;
    dragDistanceRef.current = 0;
    
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = null;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = x - startXRef.current;
    const distance = Math.abs(walk);
    dragDistanceRef.current = distance;
    
    if (distance > 7 && containerRef.current) {
      if (!containerRef.current.hasPointerCapture(e.pointerId)) {
        containerRef.current.setPointerCapture(e.pointerId);
        containerRef.current.style.cursor = "grabbing";
      }
    }
    
    let newScrollLeft = scrollLeftStartRef.current - walk;
    
    const halfWidth = containerRef.current!.scrollWidth / 2;
    if (halfWidth > 0) {
      if (newScrollLeft >= halfWidth) {
        newScrollLeft -= halfWidth;
        startXRef.current -= halfWidth;
      } else if (newScrollLeft <= 0) {
        newScrollLeft += halfWidth;
        startXRef.current += halfWidth;
      }
    }
    
    containerRef.current!.scrollLeft = newScrollLeft;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
        if (containerRef.current.hasPointerCapture(e.pointerId)) {
          containerRef.current.releasePointerCapture(e.pointerId);
        }
      }
      isDraggingRef.current = false;
    }
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    interactionTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      dragDistanceRef.current = 0;
    }, 1500);
  };

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
      className="bg-transparent flex flex-col items-center justify-start overflow-hidden relative services-section site-section-spacing"
      style={{
        width: "100%",
        height: "auto",
        boxSizing: "border-box",
      }}
      id="services"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Prompt&display=swap');

        .services-section {
          background: transparent !important;
          position: relative;
          z-index: 5;
          width: 100% !important;
          max-width: none !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        .services-section-heading {
          width: 100%;
          padding-left: clamp(16px, 4vw, 80px);
          padding-right: clamp(16px, 4vw, 80px);
          box-sizing: border-box;
        }

        .services-container,
        .services-marquee-container,
        .services-marquee-track {
          background: transparent !important;
        }

        .services-card {
          cursor: pointer;
          background: transparent !important;
          pointer-events: auto;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          appearance: none;
          -webkit-appearance: none;
        }

        .services-card-body {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .services-card:disabled {
          cursor: default;
        }
        .services-card--coming-soon {
          cursor: default;
        }
        .services-card--coming-soon:hover {
          transform: none;
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
        .services-card:hover .services-card-body {
          transform: translateY(-10px) scale(1.02);
        }

        .services-card:focus-visible {
          outline: 3px solid #753DBE;
          outline-offset: 4px;
          border-radius: 20px;
        }
        .services-card-img-wrap {
          background: #ffffff;
        }

        .services-card-img-wrap img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .services-card:hover .services-card-img-wrap img {
          transform: scale(1.06) !important;
        }

        .services-marquee-container {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
          display: flex;
          align-items: center;
          user-select: none;
          cursor: grab;
        }
        .services-marquee-container::-webkit-scrollbar {
          display: none;
        }

        .services-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
        }

        .services-marquee-item {
          flex-shrink: 0;
          margin-right: 28px;
        }

        .services-marquee-item[aria-hidden="true"] {
          user-select: none;
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .services-section {
            height: auto !important;
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
        }

        @media (prefers-reduced-motion: reduce) {
          .services-marquee-track {
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

      <div className="flex flex-col items-center services-section-heading" style={{ marginBottom: "30px" }}>
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
              textDecorationSkipInk: "none",
            }}
          >
            Beyond
          </span>{" "}
          <span style={{ color: "#FF4880" }}>Just Care</span>
        </h2>
      </div>

      <div className="relative services-container" style={{ width: "100%", minHeight: "440px" }}>
        <div 
          className="services-marquee-container"
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="services-marquee-track">
            {services.map((service) => (
              <ServiceCard
                key={`service-1-${service.title}`}
                service={service}
                onSelect={openServiceModal}
                isDragging={isDragging}
              />
            ))}
            {services.map((service) => (
              <ServiceCard
                key={`service-2-${service.title}`}
                service={service}
                onSelect={openServiceModal}
                ariaHidden
                isDragging={isDragging}
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
