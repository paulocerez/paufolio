import React from "react";
import Link from "next/link";

export const Cardlist = () => {
  interface Project {
    id: number;
    name: string;
    domain: string;
    technologies: [];
    description: string;
  }

  const projects: any = [
    {
      id: 1,
      name: "rememberry",
      domain: "https://rememberry.io",
      technologies: ["TypeScript, ", "Next.js, ", "tRPC, ", "Tailwind "],
      description:
        "rememberry is a web app that allows students to craft flashcard-based mind-maps to make their materials more engaging and abstract concepts more tangible.",
    },
    {
      id: 2,
      name: "Matchdays",
      domain: "https://matchdays.app",
      technologies: [
        "TypeScript, ",
        "T3-stack, ",
        "Postgres, ",
        "Prisma, ",
        "NextAuth, ",
        "Puppeteer, ",
        "GCal API, ",
        "Docker ",
      ],
      description:
        "Matchdays is a web app that allows you to automatically integrate your favorite football clubs' matchdays into your Google Calendar, thereby eliminating the need to do that manually.",
    },
    {
      id: 3,
      name: "Paufolio - this website :)",
      domain: "https://matchdays.app",
      technologies: ["TypeScript, ", "Next.js, ", "tRPC, ", "Tailwind "],
      description:
        "This is *surprise* *surprise*: the website you are currently on, which serves as my personal portfolio. I thought this joke with my name would be cool, but that didn't convince me enough to buy the domain...",
    },
    {
      id: 4,
      name: "Thoughts",
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
    },
  ];
  return (
    <div className="flex flex-col space-y-10">
      {projects.map((project: Project) => (
        <li key={project.id}>
          <div className="bg-zinc-800 block rounded-xl max-w-md">
            <Link href={project.domain}>
              <div className="flex flex-col space-y-4 description text-left p-10">
                <h1 className="font-semibold text-2xl hover:underline">
                  {project.name}
                </h1>
                <h2 className="text-gray-300 text-justify">
                  {project.technologies}
                </h2>
                <p className="text-justify">{project.description}</p>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
};
