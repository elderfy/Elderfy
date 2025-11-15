import Link from 'next/link';
import Image from 'next/image';
import { Elder } from '@/types';

interface ElderCardProps {
  elder: Elder;
}

export default function ElderCard({ elder }: ElderCardProps) {
  return (
    <Link href={`/elder/${elder.id}`}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer border-2 border-gray-200 hover:border-blue-500">
        <div className="relative h-64 w-full">
          <Image
            src={elder.photo}
            alt={`Photo of ${elder.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{elder.name}</h3>
          <p className="text-xl text-gray-600 mb-3">{elder.age} years old</p>
          <p className="text-lg text-gray-700 mb-4 line-clamp-3">{elder.bio}</p>
          <div className="flex flex-wrap gap-2">
            {elder.expertise.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-base font-medium"
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
