import { Project } from "@/types/projects";
import { Brain, Search, LayoutDashboard, Trophy, FileText } from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    icon: LayoutDashboard,
    name: "LANCH Partner Dashboard",
    domain: "https://partner.lanch.com/login",
    technologies: [
      "Next.js (TypeScript)",
      "TailwindCSS",
      "Apollo Client (GraphQL)",
      "Hasura (BigQuery)",
    ],
    description:
      "The LANCH Partner Dashboard is an internal application for LANCH's 80+ gastronomy partners to track their performance analytics. Currently the app has 50+ users (around 10 DAU).",
    backgroundColor: "bg-slate-500",
    headerColor: "text-white",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    id: 2,
    icon: Brain,
    name: "rememberry",
    domain: "https://github.com/rememberry-io/rememberry",
    technologies: ["Next.js (TypeScript)", "tRPC", "TailwindCSS"],
    description:
      "rememberry is a web app that allows students to craft flashcard-based mind-maps to make their materials more engaging and abstract concepts more tangible.",
    backgroundColor: "bg-white",
    headerColor: "text-blue-500",
    textColor: "text-black",
    borderColor: "shadow-2xl",
  },

  {
    id: 3,
    icon: Trophy,
    name: "Matchdays",
    domain: "https://github.com/paulocerez/matchdays-v2.git",
    technologies: [
      "Next.js (TypeScript)",
      "Postgres",
      "NextAuth",
      "Axios",
      "Cheerio",
      "GCal API",
    ],
    description:
      "Matchdays is a web app that allows sports fans to automatically integrate your favorite football clubs' matchdays into your Google Calendar, thereby eliminating the need to do that manually (still under construction 🔨).",
    backgroundColor: "bg-blue-500",
    headerColor: "text-white",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    icon: Search,
    name: "LANCH Tier 1-2-3-4 Analysis",
    domain: "https://github.com/paulocerez/lanch-order-analyses-tiers.git",
    technologies: ["Python", "Pandas", "Matplotlib", "Google Looker Studio"],
    description:
      "Conducted an analysis of 200.000+ food orders and clustered the respective regions to draw conclusions about partner performance depending on city size of operations.",
    backgroundColor: "bg-black",
    headerColor: "text-blue-500",
    textColor: "text-white",
    borderColor: "border-2 border-white",
  },
  {
    id: 7,
    icon: FileText,
    name: "Raisekit",
    domain: "https://github.com/kerem-kaynak/raisekit-backend.git",
    technologies: ["Fastify (Node.js)", "Vue.js", "TailwindCSS", "Firebase"],
    description:
      "Developed the backend of a data room visualization tool for early-stage founders as one of five engineers (special focus on writing pure functions for calculation of revenue and sales data).",
    backgroundColor: "bg-black",
    headerColor: "text-blue-500",
    textColor: "text-white",
    borderColor: "border-2 border-white",
  },
];
