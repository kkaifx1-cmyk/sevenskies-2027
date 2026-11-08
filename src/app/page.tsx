import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CompetitionHub from "@/components/CompetitionHub";
import TwibbonStudio from "@/components/TwibbonStudio";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <CompetitionHub />
        <TwibbonStudio />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
