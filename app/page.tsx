import HeroSection from "@/components/home/HeroSection";
import InteractiveImage from "@/components/home/InteractiveImage";
import Navbar from "@/components/home/Navbar";
import FeatureSection from "@/components/home/FeatureSection";
import GrowSkills from "@/components/home/GrowSkills";
import CtaSection from "@/components/home/CtaSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InteractiveImage />
      <FeatureSection />
      <GrowSkills />
      <CtaSection />
    </main>
  );
}
