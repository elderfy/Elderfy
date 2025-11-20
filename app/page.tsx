import Link from 'next/link';
import ElderCard from '@/components/ElderCard';
import ContentCard from '@/components/ContentCard';
import Button from '@/components/Button';
import { getAllElders, getAllContent, getElderById } from '@/lib/data';
import { getContentViews } from '@/lib/analytics';

export default function HomePage() {
  const elders = getAllElders();
  const content = getAllContent();
  const featuredElders = elders.slice(0, 3);
  const recentContent = content.slice(0, 4);

  return (
    <div className="space-y-32 page-transition pb-24">
      {/* Hero Section */}
      <section className="relative text-center py-32 md:py-40 bg-gradient-to-br from-sage-500 via-sage-600 to-warmBeige-600 text-white rounded-3xl shadow-soft-xl px-8 md:px-12 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight tracking-tight">
            Welcome to Elderfy
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-normal opacity-95">
            Where wisdom meets the world. Share your stories, creativity, and life experiences with people who care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/elders">
              <Button variant="secondary" size="large" className="bg-white text-sage-800 hover:bg-warmBeige-50 shadow-soft-md hover:shadow-soft-lg">
                Discover Wisdom
              </Button>
            </Link>
            <Link href="/upload">
              <Button variant="outline" size="large" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white">
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Elders Section */}
      <section className="scroll-mt-32">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-sage-900 leading-tight tracking-tight">
            Featured Elders
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto leading-relaxed">
            Meet the wonderful people sharing their wisdom and experience
          </p>
          <div className="mt-8">
            <Link href="/elders">
              <Button variant="outline" size="medium" className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50">
                View All Elders
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredElders.map((elder, index) => (
            <div key={elder.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ElderCard elder={elder} />
            </div>
          ))}
        </div>
      </section>

      {/* Recent Content Section */}
      <section className="bg-gradient-to-br from-warmBeige-50 via-sage-50 to-warmBeige-100 rounded-3xl p-12 md:p-20 shadow-soft-lg border border-sage-100">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-sage-900 leading-tight tracking-tight">
            Recent Wisdom
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto leading-relaxed">
            Fresh insights and creativity from our community of honored elders
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentContent.map((item, index) => {
            const elder = getElderById(item.elderId);
            const views = getContentViews(item.id);
            return (
              <div key={item.id} style={{ animationDelay: `${index * 100}ms` }}>
                <ContentCard
                  content={item}
                  elderName={elder?.name}
                  views={views}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white rounded-3xl shadow-soft-lg p-12 md:p-20 border border-sage-100">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-sage-900 leading-tight tracking-tight">
            How Elderfy Works
          </h2>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto leading-relaxed">
            It's simple to start sharing your wisdom and connecting with people who deeply value your experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-sage-50 to-warmBeige-50 border border-sage-100 hover:shadow-soft-md transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-sage-600 rounded-2xl flex items-center justify-center shadow-soft">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sage-900">Create Your Profile</h3>
            <p className="text-base text-sage-600 leading-relaxed">
              Share your story, expertise, and what you are passionate about with the community.
            </p>
          </div>
          <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-warmBeige-50 to-sage-50 border border-sage-100 hover:shadow-soft-md transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-softTerracotta-500 rounded-2xl flex items-center justify-center shadow-soft">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sage-900">Share Your Wisdom</h3>
            <p className="text-base text-sage-600 leading-relaxed">
              Upload videos, write articles, share music, or display your art for others to enjoy.
            </p>
          </div>
          <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-sage-50 to-warmBeige-50 border border-sage-100 hover:shadow-soft-md transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-warmBeige-600 rounded-2xl flex items-center justify-center shadow-soft">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sage-900">Receive Support</h3>
            <p className="text-base text-sage-600 leading-relaxed">
              People can support you through donations or monthly subscriptions to show appreciation.
            </p>
          </div>
        </div>
      </section>

      {/* Elder Registration CTA */}
      <section className="bg-gradient-to-br from-sage-600 via-sage-700 to-softTerracotta-600 rounded-3xl shadow-soft-xl p-16 md:p-24 text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Ready to Share Your Wisdom?
          </h2>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed font-normal">
            Join our community of honored elders sharing their life experiences, expertise, and creativity while earning income.
          </p>
          <Link href="/register">
            <Button variant="secondary" size="large" className="bg-white text-sage-800 hover:bg-warmBeige-50 text-lg px-12 py-4 shadow-soft-lg font-semibold">
              Register as an Elder
            </Button>
          </Link>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-base opacity-90">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free to join
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Start earning immediately
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Share on your terms
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
