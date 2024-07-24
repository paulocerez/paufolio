import React from "react";
import SpotifyPlaylist from "./SpotifyPlaylist";
import Image from "next/image";
import TopArtists from "./TopArtists";

const Footer = () => {
  return (
    <div className="flex flex-col mt-12 space-y-12 text-center">
      <h1 className="leading-8 text-gray-600">What others say.</h1>
      <div className="flex flex-col md:flex-row justify-center md:items-center">
        <div className="md:block transform md:-rotate-12 md:-mr-20">
          <Image src="/program.png" width={500} height={500} alt="EiR Page" />
        </div>
        <div className="md:block transform md:rotate-12 md:-ml-20">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7171072487298965504"
            height="340"
            width="302"
            title="Eingebetteter Beitrag"
          ></iframe>
        </div>
      </div>
      <h1 className="leading-8 text-gray-600">Spotify is my life.</h1>
      <div className="flex flex-row items-start">
        <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/4VXYH0kB0aahjstiia8bT8?utm_source=generator&theme=0" />
        <TopArtists />
      </div>
      <div className="text-center leading-8 p-10 sm:py-0 text-gray-600">
        Made with 🎧 in Berlin.
      </div>
    </div>
  );
};

export default Footer;
