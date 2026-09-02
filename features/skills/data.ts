export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C",
      "8086 Assembly",
    ],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Nuxt 3", "Vue"],
  },
  {
    title: "Databases & Backend",
    items: [
      "Supabase",
      "Firebase",
      "MySQL",
      "MariaDB"
    ],
  },
  {
    title: "Tools & Libraries",
    items: [
      "Tailwind CSS",
      "Shadcn UI",
      "Arduino", 
      "Git",
      "Figma",
    ],
  }
];