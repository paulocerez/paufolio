import Image from "next/image";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  logo: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "Ivy",
    position: "Software Engineer",
    duration: "Okt. 2024–Heute · 1 Monat",
    logo: "/ivy-logo.png",
  },
  {
    company: "Octopus Energy Services",
    position: "Biz Dev & Data",
    duration: "Apr. 2024–Sept. 2024 · 6 Monate",
    logo: "/octopus-logo.png",
  },
  {
    company: "LANCH",
    position: "Tech Entrepreneur in Residence",
    duration: "Dez. 2023–März 2024 · 4 Monate",
    logo: "/lanch-logo.png",
  },
  {
    company: "Cardino",
    position: "Product & Tech",
    duration: "Juni 2023–Nov. 2023 · 6 Monate",
    logo: "/cardino-logo.png",
  },
  {
    company: "Enpal",
    position: "Recruiting & Processes",
    duration: "Sept. 2022–Mai 2023 · 9 Monate",
    logo: "/enpal-logo.png",
  },
];

export default function Work() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Work Experience
      </h2>
      <ul className="space-y-6 mx-auto">
        {workExperiences.map((experience, index) => (
          <li
            key={index}
            className="flex items-center space-x-8 p-4 rounded-lg border shadow-sm max-w-2xl mx-auto"
          >
            <div className="flex-shrink-0 h-full">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{experience.company}</h3>
              <p className="text-gray-600">{experience.position}</p>
              <p className="text-sm text-gray-500">{experience.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
