/** @type {import('next').NextConfig} */

const repo = "/survey-visualizer"

const nextConfig = {
  basePath: "",
  assetPrefix: "",
  output: "export",
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
};

export default nextConfig;
