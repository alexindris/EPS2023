/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['s3-storage'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
