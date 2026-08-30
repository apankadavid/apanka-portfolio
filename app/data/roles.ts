export type Role = {
  id: string;
  label: string;
  headline: string;
  description: string;
  skills: string[];
  theme: string;
  hex: string;
};

export const roles: Role[] = [
  {
    id: "data",
    label: "Data & Analytics",
    headline: "I turn raw numbers into decisions.",
    description:
      "I clean, analyze, and visualize data to help people see what's actually happening in their business or research-not just what they assume is happening.",
    skills: ["Excel", "SQL", "Python", "Data Visualization"],
    theme: "bg-[#0B2622]",  // data — slightly cooler, darker
    hex: "#0B2622"
  },
  {
    id: "development",
    label: "Full-Stack Development",
    headline: "I build the systems that run behind the scenes.",
    description:
      "From database design to deployment, I build real, working web applications-like Gillionaire Decor, a live business platform with authentication, a database, and real client data flowing through it.",
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    theme: "bg-[#013E37]" , // development — your core brand green
    hex: "#013E37"
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    headline: "I help the right people find what's already good.",
    description:
      "A great product still needs the right audience. I work on content strategy, SEO, and digital campaigns that connect real work to real customers.",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"],
    theme: "bg-[#154A3F]",  // marketing — slightly warmer/lighter
    hex: "#154A3F"
  },
  {
    id: "agritech",
    label: "AgricTech",
    headline: "Where my technical foundation actually started.",
    description:
      "My background in Agricultural Engineering, with a focus on Irrigation and Drainage Systems, taught me to think in systems — inputs, constraints, outputs. Everything else I do builds on that foundation.",
    skills: ["Irrigation Systems", "Agricultural Data", "Sustainable Design", "Research"],
    theme: "bg-[#0F3D33]" , // agritech — deepest, most "earthy" green
    hex: "#0F3D33"
  },
];