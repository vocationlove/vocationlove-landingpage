import React, { useState, useEffect, useRef } from 'react';
import { AppTutorialShort } from '../data/shortsData';
import { AppStageMockup } from './AppStageMockup';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Share2,
  Youtube,
  Instagram,
  Twitter,
  Video,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Check,
  Copy
} from 'lucide-react';

interface AppShortCardProps {
  shortData: AppTutorialShort;
  onOpenSocialKit: (shortData: AppTutorialShort, initialPlatform?: 'youtube' | 'instagram' | 'tiktok' | 'x') => void;
}

export const AppShortCard: React.FC<AppShortCardProps> = ({
  shortData,
  onOpenSocialKit
}) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [hasCopiedShare, setHasCopiedShare] = useState<string | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stage = shortData.stages[currentStageIdx];
  const totalStages = shortData.stages.length;

  // Speak stage voiceover via Web Speech API if audio is enabled
  useEffect(() => {
    if (!isAudioEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(stage.voiceover);
    utterance.lang = shortData.speechLang;
    utterance.rate = 1.0;
    utterance.pitch = 1.05;
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentStageIdx, isAudioEnabled, stage.voiceover, shortData.speechLang]);

  // Auto-progress stages when playing (6.5s per stage for serene readability)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStageIdx((prev) => (prev + 1) % totalStages);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPlaying, totalStages]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAudioEnabled) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsAudioEnabled(false);
    } else {
      setIsAudioEnabled(true);
    }
  };

  const handlePrevStage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStageIdx((prev) => (prev - 1 + totalStages) % totalStages);
  };

  const handleNextStage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStageIdx((prev) => (prev + 1) % totalStages);
  };

  const handleNativeShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: `${shortData.title} | VocationLove`,
      text: `${shortData.hook}\n\n${stage.voiceover}\n\nJoin at: https://vocationlove.app`,
      url: 'https://vocationlove.app'
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to modal if dismissed or error
      }
    }
    // Fallback: Copy to clipboard and show toast
    navigator.clipboard.writeText(`${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`);
    setHasCopiedShare('native');
    setTimeout(() => setHasCopiedShare(null), 2500);
  };

  return (
    <div className="flex flex-col bg-white border-2 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      {/* 1. Header Bar: Language Badge & Actor Character */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-black text-white border-b-2 border-black text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-base">{shortData.flagEmoji}</span>
          <span className="font-bold text-white uppercase tracking-wider">
            {shortData.langCode} • {shortData.langLabel}
          </span>
        </div>
        <span className="text-[11px] text-neutral-300 uppercase truncate max-w-[140px] font-sans">
          {shortData.actorPairTitle}
        </span>
      </div>

      {/* 2. Master 9:16 Vertical Video Container */}
      <div className="relative w-full aspect-[9/16] overflow-hidden bg-neutral-950 select-none group">
        {/* Background Actor Image in their iconic card attire */}
        <img
          src={shortData.actorImage}
          alt={shortData.actorPairTitle}
          className={`absolute inset-0 w-full h-full object-cover object-center filter contrast-105 brightness-90 transition-transform duration-1000 ${
            isPlaying ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/60 pointer-events-none" />

        {/* Top Control Bar with 9:16 Short Badge & Sound/Play Toggles */}
        <div className="absolute top-3 inset-x-3 z-30 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-black/80 backdrop-blur-xs border border-white/30 text-[10px] font-mono text-white tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>9:16 SHORT</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleToggleAudio}
              title={isAudioEnabled ? "Mute Voiceover" : "Listen Voiceover (Speech Synthesis)"}
              className={`p-1.5 rounded-none border transition-colors ${
                isAudioEnabled
                  ? 'bg-rose-600 border-rose-400 text-white'
                  : 'bg-black/70 border-white/30 text-neutral-300 hover:text-white'
              }`}
            >
              {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleTogglePlay}
              title={isPlaying ? "Pause Short" : "Play Short"}
              className="p-1.5 bg-black/70 hover:bg-black text-white rounded-none border border-white/30 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Dynamic Foreground App Stage Walkthrough Overlay */}
        <div className="absolute inset-x-3.5 top-12 bottom-28 z-20 flex items-center justify-center">
          <div className="w-full max-w-[270px] aspect-[9/13] shadow-2xl border border-white/20">
            <AppStageMockup
              type={stage.uiMockupType}
              actorImage={shortData.actorImage}
            />
          </div>
        </div>

        {/* Step Navigation Arrows on Hover */}
        <button
          onClick={handlePrevStage}
          className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 hover:bg-black text-white border border-white/30 z-30 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous step"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNextStage}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 hover:bg-black text-white border border-white/30 z-30 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next step"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Subtitle / Voiceover Ticker Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-30 p-3.5 bg-gradient-to-t from-black via-black/95 to-transparent text-white space-y-2">
          {/* Progress Timeline Segments */}
          <div className="flex gap-1 w-full">
            {shortData.stages.map((_, sIdx) => (
              <div
                key={sIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentStageIdx(sIdx);
                }}
                className={`h-1 flex-1 cursor-pointer transition-all ${
                  sIdx === currentStageIdx
                    ? 'bg-rose-500'
                    : sIdx < currentStageIdx
                    ? 'bg-white'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Current Stage Badge */}
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="font-bold text-rose-400 uppercase tracking-wider">
              {stage.badge}
            </span>
            <span className="text-neutral-400">
              {currentStageIdx + 1} / {totalStages}
            </span>
          </div>

          {/* Spoken Voiceover Subtitles */}
          <p className="text-xs sm:text-[13px] font-sans font-medium leading-snug text-neutral-100 line-clamp-3">
            "{stage.voiceover}"
          </p>
        </div>
      </div>

      {/* 3. Social Sharing & Publication Toolbar */}
      <div className="p-3 bg-neutral-900 border-t-2 border-black space-y-2.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
          <span className="font-bold text-white">SHARE & PUBLISH</span>
          <span>READY 9:16</span>
        </div>

        {/* Network Action Buttons: YouTube, Instagram, TikTok, X, and Native Share */}
        <div className="grid grid-cols-5 gap-1.5">
          {/* YouTube Shorts Button */}
          <button
            onClick={() => onOpenSocialKit(shortData, 'youtube')}
            title="Export YouTube Shorts Package"
            className="flex flex-col items-center justify-center p-2 bg-neutral-800 hover:bg-red-700 text-white rounded-none border border-neutral-700 transition-colors group/btn"
          >
            <Youtube className="w-4 h-4 text-red-500 group-hover/btn:text-white" />
            <span className="text-[9px] font-mono mt-1">Shorts</span>
          </button>

          {/* Instagram Reels Button */}
          <button
            onClick={() => onOpenSocialKit(shortData, 'instagram')}
            title="Export Instagram Reels Package"
            className="flex flex-col items-center justify-center p-2 bg-neutral-800 hover:bg-pink-700 text-white rounded-none border border-neutral-700 transition-colors group/btn"
          >
            <Instagram className="w-4 h-4 text-pink-500 group-hover/btn:text-white" />
            <span className="text-[9px] font-mono mt-1">Reels</span>
          </button>

          {/* TikTok Catwalk Button */}
          <button
            onClick={() => onOpenSocialKit(shortData, 'tiktok')}
            title="Export TikTok Package"
            className="flex flex-col items-center justify-center p-2 bg-neutral-800 hover:bg-cyan-700 text-white rounded-none border border-neutral-700 transition-colors group/btn"
          >
            <Video className="w-4 h-4 text-cyan-400 group-hover/btn:text-white" />
            <span className="text-[9px] font-mono mt-1">TikTok</span>
          </button>

          {/* X / Twitter Button */}
          <button
            onClick={() => onOpenSocialKit(shortData, 'x')}
            title="Export X / Twitter Post"
            className="flex flex-col items-center justify-center p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-none border border-neutral-700 transition-colors group/btn"
          >
            <Twitter className="w-4 h-4 text-neutral-300 group-hover/btn:text-white" />
            <span className="text-[9px] font-mono mt-1">X</span>
          </button>

          {/* Native Device Share Button */}
          <button
            onClick={handleNativeShare}
            title="Share via device (WhatsApp, Telegram, etc.)"
            className="flex flex-col items-center justify-center p-2 bg-neutral-800 hover:bg-emerald-700 text-white rounded-none border border-neutral-700 transition-colors group/btn"
          >
            {hasCopiedShare ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Share2 className="w-4 h-4 text-emerald-400 group-hover/btn:text-white" />
            )}
            <span className="text-[9px] font-mono mt-1">
              {hasCopiedShare ? 'Copied' : 'Share'}
            </span>
          </button>
        </div>

        {/* Enter App Call to Action */}
        <a
          href="https://vocationlove.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-neutral-100 text-black font-times font-bold text-xs uppercase tracking-wider transition-colors border border-black rounded-none shadow-xs"
        >
          <span>ENTER VOCATIONLOVE.APP</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
