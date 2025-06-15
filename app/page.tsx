import HeroSection from "@/components/home/HeroSection";
import InteractiveImage from "@/components/home/InteractiveImage";
import Navbar from "@/components/header/Navbar";
import FeatureSection from "@/components/home/FeatureSection";
import GrowSkills from "@/components/home/GrowSkills";
import CtaSection from "@/components/home/CtaSection";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  return (
    <main>
      <Navbar session={session} />
      <HeroSection />
      <InteractiveImage />
      <FeatureSection />
      <GrowSkills />
      <CtaSection />
    </main>
  );
}
