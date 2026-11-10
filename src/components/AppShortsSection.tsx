import React, { useState } from 'react';
import { APP_TUTORIAL_SHORTS, AppTutorialShort } from '../data/shortsData';
import { AppShortCard } from './AppShortCard';
import { ShortSocialModal } from './ShortSocialModal';
import { Sparkles, Globe2, Share2, Youtube, Instagram, Video, Twitter } from 'lucide-react';

export const AppShortsSection: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('all');
  const [activeShortForSocial, setActiveShortForSocial] = useState<AppTutorialShort | null>(null);
  const [initialPlatformForModal, setInitialPlatformForModal] = useState<'youtube' | 'instagram' | 'tiktok' | 'x'>('youtube');

  const filteredShorts = selectedLang === 'all'
    ? APP_TUTORIAL_SHORTS
    : APP_TUTORIAL_SHORTS.filter((s) => s.langCode === selectedLang);

  const handleOpenSocialKit = (shortData: AppTutorialShort, initialPlatform: 'youtube' | 'instagram' | 'tiktok' | 'x' = 'youtube') => {
    setActiveShortForSocial(shortData);
    setInitialPlatformForModal(initialPlatform);
  };

  return (
    <section id="app-shorts" className="w-full bg-[#f2f2f2] py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-black">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-black">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 mb-2 font-bold">
              <span className="w-2.5 h-2.5 bg-rose-600 inline-block" />
              <span>VOCATIONLOVE.APP • 6 OFFICIAL 9:16 TUTORIAL SHORTS</span>
            </div>
            <h2 className="font-times text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-neutral-950">
              HOW IT WORKS: 6 INTERNATIONAL TUTORIAL SHORTS
            </h2>
            <p className="mt-2 text-sm text-neutral-700 max-w-3xl leading-relaxed font-sans">
              The recognizable couples from our chronicles step up as actors to guide you through the app across 6 languages.
              Watch the interactive step-by-step walkthrough, listen to the authentic voiceover, and export ready-to-publish packages for YouTube, Instagram, TikTok, and X.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3.5 py-2 bg-black text-white text-xs font-mono font-bold tracking-widest uppercase border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              6 LANGUAGES • MULTIPLATFORM SHARE
            </div>
          </div>
        </div>

        {/* Language Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-1.5 p-1 bg-white border-2 border-black overflow-x-auto no-scrollbar shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <button
              onClick={() => setSelectedLang('all')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all rounded-none ${
                selectedLang === 'all'
                  ? 'bg-black text-white'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
              }`}
            >
              All Shorts (6)
            </button>
            {APP_TUTORIAL_SHORTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedLang(s.langCode)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all rounded-none flex items-center gap-1.5 ${
                  selectedLang === s.langCode
                    ? 'bg-black text-white'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <span>{s.flagEmoji}</span>
                <span>{s.langCode}</span>
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-neutral-600 hidden sm:block">
            Showing {filteredShorts.length} of {APP_TUTORIAL_SHORTS.length} Tutorial Shorts
          </div>
        </div>

        {/* 9:16 Vertical Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredShorts.map((shortData) => (
            <AppShortCard
              key={shortData.id}
              shortData={shortData}
              onOpenSocialKit={handleOpenSocialKit}
            />
          ))}
        </div>

        {/* Global Viral Callout Banner */}
        <div className="p-6 bg-black text-white border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-times font-bold text-lg sm:text-xl uppercase tracking-wider text-rose-300">
              HELP US SPREAD THE REVOLUTION OF AUTHENTIC DEVOTION
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-2xl">
              Download and publish these 6 vertical shorts on your YouTube channel, Instagram Reels, TikTok, and X.
              Together we connect people who dare to love for a lifetime.
            </p>
          </div>
          <a
            href="https://vocationlove.app"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-white hover:bg-neutral-100 text-black font-times font-bold text-xs uppercase tracking-widest transition-colors border border-white shadow-sm"
          >
            ENTER VOCATIONLOVE.APP
          </a>
        </div>
      </div>

      {/* Social Export Package Modal */}
      <ShortSocialModal
        shortData={activeShortForSocial}
        initialPlatform={initialPlatformForModal}
        isOpen={Boolean(activeShortForSocial)}
        onClose={() => setActiveShortForSocial(null)}
      />
    </section>
  );
};
