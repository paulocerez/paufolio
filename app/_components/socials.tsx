import React from "react";
import {
  ExternalLink,
  Instagram,
  Linkedin,
  Github,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="flex flex-row justify-center space-x-8 bg-green-300">
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
        <Github />
        <Link href="https://github.com/paulocerez" className="hover:underline">
          GitHub
        </Link>
      </div>
      <div className="instagram flex flex-row space-x-4 ">
        <Instagram />
        <Link
          href="https://www.instagram.com/paulocerez/"
          className="hover:underline"
        >
          Gram
        </Link>
      </div>
      <div className="spotify flex flex-row space-x-4 ">
        <Headphones />
        <Link
          href="https://open.spotify.com/user/paulocedenos?si=c2c0fa5e37b34b32"
          className="hover:underline"
        >
          Spotify
        </Link>
      </div>
    </div>
  );
};
