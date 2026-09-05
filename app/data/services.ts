export type Service = {
  title: string;
  problem: string;
  provide: string;
  idealClient: string;
};

export const services: Service[] = [
  {
    title: "Digital Product Development",
    problem:
      "Many small businesses have no real online presence, or one that doesn't actually do anything beyond looking presentable.",
    provide:
      "A complete, working website: real design, a working contact system, and where needed, a database and admin dashboard behind it, built end to end and deployed live.",
    idealClient:
      "Small businesses or individuals who need a real, functioning site, not just a static page.",
  },
  {
    title: "Data & Business Intelligence",
    problem:
      "Raw data sits unused because turning it into something decision-makers can actually act on takes a specific skill set.",
    provide:
      "Data cleaning, analysis, and clear, interactive dashboards that surface real patterns, paired with specific recommendations rather than just charts.",
    idealClient:
      "Anyone sitting on a dataset they don't have time or expertise to properly analyze.",
  },
  {
    title: "Agricultural Technology Solutions",
    problem:
      "Agricultural systems, particularly irrigation and water management, often lack the data-driven thinking applied elsewhere.",
    provide:
      "An engineering background in irrigation and drainage systems, combined with a data and technology skill set, to support agricultural projects that need both.",

    idealClient:
      "Agricultural projects or organizations needing engineering knowledge paired with modern data tools.",
  },
];