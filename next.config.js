/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["i.scdn.co"], // Spotify Image domain
  },
};

module.exports = nextConfig;
