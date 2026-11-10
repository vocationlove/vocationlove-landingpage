import React, { useEffect } from 'react';
import { ChronicleStory } from '../data/chronicles';
import { useLanguage } from '../context/LanguageContext';
import { getStoryTitle, getStorySubtitle, getStoryCategory } from '../data/storyTranslations';
import { X, ArrowRight } from 'lucide-react';

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
  const { language, t } = useLanguage();
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Brutalist Frame: completely straight corners (rounded-none), solid 2px black border */}
      <div
        className="relative w-full max-w-lg bg-white rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar: Solid black with clean typography */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-black text-white border-b-2 border-black rounded-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-white rounded-none inline-block" />
            <span className="font-times font-bold text-xs uppercase tracking-widest text-white">
              {t('modal.ecosystemBadge')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer rounded-none border border-transparent hover:border-white"
            aria-label={t('modal.close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 bg-white">
          {/* Story Preview Card Header - Brutalist box with solid borders */}
          <div className="flex gap-4 items-start p-4 bg-neutral-50 border-2 border-black rounded-none">
            <div className="w-20 sm:w-24 aspect-[2/3] shrink-0 overflow-hidden bg-black rounded-none border border-black shadow-xs">
              <img
                src={coverImage}
                alt={getStoryTitle(story, language)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 font-bold mb-1">
                {getStoryCategory(story, language)}
              </div>
              <h3 className="font-times font-bold text-sm sm:text-base text-black uppercase leading-snug tracking-tight line-clamp-2">
                {getStoryTitle(story, language)}
              </h3>
              <p className="mt-1.5 text-xs text-neutral-700 font-sans line-clamp-2 leading-relaxed">
                {getStorySubtitle(story, language)}
              </p>
            </div>
          </div>

          {/* Brutalist Action Buttons: No phone or flower icons, pure editorial design */}
          <div className="space-y-3.5 pt-1">
            <div className="text-[11px] font-mono uppercase tracking-widest text-black font-bold px-0.5">
              {t('modal.destinationTag')}
            </div>

            {/* BUTTON 1: ENTER THE SOCIAL APP (Solid Black, sharp corners, bold serif typography) */}
            <a
              href="https://vocationlove.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-black hover:bg-neutral-900 text-white rounded-none border-2 border-black transition-all duration-150 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <div className="flex-1 min-w-0 pr-3">
                <div className="font-times text-base sm:text-lg font-bold tracking-wider uppercase text-white leading-tight">
                  {t('modal.btnSocialApp')}
                </div>
                <div className="text-xs font-mono text-neutral-300 mt-1 truncate">
                  {t('modal.btnSocialSub')}
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center w-9 h-9 border border-white/40 group-hover:border-white group-hover:bg-white group-hover:text-black transition-colors rounded-none">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

            {/* BUTTON 2: VISIT THE FLOWER STORE (Solid White with sharp black border, bold serif typography) */}
            <a
              href="https://vocationlove.store"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-neutral-100 text-black rounded-none border-2 border-black transition-all duration-150 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <div className="flex-1 min-w-0 pr-3">
                <div className="font-times text-base sm:text-lg font-bold tracking-wider uppercase text-black leading-tight">
                  {t('modal.btnStore')}
                </div>
                <div className="text-xs font-mono text-neutral-600 mt-1 truncate">
                  {t('modal.btnStoreSub')}
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center w-9 h-9 border-2 border-black group-hover:bg-black group-hover:text-white transition-colors rounded-none">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Discreet Bottom Bar with Close Button */}
        <div className="px-6 py-3.5 bg-neutral-100 border-t-2 border-black flex items-center justify-between rounded-none">
          <div className="text-[11px] font-mono text-neutral-600 font-semibold uppercase tracking-wider">
            {t('modal.footerNav')}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono font-bold uppercase tracking-widest text-black bg-white hover:bg-black hover:text-white transition-colors px-4 py-1.5 border border-black rounded-none cursor-pointer"
          >
            {t('modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
