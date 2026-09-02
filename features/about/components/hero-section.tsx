"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { aboutData } from "@/features/about/data";

const Typewriter = ({ text, delay, startDelay = 0, hideCursorAfterDone = false }: { text: string, delay: number, startDelay?: number, hideCursorAfterDone?: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    timeout = setTimeout(() => {
      setStarted(true);
      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsDone(true);
          clearInterval(interval);
        }
      }, delay);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, startDelay]);

  // Don't show cursor until we start (unless startDelay is 0), and hide if told to
  const showCursor = (!isDone || !hideCursorAfterDone) && (started || startDelay === 0);

  return (
    <span>
      {displayText}
      <span className={`animate-pulse opacity-70 ${showCursor ? 'visible' : 'invisible'}`}>|</span>
    </span>
  );
};

export function HeroSection() {
  const nameDelay = 60;
  const nameDuration = aboutData.name.length * nameDelay;
  
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
        <div className="flex flex-col gap-0 min-h-[140px] md:min-h-[160px] justify-center">
          <span className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wider mb-1">
            {aboutData.greeting}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none min-h-[1em]">
            <Typewriter text={aboutData.name} delay={nameDelay} startDelay={300} hideCursorAfterDone={true} />
          </h1>
          <span className="text-muted-foreground text-lg md:text-xl font-medium mt-1 min-h-[1.5em]">
            <Typewriter text={aboutData.title} delay={50} startDelay={nameDuration + 800} />
          </span>
        </div>
      </div>
    </section>
  );
}