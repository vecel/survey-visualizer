/** @type {import('next').NextConfig} */

const repo = "/survey-visualizer"

const nextConfig = {
  basePath: repo,
  assetPrefix: repo,
  // output: "export",
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //      source: `/survey-visualizer/_next/data/:path*`,
  //      destination: '/_next/data/:path*'
  //     },
  //   ]
  // },
};

export default nextConfig;
