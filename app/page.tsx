"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, FileText, ArrowUpRight } from "lucide-react";
import { SiSpotify } from "react-icons/si";

interface LastPlayedSong {
  name: string;
  artists: Array<{ name: string; id: string; uri: string }>;
  album: { name: string; images: Array<{ url: string; height: number; width: number }> };
  external_urls: { spotify: string };
  played_at: string;
  duration_ms: number;
  preview_url?: string;
}

const companies = [
  { name: "Vetpal", url: "https://vetpal.de", role: "CTO", description: "Operating layer for vet clinics - Backed by angels" },
  { name: "telli (YC F24)", url: "https://telli.com", role: "Product Engineer & FDE", description: "AI Voice Agents - 3.6M Seed by Cherry & YC" },
  { name: "Ivy", url: "https://getivy.io.", role: "Software Engineer", description: "Open Banking & Crypto - 20M Series A by Creandum & Valar" },
  { name: "LANCH", url: "https://lanch.com", role: "Software Engineer", description: "Food Brands - 26M Series A by Felix Capital & HV" },
  { name: "Cardino", url: "https://cardino.de", role: "Product", description: "EV Marketplace - 4M Seed by Point Nine & Sequoia" },
  { name: "Enpal", url: "https://enpal.de", role: "Biz Dev", description: "Europe's fastest growing energy unicorn" },
  { name: "CODE University", url: "https://code.berlin", role: "B.Sc. Software Engineering", description: "Thesis on Transcribers" },
];

const socials = [
  { key: "linkedin", href: "https://www.linkedin.com/in/paulo-ramirez-cedenos/", label: "LinkedIn", icon: Linkedin },
  { key: "github", href: "https://github.com/paulocerez", label: "GitHub", icon: Github },
  { key: "cv", href: "https://drive.google.com/file/d/1cTDAVzdIPyeNbJCuJQ5GcManslPGO5Vb/view?usp=sharing", label: "Resume", icon: FileText },
];


const card = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E8E7E3",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)",
  borderRadius: "12px",
};

export default function Home() {
  const [song, setSong] = useState<LastPlayedSong | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [minutesAgo, setMinutesAgo] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/last-played")
      .then((r) => r.json())
      .then((data) => { setSong(data.song); setMinutesAgo(data.minutes_ago); })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#FAF8F4",
        backgroundImage: "radial-gradient(circle, rgba(175,162,142,0.35) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* Ambient orbs */}
      <div className="orb-1 absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(210,190,160,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="orb-2 absolute bottom-[-5%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(195,175,145,0.15) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="orb-3 absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(220,200,170,0.12) 0%, transparent 70%)", filter: "blur(35px)" }} />

      <div className="relative w-full max-w-2xl px-4 py-12 flex flex-col gap-2.5">

        {/* Hero */}
        <div className="animate-fade-up p-5 sm:p-6" style={card}>
          <div className="flex items-start justify-between gap-4 sm:gap-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-[36px] sm:text-[44px]" style={{ fontWeight: 800, letterSpacing: "-0.04em", color: "#1A1A18", lineHeight: 1.0 }}>
                Paulo Ramirez
              </h1>

              {/* Location */}
              <div className="flex items-center mt-1">
                <span style={{ fontSize: "12px", fontWeight: 500, color: "#B0AFA9", letterSpacing: "-0.01em" }}>
                  Berlin, Germany
                </span>
              </div>

              <p className="mt-4" style={{ fontSize: "13px", fontWeight: 400, color: "#706F6A", letterSpacing: "-0.015em", lineHeight: 1.7 }}>
                I&apos;m passionate about the intersection of humans and technology, constantly inspired by great user experience and seamless design. Currently, I&apos;m deeply interested in natural language processing, voice AI, and recommender systems. Beyond tech, I tend to talk about electronic &amp; latin music, and sports (often focusing on longevity).
              </p>
            </div>

            {/* Photo — polaroid, hidden on mobile */}
            <div className="hidden sm:block" style={{
              transform: "rotate(-2deg)",
              flexShrink: 0,
              backgroundColor: "#FFFFFF",
              padding: "6px 6px 18px 6px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              borderRadius: "2px",
            }}>
              <Image
                src="/three.png"
                alt="Paulo Ramirez"
                width={84}
                height={84}
                className="object-cover"
                style={{ display: "block", borderRadius: "1px" }}
                priority
              />
            </div>
          </div>

          {/* Footer row: socials + spotify */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4">
            <div className="flex items-center gap-2">
              {socials.map(({ key, href, label, icon: Icon }) => (
                <Link
                  key={key}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-100 active:translate-y-px"
                  style={{
                    width: "28px", height: "28px",
                    borderRadius: "7px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E4E3DE",
                    boxShadow: "0 2px 0 #D8D6D0",
                    color: "#A8A7A2",
                  }}
                >
                  <Icon size={13} />
                </Link>
              ))}
            </div>

            {!isLoading && song && (
              <a
                href={song.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group min-w-0"
              >
                {minutesAgo !== null && minutesAgo <= 15 && (
                  <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#1DB954" }} />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: "#1DB954" }} />
                  </span>
                )}
                <Image
                  src={song.album.images[0]?.url || "/placeholder-album.png"}
                  alt={song.name}
                  width={24}
                  height={24}
                  style={{ borderRadius: "5px", flexShrink: 0 }}
                />
                <span
                  className="group-hover:underline"
                  style={{ fontSize: "12px", fontWeight: 500, color: "#A8A7A2", letterSpacing: "-0.01em", maxWidth: "130px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  {song.name}
                </span>
                <SiSpotify size={12} style={{ color: "#1DB954", flexShrink: 0 }} />
              </a>
            )}
          </div>
        </div>

        {/* Experience */}
        <div className="animate-fade-up-delay-2 overflow-hidden" style={card}>
          <div className="px-5 py-3">
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#C8C7C2", textTransform: "uppercase" }}>
              Experience
            </span>
          </div>

          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:grid sm:grid-cols-3 gap-0.5 sm:gap-4 px-5 py-3.5 sm:py-4 hover:bg-[#F7F6F2] transition-colors duration-100"
            >
              <div className="flex items-center gap-1.5">
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A18", letterSpacing: "-0.02em" }}>
                  {company.name}
                </span>
                <ArrowUpRight size={11} className="flex-shrink-0 opacity-30" />
              </div>
              <span style={{ fontSize: "12px", color: "#B8B7B2", letterSpacing: "-0.01em", lineHeight: 1.5 }}>
                {company.description}
              </span>
              <span
                className="sm:text-right"
                style={{ fontSize: "11px", fontWeight: 500, color: "#AAAAAA", letterSpacing: "-0.01em" }}
              >
                {company.role}
              </span>
            </a>
          ))}
        </div>

        <p className="animate-fade-up-delay-3 text-center mt-4" style={{ color: "#C8C7C2", fontSize: "13px", letterSpacing: "-0.02em" }}>
          Made with 🎧 in Berlin
        </p>

      </div>
    </main>
  );
}
