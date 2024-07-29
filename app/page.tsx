import { Brain, Search, LayoutDashboard, Trophy, FileText } from "lucide-react";
import IntroParagraph from "./(components)/IntroParagraph";
import Projects from "./(components)/Projects";
import References from "./(components)/References";
import SpotifySection from "./(components)/SpotifySection";

const icons = {
  Brain: <Brain />,
  Search: <Search />,
  LayoutDashboard: <LayoutDashboard />,
  Trophy: <Trophy />,
  FileText: <FileText />,
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-16 bg-white sm:py-16 sm:mt-20 mx-auto mt-16 px-6 max-w-2xl lg:px-8 lg:mt-24 lg:max-w-5xl">
      {/* <Logos /> */}
      <IntroParagraph />
      <Projects />
      <References />
      <SpotifySection />
    </div>
  );
}
