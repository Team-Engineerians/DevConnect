/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {

    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Suppress browser extension warnings
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;