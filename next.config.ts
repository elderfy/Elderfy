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

  // Use default Next.js behavior (no trailing slashes) for better compatibility
  trailingSlash: false,

  // Enable system TLS certificates for Google Fonts
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },

  // PWA configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  // Ensure service worker and manifest are accessible
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
      {
        source: '/manifest.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
