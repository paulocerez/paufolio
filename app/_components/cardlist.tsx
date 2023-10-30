import React from "react";
import Link from "next/link";

export const Cardlist = () => {
  interface Project {
    id: number;
    name: string;
    domain: string;
    technologies: [];
  }

  const projects: any = [
    {
      id: 1,
      name: "rememberry",
      domain: "https://rememberry.io",
      technologies: ["TypeScript, ", "Next.js, ", "tRPC, ", "Tailwind "],
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
        "NextAuth",
      ],
    },
    {
      id: 3,
      name: "Matchdays",
      domain: "https://matchdays.app",
      technologies: ["TypeScript, ", "Next.js, ", "tRPC, ", "Tailwind "],
    },
  ];
  return (
    <div className="flex flex-col space-y-10">
      {projects.map((project: Project) => (
        <li key={project.id}>
          <div className="bg-zinc-800 block rounded-md">
            <Link href={project.domain}>
              <div className="description text-left p-10">
                <h1 className="font-semibold text-2xl">{project.name}</h1>
                <h2>{project.technologies}</h2>
                <p>
                  {project.name} is a project I have no clue about. But this is
                  the description
                </p>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
};
