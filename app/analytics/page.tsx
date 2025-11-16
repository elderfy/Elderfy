import Link from 'next/link';
import { getAllElders, getAllContent, getElderById } from '@/lib/data';
import { getAllAnalytics } from '@/lib/analytics';
import type { Elder, Content } from '@/types';

export default function AnalyticsPage() {
  const allAnalytics = getAllAnalytics();
  const allElders = getAllElders();
  const allContent = getAllContent();

  // Combine elders with their view counts and sort by views
  const eldersWithViews = allElders
    .map(elder => ({
      ...elder,
      views: allAnalytics.elderViews[elder.id] || 0,
    }))
    .sort((a, b) => b.views - a.views);

  // Combine content with their view counts and sort by views
  const contentWithViews = allContent
    .map(content => ({
      ...content,
      views: allAnalytics.contentViews[content.id] || 0,
      elder: getElderById(content.elderId),
    }))
    .sort((a, b) => b.views - a.views);

  // Calculate total stats
  const totalElderViews = Object.values(allAnalytics.elderViews).reduce((sum, views) => sum + views, 0);
  const totalContentViews = Object.values(allAnalytics.contentViews).reduce((sum, views) => sum + views, 0);
  const totalLikes = allContent.reduce((sum, content) => sum + content.likes, 0);

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-3xl shadow-2xl p-10 text-white text-center">
        <div className="text-7xl mb-6">📊</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Analytics Dashboard
        </h1>
        <p className="text-2xl opacity-90">
          Track engagement and discover popular content
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border-2 border-blue-200 shadow-lg">
          <div className="text-5xl mb-3">👁️</div>
          <div className="text-4xl font-bold text-blue-900 mb-2">
            {totalElderViews.toLocaleString()}
          </div>
          <div className="text-xl text-blue-700">Total Profile Views</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border-2 border-purple-200 shadow-lg">
          <div className="text-5xl mb-3">🎬</div>
          <div className="text-4xl font-bold text-purple-900 mb-2">
            {totalContentViews.toLocaleString()}
          </div>
          <div className="text-xl text-purple-700">Total Content Views</div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center border-2 border-pink-200 shadow-lg">
          <div className="text-5xl mb-3">❤️</div>
          <div className="text-4xl font-bold text-pink-900 mb-2">
            {totalLikes.toLocaleString()}
          </div>
          <div className="text-xl text-pink-700">Total Likes</div>
        </div>
      </div>

      {/* Top Elders by Views */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-warmOrange-200">
        <h2 className="text-4xl font-bold text-sage-900 mb-8 flex items-center gap-3">
          <span>🏆</span>
          Top Elders by Profile Views
        </h2>
        <div className="space-y-4">
          {eldersWithViews.slice(0, 10).map((elder, index) => (
            <Link
              key={elder.id}
              href={`/elder/${elder.id}`}
              className="flex items-center justify-between p-6 bg-gradient-to-r from-warmOrange-50 to-warmPurple-50 rounded-xl hover:from-warmOrange-100 hover:to-warmPurple-100 transition-all duration-300 border-2 border-warmOrange-200 hover:border-warmOrange-400"
            >
              <div className="flex items-center gap-4">
                <div className={`text-3xl font-bold ${
                  index === 0 ? 'text-yellow-500' :
                  index === 1 ? 'text-gray-400' :
                  index === 2 ? 'text-orange-600' :
                  'text-sage-500'
                }`}>
                  #{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sage-900">{elder.name}</h3>
                  <p className="text-lg text-sage-600">{elder.age} years old</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-warmOrange-600">
                  {elder.views.toLocaleString()}
                </div>
                <div className="text-lg text-sage-600">views</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Content by Views */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-warmPurple-200">
        <h2 className="text-4xl font-bold text-sage-900 mb-8 flex items-center gap-3">
          <span>⭐</span>
          Top Content by Views
        </h2>
        <div className="space-y-4">
          {contentWithViews.slice(0, 10).map((content, index) => {
            const typeIcon = {
              video: '🎥',
              text: '📝',
              music: '🎵',
              art: '🎨',
            }[content.type] || '📄';

            return (
              <Link
                key={content.id}
                href={`/content/${content.id}`}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-warmPurple-50 to-warmOrange-50 rounded-xl hover:from-warmPurple-100 hover:to-warmOrange-100 transition-all duration-300 border-2 border-warmPurple-200 hover:border-warmPurple-400"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`text-3xl font-bold ${
                    index === 0 ? 'text-yellow-500' :
                    index === 1 ? 'text-gray-400' :
                    index === 2 ? 'text-orange-600' :
                    'text-sage-500'
                  }`}>
                    #{index + 1}
                  </div>
                  <div className="text-4xl">{typeIcon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-sage-900">{content.title}</h3>
                    <p className="text-lg text-sage-600">
                      by {content.elder?.name || 'Unknown'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warmPurple-600">
                      {content.views.toLocaleString()}
                    </div>
                    <div className="text-lg text-sage-600">views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warmOrange-600">
                      {content.likes.toLocaleString()}
                    </div>
                    <div className="text-base text-sage-600">likes</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Engagement by Content Type */}
      <div className="bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-warmOrange-200">
        <h2 className="text-4xl font-bold text-sage-900 mb-8 flex items-center gap-3">
          <span>📈</span>
          Engagement by Content Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['video', 'text', 'music', 'art'].map(type => {
            const typeContent = allContent.filter(c => c.type === type);
            const typeViews = typeContent.reduce(
              (sum, content) => sum + (allAnalytics.contentViews[content.id] || 0),
              0
            );
            const typeLikes = typeContent.reduce((sum, content) => sum + content.likes, 0);
            const icon = {
              video: '🎥',
              text: '📝',
              music: '🎵',
              art: '🎨',
            }[type];

            return (
              <div
                key={type}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-warmPurple-200"
              >
                <div className="text-5xl mb-4 text-center">{icon}</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4 text-center capitalize">
                  {type}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-sage-600">Content:</span>
                    <span className="text-xl font-bold text-sage-900">
                      {typeContent.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-sage-600">Views:</span>
                    <span className="text-xl font-bold text-warmPurple-600">
                      {typeViews.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-sage-600">Likes:</span>
                    <span className="text-xl font-bold text-warmOrange-600">
                      {typeLikes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
