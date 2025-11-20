import Link from 'next/link';
import Image from 'next/image';
import { Content } from '@/types';

interface ContentCardProps {
  content: Content;
  elderName?: string;
  views?: number;
}

export default function ContentCard({ content, elderName, views }: ContentCardProps) {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'video': return 'Video';
      case 'text': return 'Article';
      case 'music': return 'Music';
      case 'art': return 'Art';
      default: return 'Content';
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-soft overflow-hidden border border-sage-100 hover:border-sage-200 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-soft-lg">
      {content.thumbnail && (
        <div className="relative h-56 w-full overflow-hidden bg-warmBeige-50">
          <Image
            src={content.thumbnail}
            alt={content.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-soft">
            <span className="text-xs font-semibold text-sage-700 uppercase tracking-wide">
              {getTypeLabel(content.type)}
            </span>
          </div>
        </div>
      )}
      <div className="p-6 space-y-4">
        {!content.thumbnail && (
          <div className="mb-3">
            <span className="text-xs font-semibold text-sage-700 uppercase tracking-wide bg-sage-50 px-3 py-1.5 rounded-full border border-sage-200">
              {getTypeLabel(content.type)}
            </span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-sage-900 group-hover:text-sage-700 transition-colors leading-tight">{content.title}</h3>
        {elderName && (
          <p className="text-sm text-sage-500 font-medium">by {elderName}</p>
        )}
        <p className="text-base text-sage-600 line-clamp-2 leading-relaxed">{content.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-sage-100">
          <div className="flex items-center gap-4">
            <span className="text-sm text-sage-600 font-medium flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {content.likes.toLocaleString()}
            </span>
            {views !== undefined && (
              <span className="text-sm text-sage-500 font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views.toLocaleString()}
              </span>
            )}
          </div>
          <Link href={`/content/${content.id}`}>
            <button className="bg-sage-600 hover:bg-sage-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-soft hover:shadow-soft-md">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
