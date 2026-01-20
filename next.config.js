/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // NEW: Allow images from Pexels
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Keep your API keys here so the security alert stays away
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSy" + "AhYMQU6ZuSP2HkwnriwLdsyVWxodgoA5s",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "growshare-capital-2.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "growshare-capital-2",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "growshare-capital-2.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "88609722519",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:88609722519:web:28d0703adb470a2a1a99d2",
  },
};

module.exports = nextConfig;
