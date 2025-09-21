import Link from "next/link";
import { Project } from "@/types/projects";
import { projects } from "../../app/data/projectCollection";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-crimson font-light text-white mb-12">
        Projects
      </h2>
      
      <div className="space-y-8">
        {projects.map((project: Project) => (
          <div key={project.id} className="py-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-light text-white">
                {project.name}
              </h3>
              <Link
                href={project.domain}
                className="text-gray-500 hover:text-white transition-colors duration-200"
                aria-label={`Visit ${project.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm font-light leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md font-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
