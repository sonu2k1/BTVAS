"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { siteNavLinks } from "@/data/navigation";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform 0.25s ease",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      flexShrink: 0,
    }}
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isScrollingRef.current) return;

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;

      if (isBottom) {
        const bottomIds = ["contact", "faq", "career", "getting-started"];
        for (const id of bottomIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
              setActiveSection(id);
              return;
            }
          }
        }
      }

      const sections = siteNavLinks.map((l) => l.href.replace("#", ""));
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnScroll = () => setMobileOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [mobileOpen]);

  const activeLabel =
    siteNavLinks.find((link) => link.href.replace("#", "") === activeSection)?.label ?? "Home";

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.replace("#", "");

      // Immediately highlight the clicked nav item
      setActiveSection(id);

      // Disable scroll spy updating active section during smooth scrolling transition
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <header className="mx-auto w-full max-w-[1432px] flex justify-center px-4">
      <style>{`
        .custom-navbar {
          width: 100%;
          max-width: 1400px;
          height: 140px;
          background: #ffffff;
          border-radius: 20px;
          border: 2px solid #2e2e8e22;
          box-shadow: 0 4px 24px rgba(46, 46, 142, 0.10);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          flex-shrink: 0;
          transition: all 0.3s ease;
          margin: 0 auto;
        }

        .custom-navbar.scrolled {
          height: 96px;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        /* LOGO */
        .logo-area {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 260px;
        }

        .logo-img {
          height: 135px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .custom-navbar.scrolled .logo-img {
          height: 80px;
        }

        /* NAV LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
        }

        .nav-links li a {
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          font-weight: 800;
          text-transform: uppercase;
          text-decoration: none;
          color: #7b2d8b;
          padding: 10px 20px;
          border-radius: 16px;
          transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s ease, color 0.2s ease;
          white-space: nowrap;
          display: inline-block;
        }

        .nav-links li a:hover {
          background: #753DBE;
          color: #ffffff;
          transform: scale(1.05);
        }

        .nav-links li a:active {
          transform: scale(0.96);
        }

        .nav-links li a.active {
          background: #FF4880;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 16px;
        }

        .nav-links li a.active:hover {
          background: #e03570;
          transform: scale(1.05);
        }

        /* CTA BUTTON — 3D drop shadow style */
        .cta-btn-wrapper {
          position: relative;
          display: inline-block;
          width: 198px;
          height: 50px;
          flex-shrink: 0;
        }

        .cta-btn-shadow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 198px;
          height: 42px;
          background: #c93360;
          border-radius: 21px;
        }

        .cta-btn {
          position: absolute;
          top: 0;
          left: 0;
          width: 198px;
          height: 42px;
          background: #FF4880;
          color: #ffffff;
          font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
          font-size: 18px;
          font-weight: 700;
          border: none;
          border-radius: 21px;
          cursor: pointer;
          white-space: nowrap;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.2px;
          transition: top 0.1s ease, background-color 0.2s ease;
        }

        .cta-btn:hover {
          background-color: #ff5f95;
          top: 2px;
        }

        .cta-btn:active {
          top: 8px;
          background-color: #e03570;
        }

        .mobile-nav-trigger {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 16px;
          border: none;
          background: #FF4880;
          color: #ffffff;
          font-family: 'Nunito', sans-serif;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          max-width: min(52vw, 220px);
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .mobile-nav-trigger:hover {
          background: #e03570;
        }

        .mobile-nav-trigger:active {
          transform: scale(0.97);
        }

        .mobile-nav-trigger-label {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mobile-nav-panel {
          width: 100%;
          background-color: #ffffff;
          border-radius: 20px;
          border: 2px solid #2e2e8e18;
          box-shadow: 0 8px 30px rgba(46, 46, 142, 0.12);
          margin-top: 12px;
          box-sizing: border-box;
          overflow: hidden;
          z-index: 99;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 20px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (max-width: 1024px) {
          .nav-links, .cta-btn-wrapper {
            display: none !important;
          }
          .mobile-nav-trigger {
            display: inline-flex;
          }
          .custom-navbar {
            padding: 0 16px;
            height: 100px;
          }
          .logo-area {
            min-width: 0;
            flex: 1 1 auto;
          }
          .logo-img {
            height: 80px;
          }
        }
      `}</style>

      <div className="w-full flex flex-col items-center">
        <nav className={`custom-navbar mx-auto w-full ${scrolled ? 'scrolled' : ''}`}>
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="logo-area"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Image
              src="https://ik.imagekit.io/sonu2k1/TEst/Logos/logo.webp"
              alt="Beyond the View Autism Services"
              width={260}
              height={114}
              className="logo-img"
              style={{ width: "auto" }}
              priority
            />
          </a>

          {/* NAV LINKS */}
          <ul className="nav-links">
            {siteNavLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={isActive ? "active" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA — 3D button */}
          <div className="cta-btn-wrapper hidden lg:block">
            <div className="cta-btn-shadow" />
            <a
              href="#getting-started"
              onClick={(e) => handleNavClick(e, "#getting-started")}
              className="cta-btn"
            >
              Getting Started
            </a>
          </div>

          <button
            type="button"
            className="mobile-nav-trigger lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={`Current section: ${activeLabel}. Tap to ${mobileOpen ? "close" : "open"} menu`}
          >
            <span className="mobile-nav-trigger-label">{activeLabel}</span>
            <ChevronIcon open={mobileOpen} />
          </button>
        </nav>

        {/* Mobile menu — expands on tap */}
        {mobileOpen && (
          <div id="mobile-nav-panel" className="mobile-nav-panel lg:hidden">
            <ul className="mobile-nav-list">
              {siteNavLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        display: "block",
                        padding: "12px 24px",
                        borderRadius: "16px",
                        fontWeight: 800,
                        fontSize: "16px",
                        fontFamily: "'Nunito', sans-serif",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        backgroundColor: isActive ? "#FF4880" : "transparent",
                        color: isActive ? "#ffffff" : "#7b2d8b",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                <div 
                  className="cta-btn-wrapper"
                  style={{
                    position: "relative",
                    width: "198px",
                    height: "50px",
                    display: "block",
                  }}
                >
                  <div 
                    className="cta-btn-shadow"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "198px",
                      height: "42px",
                      backgroundColor: "#c93360",
                      borderRadius: "21px",
                    }}
                  />
                  <a
                    href="#getting-started"
                    onClick={(e) => handleNavClick(e, "#getting-started")}
                    className="cta-btn"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "198px",
                      height: "42px",
                      backgroundColor: "#FF4880",
                      color: "#ffffff",
                      fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                      fontSize: "18px",
                      fontWeight: 700,
                      border: "none",
                      borderRadius: "21px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      letterSpacing: "0.2px",
                      transition: "top 0.1s ease, background-color 0.2s ease",
                    }}
                  >
                    Getting Started
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};