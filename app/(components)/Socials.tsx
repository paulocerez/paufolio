import React from "react";
import { ExternalLink, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mx-auto sm:items-center sm:space-x-10 space-y-5 sm:space-y-0">
      <div className="linkedin flex flex-row space-x-4">
        <Linkedin />
        <Link
          href="https://www.linkedin.com/in/paulo-ramirez-20887a218/"
          className="hover:underline"
        >
          LinkedIn
        </Link>
      </div>
      <div className="github flex flex-row space-x-4">
        <ExternalLink />
        <Link
          href="https://drive.google.com/file/d/13ggGbn1NRK5MxVbOF3wR2jCQfrvKFP5S/view?usp=sharing"
          className="hover:underline"
        >
          Download CV
        </Link>
      </div>
      <div className="github flex flex-row space-x-4">
        <Github />
        <Link href="https://github.com/paulocerez" className="hover:underline">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default Socials;
