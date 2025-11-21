import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elderfy Logo Designs',
  description: 'View all Elderfy logo designs and brand assets',
};

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warmBeige-50 via-sage-50 to-warmBeige-100">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-semibold text-sage-900 mb-4 tracking-tight">
            Elderfy Logo Collection
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Explore our brand identity designs honoring wisdom, roots, and growth
          </p>
        </div>

        {/* Tree of Life - Full Color */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-soft-lg p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-sage-900 mb-3">Tree of Life (Full Color)</h2>
              <p className="text-sage-600">
                Balanced design symbolizing ancestral wisdom (roots) and growth (branches)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Extra Large */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Extra Large (240px)
                </p>
                <Image
                  src="/elderfy-tree-logo.svg"
                  alt="Elderfy Tree Logo - Extra Large"
                  width={240}
                  height={240}
                  className="w-60 h-60"
                />
              </div>

              {/* Large */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Large (160px)
                </p>
                <Image
                  src="/elderfy-tree-logo.svg"
                  alt="Elderfy Tree Logo - Large"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>

              {/* Medium */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Medium (80px)
                </p>
                <Image
                  src="/elderfy-tree-logo.svg"
                  alt="Elderfy Tree Logo - Medium"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>

              {/* Small */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Small (48px)
                </p>
                <Image
                  src="/elderfy-tree-logo.svg"
                  alt="Elderfy Tree Logo - Small"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
            </div>

            {/* On different backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center p-8 bg-sage-800 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-warmBeige-200 mb-4 font-semibold">
                  On Dark Background
                </p>
                <Image
                  src="/elderfy-tree-logo.svg"
                  alt="Elderfy Tree Logo - Dark Background"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>

              <div className="flex flex-col items-center p-8 bg-sage-600 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-white mb-4 font-semibold">
                  On Sage Background
                </p>
                <Image
                  src="/elderfy-tree-logo.svg"
                  alt="Elderfy Tree Logo - Sage Background"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>
            </div>

            {/* Color palette */}
            <div className="mt-8 p-6 bg-warmBeige-50 rounded-xl">
              <h3 className="text-sm font-semibold text-sage-900 mb-4 uppercase tracking-wider">Color Palette</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg shadow-soft" style={{backgroundColor: '#4A7C59'}}></div>
                  <div>
                    <p className="text-xs font-semibold text-sage-900">Forest Green</p>
                    <p className="text-xs text-sage-600 font-mono">#4A7C59</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg shadow-soft" style={{backgroundColor: '#8B4513'}}></div>
                  <div>
                    <p className="text-xs font-semibold text-sage-900">Terra Cotta</p>
                    <p className="text-xs text-sage-600 font-mono">#8B4513</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg shadow-soft" style={{backgroundColor: '#B8860B'}}></div>
                  <div>
                    <p className="text-xs font-semibold text-sage-900">Warm Ochre</p>
                    <p className="text-xs text-sage-600 font-mono">#B8860B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tree of Life - Monochrome */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-soft-lg p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-sage-900 mb-3">Tree of Life (Monochrome)</h2>
              <p className="text-sage-600">
                Single-color version for versatility and maximum compatibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Large (160px)
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Large"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Medium (80px)
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Medium"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Small (48px)
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Small"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Icon (32px)
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Favicon (24px)
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Favicon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center p-8 bg-sage-800 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-warmBeige-200 mb-4 font-semibold">
                  On Dark Background
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Dark"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>

              <div className="flex flex-col items-center p-8 bg-gradient-to-br from-softTerracotta-400 to-softTerracotta-500 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-white mb-4 font-semibold">
                  On Terracotta Background
                </p>
                <Image
                  src="/elderfy-tree-logo-mono.svg"
                  alt="Elderfy Tree Logo Mono - Terracotta"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lighthouse-Tree Hybrid */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-soft-lg p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-sage-900 mb-3">Lighthouse-Tree Hybrid</h2>
              <p className="text-sage-600">
                Combining guidance (lighthouse) with deep-rooted wisdom (tree)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Full Size (200x280)
                </p>
                <Image
                  src="/elderfy-logo.svg"
                  alt="Elderfy Lighthouse Logo - Full"
                  width={200}
                  height={280}
                  className="w-[200px] h-[280px]"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Medium (100x140)
                </p>
                <Image
                  src="/elderfy-logo.svg"
                  alt="Elderfy Lighthouse Logo - Medium"
                  width={100}
                  height={140}
                  className="w-[100px] h-[140px]"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Small (50x70)
                </p>
                <Image
                  src="/elderfy-logo.svg"
                  alt="Elderfy Lighthouse Logo - Small"
                  width={50}
                  height={70}
                  className="w-[50px] h-[70px]"
                />
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-warmBeige-50 to-sage-50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-sage-600 mb-4 font-semibold">
                  Icon (32x45)
                </p>
                <Image
                  src="/elderfy-logo.svg"
                  alt="Elderfy Lighthouse Logo - Icon"
                  width={32}
                  height={45}
                  className="w-[32px] h-[45px]"
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-col items-center p-8 bg-sage-800 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-warmBeige-200 mb-4 font-semibold">
                  On Dark Background
                </p>
                <Image
                  src="/elderfy-logo.svg"
                  alt="Elderfy Lighthouse Logo - Dark"
                  width={200}
                  height={280}
                  className="w-[200px] h-[280px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design Symbolism */}
        <section>
          <div className="bg-gradient-to-br from-sage-600 to-sage-700 rounded-2xl shadow-soft-xl p-12 text-white">
            <h2 className="text-3xl font-semibold mb-8 text-center">Design Symbolism</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Canopy/Branches</h3>
                <p className="text-warmBeige-100 text-sm">
                  Growth, wisdom shared, reaching outward to community
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Trunk/Tower</h3>
                <p className="text-warmBeige-100 text-sm">
                  Strength, stability, connection between generations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Roots/Foundation</h3>
                <p className="text-warmBeige-100 text-sm">
                  Ancestry, deep cultural knowledge, honoring the past
                </p>
              </div>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-warmBeige-100 leading-relaxed">
                These designs honor indigenous models of elder respect by giving equal visual weight to roots (ancestral wisdom)
                and branches (growth and sharing). The circular composition represents wholeness, life cycles, and the
                interconnectedness of generations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
