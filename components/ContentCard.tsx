import Link from 'next/link';
import Image from 'next/image';
import { Content } from '@/types';

interface ContentCardProps {
  content: Content;
  elderName?: string;
}

export default function ContentCard({ content, elderName }: ContentCardProps) {
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
      {content.thumbnail && (
        <div className="relative h-48 w-full">
          <Image
            src={content.thumbnail}
            alt={content.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl" role="img" aria-label={content.type}>
            {getTypeIcon(content.type)}
          </span>
          <span className="text-base text-gray-600 uppercase tracking-wide font-semibold">
            {content.type}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{content.title}</h3>
        {elderName && (
          <p className="text-lg text-gray-600 mb-2">by {elderName}</p>
        )}
        <p className="text-lg text-gray-700 mb-4 line-clamp-2">{content.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg text-gray-600">❤️ {content.likes} likes</span>
          <Link href={`/content/${content.id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
