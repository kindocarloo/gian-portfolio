import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Project } from "../data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full border-2 shadow-sm transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl leading-none tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {project.category}
          </p>
        </div>
        <Badge 
          variant={project.status === "Completed" ? "default" : "secondary"} 
          className="shrink-0"
        >
          {project.status}
        </Badge>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <p className="text-base text-foreground/80 leading-relaxed">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 pt-4 border-t">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`Open repository for ${project.name}`}
            className={buttonVariants({ variant: "link", className: "p-0 h-auto font-semibold" })}
          >
            View <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
