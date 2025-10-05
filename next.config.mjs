/** @type {import('next').NextConfig} */

const repo = "/survey-visualizer"

const nextConfig = {
  basePath: repo,
  assetPrefix: repo,
  output: "export",
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
