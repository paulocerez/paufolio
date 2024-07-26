import Link from "next/link";
import { projects } from "../data/projectCollection";
import { Project } from "@/types/projects";

export default function Projects() {
  return (
    <div>
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {projects.map((project: Project) => (
          <div key={project.id} className="relative pl-16">
            <Link href={project.domain}>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <project.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {project.name}
              </dt>
              <dd className="mt-2 text-base text-justify leading-7 text-gray-600">
                {project.description}
              </dd>
              <dd className="mt-2 text-base leading-7 text-gray-600 ">
                {project.technologies.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {index < project.technologies.length - 1 ? ", " : ""}
                  </span>
                ))}
              </dd>
            </Link>
          </div>
        ))}
      </dl>
    </div>
  );
}
