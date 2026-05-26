"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Career", href: "#team" },
  { label: "Resources", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const MenuIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => l.href.replace("#", ""));
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.replace("#", "");
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
    <header className="mx-auto w-full max-w-[1400px] flex justify-center px-4 md:px-0">
      <style>{`
        .custom-navbar {
          width: 100%;
          max-width: 1400px;
          height: 124.84px;
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
          height: 90px;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        /* LOGO */
        .logo-area {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 180px;
        }

        .logo-img {
          height: 80px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .custom-navbar.scrolled .logo-img {
          height: 60px;
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
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          color: #7b2d8b;
          padding: 10px 18px;
          border-radius: 30px;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .nav-links li a:hover {
          background: #753DBE;
          color: #ffffff;
        }

        .nav-links li a.active {
          background: #FF4880;
          color: #ffffff;
          padding: 10px 22px;
        }

        .nav-links li a.active:hover {
          background: #e03570;
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

        @media (max-width: 1024px) {
          .nav-links, .cta-btn-wrapper {
            display: none !important;
          }
          .custom-navbar {
            padding: 0 16px;
            height: 90px;
          }
          .logo-img {
            height: 60px;
          }
        }
      `}</style>

      <div className="w-full flex flex-col items-center">
        <nav className={`custom-navbar mx-auto w-full ${scrolled ? 'scrolled' : ''}`}>
          {/* LOGO */}
          <div className="logo-area">
            <Image
              src="/logo.png"
              alt="Beyond the View Autism Services"
              width={180}
              height={80}
              className="logo-img"
              style={{ width: "auto" }}
              priority
            />
          </div>

          {/* NAV LINKS */}
          <ul className="nav-links">
            {links.map((link) => {
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
              href="#team"
              onClick={(e) => handleNavClick(e, "#team")}
              className="cta-btn"
            >
              Join Our Team
            </a>
          </div>

          <button
            className="lg:hidden text-[#2e2e8e] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div 
            className="lg:hidden"
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              border: "2px solid #2e2e8e18",
              boxShadow: "0 8px 30px rgba(46, 46, 142, 0.12)",
              marginTop: "12px",
              boxSizing: "border-box",
              overflow: "hidden",
              zIndex: 99,
            }}
          >
            <ul 
              style={{ 
                listStyle: "none", 
                padding: "20px", 
                margin: 0, 
                display: "flex", 
                flexDirection: "column", 
                gap: "8px" 
              }}
            >
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        display: "block",
                        padding: "12px 24px",
                        borderRadius: "30px",
                        fontWeight: 700,
                        fontSize: "15px",
                        fontFamily: "'Nunito', sans-serif",
                        textDecoration: "none",
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
                    href="#team"
                    onClick={(e) => handleNavClick(e, "#team")}
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
                    Join Our Team
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