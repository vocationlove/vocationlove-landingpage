import React, { useState } from 'react';
import { ChronicleStory } from '../data/chronicles';
import {
  X,
  Copy,
  Check,
  Smartphone,
  Share2,
  Instagram,
  Video,
  Twitter,
  Youtube,
  Send,
  Eye,
  Sparkles
} from 'lucide-react';

interface SocialCaptionsModalProps {
  story: ChronicleStory | null;
  initialMode?: 'captions' | 'preview';
  onClose: () => void;
}

export const SocialCaptionsModal: React.FC<SocialCaptionsModalProps> = ({
  story,
  initialMode = 'captions',
  onClose
}) => {
  if (!story) return null;

  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok' | 'youtube' | 'x'>('instagram');
  const [viewMode, setViewMode] = useState<'captions' | 'preview'>(initialMode);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getFullCaption = (platform: 'instagram' | 'tiktok' | 'youtube' | 'x') => {
    if (platform === 'instagram') {
      const { hook, body, cta, hashtags } = story.captions.instagram;
      return `${hook}\n\n${body}\n\n${cta}\n\n${hashtags.join(' ')}`;
    }
    if (platform === 'tiktok') {
      const { hook3s, voiceoverScript, hashtags } = story.captions.tiktok;
      return `[GANCHO 3s]:\n${hook3s}\n\n[GUIÓN VOZ EN OFF (PASARELA)]:\n${voiceoverScript}\n\n[HASHTAGS]:\n${hashtags.join(' ')}`;
    }
    if (platform === 'youtube') {
      const { title, description, tags } = story.captions.youtube;
      return `[TÍTULO SHORTS]:\n${title}\n\n[DESCRIPCIÓN]:\n${description}\n\n[TAGS]:\n${tags.join(', ')}`;
    }
    if (platform === 'x') {
      const { headline, tweetThread } = story.captions.x;
      return `[TITULAR]:\n${headline}\n\n[HILO DE X / TWITTER]:\n${tweetThread.join('\n\n')}`;
    }
    return '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-xs border border-neutral-300 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-neutral-900 text-white border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-neutral-800 text-[10px] font-mono tracking-widest text-neutral-300 border border-neutral-700">
              9:16 SOCIAL DISTRIBUTION
            </span>
            <h3 className="font-times text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-100 truncate max-w-md">
              {story.id} • Multiplatform Captions
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-neutral-800 p-0.5 rounded-xs border border-neutral-700">
              <button
                onClick={() => setViewMode('captions')}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === 'captions'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Captions</span>
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === 'preview'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>9:16 Mockup</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors rounded-xs ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-neutral-50">
          {viewMode === 'captions' ? (
            <div className="space-y-6">
              {/* Platform Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setActiveTab('instagram')}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center gap-2.5 ${
                    activeTab === 'instagram'
                      ? 'border-neutral-900 bg-white shadow-sm ring-1 ring-neutral-900 text-neutral-950 font-bold'
                      : 'border-neutral-200 bg-white/70 hover:bg-white text-neutral-600'
                  }`}
                >
                  <Instagram className="w-4 h-4 text-neutral-900 shrink-0" />
                  <div className="text-xs uppercase tracking-wider">Instagram Feed & Reels</div>
                </button>

                <button
                  onClick={() => setActiveTab('tiktok')}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center gap-2.5 ${
                    activeTab === 'tiktok'
                      ? 'border-neutral-900 bg-white shadow-sm ring-1 ring-neutral-900 text-neutral-950 font-bold'
                      : 'border-neutral-200 bg-white/70 hover:bg-white text-neutral-600'
                  }`}
                >
                  <Video className="w-4 h-4 text-cyan-600 shrink-0" />
                  <div className="text-xs uppercase tracking-wider">TikTok Catwalk</div>
                </button>

                <button
                  onClick={() => setActiveTab('youtube')}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center gap-2.5 ${
                    activeTab === 'youtube'
                      ? 'border-neutral-900 bg-white shadow-sm ring-1 ring-neutral-900 text-neutral-950 font-bold'
                      : 'border-neutral-200 bg-white/70 hover:bg-white text-neutral-600'
                  }`}
                >
                  <Youtube className="w-4 h-4 text-red-600 shrink-0" />
                  <div className="text-xs uppercase tracking-wider">YouTube Shorts</div>
                </button>

                <button
                  onClick={() => setActiveTab('x')}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center gap-2.5 ${
                    activeTab === 'x'
                      ? 'border-neutral-900 bg-white shadow-sm ring-1 ring-neutral-900 text-neutral-950 font-bold'
                      : 'border-neutral-200 bg-white/70 hover:bg-white text-neutral-600'
                  }`}
                >
                  <Twitter className="w-4 h-4 text-neutral-900 shrink-0" />
                  <div className="text-xs uppercase tracking-wider">X (Microprensa)</div>
                </button>
              </div>

              {/* Story Context Summary */}
              <div className="p-3 bg-white border border-neutral-200 rounded-xs flex items-center justify-between text-xs text-neutral-600">
                <span className="font-semibold text-neutral-900 uppercase">
                  Story: {story.titular}
                </span>
                <span className="font-mono text-neutral-400">ID: {story.id}</span>
              </div>

              {/* Tab Content Display */}
              <div className="bg-white border border-neutral-300 rounded-xs p-5 shadow-xs relative">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                      Formatted Caption for {activeTab.toUpperCase()}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(getFullCaption(activeTab), `full-${activeTab}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors"
                  >
                    {copiedKey === `full-${activeTab}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Caption</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Platform Specific Breakdown */}
                {activeTab === 'instagram' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        1. Editorial Hook (First High-Impact Line)
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 font-semibold text-neutral-900">
                        {story.captions.instagram.hook}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        2. Story Body
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-800 whitespace-pre-wrap leading-relaxed">
                        {story.captions.instagram.body}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        3. Call to Action (CTA)
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-800">
                        {story.captions.instagram.cta}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        4. Curated Hashtags
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-blue-800 font-mono text-xs">
                        {story.captions.instagram.hashtags.join(' ')}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'tiktok' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        Visual Hook (First 3 Seconds)
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 font-bold text-neutral-950">
                        {story.captions.tiktok.hook3s}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        Voiceover Script (Synced with 9:16 Catwalk Motion)
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-800 whitespace-pre-wrap leading-relaxed font-sans">
                        {story.captions.tiktok.voiceoverScript}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        Trending & Niche Hashtags
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-cyan-800 font-mono text-xs">
                        {story.captions.tiktok.hashtags.join(' ')}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'youtube' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        High-CTR Shorts Title
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 font-bold text-neutral-950">
                        {story.captions.youtube.title}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        SEO Description & Links
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-800 whitespace-pre-wrap leading-relaxed font-mono text-xs">
                        {story.captions.youtube.description}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        Indexing Tags
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-700 font-mono text-xs">
                        {story.captions.youtube.tags.join(', ')}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'x' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        Press Headline
                      </div>
                      <div className="p-3 bg-neutral-50 border border-neutral-200 font-bold text-neutral-950">
                        {story.captions.x.headline}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                        Sequential Thread for X / Twitter
                      </div>
                      <div className="space-y-2">
                        {story.captions.x.tweetThread.map((tweet, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-800 flex items-start justify-between gap-3"
                          >
                            <p className="flex-1 leading-relaxed">{tweet}</p>
                            <button
                              onClick={() => copyToClipboard(tweet, `tweet-${tIdx}`)}
                              className="text-neutral-500 hover:text-black shrink-0 p-1"
                              title="Copy this tweet"
                            >
                              {copiedKey === `tweet-${tIdx}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Live 9:16 Smartphone Mockup Simulator */
            <div className="flex flex-col items-center justify-center py-4">
              <div className="text-center mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  LIVE 9:16 SOCIAL STORIES & REELS SIMULATOR
                </span>
                <p className="text-xs text-neutral-700 mt-1">
                  How this story renders in vertical 9:16 Reels, Shorts, and TikTok with high-couture motion.
                </p>
              </div>

              {/* Smartphone Frame */}
              <div className="w-[300px] sm:w-[330px] aspect-[9/16] bg-black rounded-[36px] p-3 shadow-2xl border-4 border-neutral-800 relative overflow-hidden flex flex-col">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-4 inset-x-0 flex justify-center z-30">
                  <div className="w-24 h-4 bg-neutral-900 rounded-full" />
                </div>

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-neutral-950 flex flex-col justify-between">
                  <img
                    src={story.imagen_9_16}
                    alt={story.titular}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover animate-runway-walk"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                  {/* Top Feed Header */}
                  <div className="relative z-10 pt-8 px-4 flex items-center justify-between text-white text-[11px] font-bold">
                    <span className="font-times font-bold tracking-widest">VOCATIONLOVE</span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 bg-emerald-700 rounded-xs">
                      9:16 VERTICAL
                    </span>
                  </div>

                  {/* Bottom Feed Overlay */}
                  <div className="relative z-10 p-4 text-white space-y-2">
                    <div className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase">
                      @{story.id} • {story.categoria}
                    </div>
                    <h4 className="font-bodoni font-bold italic text-sm uppercase leading-tight drop-shadow-sm">
                      {story.titular}
                    </h4>
                    <p className="text-[11px] text-neutral-200 line-clamp-2 leading-relaxed">
                      {story.bajada}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-white/20">
                      <span>VocationLove.app</span>
                      <span>Original Audio • Runway</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
          <span className="font-mono text-[11px]">
            {story.autor} • {story.edicion}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-900 text-white font-semibold uppercase tracking-wider text-xs rounded-xs hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
