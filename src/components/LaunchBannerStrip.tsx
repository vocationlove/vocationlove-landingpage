import React from 'react';
import { ExternalLink, Heart, Sparkles } from 'lucide-react';

export const LaunchBannerStrip: React.FC = () => {
  const bannerText =
    "Today is the launch of the new VOCATIONLOVE APP, a place for those who dare.";

  return (
    <section id="ecosistema-app" className="w-full bg-neutral-900 py-10 px-4 sm:px-6 lg:px-8 border-t border-b border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-300">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>OFFICIAL LAUNCH • VOCATIONLOVE.APP</span>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase">AVAILABLE ON APP & STORE</span>
        </div>

        {/* Master Wine / Burgundy Single Rectangular Card */}
        <div className="w-full">
          <a
            href="https://vocationlove.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#6e1e3b] hover:bg-[#832347] text-white p-6 sm:p-7 rounded-xs transition-all duration-300 shadow-xl border border-[#8f2a4f] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <p className="font-sans text-sm sm:text-base font-semibold leading-relaxed tracking-wide text-neutral-100 max-w-2xl">
              {bannerText}
            </p>
            <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-neutral-950/60 hover:bg-neutral-950 text-white rounded-xs border border-white/20 text-xs font-mono tracking-widest uppercase transition-colors">
              <span>Access</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
