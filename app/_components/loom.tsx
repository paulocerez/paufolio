import React from "react";

const Loom: React.FC = () => {
  return (
    <iframe
      src="https://www.loom.com/embed/031d1345fe0545e182b4658d02af48d6?sid=0d7222b3-6baf-4b93-bb2d-beb85e250421?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
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
