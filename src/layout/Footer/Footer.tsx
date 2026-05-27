import React from "react";
import Image from "next/image";

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDoubleRight = () => (
  <svg width="14.68" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M1 1l5.5 6.5L1 14" stroke="#FF4880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 1l5.5 6.5L6 14" stroke="#FF4880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Career", href: "#career" },
  { label: "Help Center", href: "#faq" },
];

export const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        @media (min-width: 1025px) {
          .desktop-footer {
            display: flex !important;
          }
          .mobile-footer {
            display: none !important;
          }
        }
        @media (max-width: 1024px) {
          .desktop-footer {
            display: none !important;
          }
          .mobile-footer {
            display: flex !important;
          }
        }
      `}</style>

      {/* ── DESKTOP VIEW: 100% EXACT ORIGINAL MARKUP & HEIGHT ── */}
      <footer
        id="contact"
        className="desktop-footer bg-[#010C6F] text-white justify-center overflow-hidden w-full scroll-mt-6"
        style={{ height: "445px" }}
      >
        <div
          className="relative flex items-start w-full"
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            paddingTop: "36px",
            paddingBottom: "36px",
            paddingLeft: "75px",
            paddingRight: "75px",
            boxSizing: "border-box",
          }}
        >
          {/* ── LEFT PART ── */}
          <div className="flex flex-col flex-1" style={{ gap: "72px" }}>
            {/* Upper Part */}
            <div className="flex flex-col">
              <div style={{ marginBottom: "16px" }}>
                <Image
                  src="/logo.svg"
                  alt="Beyond The View Autism Services"
                  width={107}
                  height={100}
                  style={{ width: "107px", height: "auto" }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  margin: 0,
                }}
              >
                At <strong className="text-white">Beyond The View Autism Services</strong>, We Believe That Every Child Should Be Supported To Their Greatest Level Of Independence. With Independence Comes The Ability To Access New Environments And Opportunities.
              </p>
            </div>

            {/* Lower Part */}
            <div className="flex flex-col" style={{ gap: "32px" }}>
              {/* Row 1: Social */}
              <div className="flex items-center" style={{ gap: "40px" }}>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/Beyondtheviewautismservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#FF4880] rounded-[10px] transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#e03570]"
                    style={{ width: "44px", height: "44px" }}
                  >
                    <Image src="/icons/Link.svg" alt="Instagram" width={22} height={22} />
                  </a>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.95)" }}>/Beyondtheviewautismservices</span>
                </div>

                <div style={{ width: "1px", height: "32px", background: "rgba(255, 255, 255, 0.2)" }} />

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/beyondtheviewaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#FF4880] rounded-[10px] transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#e03570]"
                    style={{ width: "44px", height: "44px" }}
                  >
                    <Image src="/icons/FB.svg" alt="Facebook" width={22} height={22} />
                  </a>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.95)" }}>@beyondtheviewaba</span>
                </div>
              </div>

              {/* Row 2: Contact Info */}
              <div className="flex items-start" style={{ gap: "40px" }}>
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                    <Image src="/icons/Phone.svg" alt="Phone" width={16} height={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Call Us</span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>(404)-398-2622</span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>(404)-406-7339</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                    <MapPinIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Clinic Locations</span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>7171 Jonesboro Rd, Morrow GA 30260</span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>3557 Main St College Park Ga 30337</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                    <Image src="/icons/Email.svg" alt="Email" width={16} height={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Us</span>
                    <a href="mailto:intake@btvas.com" style={{ fontSize: "13px", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px" }}>intake@btvas.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT PART ── */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{ width: "245px", height: "263.5px" }}
          >
            <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
              Explore
            </h4>

            {/* Divider: 245px total, 80px #FF4880, 165px muted */}
            <div style={{ display: "flex", width: "245px", height: "2.5px", marginBottom: "24px" }}>
              <div style={{ width: "80px", height: "2.5px", background: "#FF4880", flexShrink: 0 }} />
              <div style={{ width: "165px", height: "2.5px", background: "rgba(255, 255, 255, 0.2)", flexShrink: 0 }} />
            </div>

            <ul className="flex flex-col" style={{ gap: "16px", padding: 0, margin: 0, listStyle: "none" }}>
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-white transition-colors hover:text-[#FF4880]"
                    style={{ fontSize: "14px", fontWeight: 500, fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                  >
                    <ChevronDoubleRight />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* ── MOBILE / TABLET VIEW: DYNAMIC & FLUID STACK ── */}
      <footer 
        id="contact"
        className="mobile-footer bg-[#010C6F] text-white flex-col w-full scroll-mt-6"
        style={{
          padding: "48px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Upper Logo & Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <Image
              src="/logo.svg"
              alt="Beyond The View Autism Services"
              width={107}
              height={100}
              style={{ width: "107px", height: "auto" }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.8)",
              margin: 0,
            }}
          >
            At <strong className="text-white">Beyond The View Autism Services</strong>, We Believe That Every Child Should Be Supported To Their Greatest Level Of Independence. With Independence Comes The Ability To Access New Environments And Opportunities.
          </p>
        </div>

        {/* Explore Links in Mobile */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", fontFamily: "'Inter', sans-serif", margin: "0 0 12px 0" }}>
            Explore
          </h4>

          {/* Divider */}
          <div style={{ display: "flex", width: "100%", maxWidth: "245px", height: "2.5px", marginBottom: "20px" }}>
            <div style={{ width: "80px", height: "2.5px", background: "#FF4880", flexShrink: 0 }} />
            <div style={{ flex: 1, height: "2.5px", background: "rgba(255, 255, 255, 0.2)", flexShrink: 0 }} />
          </div>

          <ul 
            className="grid grid-cols-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 text-white transition-colors hover:text-[#FF4880]"
                  style={{ fontSize: "14px", fontWeight: 500, fontFamily: "'Inter', sans-serif", textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <ChevronDoubleRight />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider Line */}
        <div style={{ width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.1)" }} />

        {/* Contact info in Mobile */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          {/* Social Row */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="https://www.instagram.com/Beyondtheviewautismservices"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#FF4880] rounded-[10px] transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#e03570]"
                style={{ width: "44px", height: "44px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image src="/icons/Link.svg" alt="Instagram" width={22} height={22} />
              </a>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.95)", wordBreak: "break-all" }}>/Beyondtheviewautismservices</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="https://www.facebook.com/beyondtheviewaba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#FF4880] rounded-[10px] transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#e03570]"
                style={{ width: "44px", height: "44px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image src="/icons/FB.svg" alt="Facebook" width={22} height={22} />
              </a>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.95)" }}>@beyondtheviewaba</span>
            </div>
          </div>

          {/* Contact Details stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/icons/Phone.svg" alt="Phone" width={16} height={16} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Call Us</span>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>(404)-398-2622</span>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>(404)-406-7339</span>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPinIcon />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Clinic Locations</span>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>7171 Jonesboro Rd, Morrow GA 30260</span>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>3557 Main St College Park Ga 30337</span>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div className="flex items-center justify-center bg-[#FF4880] rounded-[8px] flex-shrink-0" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/icons/Email.svg" alt="Email" width={16} height={16} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Us</span>
                <a href="mailto:intake@btvas.com" style={{ fontSize: "13px", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px", color: "#fff" }}>intake@btvas.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};