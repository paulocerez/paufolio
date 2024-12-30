import React from "react";

export default function Loom() {
  return (
    <div className="flex justify-center items-center">
      <iframe
        src="https://www.loom.com/embed/9b1b6dfa5b7946509a0bfe9c43d97609?sid=3afcaa90-e017-4e8d-8dc5-2073dcfea8a3?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
        allowFullScreen
        className="rounded-lg border border-white w-full aspect-video max-w-[300px]"
      ></iframe>
    </div>
  );
}
