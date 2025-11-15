import ElderCard from '@/components/ElderCard';
import { getAllElders } from '@/lib/data';

export default function EldersPage() {
  const elders = getAllElders();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Meet Our Elders
        </h1>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
          Discover the wisdom and experiences of our community members who are sharing their knowledge with the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {elders.map((elder) => (
          <ElderCard key={elder.id} elder={elder} />
        ))}
      </div>
    </div>
  );
}
