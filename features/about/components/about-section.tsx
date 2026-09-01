import { Card, CardContent } from "@/components/ui/card";
import { aboutData } from "@/features/about/data";

export function AboutSection() {
  return (
    <section id="about" className="w-full mt-12">
      <Card className="w-full shadow-none border-2">
        <CardContent className="p-6 md:p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
            About Me
          </h2>
          <div className="flex flex-col gap-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
