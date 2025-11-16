import Link from 'next/link';
import Image from 'next/image';
import { Content } from '@/types';

interface ContentCardProps {
  content: Content;
  elderName?: string;
  views?: number;
}

export default function ContentCard({ content, elderName, views }: ContentCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'text': return '📝';
      case 'music': return '🎵';
      case 'art': return '🎨';
      default: return '📄';
    }
  };

  return (
    <div className="group bg-gradient-to-br from-white to-warmPurple-50 rounded-2xl shadow-xl overflow-hidden border-2 border-warmPurple-200 hover:border-warmPurple-400 transition-all duration-500 ease-out transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up">
      {content.thumbnail && (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={content.thumbnail}
            alt={content.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
            <span className="text-2xl" role="img" aria-label={content.type}>
              {getTypeIcon(content.type)}
            </span>
          </div>
        </div>
      )}
      <div className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-3">
          {!content.thumbnail && (
            <span className="text-4xl" role="img" aria-label={content.type}>
              {getTypeIcon(content.type)}
            </span>
          )}
          <span className="text-base text-warmPurple-700 uppercase tracking-wider font-bold bg-warmPurple-100 px-3 py-1 rounded-full">
            {content.type}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-sage-900 group-hover:text-warmPurple-700 transition-colors leading-tight">{content.title}</h3>
        {elderName && (
          <p className="text-lg text-sage-600 mb-3 font-medium">by {elderName}</p>
        )}
        <p className="text-lg text-sage-700 mb-4 line-clamp-2 leading-relaxed">{content.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-warmPurple-100">
          <div className="flex items-center gap-4">
            <span className="text-lg text-warmOrange-600 font-semibold flex items-center gap-1">
              <span className="text-2xl">❤️</span>
              {content.likes}
            </span>
            {views !== undefined && (
              <span className="text-lg text-sage-600 font-semibold flex items-center gap-1">
                <span className="text-2xl">👁️</span>
                {views.toLocaleString()}
              </span>
            )}
          </div>
          <Link href={`/content/${content.id}`}>
            <button className="bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 text-white px-6 py-3 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              View →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
