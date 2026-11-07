import React, { useState } from 'react';
import { ChronicleStory } from '../data/chronicles';
import { RunwayCard } from './RunwayCard';
import { Feather, SlidersHorizontal, Layers, Sparkles } from 'lucide-react';

interface ChroniclesRunwaySectionProps {
  chronicles: ChronicleStory[];
  showAdminTools?: boolean;
  onOpenCaptions: (story: ChronicleStory) => void;
  onPreviewMockup: (story: ChronicleStory) => void;
  onOpenEditor?: () => void;
}

export const ChroniclesRunwaySection: React.FC<ChroniclesRunwaySectionProps> = ({
  chronicles,
  showAdminTools = false,
  onOpenCaptions,
  onPreviewMockup,
  onOpenEditor
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = ['all', 'SEEDS OF LOVE', 'HOPE IN BLOOM', 'DARE TO LOVE'];

  const filteredChronicles = chronicles.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.categoria === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      c.titular.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.bajada.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedChronicles = filteredChronicles.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(12);
  };

  const getCategoryCount = (cat: string) => {
    if (cat === 'all') return chronicles.length;
    return chronicles.filter((c) => c.categoria === cat).length;
  };

  return (
    <section id="runway-chronicles" className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-300">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">
            <span className="w-2 h-2 bg-neutral-900" />
            <span>Hope in Bloom</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-neutral-950">
            Seeds of Love
          </h2>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
            In one place you can stay up to date with vocationlove
          </p>
        </div>

        {/* Action Controls / Status badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-3.5 py-1.5 bg-neutral-950 text-white text-[11px] font-mono tracking-widest uppercase border border-neutral-800">
            55 EDITORIAL RELEASES • SIMULTANEOUS MULTIPLATFORM
          </div>
        </div>
      </div>

      {/* Category Filter & Search Bar */}
      <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200">
        <div className="flex items-center gap-1.5 p-1 bg-neutral-200/80 rounded-xs overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-xs whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
              }`}
            >
              <span>{cat === 'all' ? 'All Stories' : cat}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-xs ${
                selectedCategory === cat ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-300/70 text-neutral-600'
              }`}>
                {getCategoryCount(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(12);
            }}
            placeholder="Search headline or theme..."
            className="px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-xs focus:ring-1 focus:ring-neutral-900 focus:outline-hidden w-full sm:w-64 font-sans"
          />
        </div>
      </div>

      {/* Active Count Metric */}
      <div className="py-3 flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>Showing {displayedChronicles.length} of {filteredChronicles.length} publications</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-neutral-900 underline hover:text-black font-semibold"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Grid of Classical 2:3 Editorial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
        {displayedChronicles.map((story) => (
          <RunwayCard
            key={story.id}
            story={story}
            showAdminTools={showAdminTools}
            onOpenCaptions={onOpenCaptions}
            onPreviewMockup={onPreviewMockup}
          />
        ))}
      </div>

      {/* Load More Pagination */}
      {visibleCount < filteredChronicles.length && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredChronicles.length))}
            className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-sm"
          >
            Load More Stories (+12)
          </button>
          <button
            onClick={() => setVisibleCount(filteredChronicles.length)}
            className="px-6 py-2.5 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors"
          >
            Show All ({filteredChronicles.length})
          </button>
        </div>
      )}
    </section>
  );
};
