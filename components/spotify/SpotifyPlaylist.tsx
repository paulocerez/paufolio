import React from "react";

interface SpotifyPlaylistProps {
  src: string;
}

export default function SpotifyPlaylist({ src }: SpotifyPlaylistProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <iframe
        className="rounded-xl w-full aspect-video max-w-[500px]"
        src={src}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
