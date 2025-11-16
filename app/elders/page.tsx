'use client';

import { useState, useMemo } from 'react';
import ElderCard from '@/components/ElderCard';
import { getAllElders } from '@/lib/data';

const expertiseCategories = [
  { id: 'all', label: 'All', icon: '🌟' },
  { id: 'gardening', label: 'Gardening', icon: '🌱' },
  { id: 'music', label: 'Music', icon: '🎵' },
  { id: 'teaching', label: 'Teaching', icon: '📚' },
  { id: 'art', label: 'Art', icon: '🎨' },
  { id: 'spirituality', label: 'Spirituality', icon: '🙏' },
  { id: 'dance', label: 'Dance', icon: '💃' },
  { id: 'cultural', label: 'Cultural Wisdom', icon: '🌍' },
  { id: 'food', label: 'Food & Cooking', icon: '🍳' },
  { id: 'relationships', label: 'Relationships', icon: '❤️' },
  { id: 'health', label: 'Aging & Health', icon: '🏥' },
];

export default function EldersPage() {
  const elders = getAllElders();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Filter and search elders
  const filteredElders = useMemo(() => {
    return elders.filter((elder) => {
      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        elder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        elder.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        elder.expertise.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Expertise filter
      const matchesExpertise =
        selectedFilter === 'all' ||
        elder.expertise.some((skill) =>
          skill.toLowerCase().includes(selectedFilter.toLowerCase())
        );

      return matchesSearch && matchesExpertise;
    });
  }, [elders, searchTerm, selectedFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFilter('all');
  };

  return (
    <div className="space-y-12 page-transition">
      {/* Header */}
      <div className="text-center animate-fade-in-down">
        <div className="text-7xl mb-6">👥</div>
        <h1 className="text-6xl md:text-7xl font-bold text-sage-900 mb-6">
          Meet Our Elders
        </h1>
        <p className="text-3xl text-sage-600 max-w-4xl mx-auto leading-relaxed">
          Discover the wisdom and experiences of our community members who are sharing their knowledge with the world.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-warmOrange-200 animate-fade-in-up">
        {/* Search Bar */}
        <div className="mb-6">
          <label className="block text-2xl font-bold text-sage-900 mb-4">
            <span className="flex items-center gap-2">
              <span className="text-3xl">🔍</span>
              Search Elders
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, expertise, or interests..."
              className="w-full px-6 py-5 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all pr-32"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-sage-900 text-lg font-bold rounded-lg transition-all"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-4">
            <span className="flex items-center gap-2">
              <span className="text-3xl">🏷️</span>
              Filter by Expertise
            </span>
          </label>
          <div className="flex flex-wrap gap-3">
            {expertiseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedFilter === category.id
                    ? 'bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 text-white shadow-lg'
                    : 'bg-gradient-to-br from-warmOrange-100 to-warmPurple-100 text-sage-900 border-2 border-warmOrange-300 hover:border-warmOrange-500 hover:shadow-md'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || selectedFilter !== 'all') && (
          <div className="mt-6 pt-6 border-t-2 border-sage-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-xl font-bold text-sage-900">
                  Active Filters:
                </span>
                {searchTerm && (
                  <span className="bg-warmPurple-100 text-warmPurple-800 px-5 py-2 rounded-full text-lg font-bold border-2 border-warmPurple-300 flex items-center gap-2">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedFilter !== 'all' && (
                  <span className="bg-warmOrange-100 text-warmOrange-800 px-5 py-2 rounded-full text-lg font-bold border-2 border-warmOrange-300 flex items-center gap-2">
                    {expertiseCategories.find((c) => c.id === selectedFilter)?.icon}{' '}
                    {expertiseCategories.find((c) => c.id === selectedFilter)?.label}
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="text-center">
        <p className="text-2xl text-sage-700">
          Showing <span className="font-bold text-warmOrange-600">{filteredElders.length}</span> of{' '}
          <span className="font-bold">{elders.length}</span> elders
        </p>
      </div>

      {/* Elders Grid */}
      {filteredElders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredElders.map((elder, index) => (
            <div key={elder.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ElderCard elder={elder} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl shadow-xl border-2 border-warmOrange-200 animate-scale-in">
          <div className="text-7xl mb-6">🔍</div>
          <h2 className="text-4xl font-bold text-sage-900 mb-4">No elders found</h2>
          <p className="text-2xl text-sage-600 mb-8">
            Try adjusting your search or filters to find more elders
          </p>
          <button
            onClick={clearFilters}
            className="px-10 py-5 bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 text-white text-2xl font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
