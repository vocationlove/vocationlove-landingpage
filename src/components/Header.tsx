import React from 'react';
import { ExternalLink, Sparkles, Feather } from 'lucide-react';

interface HeaderProps {
  onOpenLegal: () => void;
  onOpenEditor?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLegal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in luxury display serif) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            className="font-cinzel text-xl sm:text-2xl font-black tracking-widest text-neutral-950 uppercase select-none hover:opacity-85 transition-opacity"
          >
            VOCATIONLOVE
          </a>
          <span className="hidden sm:inline-block text-[11px] font-sans font-bold uppercase tracking-widest text-neutral-500 border-l border-neutral-300 pl-3">
            DARE TO LOVE
          </span>
        </div>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-neutral-700">
          <a href="#breaking-news" className="hover:text-black transition-colors whitespace-nowrap shrink-0">
            IN BLOOM
          </a>
          <a href="#runway-chronicles" className="hover:text-black transition-colors whitespace-nowrap shrink-0">
            LOVE
          </a>
          <a href="#ecosistema-app" className="hover:text-black transition-colors whitespace-nowrap shrink-0">
            ECOSYSTEM
          </a>
          <a href="#app-shorts" className="hover:text-black transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
            <span>SHORTS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
          </a>
          <button
            onClick={onOpenLegal}
            className="hover:text-black transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            LEGAL
          </button>
        </nav>

        {/* Zone 3: Primary Action to .app */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://vocationlove.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-blue-950 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <span>GO TO APP</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
