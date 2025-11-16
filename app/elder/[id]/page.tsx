import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContentCard from '@/components/ContentCard';
import DonateButton from '@/components/DonateButton';
import SubscribeButton from '@/components/SubscribeButton';
import DonationForm from '@/components/DonationForm';
import ViewTracker from '@/components/ViewTracker';
import { getElderById, getContentByElderId, getAllElders } from '@/lib/data';
import { getElderViews, getContentViews } from '@/lib/analytics';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all elders
export async function generateStaticParams() {
  const elders = getAllElders();
  return elders.map((elder) => ({
    id: elder.id,
  }));
}

export default async function ElderProfilePage({ params }: PageProps) {
  const { id } = await params;
  const elder = getElderById(id);

  if (!elder) {
    notFound();
  }

  const content = getContentByElderId(id);
  const profileViews = getElderViews(id);

  // Get view counts for all content
  const contentViewsMap = new Map(
    content.map(item => [item.id, getContentViews(item.id)])
  );

  return (
    <div className="space-y-12">
      {/* Track view for analytics */}
      <ViewTracker type="elder" id={id} />
      {/* Elder Profile Header */}
      <div className="bg-gradient-to-br from-white to-warmOrange-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-warmOrange-200">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-96 md:h-auto min-h-[400px]">
            <Image
              src={elder.photo}
              alt={`Photo of ${elder.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12 bg-white">
            <h1 className="text-5xl font-bold text-sage-900 mb-4">
              {elder.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <p className="text-2xl text-sage-600 flex items-center gap-2">
                <span className="text-3xl">🎂</span>
                {elder.age} years young
              </p>
              <p className="text-2xl text-sage-600 flex items-center gap-2">
                <span className="text-3xl">👁️</span>
                {profileViews.toLocaleString()} views
              </p>
            </div>
            <p className="text-xl text-sage-700 mb-8 leading-relaxed">
              {elder.bio}
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-sage-900">Expertise:</h3>
              <div className="flex flex-wrap gap-3">
                {elder.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-warmOrange-100 to-warmPurple-100 text-warmOrange-800 px-4 py-2 rounded-full text-lg font-semibold border border-warmOrange-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <DonateButton elderFirstName={elder.name.split(' ')[0]} />
              <SubscribeButton elderName={elder.name.split(' ')[0]} elderId={elder.id} elderEmail={elder.email} />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-5xl font-bold text-sage-900 mb-3">
          Shared Wisdom
        </h2>
        <p className="text-xl text-sage-600 mb-8">Content from {elder.name.split(' ')[0]}</p>
        {content.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.map((item) => (
              <ContentCard
                key={item.id}
                content={item}
                views={contentViewsMap.get(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border-2 border-warmOrange-200">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-2xl text-sage-600">
              {elder.name.split(' ')[0]} hasn't shared any content yet.
            </p>
          </div>
        )}
      </div>

      {/* Donation Section */}
      <div id="donate" className="bg-gradient-to-br from-warmOrange-500 via-warmPurple-500 to-warmPurple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Support {elder.name.split(' ')[0]}
        </h2>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed">
          Your donations help {elder.name.split(' ')[0]} continue sharing valuable wisdom and experiences with the community.
        </p>
        <DonationForm elderName={elder.name.split(' ')[0]} elderId={elder.id} elderEmail={elder.email} />
        <p className="text-lg mt-6 opacity-90">
          🔒 Secure payment processing powered by Stripe
        </p>
      </div>
    </div>
  );
}
