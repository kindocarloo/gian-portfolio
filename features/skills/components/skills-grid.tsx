import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "../data";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {skillsData.map((category) => (
        <Card key={category.title} className="shadow-none border-2">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg tracking-tight mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item} variant="secondary" className="font-medium">
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
