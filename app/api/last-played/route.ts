import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get('refresh') === 'true';
  const code = searchParams.get('code');
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

  if (!client_id || !client_secret) {
    return NextResponse.json(
      { error: 'Spotify credentials not configured' },
      { status: 500 }
    );
  }

  // If forceRefresh is true but no code provided, return auth URL
  if (forceRefresh && !code) {
    const scope = 'user-read-recently-played user-read-currently-playing';
    const state = Math.random().toString(36).substring(2, 15) + 
                  Math.random().toString(36).substring(2, 15);
    
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.set('client_id', client_id);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('redirect_uri', redirect_uri || `${request.nextUrl.origin}/api/last-played`);
    authUrl.searchParams.set('scope', scope);
    authUrl.searchParams.set('state', state);

    return NextResponse.json({
      auth_url: authUrl.toString(),
      message: 'Visit the auth_url to get a new refresh token',
      state: state
    });
  }

  // If no refresh token and no code, return error
  if (!refresh_token && !code) {
    return NextResponse.json(
      { 
        error: 'No refresh token available. Use ?refresh=true to get a new one',
        auth_url: `${request.nextUrl.origin}/api/last-played?refresh=true`
      },
      { status: 400 }
    );
  }

  try {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    
    // Determine which flow to use
    const isCodeFlow = !!code;
    const bodyParams: Record<string, string> = isCodeFlow 
      ? {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirect_uri || `${request.nextUrl.origin}/api/last-played`,
        }
      : {
          grant_type: "refresh_token",
          refresh_token: refresh_token!,
        };

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(bodyParams).toString(),
      next: {
        revalidate: 60 * 60,
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Spotify token refresh failed:', errorData);
      return NextResponse.json({ 
        error: 'Failed to refresh token',
        details: errorData 
      }, { status: response.status });
    }

    const data = await response.json();

    // If this was a code flow, return the new tokens
    if (isCodeFlow) {
      return NextResponse.json({
        message: 'New tokens obtained successfully',
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
        scope: data.scope,
        instructions: 'Update your SPOTIFY_REFRESH_TOKEN environment variable with the new refresh_token'
      });
    }

    // Fetch recently played tracks (only for refresh token flow)
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
