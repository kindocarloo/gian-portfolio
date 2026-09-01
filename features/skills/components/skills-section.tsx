import { SkillsGrid } from "./skills-grid";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full mt-16 md:mt-24">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight border-b pb-4">
          Toolbox
        </h2>
        
        <SkillsGrid />
      </div>
    </section>
  );
}
