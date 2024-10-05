"use client";
import { useState } from "react";
import IntroParagraph from "./(components)/IntroParagraph";
import Projects from "./(components)/Projects";
import References from "./(components)/References";
import SpotifySection from "./(components)/SpotifySection";
import Work from "./(components)/Work";
import ToggleSwitch from "./(components)/ToggleSwitch";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="flex flex-col space-y-16 bg-white sm:py-16 mx-auto mt-16 sm:mt-12 px-6 max-w-2xl lg:px-8 lg:max-w-5xl">
      <IntroParagraph />
      <div className="flex justify-center space-x-4">
        <ToggleSwitch
          options={["Projects", "Work Experience"]}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        />
      </div>
      {selectedIndex === 0 ? <Projects /> : <Work />}
      <References />
      <SpotifySection />
    </div>
  );
}
