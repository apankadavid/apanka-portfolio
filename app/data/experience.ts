export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const education: ExperienceEntry[] = [
  {
    title: "BSc. Agricultural Engineering",
    organization: "University for Development Studies, Ghana",
    period: "January 2020 — August 2024",
    description:
      "Specialized in Irrigation and Drainage Systems. Final-year research project on lettuce irrigation using aquaculture wastewater.",
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: "Data Analytics Intern",
    organization: "Excelerate (RIT AI Data Team)",
    period: "July 2026 — August 2026",
    description:
      "Worked on learner sign-up and engagement data. Built a full EDA and cleaning pipeline on an 8,558-record dataset, and developed Random Forest and Gradient Boosting models for classification and forecasting.",
  },
  {
    title: "Field Supervisor",
    organization: "Goshen Porche Ranch",
    period: "October 2024 — October 2025",
    description:
      "Supervised field operations across a 277-hectare irrigated crop operation.",
  },
  {
    title: "Full-Stack Developer",
    organization: "Gillionaire Decor",
    period: "July 2026 — August 2026",
    description:
      "Built a complete business platform from scratch: frontend, backend, database, and authentication. See full case study in Projects.",
  },
];