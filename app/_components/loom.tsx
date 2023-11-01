import React from "react";

const Loom: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <iframe
        src="https://www.loom.com/embed/b583d07ec9d9454bbb142b46d7e3e4e2?sid=87b072e4-f294-4dec-bfc8-a114d62f0c68?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
        frameBorder="0"
        allowFullScreen
        className="w-full x-full"
      ></iframe>
    </div>
  );
};

export default Loom;
