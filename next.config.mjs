/** @type {import('next').NextConfig} */

const repo = "/survey-visualizer"

const nextConfig = {
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
};

export default nextConfig;
