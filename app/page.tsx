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
      <main className="flex flex-col p-24 md:space-y-24">
        <div className="header flex flex-row space-y-10 justify-between">
          <div className="name-and-intro text-justify intro-card">
            <div className="space-y-4">
              <h1 className="heading">Paulo Ramirez</h1>
              <h2>Welcome to my personal portfolio. 👋🏼</h2>
            </div>
            <div className="max-w-sm leading-8">
              <p>
                I&apos;m a Software Engineering student based in Berlin and
                currently working as a Product Manager at an Early-Stage
                Startup. My usual Techstack consists of: Next.js, TypeScript,
                tRPC, TailwindCSS (T3 Stack), Express.js, Postgres.
              </p>
            </div>
          </div>
          <div className="phone intro-card">
            <Loom />
          </div>
        </div>

        <div className="socials-and-projects flex flex-row text-center">
          <div className=" projects flex flex-col justify-between w-full items-center">
            <h1 className="heading p-10">Projects</h1>
            <ul>
              <Cardlist />
            </ul>
          </div>
          <div className="flex flex-col w-full justify-between items-center bg-green-400">
            <h1 className="heading p-10">About me</h1>
          </div>
          <div className="flex flex-col items-center justify-center"></div>
        </div>
        <div className=" flex flex-col items-center space-y-12">
          <Socials />
          <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/4VXYH0kB0aahjstiia8bT8?utm_source=generator&theme=0" />
          <div className="flex flex-row space-x-2 items-center justify-center">
            <ExternalLink />
            <Link
              href="https://tailwindcss.com/docs/width"
              className="hover:underline"
            >
              Download CV
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
