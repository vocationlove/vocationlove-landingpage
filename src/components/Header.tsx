import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  onOpenLegal: () => void;
  onOpenEditor?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLegal }) => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in luxury display serif) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            className="font-times text-xl sm:text-2xl font-black tracking-widest text-neutral-950 uppercase select-none hover:opacity-85 transition-opacity"
          >
            VOCATIONLOVE
          </a>
          <span className="hidden sm:inline-block text-[11px] font-sans font-bold uppercase tracking-widest text-neutral-500 border-l border-neutral-300 pl-3">
            {t('brand.tagline')}
          </span>
        </div>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-neutral-700">
          <a href="#breaking-news" className="hover:text-black transition-colors whitespace-nowrap shrink-0">
            {t('nav.inBloom')}
          </a>
          <a href="#runway-chronicles" className="hover:text-black transition-colors whitespace-nowrap shrink-0">
            {t('nav.love')}
          </a>
          <a href="#ecosistema-app" className="hover:text-black transition-colors whitespace-nowrap shrink-0">
            {t('nav.ecosystem')}
          </a>
          <button
            onClick={onOpenLegal}
            className="hover:text-black transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {t('nav.legal')}
          </button>
        </nav>

        {/* Zone 3: Language Selector [ES | EN] + Primary Action to .app */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Minimalist Dropdown Selector in top-right */}
          <LanguageSelector />

          <a
            href="https://vocationlove.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-blue-900 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-blue-950 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <span>{t('nav.goToApp')}</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
