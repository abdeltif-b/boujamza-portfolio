const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["github.com"],
  },
  pageExtensions: ["mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
