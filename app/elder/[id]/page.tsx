import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContentCard from '@/components/ContentCard';
import Button from '@/components/Button';
import { getElderById, getContentByElderId } from '@/lib/data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ElderProfilePage({ params }: PageProps) {
  const { id } = await params;
  const elder = getElderById(id);

  if (!elder) {
    notFound();
  }

  const content = getContentByElderId(id);

  return (
    <div className="space-y-12">
      {/* Elder Profile Header */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-96 md:h-auto">
            <Image
              src={elder.photo}
              alt={`Photo of ${elder.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {elder.name}
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              {elder.age} years old
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {elder.bio}
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Expertise:</h3>
              <div className="flex flex-wrap gap-3">
                {elder.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="large"
                onClick={() => {
                  const donateSection = document.getElementById('donate');
                  donateSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                💝 Support {elder.name.split(' ')[0]}
              </Button>
              <Button variant="outline" size="large">
                ⭐ Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Shared Wisdom
        </h2>
        {content.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl">
            <p className="text-2xl text-gray-600">
              {elder.name.split(' ')[0]} hasn't shared any content yet.
            </p>
          </div>
        )}
      </div>

      {/* Donation Section */}
      <div id="donate" className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Support {elder.name.split(' ')[0]}
        </h2>
        <p className="text-xl mb-8">
          Your donations help {elder.name.split(' ')[0]} continue sharing valuable wisdom and experiences with the community.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[5, 10, 25, 50].map((amount) => (
            <button
              key={amount}
              className="bg-white text-purple-700 px-6 py-4 rounded-xl text-2xl font-bold hover:bg-purple-50 transition-colors"
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="number"
            placeholder="Custom amount"
            className="flex-1 px-6 py-4 rounded-xl text-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300"
            min="1"
          />
          <Button variant="secondary" size="large" className="bg-green-600 hover:bg-green-700">
            Donate Now
          </Button>
        </div>
        <p className="text-lg mt-6 opacity-90">
          💳 Secure payment processing powered by Stripe
        </p>
      </div>
    </div>
  );
}
