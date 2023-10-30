import React from "react";

interface SpotifyPlaylistProps extends React.HTMLProps<HTMLIFrameElement> {
  src: string;
}

const SpotifyPlaylist: React.FC<SpotifyPlaylistProps> = ({ src, ...rest }) => {
  return (
    <div className="sticky">
      <iframe
        style={{ borderRadius: "12px" }}
        src={src}
        width="100%"
        height={352}
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        {...rest}
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
