/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["i.scdn.co", "cdn.brandfetch.io", "framerusercontent.com", "cdn.prod.website-files.com"],
  },
};

module.exports = nextConfig;
