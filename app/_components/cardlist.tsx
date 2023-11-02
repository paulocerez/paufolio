import React from "react";
import Link from "next/link";

export const Cardlist = () => {
  interface Project {
    id: number;
    name: string;
    domain: string;
    technologies: [];
    description: string;
    backgroundColor: string;
    textColor: string;
    headerColor: string;
    borderColor: string;
  }

  const projects: any = [
    {
      id: 1,
      name: "rememberry 🫐",
      domain: "https://rememberry.io",
      technologies: ["TypeScript, ", "Next.js, ", "tRPC, ", "Tailwind "],
      description:
        "rememberry is a web app that allows students to craft flashcard-based mind-maps to make their materials more engaging and abstract concepts more tangible.",
      backgroundColor: "bg-white",
      headerColor: "text-blue-500",
      textColor: "text-black",
      borderColor: "shadow-2xl",
    },
    {
      id: 2,
      name: "Matchdays ⚽️",
      domain: "https://matchdays.app",
      technologies: [
        "TypeScript, ",
        "T3-stack, ",
        "Postgres, ",
        "Prisma, ",
        "NextAuth, ",
        "Axios, ",
        "GCal API, ",
        "Docker ",
      ],
      description:
        "Matchdays is a web app that allows sports fans to automatically integrate your favorite football clubs' matchdays into your Google Calendar, thereby eliminating the need to do that manually.",
      backgroundColor: "bg-blue-500",
      headerColor: "text-white",
      textColor: "text-white",
      borderColor: "border-blue-500",
    },
    {
      id: 3,
      name: "Paufolio - this website 👀",
      domain: "https://matchdays.app",
      technologies: ["TypeScript, ", "Next.js, ", "tRPC, ", "Tailwind "],
      description:
        "This is *surprise* *surprise*: the website you are currently on, which serves as my personal portfolio. I thought this joke with my name would be cool, but that didn't convince me enough to buy the domain...",
      backgroundColor: "bg-slate-500",
      headerColor: "text-white",
      textColor: "text-white",
      borderColor: "border-blue-500",
    },

    {
      id: 4,
      name: "Thoughts 💭",
      domain: "https://github.com/paulocerez/thoughts-web",
      technologies: [
        "Vue.js, ",
        "TypeScript, ",
        "Postgres, ",
        "Tailwind, ",
        "Axios",
      ],
      description:
        "Thoughts is a small web application to capture your everyday thoughts, you can think of an online diary.",
      backgroundColor: "bg-black",
      headerColor: "text-blue-500",
      textColor: "text-white",
      borderColor: "border-2 border-white",
    },
  ];
  return (
    <div className="flex flex-col space-y-16 sm:space-y-10 sm:px-0">
      {projects.map((project: Project) => (
        <li key={project.id}>
          <div
            className={`block rounded-xl ${project.backgroundColor} ${project.borderColor}`}
          >
            <Link href={project.domain}>
              <div className="flex flex-col space-y-4 description text-left p-10">
                <h1
                  className={`font-semibold text-center sm:text-left text-2xl hover:underline ${project.headerColor}`}
                >
                  {project.name}
                </h1>
                <h2 className={`text-justify ${project.textColor}`}>
                  {project.technologies}
                </h2>
                <p className={`text-justify ${project.textColor}`}>
                  {project.description}
                </p>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
};
