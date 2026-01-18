/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Keep the Turbopack config for Next.js 16
  turbopack: {},

  // 2. Allow images from BOTH Firebase and Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 3. Keep your existing webpack config
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;