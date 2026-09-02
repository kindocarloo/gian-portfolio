import Image from "next/image";
import { Card } from "@/components/ui/card";
import { aboutData } from "@/features/about/data";

export function HeroSection() {
  return (
    <section id="hero" className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full">
      <Card className="shrink-0 overflow-hidden border-2 shadow-md relative w-64 h-64 md:w-72 md:h-72 aspect-square">
        <Image
          src="/images/GianFormal.jpg"
          alt={aboutData.name}
          fill
          className="object-cover object-top"
          priority
        />
      </Card>

      <div className="flex-1 w-full flex flex-col justify-center py-6 md:py-0 text-center md:text-left">
        <div className="flex flex-col gap-0">
          <span className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wider mb-1">
            {aboutData.greeting}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
            {aboutData.name}
          </h1>
          <span className="text-muted-foreground text-lg md:text-xl font-medium mt-1">
            {aboutData.title}
          </span>
        </div>
      </div>
    </section>
  );
}