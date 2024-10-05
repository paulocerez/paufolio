import React from "react";
import { ExternalLink, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mx-auto sm:items-center sm:space-x-10 space-y-5 sm:space-y-0">
      <div className="linkedin flex flex-row space-x-4 text-gray-600 items-center">
        <div className="p-2 border rounded-md shadow-md">
          <Linkedin />
        </div>
        <Link
          href="https://www.linkedin.com/in/paulo-ramirez-cedenos/"
          className="hover:underline"
        >
          LinkedIn
        </Link>
      </div>
      <div className="github flex flex-row space-x-4 text-gray-600 items-center">
        <div className="p-2 border rounded-md shadow-md">
          <ExternalLink />
        </div>
        <Link
          href="https://drive.google.com/file/d/1KkQzMuA689lvnrsDVBGQSDeKV4eAM2lu/view?usp=sharing"
          className="hover:underline"
        >
          My CV
        </Link>
      </div>
      <div className="github flex flex-row space-x-4 text-gray-600 items-center">
        <div className="p-2 border rounded-md shadow-md">
          <Github />
        </div>
        <Link href="https://github.com/paulocerez" className="hover:underline">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default Socials;
