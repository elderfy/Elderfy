import ElderCard from '@/components/ElderCard';
import { getAllElders } from '@/lib/data';

export default function EldersPage() {
  const elders = getAllElders();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="text-7xl mb-6">👥</div>
        <h1 className="text-6xl md:text-7xl font-bold text-sage-900 mb-6">
          Meet Our Elders
        </h1>
        <p className="text-3xl text-sage-600 max-w-4xl mx-auto leading-relaxed">
          Discover the wisdom and experiences of our community members who are sharing their knowledge with the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {elders.map((elder) => (
          <ElderCard key={elder.id} elder={elder} />
        ))}
      </div>
    </div>
  );
}
