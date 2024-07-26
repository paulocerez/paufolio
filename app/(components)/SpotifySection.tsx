import React from "react";
import SpotifyPlaylist from "./SpotifyPlaylist";

export default function SpotifySection() {
  return (
    <div className="flex flex-col space-y-12 text-center">
      <h1 className="leading-8 text-gray-600">
        The most important statistics & resources (Spotify ofc 🤓).
      </h1>
      <div className="flex flex-col">
        <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/4VXYH0kB0aahjstiia8bT8?utm_source=generator&theme=0" />
        {/* <TopArtists /> */}
      </div>
      <div className="text-center leading-8 p-10 sm:py-0 text-gray-600">
        Made with 🎧 in Berlin.
      </div>
    </div>
  );
}
