import { Project } from "@/types/projects";
import {
  LayoutDashboard,
  Trophy,
  FileText,
  FileCode2,
  Search,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    icon: Search,
    name: "Prospecto",
    domain: "https://getprospecto.de",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Drizzle",
      "Neon Postgres",
      "React Query",
    ],
    description:
      "Automate your active sourcing and outreach to reach potential hires.",
    backgroundColor: "bg-slate-500",
    headerColor: "text-white",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    id: 2,
    icon: FileCode2,
    name: "2docs",
    domain: "https://www.2docs.de/",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Drizzle",
      "Neon Postgres",
      "React Query",
    ],
    description:
      "Generate custom code workflows based on API references. Cheaper than Zapier, more accurate than ChatGPT.",
    backgroundColor: "bg-slate-500",
    headerColor: "text-white",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    id: 3,
    icon: LayoutDashboard,
    name: "LANCH Partner Dashboard",
    domain: "https://partner.lanch.com/login",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Apollo Client (GraphQL)",
      "Hasura (BigQuery)",
    ],
    description:
      "Internal application for LANCH's 80+ gastronomy partners to track their performance analytics. The app had 70+ users after its initial release (around 7 DAU).",
    backgroundColor: "bg-slate-500",
    headerColor: "text-white",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  //   {
  //     id: 4,
  //     icon: Trophy,
  //     name: "Matchdays",
  //     domain: "https://github.com/paulocerez/matchdays-v2.git",
  //     technologies: [
  //       "Next.js (TypeScript)",
  //       "Postgres",
  //       "NextAuth",
  //       "Axios",
  //       "Cheerio",
  //       "GCal API",
  //     ],
  //     description:
  //       "Matchdays is a web app that allows sports fans to automatically integrate your favorite football clubs' matchdays into your Google Calendar.",
  //     backgroundColor: "bg-blue-500",
  //     headerColor: "text-white",
  //     textColor: "text-white",
  //     borderColor: "border-blue-500",
  //   },
  {
    id: 6,
    icon: FileText,
    name: "Raisekit",
    domain: "https://github.com/kerem-kaynak/raisekit-backend.git",
    technologies: ["Fastify (Node.js)", "Vue.js", "TailwindCSS", "Firebase"],
    description:
      "Data room visualization API for early-stage founders to keep track of their revenue and sales data in one place.",
    backgroundColor: "bg-black",
    headerColor: "text-blue-500",
    textColor: "text-white",
    borderColor: "border-2 border-white",
  },
];
