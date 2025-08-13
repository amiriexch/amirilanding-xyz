import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "j11uzvk9johchpyz.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
