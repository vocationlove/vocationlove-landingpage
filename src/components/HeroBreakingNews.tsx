import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroBreakingNewsProps {
  onExploreApp: () => void;
  onSelectStory?: (id: string) => void;
}

const HEADER_ROTATING_IMAGES = [
  { id: 'vlc', src: '/assets/aistudio/vlc_66f6ec40.png', label: 'VLC - True Connection' },
  { id: 'vlc6', src: '/assets/aistudio/vlc6_0823f608.png', label: 'vlc6 - Brotherhood & Freedom' },
  { id: 'vlc9', src: '/assets/aistudio/vlc9_1de0510d.png', label: 'vlc9 - Joy in Bloom' },
  { id: 'vlc10', src: '/assets/aistudio/vlc10_31069266.png', label: 'vlc10 - Radiant Fellowship' },
  { id: 'pareja-40', src: '/assets/aistudio/pareja_de_40_f0af94b2.png', label: 'Pareja en el Parque - Plenitud y Sonrisa' },
  { id: 'pareja-50', src: '/assets/aistudio/pareja_de_50_49420aba.png', label: 'Pareja en la Cafetería - Amor Maduro y Serena Alegría' }
];

export const HeroBreakingNews: React.FC<HeroBreakingNewsProps> = ({ onExploreApp }) => {
  const { t } = useLanguage();
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);

  // Slow, serene cross-fade rotation between the 4 authentic landscape header images (10s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeaderIndex((prev) => (prev + 1) % HEADER_ROTATING_IMAGES.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="breaking-news" className="w-full bg-neutral-900 border-b border-neutral-300">
      {/* 1. Panoramic Hero Container with VOCATIONLOVE Overlay and VOCATIONLOVE.APP Card */}
      <div className="relative w-full overflow-hidden bg-neutral-950 aspect-[16/7] min-h-[380px] sm:min-h-[460px] md:min-h-[520px] max-h-[640px] flex items-end">
        {/* Background Rotating Images: VLC, vlc6, vlc9, vlc10 */}
        <div className="absolute inset-0 overflow-hidden">
          {HEADER_ROTATING_IMAGES.map((imgItem, idx) => (
            <img
              key={imgItem.id}
              src={imgItem.src}
              alt={imgItem.label}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-all duration-1000 ease-in-out ${
                idx === currentHeaderIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />

        {/* Floating Top-Left Card: VOCATION LOVE.APP */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20">
          <div className="bg-blue-900/95 backdrop-blur-sm text-white px-3.5 py-3 sm:px-5 sm:py-4 rounded-none shadow-2xl border border-blue-700/60 flex flex-col gap-2 max-w-[170px] sm:max-w-[210px]">
            <div className="font-times text-xs sm:text-base font-bold tracking-widest leading-tight whitespace-pre-line">
              {t('hero.floatingAppTitle')}
            </div>
            <a
              href="https://vocationlove.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-blue-950 hover:bg-blue-800 text-white text-[10px] sm:text-[11px] font-semibold tracking-wider rounded-none border border-blue-600/40 transition-colors"
            >
              <span>{t('hero.floatingAppBtn')}</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>

        {/* Live Indicator Pill on top right: IN BLOOM */}
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Grand Headline: VOCATIONLOVE across the crowd */}
        <div className="relative z-10 w-full px-2 sm:px-6 md:px-8 pb-3 sm:pb-6 text-center overflow-hidden">
          <h1 className="font-times text-[clamp(1.75rem,7.5vw,7.5rem)] font-black text-white tracking-wider sm:tracking-widest uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] select-none leading-none max-w-full">
            VOCATIONLOVE
          </h1>
        </div>
      </div>

      {/* 2. Urgent News Title Container */}
      <div className="w-full bg-white text-neutral-950 py-4 sm:py-6 px-4 sm:px-8 border-b border-neutral-300 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-1.5">
            {t('hero.urgent')}
          </div>
          <h2 className="font-times text-base sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-neutral-950 leading-snug whitespace-pre-line">
            {t('hero.headline')}
          </h2>
        </div>
      </div>

      {/* 3. Black Marquee Bar: First moving row with Pope Leo XIV quote */}
      <div className="w-full bg-black text-white py-2.5 sm:py-3 overflow-hidden border-b border-neutral-800 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 sm:gap-14 font-sans text-xs sm:text-sm font-semibold tracking-wider text-neutral-200">
          {[1, 2].map((loopIdx) => (
            <React.Fragment key={`pope-marquee-${loopIdx}`}>
              <span className="flex items-center gap-3">
                <span className="text-rose-500 font-bold">●</span>
                <span>{t('hero.popeQuote')}</span>
              </span>
              <span className="text-neutral-600 font-serif">///</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 4. Navy Blue Marquee Bar: Second moving row with Launching Announcement */}
      <div className="w-full bg-blue-950 text-blue-100 py-2 sm:py-2.5 overflow-hidden border-b border-blue-900 select-none">
        <div className="animate-marquee-slow whitespace-nowrap flex items-center gap-10 font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-blue-200 uppercase">
          {[1, 2].map((loopIdx) => (
            <React.Fragment key={`launch-marquee-${loopIdx}`}>
              <span className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">•••</span>
                <span>{t('hero.launchMarquee')}</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 5. Third Row: Centered larger link go to vocationlove.app */}
      <div className="w-full bg-neutral-900 text-white px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center border-b border-neutral-700">
        <a
          href="https://vocationlove.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-base sm:text-lg md:text-xl font-bold font-mono tracking-widest uppercase text-white hover:text-blue-300 transition-colors"
        >
          <span>{t('hero.goToAppDirect')}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform text-blue-400" />
        </a>
      </div>
    </section>
  );
};
