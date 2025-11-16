import Link from 'next/link';
import Image from 'next/image';
import { Elder } from '@/types';

interface ElderCardProps {
  elder: Elder;
}

export default function ElderCard({ elder }: ElderCardProps) {
  return (
    <Link href={`/elder/${elder.id}`}>
      <div className="group bg-gradient-to-br from-white to-warmOrange-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden cursor-pointer border-2 border-warmOrange-200 hover:border-warmOrange-400 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={elder.photo}
            alt={`Photo of ${elder.name}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold mb-2 text-sage-900 group-hover:text-warmOrange-700 transition-colors duration-300">{elder.name}</h3>
          <p className="text-xl text-sage-600 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            {elder.age} years young
          </p>
          <p className="text-lg text-sage-700 mb-4 line-clamp-3 leading-relaxed">{elder.bio}</p>
          <div className="flex flex-wrap gap-2">
            {elder.expertise.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-warmOrange-100 to-warmPurple-100 text-warmOrange-800 px-4 py-2 rounded-full text-base font-semibold border border-warmOrange-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
