import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "../data";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {skillsData.map((category) => (
        <Card key={category.title} className="group shadow-none border-2 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-800/20 hover:border-slate-500">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg tracking-tight mb-4 text-foreground/80 transition-colors duration-300 group-hover:text-foreground dark:group-hover:text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item} variant="secondary" className="font-medium transition-colors duration-300 group-hover:bg-secondary/80">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
