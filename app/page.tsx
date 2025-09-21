import Image from "next/image";
import Socials from "@/components/sections/Socials";
import AboutMe from "@/components/sections/AboutMe";
import Paragraph from "@/components/sections/Paragraph";
import LastPlayed from "@/components/spotify/LastPlayed";
import CompanyLogos from "@/components/sections/CompanyLogos";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <AboutMe />
            <LastPlayed />
            <Socials />
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/one.jpg"
              alt="Paulo Ramirez"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-16">
          <Paragraph />
        </div>
        <div className="mt-16">
          <CompanyLogos />
        </div>
        <div className="mt-24 pt-8">
          <p className="text-gray-500 text-sm">
            Made with 🎧 in Berlin
          </p>
        </div>
      </div>
    </main>
  );
}
