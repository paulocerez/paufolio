import {
  Brain,
  Search,
  LayoutDashboard,
  Trophy,
  FileText,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Socials from "./(components)/Socials";
import Loom from "./(components)/Loom";
import CardsFooter from "./(components)/CardsFooter";

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

const icons = {
  Brain: <Brain />,
  Search: <Search />,
  LayoutDashboard: <LayoutDashboard />,
  Trophy: <Trophy />,
  FileText: <FileText />,
};

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
