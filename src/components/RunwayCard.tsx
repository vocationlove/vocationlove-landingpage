import React, { useState, useEffect } from 'react';
import { ChronicleStory } from '../data/chronicles';
import {
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
  Play,
  Pause,
  Sparkles
} from 'lucide-react';

interface RunwayCardProps {
  story: ChronicleStory;
  showAdminTools?: boolean;
  onOpenCaptions: (story: ChronicleStory) => void;
  onPreviewMockup: (story: ChronicleStory) => void;
  onSelectStory?: (story: ChronicleStory) => void;
}

export const RunwayCard: React.FC<RunwayCardProps> = ({
  story,
  showAdminTools = false,
  onOpenCaptions,
  onPreviewMockup,
  onSelectStory
}) => {
  const images = story.imagenes_runway?.length ? story.imagenes_runway : [story.imagen_9_16];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isPlayingRunway, setIsPlayingRunway] = useState(true);
  const [hasCopied, setHasCopied] = useState(false);
  const [flashActive, setFlashActive] = useState(false);

  // Runway Catwalk Auto-Transition effect (5x slower: 22.5s per scene for serene magazine pacing)
  useEffect(() => {
    if (!isPlayingRunway || images.length <= 1) return;

    const interval = setInterval(() => {
      // Trigger subtle flash of paparazzi strobe right before transition
      setFlashActive(true);
      setTimeout(() => setFlashActive(false), 240);

      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 22500);

    return () => clearInterval(interval);
  }, [isPlayingRunway, images.length]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleQuickCopyInstagram = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${story.captions.instagram.hook}\n\n${story.captions.instagram.body}\n\n${story.captions.instagram.cta}\n\n${story.captions.instagram.hashtags.join(' ')}`;
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2200);
  };

  return (
    <article
      onClick={() => onSelectStory?.(story)}
      className="flex flex-col w-full bg-white border border-neutral-300 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-neutral-800 group cursor-pointer"
    >
      {/* Editorial Meta Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-100 border-b border-neutral-300 text-[10px] font-mono tracking-widest uppercase text-neutral-600">
        <span className="font-semibold text-neutral-900">{story.categoria}</span>
        <span>{story.fecha}</span>
      </div>

      {/* 1. Classical Editorial 2:3 Aspect Ratio Visual Container */}
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-neutral-950 select-none">
        {/* Background image with Runway Catwalk motion */}
        <div className="absolute inset-0 overflow-hidden">
          {images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${story.titular} - Runway View ${idx + 1}`}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                idx === currentImgIndex
                  ? 'opacity-100 scale-100 filter contrast-[1.08] animate-runway-walk'
                  : 'opacity-0 scale-110 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* Paparazzi runway strobe flash overlay */}
        <div
          className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-150 ${
            flashActive ? 'opacity-35' : 'opacity-0'
          }`}
        />

        {/* Top Controls: pause catwalk and optional editor 9:16 preview */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-end z-10">
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlayingRunway(!isPlayingRunway);
              }}
              title={isPlayingRunway ? 'Pause Catwalk' : 'Play Catwalk'}
              className="p-1.5 bg-black/70 hover:bg-black text-white rounded-xs border border-white/20 transition-colors"
            >
              {isPlayingRunway ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            {showAdminTools && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPreviewMockup(story);
                }}
                title="Preview in 9:16 Social Mockup (Editor)"
                className="p-1.5 bg-black/70 hover:bg-black text-white rounded-xs border border-white/20 transition-colors"
              >
                <Eye className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Multi-angle manual carousel arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              aria-label="Toma anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-xs opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Siguiente toma"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-xs opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-10">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(dotIdx);
                  }}
                  className={`h-1.5 transition-all rounded-full ${
                    dotIdx === currentImgIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Ver ángulo ${dotIdx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. Rigid Text Block (Master Mold from Screenshot 2) */}
      <div className="flex flex-col flex-1 border-t border-neutral-300">
        {/* Box A: Titular (Serif / Uppercase / Haute Couture Fashion Format) */}
        <div className="p-4 bg-white border-b border-neutral-300">
          <h3 className="font-bodoni font-bold italic text-base sm:text-lg text-neutral-950 uppercase tracking-tight leading-snug">
            {story.titular}
          </h3>
        </div>

        {/* Box B: Bajada o Subtítulo */}
        <div className="p-4 bg-neutral-50 flex-1 flex flex-col justify-between">
          <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {story.bajada}
          </p>

          {/* Social Captions Distribution Toolbar - Exclusively visible to Editor (Invisible to public) */}
          {showAdminTools && (
            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCaptions(story);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Captions (4 Feeds)</span>
              </button>

              <button
                onClick={handleQuickCopyInstagram}
                title="Copy caption ready for Instagram"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-medium rounded-xs transition-colors"
              >
                {hasCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-[11px] font-semibold text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy IG</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
