import Image from "next/image";
import Link from "next/link";
import { Cardlist } from "./_components/cardlist";
import SpotifyPlaylist from "./_components/spotifyembed";
import Phone from "./_components/iPhone";
import { Footer } from "./_components/footer";
import { Socials } from "./_components/socials";
import { ExternalLink } from "lucide-react";
import Loom from "./_components/loom";

export default function Home() {
  return (
    <div className="min-h-screen text-center">
      <main className="flex flex-col p-24 items-center justify-center space-y-20">
        <div className="header flex flex-col space-y-20 justify-between max-w-xl">
          <div className="name-and-intro text-justify">
            <h1 className="heading text-center my-8">Paulo Ramirez</h1>
            <div className="leading-8">
              <p>
                Welcome to my personal portfolio. 👋🏼 I&apos;m a Software
                Engineering student based in Berlin and currently working as a
                Product Manager at an Early-Stage Startup. My usual Techstack
                consists of: Next.js, TypeScript, tRPC, TailwindCSS (T3 Stack),
                Express.js, Postgres.
              </p>
            </div>
          </div>
          <div className="items-center">
            <Loom />
          </div>
        </div>

        <div className="socials-and-projects flex flex-row text-center max-w-xl">
          <div className="projects flex flex-col justify-between w-full items-center">
            <h1 className="heading p-10">Projects</h1>
            <ul>
              <Cardlist />
            </ul>
          </div>
        </div>
        <div className=" flex flex-col space-y-8">
          <div className="flex flex-row space-x-2 items-center justify-center py-4">
            <ExternalLink />
            <Link
              href="https://tailwindcss.com/docs/width"
              className="hover:underline"
            >
              Download CV
            </Link>
          </div>
          <Socials />
          <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/4VXYH0kB0aahjstiia8bT8?utm_source=generator&theme=0" />
        </div>
        <Footer />
      </main>
    </div>
  );
}
