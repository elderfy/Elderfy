import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import { TextSizeProvider } from '@/contexts/TextSizeContext';
import TextSizeControl from '@/components/TextSizeControl';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

export const metadata: Metadata = {
  title: 'Elderfy - Share Wisdom Across Generations',
  description: 'A platform where seniors can share their wisdom through videos, writing, music, and art.',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Elderfy',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#6b8f7f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elderfy" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen">
        <ServiceWorkerRegistration />
        <TextSizeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          <PWAInstallPrompt />

          {/* Floating Text Size Control */}
          <div className="fixed bottom-6 right-6 z-30">
            <TextSizeControl />
          </div>

          <main id="main-content" className="container mx-auto px-4 py-12" tabIndex={-1}>
            {children}
          </main>
        <footer className="bg-gradient-to-r from-forestGreen-800 to-forestGreen-900 text-white mt-20">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">🌟</span>
                <h3 className="text-3xl font-bold">Elderfy</h3>
              </div>
              <p className="text-xl text-warmOchre-200">
                Connecting generations through shared wisdom
              </p>
              <div className="flex justify-center gap-6 pt-4">
                <a href="/" className="text-lg text-cream-300 hover:text-warmOchre-200 transition-colors">
                  Home
                </a>
                <a href="/elders" className="text-lg text-cream-300 hover:text-warmOchre-200 transition-colors">
                  Elders
                </a>
                <a href="/about" className="text-lg text-cream-300 hover:text-warmOchre-200 transition-colors">
                  About
                </a>
                <a href="/upload" className="text-lg text-cream-300 hover:text-warmOchre-200 transition-colors">
                  Share Wisdom
                </a>
              </div>
              <p className="text-lg text-cream-300 pt-4">
                &copy; 2024 Elderfy. Made with ❤️ for our elders.
              </p>
            </div>
          </div>
        </footer>
        </TextSizeProvider>
      </body>
    </html>
  );
}
