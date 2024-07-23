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
        const response = await fetch("/api/spotify");
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
    <section className="flex flex-row">
      <div className="flex flex-row">
        <h1>My Spotify Top Artists</h1>
        {artists.length > 0 ? (
          <ul>
            {artists.map((artist, index) => (
              <li key={index}>
                <figure>
                  {/* <Image
                  src={artist.}
                  alt={artist.name}
                  style={{ width: 100, height: 100 }}
				  /> */}
                  <figcaption>
                    <strong>{artist.name}</strong>
                    <a
                      href={artist.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open on Spotify
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <p>No artists found.</p>
        )}
      </div>
    </section>
  );
}
