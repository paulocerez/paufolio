import React from "react";

const Loom: React.FC = () => {
  return (
    <iframe
      src="https://www.loom.com/embed/9b1b6dfa5b7946509a0bfe9c43d97609?sid=3afcaa90-e017-4e8d-8dc5-2073dcfea8a3?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
      frameBorder="0"
      allowFullScreen
      style={{
        borderRadius: "12px",
        border: "solid white",
      }}
      width={576}
      height={324}
      id="loom"
    ></iframe>
  );
};

export default Loom;
