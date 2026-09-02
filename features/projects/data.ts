export interface Project {
  name: string;
  category: string;
  description: string;
  status: "Completed" | "In Development" | "Prototype" | "Archived";
  role: string;
  link?: string; 
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    name: "VERIS Systems",
    category: "Organization Management System",
    description: "A modern web app for managing event attendance and student clearances, where I developed the Services and FAQ pages to support its active deployment at the VSU Baybay USSC and ongoing rollout to other Faculty SSCs.",
    status: "Completed",
    role: "Full-Stack Developer",
    link: "https://veris-dev.fc-ssc.online/", 
    techStack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Firebase"],
  },
  {
    name: "DormPay",
    category: "Finance Management System",
    description: "A modern web app for dorm payments and notifications, where my QA testing and visual bug reporting prepared the platform for active use in Mabolo and Sampaguita ahead of a university-wide rollout.",
    status: "Completed",
    role: "QA Tester/ Full-Stack Developer",
    link: "https://dormpay-system.vercel.app", 
    techStack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Supabase"],
  },
  {
    name: "StoryaViscans",
    category: "Community Platform",
    description: "A community forum platform tailored for Visayas State University students, where I contributed by designing the landing page, resulting in a functional prototype successfully pitched during a campus hackathon.",
    status: "Archived",
    role: "Frontend Developer",
    link: "https://github.com/Kikypochiki/Storya-Viscans", 
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
  },
  {
    name: "EnrollMate",
    category: "Admission Administration System",
    description: "An Android enrollment app for Visayas State Univerosty students, where I built the core checklist feature to deliver a working prototype for CSci 23 coursework.",
    status: "Completed",
    role: "Android Developer",
    link: "https://github.com/molar-bea/zenki", 
    techStack: ["Kotlin", "Android Studio", "Firebase"],
  }
];