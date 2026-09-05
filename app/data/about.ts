export type JourneyMilestone = {
  year: string;
  title: string;
  description: string;
};

export const journey: JourneyMilestone[] = [
  {
    year: "Early Path",
    title: "Agricultural Engineering",
    description:
      "Studied Agricultural Engineering at the University for Development Studies, Ghana, specializing in Irrigation and Drainage Systems where I first learned to think in systems: inputs, constraints, outputs.",
  },
  {
    year: "Building On It",
    title: "Data Analysis",
    description:
      "Started applying that same systems thinking to data: learning to clean, analyze, and visualize information to answer real questions, not just produce numbers.",
  },
  {
    year: "Going Further",
    title: "Full-Stack Development",
    description:
      "Began building the actual tools behind the systems: learning HTML, CSS, JavaScript, then React and Next.js, culminating in Gillionaire Decor, a real, live business platform.",
  },
  {
    year: "Closing the Loop",
    title: "Digital Marketing",
    description:
      "Learning how to connect what I build to the people who actually need it: content, SEO, and digital strategy, so good work doesn't go unseen.",
  },
];

export type SkillTier = "Practical experience" | "Currently developing" | "Academic knowledge";

export type SkillCategory = {
  category: string;
  skills: { name: string; tier: SkillTier }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Data & Analytics",
    skills: [
      { name: "Excel", tier: "Practical experience" },
      { name: "SQL", tier: "Practical experience" },
      { name: "Python", tier: "Currently developing" },
      { name: "Statistical Analysis", tier: "Academic knowledge" },
    ],
  },
  {
    category: "Full-Stack Development",
    skills: [
      { name: "HTML/CSS/JavaScript", tier: "Practical experience" },
      { name: "React & Next.js", tier: "Practical experience" },
      { name: "PostgreSQL", tier: "Practical experience" },
      { name: "TypeScript", tier: "Currently developing" },
    ],
  },
  {
    category: "Digital Marketing",
    skills: [
      { name: "SEO Fundamentals", tier: "Practical experience" },
      { name: "Content Strategy", tier: "Currently developing" },
      { name: "Paid Campaigns", tier: "Academic knowledge" },
    ],
  },
  {
    category: "AgricTech & Agricultural Engineering",
    skills: [
      { name: "Irrigation & Drainage Systems", tier: "Academic knowledge" },
      { name: "Agricultural Data", tier: "Currently developing" },
      { name: "Sustainable Design", tier: "Academic knowledge" },
    ],
  },
];