import React from "react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Docker",
];

export default function TechStack() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-y-2">
        {technologies.map((technology, index) => (
          <React.Fragment key={technology}>
            <span className="text-gray-600 text-md">{technology}</span>
            {index < technologies.length - 1 && (
              <span className="mx-3 text-gray-300 last:hidden">-</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
