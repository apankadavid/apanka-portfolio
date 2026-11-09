import type { ComponentType } from "react";
import { FaFileExcel, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiGoogleanalytics } from "react-icons/si";
import {
  Database,
  TrendingUp,
  Search,
  FileText,
  Share2,
  Droplets,
  Sprout,
  Recycle,
  FlaskConical,
} from "lucide-react";

export type SkillIcon = ComponentType<{ className?: string }>;

export const skillIcons: Record<string, SkillIcon> = {
  Excel: FaFileExcel,
  SQL: Database,
  Python: FaPython,
  "Data Visualization": TrendingUp,
  "Next.js": SiNextdotjs,
  React: FaReact,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  SEO: Search,
  "Content Strategy": FileText,
  "Social Media": Share2,
  Analytics: SiGoogleanalytics,
  "Irrigation Systems": Droplets,
  "Agricultural Data": Sprout,
  "Sustainable Design": Recycle,
  Research: FlaskConical,
};