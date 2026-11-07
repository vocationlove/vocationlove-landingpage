import React from 'react';
import { ExternalLink, Heart, Sparkles } from 'lucide-react';

export const LaunchBannerStrip: React.FC = () => {
  const bannerText =
    "Today is the launch of the new VOCATIONLOVE APP, a place for those who dare.";

  return (
    <section id="ecosistema-app" className="w-full bg-neutral-900 py-10 px-4 sm:px-6 lg:px-8 border-t border-b border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white">
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span className="font-semibold text-white">OFFICIAL LAUNCH • VOCATIONLOVE.APP</span>
          </div>
          <span className="text-xs font-mono text-neutral-300 uppercase">AVAILABLE ON APP & STORE</span>
        </div>

        {/* Master Pure White Single Rectangular Card without border and solid black button */}
        <div className="w-full">
          <a
            href="https://vocationlove.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white hover:bg-neutral-50 text-neutral-950 p-6 sm:p-7 rounded-xs transition-all duration-300 shadow-xl border-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <p className="font-sans text-sm sm:text-base font-semibold leading-relaxed tracking-wide text-neutral-950 max-w-2xl">
              {bannerText}
            </p>
            <div className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-neutral-900 text-white rounded-xs border-0 text-xs font-mono tracking-widest uppercase transition-colors shadow-sm">
              <span className="font-bold">Access</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
