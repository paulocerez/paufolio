import React from "react";

interface SpotifyPlaylistProps {
  src: string;
}

const SpotifyPlaylist: React.FC<SpotifyPlaylistProps> = ({ src }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <iframe
        style={{ borderRadius: "12px" }}
        src={src}
        width="100%"
        height={240}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
