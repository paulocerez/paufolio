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
        <Image
          src={experience.logo}
          alt={`${experience.organization} logo`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-medium text-gray-900">
          {experience.organization}
        </h3>
        <p className="text-sm text-gray-600">{experience.role}</p>
      </div>
    </div>
  );
}
