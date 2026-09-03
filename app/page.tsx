import { HeroSection } from "@/features/about/components/hero-section";
import { AboutSection } from "@/features/about/components/about-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { EducationSection } from "@/features/education/components/education-section";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { ContactSection } from "@/features/contact/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start p-8 md:p-24 max-w-5xl mx-auto w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
