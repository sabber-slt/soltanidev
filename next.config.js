/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
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
    scope: '/app',
    dynamicStartUrl: false,
  },
});

module.exports = nextConfig;
