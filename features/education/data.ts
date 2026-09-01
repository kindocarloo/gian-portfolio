export interface Education {
  school: string;
  duration: string;
  achievements: string[];
  degree?: string; 
}

export const educationData: Education[] = [
  {
    school: "Visayas State University",
    degree: "Bachelor of Science in Computer Science",
    duration: "Expected Graduation: 2028",
    achievements: [
      "College Honors, A.Y. 2024–2025, 2025-2026",
      "1st Placer, UISB Quiz Bowl 2025",
      "2nd Placer, CS Week Hackathon 2025",
    ],
  },
  {
    school: "Bato School of Fisheries",
    duration: "2018 – 2024",
    achievements: [
      "With High Honors",
    ],
  },
];