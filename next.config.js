/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'pexels.com'],
    unoptimized: true,
  },
  // Removed experimental.appDir as it's no longer needed
};

module.exports = nextConfig;
