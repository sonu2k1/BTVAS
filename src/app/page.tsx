import { TopBar } from "@/layout/TopBar";
import { Header } from "@/layout/Header";
import { Hero } from "@/sections/Hero";
import { CoreValues } from "@/sections/CoreValues";
import { Mission } from "@/sections/Mission";
import { Visionaries } from "@/sections/Visionaries";
import { FocusAndHours } from "@/sections/FocusAndHours";
import { CtaBanner } from "@/sections/CtaBanner";
import { OurTeam } from "@/sections/OurTeam";
import { Testimonials } from "@/sections/Testimonials";
import { OurServices } from "@/sections/OurServices";
import { GettingStarted } from "@/sections/GettingStarted";
import { JoinOurTeam } from "@/sections/JoinOurTeam";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream relative">
      {/* Absolute background layer for the Hero section */}
      <div className="absolute top-0 left-0 w-full bg-navy-deep z-0 overflow-hidden flex justify-center">
        <div
          className="w-full max-w-[1688px] hero-bg-img"
          style={{
            height: "912px",
            backgroundImage: "url('/images/background.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center"
          }}
        />
      </div>

      {/* Main content wrapper spanning the entire page so sticky works globally */}
      <div className="relative z-10 w-full flex flex-col">
        <TopBar />

        <div className="sticky top-0 z-50 w-full flex justify-center">
          <Header />
        </div>

        <div className="relative w-full flex justify-center hero-container" style={{ minHeight: "calc(912px - 140px)" }}>
          <Hero />
        </div>

        <CoreValues />
        <Mission />
        <Visionaries />
        <FocusAndHours />
        <CtaBanner />
        <OurTeam />
        <OurServices />
        <Testimonials />
        <GettingStarted />
        <JoinOurTeam />
        <FAQ />

        <div className="footer-divider" style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", zIndex: 20, marginBottom: "-25px", top: "-14px" }}>
          <Image
            src="/divider.webp"
            alt="Divider"
            width={1440}
            height={90}
            className="w-full h-auto object-cover pointer-events-none"
            style={{ height: "auto" }}
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}
