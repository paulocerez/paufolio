import { Brain, Search, LayoutDashboard, Trophy, FileText } from "lucide-react";
import CardsFooter from "./(components)/SpotifySection";
import IntroParagraph from "./(components)/IntroParagraph";
import Projects from "./(components)/Projects";

const icons = {
  Brain: <Brain />,
  Search: <Search />,
  LayoutDashboard: <LayoutDashboard />,
  Trophy: <Trophy />,
  FileText: <FileText />,
};

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <IntroParagraph />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl bg-red-500">
          <Projects />
          <CardsFooter />
        </div>
      </div>
    </div>
  );
}
