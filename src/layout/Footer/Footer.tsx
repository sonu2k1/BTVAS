import React from "react";
import Image from "next/image";
import { siteNavLinks } from "@/data/navigation";

const iconBoxStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: 20,
  background: "#FF4880",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const IconBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={iconBoxStyle}>{children}</div>
);

const IconBoxLink: React.FC<{
  href: string;
  children: React.ReactNode;
  "aria-label": string;
}> = ({ href, children, "aria-label": ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="footer-icon-link"
    style={iconBoxStyle}
  >
    {children}
  </a>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.6289 16.125H16.5781V22.25H13.8438V16.125H11.6016V13.6094H13.8438V11.668C13.8438 9.48047 15.1562 8.25 17.1523 8.25C18.1094 8.25 19.1211 8.44141 19.1211 8.44141V10.6016H18C16.9062 10.6016 16.5781 11.2578 16.5781 11.9688V13.6094H19.0117L18.6289 16.125Z" fill="white" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.75 7.5C18.1042 7.52083 19.3229 7.85417 20.4062 8.5C21.4896 9.14583 22.3542 10.0104 23 11.0938C23.6458 12.1771 23.9792 13.3958 24 14.75C23.9583 15.2083 23.7083 15.4583 23.25 15.5C22.7917 15.4583 22.5417 15.2083 22.5 14.75C22.4583 13.125 21.8958 11.7708 20.8125 10.6875C19.7292 9.60417 18.375 9.04167 16.75 9C16.2917 8.95833 16.0417 8.70833 16 8.25C16.0417 7.79167 16.2917 7.54167 16.75 7.5ZM17 13.5C17.2917 13.5 17.5312 13.5938 17.7188 13.7812C17.9062 13.9688 18 14.2083 18 14.5C18 14.7917 17.9062 15.0312 17.7188 15.2188C17.5312 15.4062 17.2917 15.5 17 15.5C16.7083 15.5 16.4688 15.4062 16.2812 15.2188C16.0938 15.0312 16 14.7917 16 14.5C16 14.2083 16.0938 13.9688 16.2812 13.7812C16.4688 13.5938 16.7083 13.5 17 13.5ZM16 11.25C16.0417 10.7917 16.2917 10.5417 16.75 10.5C17.9583 10.5208 18.9583 10.9375 19.75 11.75C20.5625 12.5417 20.9792 13.5417 21 14.75C20.9583 15.2083 20.7083 15.4583 20.25 15.5C19.7917 15.4583 19.5417 15.2083 19.5 14.75C19.4792 13.9792 19.2083 13.3333 18.6875 12.8125C18.1667 12.2917 17.5208 12.0208 16.75 12C16.2917 11.9583 16.0417 11.7083 16 11.25ZM11.6875 7.53125C11.9792 7.46875 12.2708 7.5 12.5625 7.625C12.8333 7.75 13.0312 7.96875 13.1562 8.28125L14.4062 11.2812C14.5938 11.8438 14.4688 12.3229 14.0312 12.7188L12.5 13.9688C13.0208 15.0729 13.7083 16.0625 14.5625 16.9375C15.4375 17.7917 16.4271 18.4792 17.5312 19L18.7812 17.4688C19.1771 17.0312 19.6562 16.9062 20.2188 17.0938L23.2188 18.3438C23.5104 18.4688 23.7292 18.6667 23.875 18.9375C24 19.2292 24.0312 19.5312 23.9688 19.8438L23.2188 22.5938C23.0104 23.1562 22.6042 23.4583 22 23.5C19.3958 23.4792 17.0417 22.8438 14.9375 21.5938C12.8333 20.3438 11.1562 18.6667 9.90625 16.5625C8.65625 14.4583 8.02083 12.1042 8 9.5C8.04167 8.89583 8.35417 8.48958 8.9375 8.28125L11.6875 7.53125Z" fill="white" />
  </svg>
);

const LocationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 9.16016C14.9507 9.16181 13.4653 9.7418 12.3698 10.7729C11.2743 11.804 10.658 13.202 10.6562 14.6602C10.6562 19.3664 15.9688 22.9208 16.1952 23.0695C16.2845 23.1284 16.3909 23.16 16.5 23.16C16.6091 23.16 16.7155 23.1284 16.8048 23.0695C17.0312 22.9208 22.3438 19.3664 22.3438 14.6602C22.342 13.202 21.7257 11.804 20.6302 10.7729C19.5347 9.7418 18.0493 9.16181 16.5 9.16016ZM16.5 12.6602C16.9203 12.6602 17.3311 12.7775 17.6806 12.9972C18.03 13.217 18.3024 13.5293 18.4632 13.8948C18.6241 14.2602 18.6662 14.6624 18.5842 15.0503C18.5022 15.4383 18.2998 15.7947 18.0026 16.0744C17.7054 16.3541 17.3268 16.5446 16.9146 16.6217C16.5024 16.6989 16.0751 16.6593 15.6868 16.5079C15.2985 16.3565 14.9666 16.1002 14.7331 15.7713C14.4996 15.4424 14.375 15.0557 14.375 14.6602C14.375 14.1297 14.5989 13.621 14.9974 13.2459C15.3959 12.8709 15.9364 12.6602 16.5 12.6602Z" fill="white" />
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1211 15.5C22.1211 15.5318 22.1211 15.5625 22.1211 15.595C22.0998 16.4862 21.7692 17.5 20.3711 17.5C18.9248 17.5 18.6211 16.4125 18.6211 15.5V13C18.6212 12.9314 18.6073 12.8636 18.5801 12.8007C18.553 12.7377 18.5131 12.6811 18.4631 12.6342C18.4131 12.5873 18.354 12.5512 18.2895 12.5281C18.225 12.505 18.1564 12.4954 18.088 12.5C17.9592 12.511 17.8394 12.5705 17.7527 12.6665C17.6661 12.7624 17.619 12.8876 17.6211 13.0168V13.2668C17.1697 12.8623 16.6064 12.604 16.0053 12.5259C15.4042 12.4478 14.7936 12.5536 14.2538 12.8294C13.7141 13.1052 13.2705 13.538 12.9816 14.0709C12.6927 14.6037 12.5719 15.2116 12.6353 15.8144C12.6986 16.4172 12.9431 16.9867 13.3364 17.4478C13.7298 17.909 14.2536 18.2402 14.8389 18.3977C15.4242 18.5553 16.0435 18.5319 16.6152 18.3306C17.187 18.1293 17.6843 17.7595 18.0417 17.27C18.1042 17.3793 18.1748 17.4837 18.253 17.5825C18.5886 18 19.228 18.5 20.3711 18.5C20.5642 18.5006 20.7569 18.4849 20.9473 18.4531C20.9944 18.4452 21.0428 18.451 21.0867 18.4698C21.1305 18.4885 21.1682 18.5194 21.195 18.5589C21.2219 18.5983 21.2369 18.6446 21.2384 18.6923C21.2398 18.74 21.2275 18.7871 21.203 18.8281C20.6153 19.8138 19.7773 20.6265 18.774 21.1836C17.7707 21.7407 16.6378 22.0223 15.4905 22C12.0667 21.9312 9.25859 19.1787 9.12609 15.7568C9.0922 14.8933 9.23087 14.0316 9.53397 13.2223C9.83708 12.4129 10.2985 11.6722 10.8914 11.0433C11.4842 10.4144 12.1965 9.91011 12.9865 9.55982C13.7766 9.20952 14.6286 9.0203 15.4926 9.00322C16.3567 8.98614 17.2155 9.14155 18.0188 9.46034C18.8221 9.77914 19.5537 10.2549 20.1709 10.8599C20.7881 11.4648 21.2785 12.1868 21.6134 12.9835C21.9482 13.7802 22.1208 14.6357 22.1211 15.5ZM13.6211 15.5C13.6211 15.8955 13.7384 16.2822 13.9582 16.6111C14.1779 16.94 14.4903 17.1964 14.8557 17.3477C15.2212 17.4991 15.6233 17.5387 16.0113 17.4615C16.3992 17.3844 16.7556 17.1939 17.0353 16.9142C17.315 16.6345 17.5055 16.2781 17.5827 15.8902C17.6598 15.5022 17.6202 15.1001 17.4689 14.7346C17.3175 14.3692 17.0611 14.0568 16.7322 13.837C16.4033 13.6173 16.0167 13.5 15.6211 13.5C15.0907 13.5 14.582 13.7107 14.2069 14.0858C13.8318 14.4608 13.6211 14.9695 13.6211 15.5Z" fill="white" />
  </svg>
);

const ChevronDoubleRight = () => (
  <svg width="14.68" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M1 1l5.5 6.5L1 14" stroke="#FF4880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 1l5.5 6.5L6 14" stroke="#FF4880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const contactTextStyle: React.CSSProperties = {
  fontFamily: "'Prompt', sans-serif",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 600,
  color: "rgba(1, 12, 111, 0.85)",
  textDecoration: "none",
};

const descriptionStyle: React.CSSProperties = {
  fontFamily: "'Prompt', sans-serif",
  fontSize: "18px",
  lineHeight: "26px",
  color: "rgba(1, 12, 111, 0.9)",
  margin: 0,
};

const SOCIAL_LINKS = {
  instagram: {
    href: "https://www.instagram.com/Beyondtheviewautismservices",
    label: "/Beyondtheviewautismservices",
  },
  facebook: {
    href: "https://www.facebook.com/beyondtheviewaba",
    label: "@beyondtheviewaba",
  },
} as const;

const PHONES = [
  { display: "(404)-398-2622", href: "tel:+14043982622" },
  { display: "(404)-406-7339", href: "tel:+14044067339" },
] as const;

const LOCATIONS = [
  {
    display: "7171 Jonesboro Rd, Morrow GA 30260",
    href: "https://www.google.com/maps/search/?api=1&query=7171+Jonesboro+Rd%2C+Morrow+GA+30260",
  },
  {
    display: "3557 Main St College Park Ga 30337",
    href: "https://www.google.com/maps/search/?api=1&query=3557+Main+St+College+Park+Ga+30337",
  },
] as const;

const EMAIL = {
  display: "intake@btvas.com",
  href: "mailto:intake@btvas.com",
} as const;

const contactLabelStyle: React.CSSProperties = {
  ...contactTextStyle,
  fontWeight: 400,
};

const ContactText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={contactLabelStyle}>{children}</span>
);

const ContactLink: React.FC<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
}> = ({ href, children, external = false }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    style={contactTextStyle}
    className="footer-contact-link"
  >
    {children}
  </a>
);

const SocialTextLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={contactTextStyle} className="footer-contact-link">
    {children}
  </a>
);

const ContactInfoColumn: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <div className="footer-contact-column">
    <ContactText>{label}</ContactText>
    {children}
  </div>
);

const ContactItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}> = ({ icon, label, children }) => (
  <div className="footer-contact-item">
    <IconBox>{icon}</IconBox>
    <ContactInfoColumn label={label}>{children}</ContactInfoColumn>
  </div>
);

type FooterCloudConfig = {
  id: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const FOOTER_CLOUDS: FooterCloudConfig[] = [
  { id: "fc1", top: "6%", size: 100, duration: 34, delay: 0, opacity: 0.85 },
  { id: "fc2", top: "24%", size: 75, duration: 30, delay: 18, opacity: 0.75 },
  { id: "fc3", top: "42%", size: 115, duration: 38, delay: 36, opacity: 0.8 },
  { id: "fc4", top: "58%", size: 88, duration: 32, delay: 54, opacity: 0.7 },
  { id: "fc5", top: "72%", size: 105, duration: 36, delay: 72, opacity: 0.78 },
  { id: "fc6", top: "86%", size: 82, duration: 28, delay: 90, opacity: 0.72 },
];

const FooterCloudSvg: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size * 0.55}
    viewBox="0 0 120 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <ellipse cx="38" cy="40" rx="28" ry="22" fill="#ffffff" />
    <ellipse cx="62" cy="34" rx="34" ry="26" fill="#f8fcff" />
    <ellipse cx="86" cy="42" rx="26" ry="20" fill="#ffffff" />
    <ellipse cx="54" cy="48" rx="40" ry="16" fill="#eef7fc" />
  </svg>
);

const ExploreSection: React.FC = () => (
  <div className="footer-explore">
    <h4 className="footer-explore-title">Explore</h4>
    <div className="footer-explore-divider">
      <div className="footer-explore-divider-accent" />
      <div className="footer-explore-divider-muted" />
    </div>
    <ul className="footer-explore-links">
      {siteNavLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="footer-explore-link">
            <ChevronDoubleRight />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&display=swap');

        .site-footer {
          position: relative;
          overflow: hidden;
          width: 100%;
          background: linear-gradient(
            -45deg,
            #E8F7FC,
            #C8EAF5,
            #8FD4EA,
            #4AB8D4,
            #39B1D1,
            #8FD4EA,
            #C8EAF5
          );
          background-size: 400% 400%;
          animation: footer-gradient-move 7s ease infinite;
          color: #010C6F;
        }

        @keyframes footer-gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-footer {
            animation: none;
            background-size: auto;
            background: linear-gradient(
              160deg,
              #E8F7FC 0%,
              #C8EAF5 32%,
              #8FD4EA 65%,
              #4AB8D4 100%
            );
          }

          .footer-clouds-layer {
            display: none;
          }
        }

        .footer-clouds-layer {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .footer-cloud {
          position: absolute;
          top: var(--footer-cloud-top);
          left: -140px;
          opacity: 0;
          will-change: transform, opacity;
          animation: footer-cloud-ltr linear infinite;
          filter: drop-shadow(0 2px 6px rgba(255, 255, 255, 0.35));
        }

        @keyframes footer-cloud-ltr {
          0% {
            left: -140px;
            opacity: 0;
          }
          8% {
            opacity: var(--footer-cloud-opacity);
          }
          92% {
            opacity: var(--footer-cloud-opacity);
          }
          100% {
            left: calc(100% + 140px);
            opacity: 0;
          }
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 48px 24px 40px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .footer-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          width: 200px;
          height: auto;
          padding: 10px 12px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(1, 12, 111, 0.08);
        }

        .footer-description {
          max-width: 600px;
        }

        .footer-contact-block {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .footer-social-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-social-item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .footer-social-divider {
          display: none;
        }

        .footer-contact-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
        }

        .footer-contact-column {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .footer-contact-link {
          transition: color 0.2s ease;
          word-break: break-word;
        }

        .footer-contact-link:hover {
          color: #010C6F;
        }

        .footer-icon-link {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .footer-icon-link:hover {
          transform: scale(1.1);
          background-color: #e03570;
        }

        .footer-icon-link:active {
          transform: scale(0.95);
        }

        .footer-section-divider {
          width: 100%;
          height: 1px;
          background: rgba(1, 12, 111, 0.15);
        }

        .footer-explore {
          width: 100%;
        }

        .footer-explore-title {
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .footer-explore-divider {
          display: flex;
          width: 100%;
          max-width: 245px;
          height: 2.5px;
          margin-bottom: 20px;
        }

        .footer-explore-divider-accent {
          width: 80px;
          height: 2.5px;
          background: #FF4880;
          flex-shrink: 0;
        }

        .footer-explore-divider-muted {
          flex: 1;
          height: 2.5px;
          background: rgba(1, 12, 111, 0.2);
        }

        .footer-explore-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .footer-explore-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #010C6F;
          text-decoration: none;
          transition: color 0.2s ease;
          min-width: 0;
        }

        .footer-explore-link:hover {
          color: #FF4880;
        }

        @media (max-width: 768px) {
          .footer-cloud--hide-mobile {
            display: none;
          }
        }

        @media (min-width: 480px) {
          .footer-inner {
            padding: 52px 28px 44px;
          }

          .footer-logo {
            width: 220px;
          }

          .footer-social-row {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px 32px;
          }

          .footer-social-divider {
            display: block;
            width: 1px;
            height: 32px;
            background: rgba(1, 12, 111, 0.2);
            flex-shrink: 0;
          }
        }

        @media (min-width: 640px) {
          .footer-contact-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 28px;
          }

          .footer-contact-item:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (min-width: 768px) {
          .footer-inner {
            flex-direction: row;
            align-items: flex-start;
            gap: 40px;
            padding: 48px 32px 36px;
          }

          .footer-main {
            flex: 1;
            min-width: 0;
            gap: 48px;
          }

          .footer-section-divider {
            display: none;
          }

          .footer-explore {
            width: 245px;
            flex-shrink: 0;
            margin-left: auto;
          }

          .footer-explore-divider {
            width: 245px;
          }

          .footer-explore-links {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (min-width: 1024px) {
          .footer-inner {
            gap: 48px;
            padding: 36px 40px;
          }

          .footer-main {
            gap: 72px;
          }

          .footer-contact-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 32px 40px;
          }

          .footer-contact-item:last-child {
            grid-column: auto;
          }

          .footer-contact-item {
            flex: 1 1 180px;
            max-width: 280px;
          }
        }

        @media (min-width: 1280px) {
          .footer-inner {
            padding: 36px 75px;
          }

          .footer-contact-grid {
            flex-wrap: nowrap;
            gap: 40px;
          }

          .footer-contact-item {
            flex: 0 1 auto;
            max-width: none;
          }
        }
      `}</style>

      <div id="contact" className="scroll-mt-6" aria-hidden="true" />

      <footer className="site-footer scroll-mt-6">
        <div className="footer-clouds-layer" aria-hidden="true">
          {FOOTER_CLOUDS.map((cloud, index) => (
            <div
              key={cloud.id}
              className={`footer-cloud${index >= 4 ? " footer-cloud--hide-mobile" : ""}`}
              style={
                {
                  animationDuration: `${cloud.duration}s`,
                  animationDelay: `${cloud.delay}s`,
                  "--footer-cloud-top": cloud.top,
                  "--footer-cloud-opacity": cloud.opacity,
                } as React.CSSProperties
              }
            >
              <FooterCloudSvg size={cloud.size} />
            </div>
          ))}
        </div>

        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <Image
                src="https://ik.imagekit.io/sonu2k1/TEst/Logos/logo.webp?updatedAt=1780330681267"
                alt="Beyond The View Autism Services"
                width={220}
                height={180}
                className="footer-logo"
              />
              <p className="footer-description" style={descriptionStyle}>
                At <strong style={{ color: "#010C6F" }}>Beyond The View Autism Services</strong>, We Believe That Every Child Should Be Supported To Their Greatest Level Of Independence. With Independence Comes The Ability To Access New Environments And Opportunities.
              </p>
            </div>

            <div className="footer-contact-block">
              <div className="footer-social-row">
                <div className="footer-social-item">
                  <IconBoxLink href={SOCIAL_LINKS.instagram.href} aria-label="Instagram">
                    <InstagramIcon />
                  </IconBoxLink>
                  <SocialTextLink href={SOCIAL_LINKS.instagram.href}>{SOCIAL_LINKS.instagram.label}</SocialTextLink>
                </div>

                <div className="footer-social-divider" aria-hidden="true" />

                <div className="footer-social-item">
                  <IconBoxLink href={SOCIAL_LINKS.facebook.href} aria-label="Facebook">
                    <FacebookIcon />
                  </IconBoxLink>
                  <SocialTextLink href={SOCIAL_LINKS.facebook.href}>{SOCIAL_LINKS.facebook.label}</SocialTextLink>
                </div>
              </div>

              <div className="footer-contact-grid">
                <ContactItem icon={<PhoneIcon />} label="Call Us">
                  {PHONES.map((phone) => (
                    <ContactLink key={phone.href} href={phone.href}>
                      {phone.display}
                    </ContactLink>
                  ))}
                </ContactItem>

                <ContactItem icon={<LocationIcon />} label="Clinic Locations">
                  {LOCATIONS.map((location) => (
                    <ContactLink key={location.href} href={location.href} external>
                      {location.display}
                    </ContactLink>
                  ))}
                </ContactItem>

                <ContactItem icon={<EmailIcon />} label="Email Us">
                  <ContactLink href={EMAIL.href}>{EMAIL.display}</ContactLink>
                </ContactItem>
              </div>
            </div>
          </div>

          <div className="footer-section-divider" aria-hidden="true" />

          <ExploreSection />
        </div>
      </footer>
    </>
  );
};