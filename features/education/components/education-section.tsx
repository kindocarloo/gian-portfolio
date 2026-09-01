import { Card, CardContent } from "@/components/ui/card";
import { EducationTimeline } from "./education-timeline";

export function EducationSection() {
  return (
    <section id="education" className="w-full mt-16 md:mt-24">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight border-b pb-4">
          Education
        </h2>
        
        <Card className="w-full shadow-none border-2">
          <CardContent className="p-6 md:p-8">
            <EducationTimeline />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
