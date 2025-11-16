import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static export for Capacitor mobile app
  output: process.env.CAPACITOR_BUILD === 'true' ? 'export' : undefined,

  images: {
    // For static export, we need to use unoptimized images
    unoptimized: process.env.CAPACITOR_BUILD === 'true',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Disable trailing slashes for better compatibility
  trailingSlash: true,
};

export default nextConfig;
