import Projects from "@/components/sections/Projects";
import Socials from "@/components/sections/Socials";
import AboutMe from "@/components/sections/AboutMe";
import Work from "@/components/sections/Work";
import TechStack from "@/components/TechStack";
import SpotifyPlaylist from "@/components/spotify/SpotifyPlaylist";
import Loom from "@/components/sections/Loom";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 h-full">
          <div className="space-y-16">
            <div className="flex flex-col space-y-4">
              <AboutMe />
              <Socials />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-16">
                <Projects />
                <TechStack />
              </div>
              <div className="space-y-16">
                <div className="flex flex-col space-y-4">
                  <Work />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center leading-8 p-10 text-gray-600">
          Made with 🎧 & ❤️ in Berlin.
        </p>
      </div>
    </main>
  );
}
