import ContactForm from '@/components/ContactForm';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warmOrange-50 via-white to-warmPurple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            About Elderfy
          </h1>
          <p className="text-2xl md:text-3xl font-light opacity-95">
            Honoring wisdom. Empowering elders. Enriching society.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warmPurple-600 opacity-20 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-warmOrange-200">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-8 text-center">
            Our Mission
          </h2>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-700">
            <p>
              <span className="text-3xl font-bold text-warmOrange-600">Elderfy</span> addresses
              a critical problem in modern society: <span className="font-semibold text-warmPurple-600">we're not retaining
              or appreciating the wisdom of our senior citizens</span>.
            </p>
            <p>
              After a lifetime of experiences, lessons learned, and knowledge gained, our elders
              often find themselves sidelined—their insights overlooked, their stories untold,
              and their financial security uncertain in post-employment years.
            </p>
            <p className="bg-gradient-to-r from-warmOrange-100 to-warmPurple-100 p-6 rounded-2xl border-l-8 border-warmOrange-500">
              <span className="text-2xl md:text-3xl font-bold text-warmPurple-700">We believe</span>
              <span className="block mt-2">that every elder has invaluable wisdom to share, and society
              desperately needs that wisdom—while seniors deserve both recognition and income for
              their contributions.</span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-12 text-center">
          How Elderfy Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-warmOrange-100 to-warmOrange-50 rounded-3xl p-8 shadow-xl border-4 border-warmOrange-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl mb-4">🎥</div>
            <h3 className="text-2xl md:text-3xl font-bold text-warmOrange-700 mb-4">Share Wisdom</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Elders share their life experiences, expertise, and knowledge through videos,
              writing, music, and art.
            </p>
          </div>

          <div className="bg-gradient-to-br from-warmPurple-100 to-warmPurple-50 rounded-3xl p-8 shadow-xl border-4 border-warmPurple-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl mb-4">💝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-warmPurple-700 mb-4">Earn Income</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Community members support elders through donations and monthly subscriptions,
              providing meaningful income.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-100 to-emerald-50 rounded-3xl p-8 shadow-xl border-4 border-sage-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-2xl md:text-3xl font-bold text-sage-700 mb-4">Preserve Legacy</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Stories, lessons, and wisdom are preserved for future generations, creating
              lasting impact beyond one lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-warmPurple-500 to-warmOrange-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Elderfy Is Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">📺</span> YouTube / Social Media
              </h3>
              <ul className="space-y-3 pl-14">
                <li className="opacity-90">• Designed for entertainment and virality</li>
                <li className="opacity-90">• Overwhelmed with content noise</li>
                <li className="opacity-90">• Algorithm favors youth demographics</li>
                <li className="opacity-90">• Elder voices get drowned out</li>
                <li className="opacity-90">• Complex interfaces for seniors</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">💳</span> Patreon / Crowdfunding
              </h3>
              <ul className="space-y-3 pl-14">
                <li className="opacity-90">• Generic platform for all creators</li>
                <li className="opacity-90">• No focus on elder wisdom</li>
                <li className="opacity-90">• Requires self-promotion skills</li>
                <li className="opacity-90">• Not optimized for senior users</li>
                <li className="opacity-90">• No mission-driven community</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white text-gray-800 rounded-2xl p-8 border-4 border-warmOrange-200">
            <h3 className="text-3xl md:text-4xl font-bold text-warmPurple-700 mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-5xl">✨</span> The Elderfy Difference
            </h3>
            <ul className="space-y-4 text-xl md:text-2xl">
              <li className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🎯</span>
                <span><strong className="text-warmOrange-600">Curated for Wisdom:</strong> Specifically designed
                to showcase elder knowledge, not entertainment</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">👴</span>
                <span><strong className="text-warmOrange-600">Senior-Friendly:</strong> Large text, simple
                navigation, and accessible design built for older users</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">💰</span>
                <span><strong className="text-warmOrange-600">Financial Security:</strong> Direct support model
                helping elders earn meaningful income</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🤝</span>
                <span><strong className="text-warmOrange-600">Community Values:</strong> Built on respect,
                appreciation, and intergenerational connection</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">📚</span>
                <span><strong className="text-warmOrange-600">Legacy Preservation:</strong> Focused on preserving
                wisdom for future generations, not fleeting content</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-warmPurple-200">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-8 text-center">
            The Impact We're Creating
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-warmOrange-600 flex items-center gap-3">
                <span>👵</span> For Elders
              </h3>
              <ul className="space-y-3 text-lg md:text-xl text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-warmOrange-500 text-2xl">✓</span>
                  <span>Financial security through meaningful income</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmOrange-500 text-2xl">✓</span>
                  <span>Recognition and appreciation for their wisdom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmOrange-500 text-2xl">✓</span>
                  <span>Sense of purpose and continued contribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmOrange-500 text-2xl">✓</span>
                  <span>Platform to share life's most valuable lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmOrange-500 text-2xl">✓</span>
                  <span>Legacy that lives beyond their lifetime</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-warmPurple-600 flex items-center gap-3">
                <span>🌍</span> For Society
              </h3>
              <ul className="space-y-3 text-lg md:text-xl text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-warmPurple-500 text-2xl">✓</span>
                  <span>Access to decades of real-world experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmPurple-500 text-2xl">✓</span>
                  <span>Preserved knowledge across generations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmPurple-500 text-2xl">✓</span>
                  <span>Stronger intergenerational connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmPurple-500 text-2xl">✓</span>
                  <span>Cultural and historical wisdom retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warmPurple-500 text-2xl">✓</span>
                  <span>Shift in how we value our elders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-warmOrange-100 to-warmPurple-100 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-warmOrange-300">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-12">
            Have questions? Want to join as an elder? Interested in partnering with us?
            We'd love to hear from you.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-3xl shadow-2xl p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-2xl md:text-3xl mb-8 opacity-95">
            Together, we can create a society that honors, supports, and learns from our elders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/"
              className="bg-white text-warmOrange-600 px-10 py-5 rounded-full text-2xl font-bold hover:bg-warmOrange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Elder Wisdom
            </a>
            <a
              href="/upload"
              className="border-4 border-white text-white px-10 py-5 rounded-full text-2xl font-bold hover:bg-white hover:text-warmPurple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Share Your Wisdom
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
