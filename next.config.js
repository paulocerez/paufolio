const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["i.scdn.co"], // Spotify Image domain
  },
};

module.exports = withNextVideo(nextConfig);
