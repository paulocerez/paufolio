import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json(
      { error: 'Spotify credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }).toString(),
      next: {
        revalidate: 60 * 60,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to refresh token' });
    }

    const data = await response.json();

    // Fetch recently played tracks
    const recentlyPlayed = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.access_token}`,
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    if (!recentlyPlayed.ok) {
      return NextResponse.json({ error: 'Failed to fetch recently played tracks' });
    }

    const recentlyPlayedData = await recentlyPlayed.json();
    
    if (!recentlyPlayedData.items || recentlyPlayedData.items.length === 0) {
      return NextResponse.json({ error: 'No recently played tracks found' });
    }

    const track = recentlyPlayedData.items[0].track;
    const playedAt = new Date(recentlyPlayedData.items[0].played_at);
    const minutesAgo = Math.floor((Date.now() - playedAt.getTime()) / 60000);

    return NextResponse.json({
      song: {
        name: track.name,
        artists: track.artists.map((artist: any) => ({
          name: artist.name,
          id: artist.id,
          uri: artist.external_urls.spotify,
        })),
        album: {
          name: track.album.name,
          images: track.album.images,
        },
        external_urls: track.external_urls,
        played_at: recentlyPlayedData.items[0].played_at,
        duration_ms: track.duration_ms,
        preview_url: track.preview_url,
      },
      played_at: recentlyPlayedData.items[0].played_at,
      minutes_ago: minutesAgo,
    });

  } catch (error) {
    console.error('Error fetching last played song:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
