// import { NextResponse } from "next/server";
// import { Artist } from "@/types/artists";

// export async function GET() {
//   const client_id = process.env.SPOTIFY_CLIENT_ID;
//   const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
//   const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

//   if (!client_id || !client_secret || !refresh_token) {
//     return new NextResponse(
//       JSON.stringify({
//         error: "Configuration error: Missing Spotify credentials",
//       }),
//       { status: 500 }
//     );
//   }

//   const basic = Buffer.from(client_id + ":" + client_secret).toString("base64");

//   const getAccessToken = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       Authorization: "Basic " + basic,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       grant_type: "refresh_token",
//       refresh_token,
//     }).toString(),
//   });

//   if (!getAccessToken.ok) {
//     return NextResponse.json(
//       {
//         error: "Auth error: Access token could not be refreshed",
//       },
//       { status: 401 }
//     );
//   }

//   const { access_token } = await getAccessToken.json();

//   const getTopArtists = await fetch(
//     "https://api.spotify.com/v1/me/top/artists?limit=5",
//     {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + access_token,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!getTopArtists.ok) {
// 	return NextResponse.json(
// 	  {
// 		error: "Fetch error: Failed to fetch top artists",
// 	  },
// 	  { status: 500 }
// 	);
//   }
//   const topArtistsData = await getTopArtists.json();

//   const getCurrentlyPlaying = await fetch(
//     "https://api.spotify.com/v1/me/player/currently-playing",
//     {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + access_token,
//         "Content-Type": "application/json",
//       },
//       cache: "no-cache",
//     }
//   );

//   if (getCurrentlyPlaying.status === 204) {
// 	return NextResponse.json({ isPlaying: false });
// } else {
// 	const currentlyPlayingData = await getCurrentlyPlaying.json();

//   const artists: Artist[] = topArtistsData.items.map((artist: Artist) => ({
//     name: artist.name,
//     followers: {
//       href: artist.followers.href,
//       total: artist.followers.total,
//     },
//     uri: artist.uri,
//     images: artist.images,
//     imageUrl:
//       artist.images.length > 0 ? artist.images[0].url : "/spotify-logo.svg",
//   }));

//   console.log(artists);

//   return NextResponse.json({ artists }, { status: 200 });
// }
