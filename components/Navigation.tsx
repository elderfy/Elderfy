import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-warmOrange-600 via-warmOrange-500 to-warmPurple-600 text-white shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🌟</span>
            <h1 className="text-4xl font-bold group-hover:text-warmOrange-100 transition-colors duration-300">
              Elderfy
            </h1>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/elders"
              className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Elders
            </Link>
            <Link
              href="/about"
              className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              About
            </Link>
            <Link
              href="/upload"
              className="bg-white text-warmOrange-700 px-6 py-3 rounded-xl text-xl font-bold hover:bg-warmOrange-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              ✨ Share Your Wisdom
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
