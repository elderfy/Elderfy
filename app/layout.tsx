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
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white mt-16">
          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-xl">
              &copy; 2024 Elderfy. Connecting generations through shared wisdom.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
