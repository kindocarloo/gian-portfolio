import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutData, careerFocus, personalInterests } from "@/features/about/data";

export function AboutSection() {
  return (
    <section id="about" className="w-full mt-12">
      <div className="flex flex-col gap-6">
        {/* Card 1: The Narrative */}
        <Card className="group shadow-none border-2 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-500">
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

        {/* Card 2: Focus & Interests */}
        <Card className="group shadow-none border-2 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-500">
          <CardContent className="p-6 md:p-8 flex flex-col gap-6 justify-center h-full">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {careerFocus.map((focus) => (
                  <Badge key={focus} variant="secondary" className="transition-colors duration-300 group-hover:bg-secondary/80">
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Outside the Editor
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInterests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
