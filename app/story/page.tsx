import React from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
});

export default function Story() {
  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${cormorantGaramond.variable}`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 p-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black text-center max-w-4xl font-cormorant-garamond">
          We all have a great story to tell.
        </h1>
        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button className="px-4 py-2 text-base bg-white bg-opacity-70 hover:bg-opacity-90 transition-colors duration-300 rounded-md shadow-md">
            Look through my story.
          </button>
          <button className="px-4 py-2 text-base bg-white bg-opacity-70 hover:bg-opacity-90 transition-colors duration-300 rounded-md shadow-md">
            Summary (TL;DR)
          </button>
        </div>
      </div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/airplane.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
