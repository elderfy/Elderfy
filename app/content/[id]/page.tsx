import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/Button';
import { getContentById, getElderById } from '@/lib/data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const content = getContentById(id);

  if (!content) {
    notFound();
  }

  const elder = getElderById(content.elderId);

  if (!elder) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="text-lg">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        {' / '}
        <Link href={`/elder/${elder.id}`} className="text-blue-600 hover:text-blue-800">
          {elder.name}
        </Link>
        {' / '}
        <span className="text-gray-600">{content.title}</span>
      </nav>

      {/* Content Header */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">
            {content.type === 'video' && '🎥'}
            {content.type === 'text' && '📝'}
            {content.type === 'music' && '🎵'}
            {content.type === 'art' && '🎨'}
          </span>
          <span className="text-xl text-gray-600 uppercase tracking-wide font-semibold">
            {content.type}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {content.title}
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <Link href={`/elder/${elder.id}`}>
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={elder.photo}
                  alt={elder.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-900">{elder.name}</p>
                <p className="text-lg text-gray-600">{elder.age} years old</p>
              </div>
            </div>
          </Link>
        </div>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {content.description}
        </p>

        <div className="flex items-center gap-6 text-lg text-gray-600">
          <span>❤️ {content.likes} likes</span>
          <span>📅 {new Date(content.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
      </div>

      {/* Content Display */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {content.type === 'video' && (
          <div className="aspect-video">
            <iframe
              src={content.content}
              title={content.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {content.type === 'text' && (
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {content.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-xl text-gray-800 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {content.type === 'music' && (
          <div className="p-8 md:p-12 text-center">
            <div className="text-6xl mb-6">🎵</div>
            <p className="text-2xl text-gray-700 mb-6">
              Music player would be embedded here
            </p>
            <a
              href={content.content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 hover:text-blue-800 underline"
            >
              Listen on external platform
            </a>
          </div>
        )}

        {content.type === 'art' && (
          <div className="relative w-full" style={{ minHeight: '600px' }}>
            <Image
              src={content.content}
              alt={content.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}
      </div>

      {/* Support Elder CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Enjoyed this content?
        </h2>
        <p className="text-xl mb-6">
          Support {elder.name.split(' ')[0]} to see more amazing content!
        </p>
        <Link href={`/elder/${elder.id}#donate`}>
          <Button variant="secondary" size="large" className="bg-white text-blue-700 hover:bg-gray-100">
            💝 Support {elder.name.split(' ')[0]}
          </Button>
        </Link>
      </div>
    </div>
  );
}
