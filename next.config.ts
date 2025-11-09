import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/v0-model-united-nations-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/v0-model-united-nations-website" : "",
}

export default nextConfig
