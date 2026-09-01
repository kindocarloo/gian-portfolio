import { projectsData } from "../data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full mt-16 md:mt-24">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight border-b pb-4">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
