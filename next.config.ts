import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zamoffadr.com',
      },
    ],
  },
};

export default nextConfig;
