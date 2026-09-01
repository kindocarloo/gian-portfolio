import { experiencesData } from "../data";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Continuous vertical line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-muted" />

      <div className="flex flex-col gap-8">
        {experiencesData.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Branch node indicator */}
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

            {/* Item content */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg leading-tight tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {exp.organization}
                  </p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-base text-foreground/80 mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
