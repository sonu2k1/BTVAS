"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Modal } from "../Modal";
import type { Service } from "@/data/services";

export interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const scrollToContact = () => {
  const contactEl = document.getElementById("contact");
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  service,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = service && service.images && service.images.length > 0;

  useEffect(() => {
    if (!hasMultipleImages) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.images!.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hasMultipleImages, service]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [service, isOpen]);

  const handleContactClick = () => {
    onClose();
    setTimeout(scrollToContact, 280);
  };

  if (!service) return null;

  const titleParts = service.title.split(" ");
  const titleFirst = titleParts[0];
  const titleRest = titleParts.slice(1).join(" ");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Mochiy+Pop+One&family=Prompt:wght@400;500;600;700&display=swap');

        .custom-service-modal {
          background-color: #fffdf8 !important;
          border: 2.5px solid rgba(126, 92, 179, 0.18) !important;
          border-radius: 28px !important;
          box-shadow: 0 25px 60px rgba(46, 46, 142, 0.15) !important;
        }
        .custom-service-modal > div:first-child {
          padding: 20px 24px 14px 24px !important;
          border-bottom: 2px dashed rgba(126, 92, 179, 0.15) !important;
          background-color: #fffdf8 !important;
        }
        .custom-service-modal .overflow-y-auto {
          padding: 0 24px 24px 24px !important;
        }
        .custom-service-modal button[aria-label="Close modal"] {
          color: #7e5cb3 !important;
          background-color: rgba(126, 92, 179, 0.05) !important;
          border: 1px solid rgba(126, 92, 179, 0.1) !important;
          transition: all 0.2s ease !important;
        }
        .custom-service-modal button[aria-label="Close modal"]:hover {
          background-color: #f94a8a !important;
          color: #ffffff !important;
          transform: rotate(90deg) !important;
        }
        .service-modal-cta:hover {
          background-color: #ff5f95 !important;
          top: 2px !important;
        }
        .service-modal-cta:active {
          top: 5px !important;
          background-color: #e03570 !important;
        }
      `}</style>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        className="custom-service-modal"
        title={
          <div className="flex flex-col gap-0.5 text-left">
            <span
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#753DBE",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
              }}
            >
              Our Services
            </span>
            <span
              style={{
                fontFamily: "'Mochiy Pop One', sans-serif",
                fontSize: "22px",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: service.titleColor1 }}>{titleFirst} </span>
              <span style={{ color: service.titleColor2 }}>{titleRest}</span>
            </span>
          </div>
        }
      >
        <div className="flex flex-col gap-5">
          <div
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
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
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority={idx === 0}
                  />
                </motion.div>
              ))
            ) : (
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            )}
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#753DBE",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Overview
            </h4>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "15px",
                lineHeight: "26px",
                color: "#4B5563",
                margin: 0,
              }}
            >
              {service.overview}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#753DBE",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              What We Help With
            </h4>
            <ul className="flex flex-col gap-2.5" style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(255, 72, 128, 0.12)",
                      color: "#FF4880",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginTop: "2px",
                    }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#374151",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "rgba(117, 61, 190, 0.06)",
              border: "1.5px solid rgba(117, 61, 190, 0.12)",
              borderRadius: "14px",
              padding: "14px 16px",
            }}
          >
            <h4
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#753DBE",
                marginBottom: "6px",
              }}
            >
              Who It&apos;s For
            </h4>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#4B5563",
                margin: 0,
              }}
            >
              {service.whoItsFor}
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
            style={{
              borderTop: "2px dashed rgba(126, 92, 179, 0.15)",
              paddingTop: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#64748B",
                margin: 0,
                textAlign: "center",
              }}
            >
              Have questions about {service.title}? Our intake team is here to help.
            </p>
            <div style={{ position: "relative", width: "240px", height: "45px", flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "240px",
                  height: "40px",
                  backgroundColor: "#c93360",
                  borderRadius: "22px",
                }}
              />
              <button
                type="button"
                onClick={handleContactClick}
                className="service-modal-cta"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "240px",
                  height: "40px",
                  borderRadius: "22px",
                  backgroundColor: "#FF4880",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "top 0.1s ease, background-color 0.2s ease",
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                For more details, contact us
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
