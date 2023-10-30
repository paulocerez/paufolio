import Image from "next/image";
import Link from "next/link";
import { Cardlist } from "./_components/cardlist";
import SpotifyPlaylist from "./_components/spotifyembed";
import Phone from "./_components/iPhone";
import { Footer } from "./_components/footer";
import { Socials } from "./_components/socials";

export default function Home() {
  return (
    <div className="min-h-screen text-center">
      <main className="flex flex-col p-24 space-y-24">
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
          <div className="phone intro-card"></div>
        </div>

        <div className="socials-and-projects flex flex-row text-center">
          <div className=" projects flex flex-col justify-between w-full">
            <h1 className="heading p-10">Projects</h1>
            <ul>
              <Cardlist />
            </ul>
          </div>
          <div className="socials flex flex-col w-full">
            <h1 className="heading p-10">Socials</h1>
            <Socials />
            <SpotifyPlaylist src="https://open.spotify.com/embed/playlist/4VXYH0kB0aahjstiia8bT8?utm_source=generator&theme=0" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
