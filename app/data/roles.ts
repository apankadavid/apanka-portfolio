export type Role = {
  id: string;
  label: string;
  headline: string;
  description: string;
  skills: string[];
};

export const roles: Role[] = [
  {
    id: "data",
    label: "Data & Analytics",
    headline: "I turn raw numbers into decisions.",
    description:
      "I clean, analyze, and visualize data to help people see what's actually happening in their business or research-not just what they assume is happening.",
    skills: ["Excel", "SQL", "Python", "Data Visualization"],
  },
  {
    id: "development",
    label: "Full-Stack Development",
    headline: "I build the systems that run behind the scenes.",
    description:
      "From database design to deployment, I build real, working web applications-like Gillionaire Decor, a live business platform with authentication, a database, and real client data flowing through it.",
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    headline: "I help the right people find what's already good.",
    description:
      "A great product still needs the right audience. I work on content strategy, SEO, and digital campaigns that connect real work to real customers.",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"],
  },
  {
    id: "agritech",
    label: "AgricTech",
    headline: "Where my technical foundation actually started.",
    description:
      "My background in Agricultural Engineering, with a focus on Irrigation and Drainage Systems, taught me to think in systems — inputs, constraints, outputs. Everything else I do builds on that foundation.",
    skills: ["Irrigation Systems", "Agricultural Data", "Sustainable Design", "Research"],
  },
];