import About from "@/components/web/About/index";
import HeroSection from "@/components/web/HeroSection/index";
import WebLayout from "layout/webLayout";

export default function Home() {
  return (
    <WebLayout>
      <HeroSection />
      <About />
    </WebLayout>
  );
}
