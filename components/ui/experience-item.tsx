import Image from "next/image";

export interface Experience {
  organization: string;
  role: string;
  logo: string;
  duration?: string;
}

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 last:pb-0">
      <div className="flex-shrink-0">
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <Image
            src={experience.logo}
            alt={`${experience.organization} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-medium text-black dark:text-white">
          {experience.organization}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{experience.role}</p>
      </div>
    </div>
  );
}
