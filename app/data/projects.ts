export type ProjectCategory =
  | "Data & Analytics"
  | "Full-Stack Development"
  | "Digital Marketing"
  | "AgricTech"
  | "Research";

export type Project = {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  summary: string;
  image: string;
  technologies: string[];
  year: string;
  role: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  lessons: string;
};

export const projects: Project[] = [
  {
    slug: "gillionaire-decor",
    title: "Gillionaire Decor",
    categories: ["Full-Stack Development"],
    summary:
      "A live business platform for a curtain and blinds company, built end to end: frontend, backend, database, and authentication.",
    image: "/projects/gillionaire-decor.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT"],
    year: "2026",
    role: "Full-stack developer",
    liveUrl: "https://gillionaire-decor-next.vercel.app",
    featured: true,
    problem:
      "A friend's curtain and blinds business had no online presence. Potential clients had no way to see the range of services or reach the business outside of word of mouth.",
    approach:
      "I built a complete site from the ground up: a multi-page marketing site, a real contact form connected to a live database, and an admin dashboard to review inquiries securely.",
    implementation:
      "The frontend is built in Next.js with a component-based architecture and a custom typography and color system. The backend is a Node.js and Express API deployed on Render, connected to a PostgreSQL database on the same platform. Client inquiries are stored with a proper relational structure (clients linked to inquiries via foreign key), and the business owner receives an SMS notification the moment a new inquiry comes in. The admin dashboard is protected with hashed passwords and JWT-based authentication.",
    result:
      "The site is live and in active use, storing real client inquiries and sending real SMS notifications. It replaced the business's previous lack of any online presence.",
    lessons:
      "Working through real deployment issues, such as case-sensitive file paths in production and environment variable mismatches between local and live databases, taught me more about how production systems actually behave than any tutorial could.",
  },
];