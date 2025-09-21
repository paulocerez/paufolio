"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";

interface LastPlayedSong {
  name: string;
  artists: Array<{
    name: string;
    id: string;
    uri: string;
  }>;
  album: {
    name: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
  };
  external_urls: {
    spotify: string;
  };
  played_at: string;
  duration_ms: number;
  preview_url?: string;
}

export default function LastPlayed() {
  const [song, setSong] = useState<LastPlayedSong | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [minutesAgo, setMinutesAgo] = useState<number | null>(null);

  useEffect(() => {
    const fetchLastPlayed = async () => {
      try {
        const response = await fetch("/api/last-played");
        if (!response.ok) {
          throw new Error("Failed to fetch last played song");
        }
        const data = await response.json();
        setSong(data.song);
        setMinutesAgo(data.minutes_ago);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastPlayed();
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center space-x-3 py-2">
        <div className="w-8 h-8 bg-gray-800 rounded animate-pulse"></div>
        <div className="flex-1 space-y-1">
          <div className="h-3 bg-gray-800 rounded animate-pulse w-32"></div>
          <div className="h-2 bg-gray-800 rounded animate-pulse w-24"></div>
        </div>
      </div>
    );
  
  if (error || !song) {
    return null; // Don't show anything on error or no song
  }

  return (
    <div className="py-2">
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-gray-500 text-xs font-light">Last played on</span>
        <SiSpotify className="w-3 h-3 text-green-500" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Image
          src={song.album.images[0]?.url || '/placeholder-album.png'}
          alt={`${song.name} album cover`}
          width={32}
          height={32}
          className="rounded"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <p className="text-gray-300 text-sm font-light truncate hover:underline duration-300">
              <a href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer">{song.name}</a>
            </p>
            <span className="text-gray-500 text-xs">
              by {song.artists[0]?.name}
            </span>
          </div>
          {minutesAgo !== null && (
            <p className="text-gray-500 text-xs">
              {minutesAgo === 0 ? 'Just now' : `${minutesAgo}m ago`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
