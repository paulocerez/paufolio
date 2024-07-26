"use client";

import { Artist } from "@/types/artists";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TopArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/top-artists");
        if (!response.ok) {
          throw new Error("Failed to fetch Top Artists");
        }
        const data = await response.json();
        setArtists(data.artists);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading)
    return (
      <>
        <div>...Loading...</div>
      </>
    );
  if (error)
    return (
      <>
        <div>Error: {error}</div>
      </>
    );

  return (
    <section className="text-center w-full">
      <h1 className="pb-8 text-gray-600">My Spotify Top Artists</h1>
      {artists.length > 0 ? (
        <ul className="flex flex-row">
          {artists.map((artist, index) => (
            <li key={index} className="w-full">
              <figure
                className="flex flex-col items-center space-y-4 py-2"
                style={index % 2 !== 0 ? { transform: "translateY(20px)" } : {}}
              >
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  width={artist.images[0]?.width / 20 || 36}
                  height={artist.images[0]?.height / 20 || 36}
                  className="rounded-md"
                />
                <figcaption>
                  <a
                    href={artist.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{artist.name}</strong>
                  </a>
                </figcaption>
                {/* <p>{artist.followers.total} Followers</p> */}
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <p>No artists found.</p>
      )}
    </section>
  );
}
