import About from "@/components/web/About/index";
import FAQ from "@/components/web/FAQ/index";
import HeroSection from "@/components/web/HeroSection/index";
import NewsLetter from "@/components/web/NewsLetter/index";
import WebLayout from "layout/webLayout";

export default function Home() {
  return (
    <WebLayout>
      <HeroSection />
      <About />
      <FAQ />
      <NewsLetter />
    </WebLayout>
  );
}
