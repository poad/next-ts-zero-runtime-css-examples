const { withKumaUI } = require("@kuma-ui/next-plugin");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(withKumaUI(nextConfig));
