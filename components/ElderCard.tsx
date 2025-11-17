import Link from 'next/link';
import Image from 'next/image';
import { Elder } from '@/types';

interface ElderCardProps {
  elder: Elder;
}

export default function ElderCard({ elder }: ElderCardProps) {
  return (
    <Link href={`/elder/${elder.id}`}>
      <article className="group relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.18)] transition-all duration-700 ease-out overflow-hidden cursor-pointer border-[3px] border-terraCotta-100 hover:border-terraCotta-300 transform hover:-translate-y-2 animate-fade-in-up">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-warmOchre-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-terraCotta-100/40 to-transparent rounded-tr-full pointer-events-none"></div>

        {/* Photo with respectful framing */}
        <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-cream-100 to-cream-200">
          <Image
            src={elder.photo}
            alt={`${elder.name}, honored elder`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-forestGreen-900/20 via-transparent to-warmOchre-100/10 group-hover:from-forestGreen-900/10 transition-all duration-700"></div>

          {/* Age badge - positioned with reverence */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg border-2 border-warmOchre-200">
            <p className="text-lg font-semibold text-forestGreen-800 flex items-center gap-2">
              <span className="text-xl">✨</span>
              {elder.age} years
            </p>
          </div>
        </div>

        {/* Content area with generous spacing */}
        <div className="p-8 bg-gradient-to-br from-white via-cream-50 to-white space-y-5">
          {/* Name as a respectful heading */}
          <h3 className="text-3xl font-serif font-bold text-forestGreen-900 group-hover:text-terraCotta-600 transition-colors duration-500 leading-tight">
            {elder.name}
          </h3>

          {/* Bio with breathing room */}
          <p className="text-lg text-forestGreen-700 leading-relaxed line-clamp-3 min-h-[4.5rem]">
            {elder.bio}
          </p>

          {/* Expertise tags with earthy styling */}
          <div className="flex flex-wrap gap-3 pt-2">
            {elder.expertise.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-warmOchre-50 to-terraCotta-50 text-forestGreen-800 px-4 py-2.5 rounded-full text-base font-medium border-2 border-warmOchre-200/60 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle bottom accent line */}
        <div className="h-1.5 bg-gradient-to-r from-terraCotta-300 via-warmOchre-300 to-forestGreen-300 group-hover:h-2 transition-all duration-500"></div>
      </article>
    </Link>
  );
}
