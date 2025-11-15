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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Elderfy
        </h1>
        <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          A platform where seniors share their wisdom, stories, and creativity with the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/elders">
            <Button variant="primary" size="large">
              Discover Elders
            </Button>
          </Link>
          <Link href="/upload">
            <Button variant="outline" size="large" className="bg-white hover:bg-gray-100">
              Share Your Wisdom
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Elders Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Featured Elders</h2>
          <Link href="/elders">
            <Button variant="outline" size="medium">
              View All
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
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Recent Wisdom</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          How Elderfy Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-2xl font-bold mb-3">Create Your Profile</h3>
            <p className="text-lg text-gray-700">
              Share your story, expertise, and what you are passionate about.
            </p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-2xl font-bold mb-3">Share Your Wisdom</h3>
            <p className="text-lg text-gray-700">
              Upload videos, write articles, share music, or display your art.
            </p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">💝</div>
            <h3 className="text-2xl font-bold mb-3">Receive Support</h3>
            <p className="text-lg text-gray-700">
              People can support you through donations or monthly subscriptions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
