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

  {
  slug: "road-accident-analysis",
  title: "Road Accident Data Analysis",
  categories: ["Data & Analytics"],
  summary:
    "An analysis of 152,445 recorded road accidents, identifying patterns in timing, location, and severity to produce actionable safety recommendations.",
  image: "/projects/road-accidents.png",
  technologies: ["Power BI", "Data Visualization", "Statistical Analysis"],
  year: "2026",
  role: "Data Analyst",
  featured: true,
  problem:
    "A dataset of over 152,000 road accidents needed to be turned into something road safety authorities could actually act on, rather than a raw table of numbers.",
  approach:
    "I built an interactive Power BI dashboard breaking the data down by time of day, day of week, month, speed zone, road geometry, and severity, so patterns that would be invisible in a spreadsheet became immediately visible.",
  implementation:
    "The dashboard includes a KPI summary (total accidents, unique locations, average light condition), a time-of-day breakdown showing a clear night versus day split, a weekday and monthly trend analysis, a road geometry breakdown by intersection type, and a severity classification, with a slicer allowing filtering by accident type.",
  result:
    "The analysis surfaced clear, specific patterns: 64% of accidents occurred at night, Fridays through Wednesdays saw the highest accident counts, March was the peak month, and the 60 km/h speed zone recorded the highest accident volume. Each finding was paired with a specific, actionable recommendation, such as improved nighttime lighting and stricter speed enforcement in the 60 km/h zone.",
  lessons:
    "Working with a dataset this large reinforced that the hardest part of data analysis isn't calculating the numbers, it's deciding which breakdowns actually reveal something useful, rather than just producing more charts.",
},
];

