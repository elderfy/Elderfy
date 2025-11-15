import Link from 'next/link';
import ElderCard from '@/components/ElderCard';
import ContentCard from '@/components/ContentCard';
import Button from '@/components/Button';
import { getAllElders, getAllContent, getElderById } from '@/lib/data';

export default function HomePage() {
  const elders = getAllElders();
  const content = getAllContent();
  const featuredElders = elders.slice(0, 3);
  const recentContent = content.slice(0, 4);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative text-center py-16 bg-gradient-to-br from-warmOrange-500 via-warmOrange-400 to-warmPurple-500 text-white rounded-3xl shadow-2xl px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative z-10">
          <div className="text-7xl mb-6 animate-bounce">🌟</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to Elderfy
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Where wisdom meets the world. Share your stories, creativity, and life experiences with people who care.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/elders">
              <Button variant="secondary" size="large" className="bg-white text-warmOrange-700 hover:bg-warmOrange-50">
                🔍 Discover Wisdom
              </Button>
            </Link>
            <Link href="/upload">
              <Button variant="outline" size="large" className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 text-white">
                ✨ Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Elders Section */}
      <section>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-5xl font-bold text-sage-900 mb-2">Featured Elders</h2>
            <p className="text-xl text-sage-600">Meet the wonderful people sharing their wisdom</p>
          </div>
          <Link href="/elders">
            <Button variant="outline" size="medium">
              View All →
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredElders.map((elder) => (
            <ElderCard key={elder.id} elder={elder} />
          ))}
        </div>
      </section>

      {/* Recent Content Section */}
      <section className="bg-gradient-to-br from-warmPurple-50 to-warmOrange-50 rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-5xl font-bold text-sage-900 mb-3">Recent Wisdom</h2>
        <p className="text-xl text-sage-600 mb-10">Fresh insights and creativity from our community</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentContent.map((item) => {
            const elder = getElderById(item.elderId);
            return (
              <ContentCard
                key={item.id}
                content={item}
                elderName={elder?.name}
              />
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-warmOrange-200">
        <h2 className="text-5xl font-bold text-sage-900 mb-4 text-center">
          How Elderfy Works
        </h2>
        <p className="text-xl text-sage-600 text-center mb-12 max-w-2xl mx-auto">
          It's simple to start sharing your wisdom and connecting with people who value your experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-warmOrange-50 to-warmOrange-100 border-2 border-warmOrange-200">
            <div className="text-7xl mb-6 inline-block transform hover:scale-110 transition-transform">👤</div>
            <h3 className="text-2xl font-bold mb-4 text-sage-900">Create Your Profile</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Share your story, expertise, and what you are passionate about with the community.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-warmPurple-50 to-warmPurple-100 border-2 border-warmPurple-200">
            <div className="text-7xl mb-6 inline-block transform hover:scale-110 transition-transform">📹</div>
            <h3 className="text-2xl font-bold mb-4 text-sage-900">Share Your Wisdom</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              Upload videos, write articles, share music, or display your art for others to enjoy.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-warmOrange-50 via-warmPurple-50 to-warmOrange-100 border-2 border-warmOrange-200">
            <div className="text-7xl mb-6 inline-block transform hover:scale-110 transition-transform">💝</div>
            <h3 className="text-2xl font-bold mb-4 text-sage-900">Receive Support</h3>
            <p className="text-lg text-sage-700 leading-relaxed">
              People can support you through donations or monthly subscriptions to show appreciation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
