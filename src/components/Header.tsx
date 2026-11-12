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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-300 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Brand Wordmark (Single text element in luxury display serif) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <a
            href="/"
            className="font-times text-lg sm:text-2xl font-black tracking-widest text-neutral-950 uppercase select-none hover:opacity-85 transition-opacity"
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

        {/* Zone 3: Active Language Selector + Primary Action "APP" [↗] */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Minimalist Dropdown Selector in top-right showing active language */}
          <LanguageSelector />

          <a
            href="https://vocationlove.app"
            target="_blank"
            rel="noopener noreferrer"
            title={t('nav.goToApp')}
            aria-label={t('nav.goToApp')}
            className="group inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-blue-900 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-none hover:bg-blue-950 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <span>APP</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
