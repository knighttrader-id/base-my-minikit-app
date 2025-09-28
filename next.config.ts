import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination: "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e96-0135-13d3-da11-6601600a17b9",
        permanent: false, // false = 307 Temporary Redirect
      },
    ];
  }
};

export default nextConfig;