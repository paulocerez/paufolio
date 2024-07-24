import { Brain, Search, LayoutDashboard, Trophy, FileText } from "lucide-react";
import Link from "next/link";
import Socials from "./(components)/Socials";
import Loom from "./(components)/Loom";
import CardsFooter from "./(components)/CardsFooter";
import TopArtists from "./(components)/TopArtists";
import { Project } from "@/types/projects";
import { projects } from "./data/projectCollection";

const icons = {
  Brain: <Brain />,
  Search: <Search />,
  LayoutDashboard: <LayoutDashboard />,
  Trophy: <Trophy />,
  FileText: <FileText />,
};

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col mx-auto max-w-2xl lg:text-center space-y-8">
          <div className="flex justify-center items-center sm:w-full">
            <Loom />
          </div>
          <div>
            <h2 className="text-xl font-semibold leading-7 text-indigo-600">
              Welcome my friend! 👋🏼
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              This is my personal website. <br></br> Feel free to explore. 🤓
            </p>
          </div>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            I&apos;m currently working in Business Development @Octopus Energy
            🐙 and studying Software Engineering at CODE University 💻 (based in
            Berlin). My focus lies on Web Development, Data Analyses, and People
            Operations. In the past I worked as a Technical Entrepreneur in
            Residence @LANCH, Product Manager @Cardino (VC-backed Berlin-based
            mobility startup), and as a Recruiter @Enpal (focussing on Biz Dev
            in TA contexts).
          </p>
        </div>
        <div>
          <div className="flex flex-col space-x-2 items-center justify-center my-6 text-gray-600 space-y-4">
            <div className="p-4">
              Check out my experience @LANCH{" "}
              <Link
                href="https://www.lanch.com/entrepreneur-program"
                className="underline hover:text-gray-300"
              >
                here
              </Link>
              .
            </div>
            <Socials />
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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
          <CardsFooter />
        </div>
      </div>
    </div>
  );
}
