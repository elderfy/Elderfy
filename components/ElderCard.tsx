import Link from 'next/link';
import Image from 'next/image';
import { Elder } from '@/types';

interface ElderCardProps {
  elder: Elder;
}

export default function ElderCard({ elder }: ElderCardProps) {
  return (
    <Link href={`/elder/${elder.id}`}>
      <article className="group relative bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 ease-out overflow-hidden cursor-pointer border border-sage-100 hover:border-sage-200 transform hover:-translate-y-1">
        {/* Photo with professional framing */}
        <div className="relative h-80 w-full overflow-hidden bg-warmBeige-50">
          <Image
            src={elder.photo}
            alt={`${elder.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-sage-900/5 via-transparent to-transparent"></div>

          {/* Age badge - clean and minimal */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <p className="text-sm font-semibold text-sage-800">
              {elder.age} years
            </p>
          </div>
        </div>

        {/* Content area with generous spacing */}
        <div className="p-8 space-y-4">
          {/* Name as a professional heading */}
          <h3 className="text-2xl font-semibold text-sage-900 group-hover:text-sage-700 transition-colors duration-300 leading-tight">
            {elder.name}
          </h3>

          {/* Bio with breathing room */}
          <p className="text-base text-sage-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
            {elder.bio}
          </p>

          {/* Expertise tags with clean styling */}
          <div className="flex flex-wrap gap-2 pt-2">
            {elder.expertise.map((skill) => (
              <span
                key={skill}
                className="bg-sage-50 text-sage-700 px-3 py-1.5 rounded-full text-sm font-medium border border-sage-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
