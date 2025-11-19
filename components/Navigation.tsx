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
      <nav aria-label="Main navigation" className="bg-white/95 backdrop-blur-md border-b border-sage-100 shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu} aria-label="Elderfy home">
              <h1 className="text-3xl font-semibold text-sage-800 tracking-tight group-hover:text-sage-600 transition-colors duration-300">
                Elderfy
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              <Link
                href="/"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/elders"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                Elders
              </Link>
              <Link
                href="/for-elders"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                Why Join?
              </Link>
              <Link
                href="/analytics"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                Analytics
              </Link>
              <Link
                href="/tutorials"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                Tutorials
              </Link>
              <Link
                href="/faq"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 px-4 py-2 rounded-lg"
              >
                About
              </Link>
              <Link
                href="/upload"
                className="ml-4 bg-sage-600 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-sage-700 shadow-soft hover:shadow-soft-md transition-all duration-200"
              >
                Share Your Wisdom
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-lg hover:bg-sage-50 transition-all duration-200"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5" aria-hidden="true">
                <span className={`block h-0.5 bg-sage-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-sage-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-sage-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-sage-900/20 backdrop-blur-sm z-40 lg:hidden"
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
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-soft-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-sage-100">
            <h2 className="text-2xl font-semibold text-sage-900" id="mobile-menu-title">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-3 rounded-lg hover:bg-sage-50 transition-all duration-200"
              aria-label="Close mobile navigation menu"
            >
              <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex flex-col gap-2 p-6 overflow-y-auto" aria-labelledby="mobile-menu-title">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/elders"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              Elders
            </Link>
            <Link
              href="/for-elders"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              Why Join?
            </Link>
            <Link
              href="/analytics"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              Analytics
            </Link>
            <Link
              href="/tutorials"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              Tutorials
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/register"
              onClick={closeMenu}
              className="text-sage-700 text-lg font-medium py-4 px-6 rounded-xl hover:bg-sage-50 transition-all duration-200"
            >
              Register
            </Link>
            <Link
              href="/upload"
              onClick={closeMenu}
              className="text-white bg-sage-600 text-lg font-semibold py-4 px-6 rounded-xl hover:bg-sage-700 transition-all duration-200 shadow-soft mt-4"
            >
              Share Your Wisdom
            </Link>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-sage-100">
            <p className="text-sage-600 text-base text-center">
              Connecting generations through shared wisdom
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
