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
    <div className="space-y-32 page-transition">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-24 bg-gradient-to-br from-terraCotta-500 via-warmOchre-400 to-terraCotta-400 text-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] px-8 md:px-12 overflow-hidden animate-scale-in">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative z-10">
          <div className="text-7xl mb-8 animate-bounce">🌟</div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 drop-shadow-lg leading-tight">
            Welcome to Elderfy
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            Where wisdom meets the world. Share your stories, creativity, and life experiences with people who care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/elders">
              <Button variant="secondary" size="large" className="bg-white text-terraCotta-700 hover:bg-cream-100 shadow-xl">
                🔍 Discover Wisdom
              </Button>
            </Link>
            <Link href="/upload">
              <Button variant="outline" size="large" className="bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white shadow-lg">
                ✨ Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Elders Section */}
      <section className="scroll-mt-32">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-terraCotta-300"></div>
            <span className="text-5xl">👥</span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-terraCotta-300"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-forestGreen-900 mb-6 leading-tight">
            Featured Elders
          </h2>
          <p className="text-2xl text-forestGreen-600 max-w-2xl mx-auto leading-relaxed">
            Meet the wonderful people sharing their wisdom and experience
          </p>
          <div className="mt-8">
            <Link href="/elders">
              <Button variant="outline" size="medium" className="border-2 border-terraCotta-400 text-terraCotta-700 hover:bg-terraCotta-50">
                View All Elders →
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {featuredElders.map((elder, index) => (
            <div key={elder.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ElderCard elder={elder} />
            </div>
          ))}
        </div>
      </section>

      {/* Recent Content Section */}
      <section className="bg-gradient-to-br from-cream-100 via-warmOchre-50 to-terraCotta-50 rounded-[2.5rem] p-10 md:p-16 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border-2 border-warmOchre-100">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-warmOchre-300"></div>
            <span className="text-5xl">✨</span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-warmOchre-300"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-forestGreen-900 mb-6 leading-tight">
            Recent Wisdom
          </h2>
          <p className="text-2xl text-forestGreen-600 max-w-2xl mx-auto leading-relaxed">
            Fresh insights and creativity from our community of honored elders
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
      <section className="bg-white rounded-[2.5rem] shadow-[0_20px_70px_rgba(0,0,0,0.12)] p-10 md:p-16 border-[3px] border-terraCotta-100">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-forestGreen-300"></div>
            <span className="text-5xl">🌱</span>
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-forestGreen-300"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-forestGreen-900 mb-8 leading-tight">
            How Elderfy Works
          </h2>
          <p className="text-2xl text-forestGreen-600 max-w-3xl mx-auto leading-relaxed">
            It's simple to start sharing your wisdom and connecting with people who deeply value your experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-terraCotta-50 to-warmOchre-50 border-[3px] border-terraCotta-200/50 animate-fade-in-up hover:shadow-xl transition-all duration-500 cursor-default">
            <div className="text-8xl mb-8 inline-block transform hover:scale-110 hover:rotate-3 transition-all duration-500">👤</div>
            <h3 className="text-3xl font-serif font-bold mb-5 text-forestGreen-900">Create Your Profile</h3>
            <p className="text-xl text-forestGreen-700 leading-relaxed">
              Share your story, expertise, and what you are passionate about with the community.
            </p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-warmOchre-50 to-cream-100 border-[3px] border-warmOchre-200/50 animate-fade-in-up animate-delay-100 hover:shadow-xl transition-all duration-500 cursor-default">
            <div className="text-8xl mb-8 inline-block transform hover:scale-110 hover:rotate-3 transition-all duration-500">📹</div>
            <h3 className="text-3xl font-serif font-bold mb-5 text-forestGreen-900">Share Your Wisdom</h3>
            <p className="text-xl text-forestGreen-700 leading-relaxed">
              Upload videos, write articles, share music, or display your art for others to enjoy.
            </p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-forestGreen-50 to-cream-100 border-[3px] border-forestGreen-200/50 animate-fade-in-up animate-delay-200 hover:shadow-xl transition-all duration-500 cursor-default">
            <div className="text-8xl mb-8 inline-block transform hover:scale-110 hover:rotate-3 transition-all duration-500">💝</div>
            <h3 className="text-3xl font-serif font-bold mb-5 text-forestGreen-900">Receive Support</h3>
            <p className="text-xl text-forestGreen-700 leading-relaxed">
              People can support you through donations or monthly subscriptions to show appreciation.
            </p>
          </div>
        </div>
      </section>

      {/* Elder Registration CTA */}
      <section className="bg-gradient-to-br from-terraCotta-600 via-warmOchre-500 to-forestGreen-600 rounded-[2.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.25)] p-12 md:p-20 text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>

        <div className="relative z-10">
          <div className="text-8xl mb-8">🚀</div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Ready to Share Your Wisdom?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed font-light">
            Join our community of honored elders sharing their life experiences, expertise, and creativity while earning income.
          </p>
          <Link href="/register">
            <Button variant="secondary" size="large" className="bg-white text-forestGreen-800 hover:bg-cream-100 text-2xl px-14 py-7 shadow-2xl font-semibold">
              Register as an Elder
            </Button>
          </Link>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xl opacity-95">
            <span className="flex items-center gap-2">
              <span className="text-2xl">✓</span> Free to join
            </span>
            <span className="hidden sm:inline text-white/50">•</span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">✓</span> Start earning immediately
            </span>
            <span className="hidden sm:inline text-white/50">•</span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">✓</span> Share on your terms
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
