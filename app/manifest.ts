import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Elderfy - Share Wisdom Across Generations',
    short_name: 'Elderfy',
    description: 'Share wisdom across generations. A platform where elders share their stories, creativity, and life experiences with people who care.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfcfb',
    theme_color: '#6b8f7f',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['social', 'education', 'lifestyle'],
    screenshots: [
      {
        src: '/screenshot-mobile.png',
        sizes: '540x720',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/screenshot-desktop.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  }
}
