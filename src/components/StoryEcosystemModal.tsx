import React, { useEffect } from 'react';
import { ChronicleStory } from '../data/chronicles';
import { X, ExternalLink, ArrowRight, Flower2, Smartphone, Sparkles, Heart } from 'lucide-react';

interface StoryEcosystemModalProps {
  story: ChronicleStory | null;
  isOpen: boolean;
  onClose: () => void;
}

export const StoryEcosystemModal: React.FC<StoryEcosystemModalProps> = ({
  story,
  isOpen,
  onClose
}) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !story) return null;

  const coverImage = story.imagenes_runway?.[0] || story.imagen_9_16;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-xs border border-neutral-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 text-white border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-neutral-200">
              VOCATIONLOVE • ECOSYSTEM
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer rounded-xs"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Story Preview Card Header */}
          <div className="flex gap-4 items-start p-3 bg-neutral-50 border border-neutral-200 rounded-xs">
            <div className="w-20 sm:w-24 aspect-[2/3] shrink-0 overflow-hidden bg-neutral-900 rounded-xs shadow-xs">
              <img
                src={coverImage}
                alt={story.titular}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-1">
                {story.categoria}
              </div>
              <h3 className="font-bodoni font-bold italic text-sm sm:text-base text-neutral-950 uppercase leading-snug tracking-tight line-clamp-2">
                {story.titular}
              </h3>
              <p className="mt-1 text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                {story.bajada}
              </p>
            </div>
          </div>

          {/* Interactive Navigation Options */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold px-1">
              CHOOSE DESTINATION
            </div>

            {/* BUTTON 1: ENTER THE SOCIAL APP */}
            <a
              href="https://vocationlove.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-neutral-950 hover:bg-neutral-900 text-white rounded-xs border border-neutral-800 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-neutral-900 group-hover:bg-neutral-800 rounded-xs border border-neutral-700 transition-colors">
                  <Smartphone className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <div className="font-cinzel text-sm sm:text-base font-bold tracking-wider uppercase text-white group-hover:text-rose-200 transition-colors">
                    ENTER THE SOCIAL APP
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                    https://vocationlove.app
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-all shrink-0 ml-2" />
            </a>

            {/* BUTTON 2: VISIT THE FLOWER STORE */}
            <a
              href="https://vocationlove.store"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-neutral-50 text-neutral-950 rounded-xs border border-neutral-300 hover:border-neutral-500 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-rose-50 group-hover:bg-rose-100 rounded-xs border border-rose-200 transition-colors">
                  <Flower2 className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="font-cinzel text-sm sm:text-base font-bold tracking-wider uppercase text-neutral-950 group-hover:text-black transition-colors">
                    VISIT THE FLOWER STORE
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                    https://vocationlove.store
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-black group-hover:translate-x-1.5 transition-all shrink-0 ml-2" />
            </a>
          </div>
        </div>

        {/* Discreet Bottom Bar with Close Button */}
        <div className="px-5 py-3 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between">
          <div className="text-[11px] font-mono text-neutral-500">
            Official Ecosytem Navigation
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 hover:text-black transition-colors px-3 py-1.5 rounded-xs hover:bg-neutral-200/60 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
