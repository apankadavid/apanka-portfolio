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
  image?: string;
  videos?: { src: string; caption: string }[];
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
  image: "/projects/road-accidents.jpg",
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

{
  slug: "gillionaire-decor-analytics",
  title: "Gillionaire Decor: Full Year Business Review",
  categories: ["Data & Analytics"],
  summary:
    "A full-year analysis of 191 cleaned orders, validated independently across Python, SQL, and Power BI, uncovering two real data bugs along the way.",
  image: "/projects/gillionaire-analytics.png",
  technologies: ["Python", "pandas", "scikit-learn", "SQL", "Power BI", "Statistical Analysis"],
  year: "2026",
  role: "Data Analyst",
  liveUrl: "https://github.com/apankadavid/gillionaire-decor-analytics",
  featured: true,
  problem:
    "Gillionaire Decor needed a data-backed review of its first full year of orders to guide 2027 strategy: which items and customers to prioritize, whether city performance differences were real, whether seasonal patterns existed, which customers were at risk of churning, and whether high-value orders could be predicted ahead of time.",
  approach:
    "I cleaned a dataset of 197 raw orders down to 191 valid records, documenting every decision rather than guessing at missing values. From there I built item, customer, and city performance breakdowns, then used a one-way ANOVA to test whether the city difference was statistically real instead of assuming a visible gap was meaningful.",
  implementation:
    "A RandomForestClassifier predicting high-value orders initially scored 84.6% accuracy, which looked strong until I questioned it. Since item type alone already predicted price well, I ran an ablation test, retraining the model without the item feature and comparing it against a naive baseline. Accuracy without item (71.8%) fell below the baseline (79.5%), showing the model's real power came almost entirely from item type rather than timing or location. I then rebuilt the cleaning and churn detection independently in SQL and Power BI to confirm the findings held up. That process caught two real reference-date bugs, a hardcoded cutoff in SQL and Power BI's TODAY() function silently using the system date instead of the dataset's latest order, before all three tools matched exactly.",
  result:
    "Blinds led on revenue (GHC 57,785.89), the city difference turned out to be statistically insignificant (p = 0.196) despite Accra's higher total, and a clear seasonal pattern emerged with order volume nearly tripling from February to December. Three at-risk customers were identified with consistent results across Python, SQL, and Power BI.",
  lessons:
    "The most valuable part of this project wasn't the model or the dashboard, it was refusing to trust either until they agreed with an independent source. A high-accuracy result can look impressive while mostly re-discovering a pattern already visible in a simple boxplot, and a dashboard can look complete while quietly using the wrong reference date.",
},
{
  slug: "goshen-porche-field-operations",
  title: "Field Operations at Goshen Porche Ranch",
  categories: ["AgricTech"],
  summary:
    "Hands-on field supervision across three core operations on a 277-hectare irrigated farm: fire belt establishment, center-pivot irrigation monitoring, and calibrated fertilizer application.",
  image: "/projects/goshen-porche-thumb.jpg",
  videos: [
    { src: "/projects/farm-belt.mp4", caption: "Fire belt spreading and calibration" },
    { src: "/projects/irrigation-monitoring.mp4", caption: "Center-pivot irrigation monitoring" },
    { src: "/projects/fertilizer-application.mp4", caption: "Fertilizer spreader calibration" },
  ],
  technologies: ["Center-Pivot Irrigation", "Spreader Calibration", "Field Supervision"],
  year: "2024–2025",
  role: "Field Supervisor",
  featured: false,
  problem:
    "A 277-hectare farm needed reliable protection against dry-season fires, consistent irrigation coverage, and precise fertilizer application, each requiring careful calibration and hands-on supervision to get right.",
  approach:
    "Three separate field operations, each handled with the same underlying discipline: calibrate first, verify, then execute at scale.",
  implementation:
    "For fire belt establishment, we attached a mini spreader to a tractor and calibrated it to spread sorghum seed evenly along the farm's edges as a fire barrier for the dry season, harrowing over it afterward, with me supervising to keep the process on track. For irrigation, I directly operated and monitored a center-pivot system, checking that the pivot was moving correctly and that every sprinkler head was functioning. For fertilizer application, I worked alongside the farm's agronomist, learning what to watch for while we calibrated a 6m³ fertilizer spreader to get the correct rate and drop per pass, and calculated the number of bags needed.",
  result:
    "All three operations were completed successfully as part of ongoing farm management during my time at Goshen Porche Ranch.",
  lessons:
    "Precision matters as much in agriculture as it does in code or data. A wrongly calibrated spreader wastes material and produces uneven results, in the same way an off-by-one error breaks a program. This is where I first learned to think in terms of inputs, calibration, and verified outputs, the same mental model I now apply to data and software.",
},
];

