import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-bold hover:text-blue-200 transition-colors">
              Elderfy
            </h1>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xl font-semibold hover:text-blue-200 transition-colors px-4 py-2"
            >
              Home
            </Link>
            <Link
              href="/elders"
              className="text-xl font-semibold hover:text-blue-200 transition-colors px-4 py-2"
            >
              Elders
            </Link>
            <Link
              href="/upload"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg text-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Share Your Wisdom
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
