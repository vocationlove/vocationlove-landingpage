import React, { useState } from 'react';
import { AppTutorialShort } from '../data/shortsData';
import {
  X,
  Youtube,
  Instagram,
  Video,
  Twitter,
  Copy,
  Check,
  ExternalLink,
  Share2,
  Sparkles
} from 'lucide-react';

interface ShortSocialModalProps {
  shortData: AppTutorialShort | null;
  initialPlatform?: 'youtube' | 'instagram' | 'tiktok' | 'x';
  isOpen: boolean;
  onClose: () => void;
}

export const ShortSocialModal: React.FC<ShortSocialModalProps> = ({
  shortData,
  initialPlatform = 'youtube',
  isOpen,
  onClose
}) => {
  if (!isOpen || !shortData) return null;

  const [activePlatform, setActivePlatform] = useState<'youtube' | 'instagram' | 'tiktok' | 'x'>(initialPlatform);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const getFullPackageText = () => {
    if (activePlatform === 'youtube') {
      const yt = shortData.socialKit.youtube;
      return `[YOUTUBE SHORTS TITLE]:\n${yt.title}\n\n[DESCRIPTION]:\n${yt.description}\n\n[TAGS]:\n${yt.tags.join(', ')}`;
    }
    if (activePlatform === 'instagram') {
      const ig = shortData.socialKit.instagram;
      return `${ig.caption}\n\n${ig.hashtags.join(' ')}`;
    }
    if (activePlatform === 'tiktok') {
      const tt = shortData.socialKit.tiktok;
      return `${tt.caption}\n\n${tt.hashtags.join(' ')}`;
    }
    if (activePlatform === 'x') {
      return shortData.socialKit.x.text;
    }
    return '';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border-2 border-black rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black text-white border-b-2 border-black">
          <div className="flex items-center gap-2">
            <span className="text-base">{shortData.flagEmoji}</span>
            <span className="font-times font-bold text-sm uppercase tracking-wider text-white">
              {shortData.langCode} • {shortData.langLabel} Short Package
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Short Summary Bar */}
        <div className="px-5 py-3 bg-neutral-100 border-b border-neutral-300 flex items-center justify-between text-xs">
          <span className="font-bold text-black font-times uppercase truncate max-w-md">
            {shortData.actorPairTitle} — {shortData.title}
          </span>
          <span className="font-mono text-neutral-500 uppercase text-[10px]">
            Ready 9:16
          </span>
        </div>

        {/* Platform Selection Tabs */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setActivePlatform('youtube')}
              className={`p-2.5 text-center border-2 rounded-none transition-all flex flex-col items-center justify-center gap-1 ${
                activePlatform === 'youtube'
                  ? 'border-black bg-red-600 text-white font-bold shadow-xs'
                  : 'border-neutral-300 bg-neutral-50 hover:bg-white text-neutral-700'
              }`}
            >
              <Youtube className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase">YouTube</span>
            </button>

            <button
              onClick={() => setActivePlatform('instagram')}
              className={`p-2.5 text-center border-2 rounded-none transition-all flex flex-col items-center justify-center gap-1 ${
                activePlatform === 'instagram'
                  ? 'border-black bg-pink-600 text-white font-bold shadow-xs'
                  : 'border-neutral-300 bg-neutral-50 hover:bg-white text-neutral-700'
              }`}
            >
              <Instagram className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase">Instagram</span>
            </button>

            <button
              onClick={() => setActivePlatform('tiktok')}
              className={`p-2.5 text-center border-2 rounded-none transition-all flex flex-col items-center justify-center gap-1 ${
                activePlatform === 'tiktok'
                  ? 'border-black bg-cyan-600 text-white font-bold shadow-xs'
                  : 'border-neutral-300 bg-neutral-50 hover:bg-white text-neutral-700'
              }`}
            >
              <Video className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase">TikTok</span>
            </button>

            <button
              onClick={() => setActivePlatform('x')}
              className={`p-2.5 text-center border-2 rounded-none transition-all flex flex-col items-center justify-center gap-1 ${
                activePlatform === 'x'
                  ? 'border-black bg-black text-white font-bold shadow-xs'
                  : 'border-neutral-300 bg-neutral-50 hover:bg-white text-neutral-700'
              }`}
            >
              <Twitter className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase">X (Twitter)</span>
            </button>
          </div>

          {/* Copy Full Package Button */}
          <div className="flex justify-end">
            <button
              onClick={() => copyText(getFullPackageText(), `full-${activePlatform}`)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider rounded-none border border-black shadow-xs transition-colors cursor-pointer"
            >
              {copiedKey === `full-${activePlatform}` ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied All to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Complete {activePlatform.toUpperCase()} Package</span>
                </>
              )}
            </button>
          </div>

          {/* Content Breakdown by Platform */}
          {activePlatform === 'youtube' && (
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  1. Shorts Title (High-CTR)
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 font-bold text-neutral-900 select-all">
                  {shortData.socialKit.youtube.title}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  2. Description & Links
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 font-mono text-xs text-neutral-800 whitespace-pre-wrap select-all">
                  {shortData.socialKit.youtube.description}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  3. Indexing Tags
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 font-mono text-xs text-neutral-700 select-all">
                  {shortData.socialKit.youtube.tags.join(', ')}
                </div>
              </div>
            </div>
          )}

          {activePlatform === 'instagram' && (
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  Reels Caption
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 whitespace-pre-wrap select-all">
                  {shortData.socialKit.instagram.caption}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  Hashtags
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 font-mono text-xs text-pink-700 select-all">
                  {shortData.socialKit.instagram.hashtags.join(' ')}
                </div>
              </div>
            </div>
          )}

          {activePlatform === 'tiktok' && (
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  TikTok Caption & Audio Cue
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 whitespace-pre-wrap select-all">
                  {shortData.socialKit.tiktok.caption}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  Hashtags
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 font-mono text-xs text-cyan-800 select-all">
                  {shortData.socialKit.tiktok.hashtags.join(' ')}
                </div>
              </div>
            </div>
          )}

          {activePlatform === 'x' && (
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  Post Content for X
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 whitespace-pre-wrap select-all">
                  {shortData.socialKit.x.text}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shortData.socialKit.x.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-neutral-800 font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Open & Tweet directly on X</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-neutral-100 border-t-2 border-black flex items-center justify-between">
          <div className="text-[11px] font-mono text-neutral-500">
            Paste directly into your creator studio
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono font-bold uppercase tracking-widest text-black bg-white hover:bg-black hover:text-white transition-colors px-4 py-1.5 border border-black rounded-none cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
