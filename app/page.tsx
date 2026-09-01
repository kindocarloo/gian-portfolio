import { HeroSection } from "@/features/about/components/hero-section";
import { AboutSection } from "@/features/about/components/about-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start p-8 md:p-24 max-w-5xl mx-auto w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
