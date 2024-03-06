import React, { Component } from "react";
import Link from "next/link";
import {
  Brain,
  Search,
  LayoutDashboard,
  Trophy,
  FileText,
  LucideIcon,
} from "lucide-react";

const icons = {
  Brain: <Brain />,
  Search: <Search />,
  LayoutDashboard: <LayoutDashboard />,
  Trophy: <Trophy />,
  FileText: <FileText />,
};

const CardList = () => {
  interface Project {
    id: number;
    icon: LucideIcon;
    name: string;
    domain: string;
    technologies: string[];
    description: string;
    backgroundColor: string;
    textColor: string;
    headerColor: string;
    borderColor: string;
  }

  const projects: Project[] = [
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
      domain: "https://github.com/paulocerez/matchdays",
      technologies: [
        "Next.js (TypeScript)",
        "Postgres",
        "NextAuth",
        "Axios",
        "Cheerio",
        "GCal API",
      ],
      description:
        "Matchdays is a web app that allows sports fans to automatically integrate your favorite football clubs' matchdays into your Google Calendar, thereby eliminating the need to do that manually.",
      backgroundColor: "bg-blue-500",
      headerColor: "text-white",
      textColor: "text-white",
      borderColor: "border-blue-500",
    },
    // {
    //   id: 4,
    //   name: "Paufolio - this website 👀",
    //   domain: "https://github.com/paulocerez/paufolio.git",
    //   technologies: ["Next.js (TypeScript)", "TailwindCSS"],
    //   description:
    //     "This is *surprise* *surprise*: the website you are currently on, which serves as my personal portfolio. I thought this joke with my name would be cool, but that didn't convince me enough to buy the domain...",
    //   backgroundColor: "bg-slate-500",
    //   headerColor: "text-white",
    //   textColor: "text-white",
    //   borderColor: "border-blue-500",
    // },

    // {
    //   id: 5,
    //   name: "Thoughts 💭",
    //   domain: "https://github.com/paulocerez/thoughts-web",
    //   technologies: [
    //     "Vue.js",
    //     "TypeScript",
    //     "Postgres",
    //     "TailwindCSS",
    //     "Axios",
    //   ],
    //   description:
    //     "Thoughts is a small web application to capture your everyday thoughts, you can think of an online diary.",
    //   backgroundColor: "bg-black",
    //   headerColor: "text-blue-500",
    //   textColor: "text-white",
    //   borderColor: "border-2 border-white",
    // },
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
  return (
    <div>
      <ul className="flex flex-col space-y-16 sm:space-y-10 sm:px-0">
        {projects.map((project: Project) => (
          <li key={project.id}>
            <div className="block rounded-xl shadow-2xl">
              <Link href={project.domain}>
                <div className="flex flex-col space-y-4 description text-left p-10">
                  <h1 className="font-semibold text-center sm:text-left text-2xl hover:underline">
                    {project.name}
                  </h1>
                  <h2 className="text-justify">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>
                        {tech}
                        {index < project.technologies.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </h2>
                  <p className="text-justify">{project.description}</p>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
