"use client";

import { useState } from "react";
import { Experience, ExperienceItem } from "../ui/ExperienceItem";
import { ChevronDown, ChevronUp } from "lucide-react";

const workExperiences: Experience[] = [
  {
    organization: "telli (YC F24)",
    role: "Founders Associate",
    logo: "/company-logos/telli-logo.png",
  },
  {
    organization: "Ivy",
    role: "Software Engineer",
    logo: "/company-logos/ivy-logo.png",
  },
  {
    organization: "LANCH",
    role: "Tech Entrepreneur in Residence",
    logo: "/company-logos/lanch-logo.png",
  },
  {
    organization: "Cardino",
    role: "Founders Associate Product",
    logo: "/company-logos/cardino-logo.png",
  },
  {
    organization: "Octopus Energy Services",
    role: "Business Development & Data",
    logo: "/company-logos/octopus-logo.png",
  },
  {
    organization: "Enpal",
    role: "Recruiting & Processes",
    logo: "/company-logos/enpal-logo.png",
  },
];

const educationExperiences: Experience[] = [
  {
    organization: "CODE University of Applied Sciences",
    role: "B.Sc. Software Engineering",
    logo: "/company-logos/code-logo.png",
  },
];

export default function Work() {
  const [showAllWorkExperiences, setShowAllWorkExperiences] = useState(false);

  const displayedWorkExperiences = workExperiences.slice(0, 3);
  const hiddenWorkExperiences = workExperiences.slice(3);

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-md font-normal text-gray-700">Work</h2>
        <div>
          {displayedWorkExperiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showAllWorkExperiences
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {hiddenWorkExperiences.map((experience, index) => (
              <ExperienceItem key={index + 3} experience={experience} />
            ))}
          </div>
        </div>
        {workExperiences.length > 3 && (
          <button
            onClick={() => setShowAllWorkExperiences(!showAllWorkExperiences)}
            className="flex flex-row items-center gap-2 hover:text-gray-600 transition-all duration-200"
          >
            {showAllWorkExperiences ? (
              <div className="flex flex-row items-center gap-2">
                <ChevronUp className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400 text-sm">Show less</p>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-2">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400 text-sm">
                  Show {workExperiences.length - 3} more
                </p>
              </div>
            )}
          </button>
        )}
      </div>

      <div className="space-y-2">
        <h2 className="text-md font-normal text-gray-700">Education</h2>
        <div>
          {educationExperiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
