'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Trap focus within menu when open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav aria-label="Main navigation" className="bg-gradient-to-r from-warmOrange-600 via-warmOrange-500 to-warmPurple-600 text-white shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu} aria-label="Elderfy home">
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🌟</span>
              <h1 className="text-4xl font-bold group-hover:text-warmOrange-100 transition-colors duration-300">
                Elderfy
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6" role="menubar">
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
                href="/for-elders"
                className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Why Join?
              </Link>
              <Link
                href="/analytics"
                className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Analytics
              </Link>
              <Link
                href="/tutorials"
                className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Tutorials
              </Link>
              <Link
                href="/faq"
                className="text-xl font-semibold hover:text-warmOrange-100 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                FAQ
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-4 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-10 h-10 flex flex-col justify-center gap-2" aria-hidden="true">
                <span className={`block h-1.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-3.5' : ''}`}></span>
                <span className={`block h-1.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-3.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-warmOrange-500 to-warmPurple-600 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-white/20">
            <div className="flex items-center gap-3">
              <span className="text-5xl" aria-hidden="true">🌟</span>
              <h2 className="text-4xl font-bold text-white" id="mobile-menu-title">Menu</h2>
            </div>
            <button
              onClick={closeMenu}
              className="p-4 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95"
              aria-label="Close mobile navigation menu"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex flex-col gap-4 p-6 overflow-y-auto" aria-labelledby="mobile-menu-title">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">🏠</span>
              <span>Home</span>
            </Link>
            <Link
              href="/elders"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">👵</span>
              <span>Elders</span>
            </Link>
            <Link
              href="/for-elders"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">💎</span>
              <span>Why Join?</span>
            </Link>
            <Link
              href="/analytics"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">📊</span>
              <span>Analytics</span>
            </Link>
            <Link
              href="/tutorials"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">📚</span>
              <span>Tutorials</span>
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">❓</span>
              <span>FAQ</span>
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">ℹ️</span>
              <span>About</span>
            </Link>
            <Link
              href="/register"
              onClick={closeMenu}
              className="text-white text-3xl font-bold py-6 px-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-95 border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">🚀</span>
              <span>Register</span>
            </Link>
            <Link
              href="/upload"
              onClick={closeMenu}
              className="text-warmOrange-700 text-3xl font-bold py-6 px-8 rounded-2xl bg-white hover:bg-warmOrange-50 transition-all duration-300 active:scale-95 shadow-xl border-2 border-white flex items-center justify-center gap-3"
            >
              <span aria-hidden="true">✨</span>
              <span>Share Your Wisdom</span>
            </Link>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t-2 border-white/20">
            <p className="text-white text-xl text-center opacity-90">
              Connecting generations through shared wisdom
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
