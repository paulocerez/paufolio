import React from "react";
import { ExternalLink, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export const Socials = () => {
  return (
    <div className="flex flex-row justify-center space-x-8">
      <div className="linkedin flex flex-row space-x-4">
        <Linkedin />
        <p>LinkedIn</p>
      </div>
      <div className="github flex flex-row space-x-4">
        <Github />
        <p>GitHub</p>
      </div>
      <div className="instagram flex flex-row space-x-4 ">
        <Instagram />
        <p>Gram</p>
      </div>
    </div>
  );
};
