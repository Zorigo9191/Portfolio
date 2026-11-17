import type { ComponentType, CSSProperties } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiSupabase,
  SiMongodb,
  SiSass,
} from "react-icons/si";
import { CloudSun, Server } from "lucide-react";

type TechIcon = {
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
};

export const TECH_ICONS: Record<string, TechIcon> = {
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  SCSS: { icon: SiSass, color: "#CC6699" },
  SASS: { icon: SiSass, color: "#CC6699" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: FaReact, color: "#61DAFB" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  "Node.js": { icon: FaNodeJs, color: "#5FA04E" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "Wetter-API": { icon: CloudSun, color: "#FBBF24" },
  "Eigenes Backend": { icon: Server, color: "#3EDED3" },
};
