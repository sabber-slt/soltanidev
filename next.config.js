/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const withVideos = require('next-videos');

module.exports = withVideos();
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
    dynamicStartUrl: false,
  },
});

module.exports = nextConfig;
