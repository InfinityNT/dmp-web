import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ScreenshotShowcase } from "@/components/ScreenshotShowcase";
import { Install } from "@/components/Install";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <ScreenshotShowcase />
        <Install />
        <Download />
      </main>
      <Footer />
    </>
  );
}
