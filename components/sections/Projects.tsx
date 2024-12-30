import Link from "next/link";
import { Project } from "@/types/projects";
import { projects } from "../../app/data/projectCollection";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-md font-normal text-gray-900">Projects</h2>
      <div>
        {projects.map((project: Project) => (
          <Link
            key={project.id}
            href={project.domain}
            className="block group py-6 first:pt-0 last:pb-0"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex p-2 items-center justify-center rounded-lg group-hover:bg-gray-50 transition-colors duration-200">
                  <project.icon
                    className="h-5 w-5 text-gray-600 group-hover:text-gray-900"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-base font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
