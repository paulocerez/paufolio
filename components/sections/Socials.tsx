import React from "react";
import { ExternalLink, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    key: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/paulo-ramirez-cedenos/",
    label: "LinkedIn",
  },
  {
    key: "github",
    icon: Github,
    href: "https://github.com/paulocerez",
    label: "GitHub",
  },
  {
    key: "cv",
    icon: ExternalLink,
    href: "https://drive.google.com/file/d/1KkQzMuA689lvnrsDVBGQSDeKV4eAM2lu/view?usp=sharing",
    label: "CV",
  },
];

export default function Socials() {
  return (
    <div className="flex flex-row w-full justify-start divide-x-2 divide-gray-200">
      {socials.map((social) => (
        <Link
          key={social.key}
          href={social.href}
          className="hover:underline px-4 first:pl-0 last:pr-0 text-gray-600"
        >
          {social.label}
        </Link>
      ))}
    </div>
  );
}
