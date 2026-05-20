import { TopBar } from "@/components/TopBar/TopBar";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { CoreValues } from "@/components/CoreValues/CoreValues";
import { Mission } from "@/components/Mission/Mission";
import { Visionaries } from "@/components/Visionaries/Visionaries";
import { FocusAndHours } from "@/components/FocusAndHours/FocusAndHours";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { OurTeam } from "@/components/OurTeam/OurTeam";
import { VideoBanner } from "@/components/VideoBanner/VideoBanner";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { OurServices } from "@/components/OurServices/OurServices";
import { GettingStarted } from "@/components/GettingStarted/GettingStarted";
import { JoinOurTeam } from "@/components/JoinOurTeam/JoinOurTeam";
import { FAQ } from "@/components/FAQ/FAQ";
import { ScallopDivider } from "@/components/ScallopDivider/ScallopDivider";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream relative">
      {/* Absolute background layer for the Hero section */}
      <div className="absolute top-0 left-0 w-full bg-navy-deep z-0 overflow-hidden flex justify-center">
        <div 
          className="w-full max-w-[1688px]"
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

        <div className="relative w-full flex justify-center" style={{ minHeight: "calc(912px - 140px)" }}>
          <Hero />
        </div>

        <CoreValues />
      <Mission />
      <Visionaries />
      <FocusAndHours />
      <CtaBanner />
      <OurTeam />
      <VideoBanner />
      <Testimonials />
      <OurServices />
      <GettingStarted />
      <JoinOurTeam />
      <FAQ />

      <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", zIndex: 20, marginBottom: "-25px", top: "-14px" }}>
        <Image 
          src="/divider.webp" 
          alt="Divider" 
          width={1440} 
          height={90} 
          className="w-full h-auto object-cover pointer-events-none"
        />
      </div>

        <Footer />
      </div>
    </main>
  );
}
