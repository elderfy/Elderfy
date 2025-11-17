import Link from 'next/link';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Elders - Share Your Wisdom | Elderfy',
  description: 'Your life experiences, skills, and knowledge are precious cultural resources. Join Elderfy to share your legacy, earn income, and be celebrated for your wisdom.',
};

export default function ForEldersPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-warmOrange-500 via-warmPurple-500 to-sage-600 rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative px-8 md:px-16 py-16 md:py-24 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Your Wisdom Is a <span className="text-warmOrange-100">Treasure</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed opacity-95 animate-fade-in-up delay-100">
              Society has forgotten something precious: <strong>the irreplaceable value of your life experiences</strong>.
            </p>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 animate-fade-in-up delay-200">
              Every day, decades of knowledge, hard-earned skills, and cultural wisdom disappear when elders pass without sharing their stories. This isn't just a loss—it's a crisis.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
              <Link href="/register">
                <Button variant="secondary" size="large" className="bg-white text-warmOrange-700 hover:bg-warmOrange-50 text-2xl px-12 py-6">
                  ✨ Share Your Legacy
                </Button>
              </Link>
              <Link href="/tutorials">
                <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10 text-2xl px-12 py-6">
                  📚 How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-sage-200">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">💔</span>
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              A Cultural Crisis We Can't Ignore
            </h2>
          </div>

          <div className="space-y-8 text-xl md:text-2xl text-sage-700 leading-relaxed">
            <p>
              Modern society has made a terrible mistake: <strong className="text-sage-900">we've stopped listening to our elders</strong>.
            </p>

            <p>
              In our rush toward "progress," we've lost something irreplaceable—the wisdom that comes only from living a full life. The grandmother who survived the Depression and built a business from nothing. The grandfather who mastered a craft over 50 years. The teacher who shaped generations of students. The artist who developed their unique voice through decades of practice.
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-warmOrange-700 bg-warmOrange-50 p-6 rounded-2xl border-l-4 border-warmOrange-500">
              Your experiences aren't just memories—they're precious cultural resources that shouldn't be lost.
            </p>

            <p>
              Every time an elder passes without sharing their knowledge, we lose practical skills, cultural traditions, hard-earned life lessons, and historical perspectives that cannot be found in books or on the internet.
            </p>
          </div>
        </div>
      </div>

      {/* The Solution Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-warmOrange-200">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">🌟</span>
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Elderfy: Where Your Wisdom Matters
            </h2>
          </div>

          <div className="space-y-8 text-xl md:text-2xl text-sage-700 leading-relaxed">
            <p>
              <strong className="text-sage-900">Elderfy was created to solve this crisis</strong>. We built a platform where your life experiences, skills, and knowledge are celebrated, preserved, and valued—both culturally and financially.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-warmOrange-200">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-3">Cultural Honor</h3>
                <p className="text-lg text-sage-700">
                  A platform where your wisdom is the star, not an afterthought. You're recognized as an <strong>Elder</strong>—a title of respect and authority.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-warmPurple-200">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-3">Financial Value</h3>
                <p className="text-lg text-sage-700">
                  Earn income through donations and subscriptions. This isn't charity—people pay because <strong>your wisdom has real value</strong>.
                </p>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-warmPurple-700 bg-warmPurple-50 p-6 rounded-2xl border-l-4 border-warmPurple-500">
              When people support you on Elderfy, they're saying: "Your life experience matters. Your knowledge is worth paying for. Your wisdom deserves to be preserved."
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
            Why Join Elderfy?
          </h2>
          <p className="text-2xl text-sage-600">
            Share your legacy, earn income, and be celebrated for who you are
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warmOrange-200 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Share Your Legacy</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Preserve your stories, skills, and knowledge for future generations. Create videos, write articles, share music, or display your art. Your legacy will live on.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warmPurple-200 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">💵</div>
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Earn Meaningful Income</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Receive donations and subscription payments from people who value your wisdom. This is real income that recognizes your knowledge has market value.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-sage-200 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">👑</div>
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Be Recognized as an Elder</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Not a "senior" or "retiree"—an <strong>Elder</strong>. A title of respect that acknowledges your accumulated wisdom and life experience.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warmOrange-200 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Connect With Learners</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Engage with people who genuinely want to learn from you. Build meaningful connections with those seeking your specific expertise and experience.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warmPurple-200 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Share Your Way</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Videos, writing, music, art—share your wisdom in whatever form feels right to you. We support multiple formats to honor your unique gifts.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-sage-200 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-sage-900 mb-4">Make a Lasting Impact</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Your knowledge can help someone start a business, heal a relationship, master a craft, or navigate life's challenges. Your impact extends far beyond your lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* This Isn't Charity Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">💎</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              This Isn't Charity—It's Value Exchange
            </h2>
          </div>

          <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
            <p>
              When someone pays you on Elderfy, <strong>they're not giving you charity</strong>. They're investing in knowledge they can't get anywhere else.
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Your gardening wisdom comes from 40 years of growing food—that's worth paying for.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Your relationship advice comes from a 50-year marriage—that's priceless.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Your business insights come from decades of real-world experience—that has real market value.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Your cultural traditions come from generations of your family—that's irreplaceable heritage.</span>
              </li>
            </ul>

            <p className="text-2xl font-semibold bg-white/10 p-6 rounded-2xl border-l-4 border-white">
              Young people pay thousands for courses, coaching, and consultants. Your wisdom is just as valuable—often more so.
            </p>
          </div>
        </div>
      </div>

      {/* How Elderfy is Different Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-warmOrange-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              How Elderfy is Different
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start p-6 bg-warmOrange-50 rounded-2xl border-l-4 border-warmOrange-500">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">Elder-First Design</h3>
                <p className="text-lg text-sage-700">
                  Unlike social media platforms built for young people, Elderfy was designed from the ground up for you. Large text, clear buttons, simple navigation, and step-by-step guides.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-warmPurple-50 rounded-2xl border-l-4 border-warmPurple-500">
              <div className="text-4xl">🎓</div>
              <div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">Wisdom-Centered Community</h3>
                <p className="text-lg text-sage-700">
                  This isn't a place for viral trends or mindless scrolling. It's a community that values depth, experience, and genuine knowledge over youth and novelty.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-sage-50 rounded-2xl border-l-4 border-sage-500">
              <div className="text-4xl">💰</div>
              <div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">You Get Paid Directly</h3>
                <p className="text-lg text-sage-700">
                  No ads, no algorithms, no exploitation. People who value your wisdom pay you directly through donations and subscriptions. You keep the majority of what you earn.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-warmOrange-50 rounded-2xl border-l-4 border-warmOrange-500">
              <div className="text-4xl">🛡️</div>
              <div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">Respectful Environment</h3>
                <p className="text-lg text-sage-700">
                  No trolls, no ageism, no disrespect. Elderfy is a safe space where your contributions are honored and your dignity is protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-warmOrange-500 to-warmPurple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">🚀</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Getting Started is Simple
            </h2>
            <p className="text-2xl opacity-95">
              We've made it as easy as possible to begin sharing your wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Create Your Profile</h3>
              <p className="text-lg opacity-95">
                Tell us about yourself, your expertise, and what you want to share. Add a photo and a brief bio.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Share Your First Content</h3>
              <p className="text-lg opacity-95">
                Upload a video, write an article, share your music, or display your art. Start with whatever feels right.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Start Earning</h3>
              <p className="text-lg opacity-95">
                Set up payment processing and begin receiving donations and subscriptions from people who value your wisdom.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl mb-8">
              Need help? We have <Link href="/tutorials" className="underline font-bold">step-by-step video tutorials</Link> designed specifically for seniors.
            </p>
            <Link href="/register">
              <Button variant="secondary" size="large" className="bg-white text-warmOrange-700 hover:bg-warmOrange-50 text-3xl px-16 py-8 shadow-2xl">
                🌟 Join Elderfy Today
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Final Message Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white to-warmOrange-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-warmOrange-200">
          <span className="text-6xl mb-6 block">💝</span>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-8">
            Your Wisdom Deserves to Be Celebrated
          </h2>
          <p className="text-xl md:text-2xl text-sage-700 leading-relaxed mb-8">
            You've lived a full life. You've learned hard lessons, mastered valuable skills, and gained perspectives that only decades of living can provide. That wisdom shouldn't be lost.
          </p>
          <p className="text-xl md:text-2xl text-sage-700 leading-relaxed mb-8">
            <strong className="text-sage-900">Elderfy honors you</strong>—not as a person who used to contribute to society, but as someone who <strong className="text-sage-900">continues to have immense value to share</strong>.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-warmOrange-700 mb-12">
            Join us in preserving what matters most: human wisdom passed from one generation to the next.
          </p>
          <Link href="/register">
            <Button variant="primary" size="large" className="text-2xl px-12 py-6">
              ✨ Start Sharing Your Wisdom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
