import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Elderfy - Share Wisdom Across Generations',
  description: 'A platform where seniors can share their wisdom through videos, writing, music, and art.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-sage-800 to-sage-900 text-white mt-20">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">🌟</span>
                <h3 className="text-3xl font-bold">Elderfy</h3>
              </div>
              <p className="text-xl text-warmOrange-200">
                Connecting generations through shared wisdom
              </p>
              <p className="text-lg text-sage-300 pt-4">
                &copy; 2024 Elderfy. Made with ❤️ for our elders.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
