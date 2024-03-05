import Image from "next/image";
import Link from "next/link";
import { Cardlist } from "@/app/_components/CardList";
import SpotifyPlaylist from "@/app/_components/SpotifyEmbed";
import { Footer } from "@/app/_components/footer";
import { Socials } from "@/app/_components/Socials";
import { ExternalLink } from "lucide-react";
import Loom from "@/app/_components/Loom";
import { ModeToggle } from "@/app/_components/Modetoggle";

export default function Home() {
  return (
    <div className="min-h-screen text-center">
      <main className="flex flex-col sm:p-24 items-center justify-center space-y-6 px-6">
        <div className="header flex flex-col space-y-10 max-w-xl my-10">
          <ModeToggle />
          <div className="name-and-intro text-justify sm:px-6">
            <h1 className="heading text-center">Paulo Ramirez</h1>
            <p className="leading-8 p-6 max-w-xl text-justify">
              Welcome to my personal portfolio. 👋🏼 I&apos;m a Software
              Engineering student based in Berlin and currently working as a
              Product Manager at an Early-Stage Startup. My usual Techstack
              consists of: Next.js, TypeScript, tRPC, TailwindCSS (T3 Stack),
              Express.js, Postgres.
            </p>
          </div>
          <div className="items-center">
            <Loom />
          </div>
        </div>

        <div className="socials-and-projects flex flex-row text-center w-full sm:max-w-xl">
          <div className="projects flex flex-col justify-between w-full items-center">
            <h1 className="heading p-10">Projects</h1>
            <ul>
              <Cardlist />
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row space-x-2 items-center justify-center py-4">
            <Socials />
          </div>
        </div>
        <div className=" flex flex-col space-y-8">
          <h1 className="p-8 leading-8">
            It&apos;s recommended to turn this playlist on while looking through
            the projects ;)
          </h1>
          <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/4VXYH0kB0aahjstiia8bT8?utm_source=generator&theme=0" />
        </div>
        <Footer />
      </main>
    </div>
  );
}
