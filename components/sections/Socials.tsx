import Link from "next/link";
import { Linkedin, Github, FileText } from "lucide-react";

const socials = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/paulo-ramirez-cedenos/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    key: "github",
    href: "https://github.com/paulocerez",
    label: "GitHub",
    icon: Github,
  },
  {
    key: "cv",
    href: "https://drive.google.com/file/d/1KkQzMuA689lvnrsDVBGQSDeKV4eAM2lu/view?usp=sharing",
    label: "Resume",
    icon: FileText,
  },
];

export default function Socials() {
  return (
    <div className="flex space-x-8">
      {socials.map((social) => {
        const IconComponent = social.icon;
        return (
          <Link
            key={social.key}
            href={social.href}
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label={social.label}
          >
            <IconComponent size={24} />
          </Link>
        );
      })}
    </div>
  );
}
