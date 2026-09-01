import { educationData } from "../data";

export function EducationTimeline() {
  return (
    <div className="relative">
      {/* Continuous vertical line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-muted" />

      <div className="flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-8">
            {/* Branch node indicator */}
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

            {/* Item content */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg leading-tight tracking-tight">
                    {edu.school}
                  </h3>
                  {edu.degree && (
                    <p className="text-sm font-medium text-muted-foreground">
                      {edu.degree}
                    </p>
                  )}
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="list-disc pl-4 space-y-1 text-base text-foreground/80 mt-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
