import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },
};

export default nextConfig;