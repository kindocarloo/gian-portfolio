export interface Project {
  name: string;
  category: string;
  description: string;
  status: "Completed" | "In Development" | "Prototype" | "Archived";
  link?: string; 
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    name: "VERIS Systems",
    category: "Organization Management System",
    description: "A modern web app for organizations to efficiently manage event attendance, with a Plus tier for handling fees, fines, and student clearances.",
    status: "Completed",
    link: "https://veris-dev.fc-ssc.online/", 
    techStack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Firebase"],
  },
  {
    name: "DormPay",
    category: "Finance Management System",
    description: "A modern web app for managing dorm-related payments, with automated notifications and payment tracking.",
    status: "Completed",
    link: "https://dormpay-system.vercel.app", 
    techStack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Supabase"],
  },
  {
    name: "StoryaViscans",
    category: "Community Platform",
    description: "A community forum platform tailored for Visayas State University students, designed and pitched during a campus hackathon.",
    status: "Archived",
    link: "https://github.com/Kikypochiki/Storya-Viscans", 
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
  },
  {
    name: "EnrollMate",
    category: "Admission Administration System",
    description: "An Android enrollment application tailored for Visayas State University students, designed and developed during CSci 23 coursework.",
    status: "Completed",
    link: "https://github.com/molar-bea/zenki", 
    techStack: ["Kotlin", "Android Studio", "Firebase"],
  }
];