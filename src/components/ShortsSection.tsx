import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Volume2, VolumeX, Share2, Check } from 'lucide-react';

interface VideoItem {
  id: string;
  src: string;
  titleKey: string;
  descKey: string;
  fallbackTitle: string;
  fallbackDesc: string;
}

const SHARE_VIDEOS: VideoItem[] = [
  {
    id: 'how-it-works',
    src: '/assets/aistudio/VOCATIONLOVE.APP_df69cd2e.mp4',
    titleKey: 'share.video1Title',
    descKey: 'share.video1Desc',
    fallbackTitle: 'CÓMO FUNCIONA VOCATIONLOVE',
    fallbackDesc: 'Descubre la app paso a paso: ingreso seguro con Google, cartilla vocacional y coincidencia mutua.'
  },
  {
    id: 'vocation-love',
    src: '/assets/aistudio/vocationlove.app_Vocaci_n_al_amor_b1931877.mp4',
    titleKey: 'share.video2Title',
    descKey: 'share.video2Desc',
    fallbackTitle: 'VOCACIÓN AL AMOR',
    fallbackDesc: 'Cada historia es una obra de arte. Un lienzo en blanco para la verdad.'
  },
  {
    id: 'commitment-purity',
    src: '/assets/aistudio/Couple_embracing_in_metro_car_ef752b1e_98b34194.mp4',
    titleKey: 'share.video3Title',
    descKey: 'share.video3Desc',
    fallbackTitle: 'EL COMPROMISO CUSTODIA LA PUREZA',
    fallbackDesc: 'Un refugio en la verdad. El camino hacia tu vocación al amor.'
  }
];

// Single Video Card Component with brutalist solid-black share icons
const VideoCard: React.FC<{
  video: VideoItem;
  onCopyFeedback: (msg: string) => void;
}> = ({ video, onCopyFeedback }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeNetwork, setActiveNetwork] = useState<string | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const title = t(video.titleKey) !== video.titleKey ? t(video.titleKey) : video.fallbackTitle;
  const desc = t(video.descKey) !== video.descKey ? t(video.descKey) : video.fallbackDesc;

  const handleShare = async (network: 'youtube' | 'instagram' | 'tiktok' | 'x' | 'share') => {
    const shareUrl = 'https://vocationlove.app';

    if (network === 'share') {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `VocationLove — ${title}`,
            text: `${desc}\n\n${shareUrl}`,
            url: shareUrl
          });
          onCopyFeedback(t('share.copied'));
          return;
        } catch {
          // fallback to clipboard
        }
      }
      await navigator.clipboard.writeText(`${title}\n${desc}\n${shareUrl}`);
      setActiveNetwork('share');
      onCopyFeedback(t('share.copied'));
      setTimeout(() => setActiveNetwork(null), 2000);
      return;
    }

    if (network === 'x') {
      const tweetText = `${title}: ${desc}\n\nConoce la red social para los que se atreven a amar:\n${shareUrl}`;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      window.open(tweetUrl, '_blank', 'noopener,noreferrer');
      setActiveNetwork('x');
      onCopyFeedback('X (Twitter)');
      setTimeout(() => setActiveNetwork(null), 2000);
      return;
    }

    if (network === 'youtube') {
      const ytCopy = `[TÍTULO SHORTS]:\n${title} | VocationLove #Shorts\n\n[DESCRIPCIÓN]:\n${desc}\n\nÚnete a la red social con valores compartidos orientada al noviazgo y matrimonio.\nSitio oficial: https://vocationlove.com\nApp oficial: https://vocationlove.app\n\n#VocationLove #DatingApp #Matrimonio #ValoresCompartidos #AmorVerdadero`;
      await navigator.clipboard.writeText(ytCopy);
      setActiveNetwork('youtube');
      onCopyFeedback('YouTube Shorts');
      setTimeout(() => setActiveNetwork(null), 2000);
      return;
    }

    if (network === 'instagram') {
      const igCopy = `${title} ✨\n\n${desc}\n\nVocationLove es una comunidad para quienes buscan un amor auténtico, con valores y vocación de por vida.\n\n📲 Ingresa en vocationlove.app (enlace en la bio)\n\n#VocationLove #VocationLoveApp #AmorConProposito #NoviazgoCristiano #ValoresCompartidos #Reels`;
      await navigator.clipboard.writeText(igCopy);
      setActiveNetwork('instagram');
      onCopyFeedback('Instagram Reels');
      setTimeout(() => setActiveNetwork(null), 2000);
      return;
    }

    if (network === 'tiktok') {
      const ttCopy = `${title} 💐\n${desc}\n\nUna red social para los que se atreven a amar de verdad.\n👉 vocationlove.app\n\n#vocationlove #datingapp #relacionessanas #matrimonio #couplegoals`;
      await navigator.clipboard.writeText(ttCopy);
      setActiveNetwork('tiktok');
      onCopyFeedback('TikTok');
      setTimeout(() => setActiveNetwork(null), 2000);
      return;
    }
  };

  return (
    <div className="bg-white border-2 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden">
      {/* 9:16 Video Screen */}
      <div
        onClick={togglePlay}
        className="relative w-full aspect-[9/16] bg-black overflow-hidden cursor-pointer select-none group"
      >
        <video
          ref={videoRef}
          src={video.src}
          playsInline
          loop
          muted={isMuted}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover object-center"
        />

        {/* Play / Pause Overlay Button */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-opacity">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] hover:scale-105 transition-transform">
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </div>
          </div>
        )}

        {/* Top Controls: Sound Toggle */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 bg-black text-white rounded-none border-0 hover:bg-neutral-800 transition-colors cursor-pointer"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom Title Bar overlay inside video */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase font-bold">
            VOCATIONLOVE.APP
          </div>
          <div className="font-times font-bold text-sm sm:text-base text-white uppercase tracking-wide leading-tight mt-0.5">
            {title}
          </div>
        </div>
      </div>

      {/* Video Caption & Metadata */}
      <div className="p-4 bg-white border-t-2 border-black flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-times font-bold text-base text-black uppercase tracking-tight leading-snug">
            {title}
          </h3>
          <p className="mt-1.5 text-xs text-neutral-700 font-sans leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Brutalist Solid Black Social Network Logos Row (Sin líneas, negro pleno) */}
        <div className="mt-4 pt-3 border-t border-neutral-200">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 font-bold mb-2">
            Compartir video en:
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            {/* 1. YouTube Shorts */}
            <button
              onClick={() => handleShare('youtube')}
              className="h-10 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
              title="YouTube Shorts"
              aria-label="Compartir en YouTube Shorts"
            >
              {activeNetwork === 'youtube' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )}
            </button>

            {/* 2. Instagram Reels */}
            <button
              onClick={() => handleShare('instagram')}
              className="h-10 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
              title="Instagram Reels"
              aria-label="Compartir en Instagram Reels"
            >
              {activeNetwork === 'instagram' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              )}
            </button>

            {/* 3. TikTok */}
            <button
              onClick={() => handleShare('tiktok')}
              className="h-10 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
              title="TikTok"
              aria-label="Compartir en TikTok"
            >
              {activeNetwork === 'tiktok' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.6-1.57 2.47-3.74 2.47-6.02V8.12a8.27 8.27 0 0 0 4.96 1.63v-3.4a4.86 4.86 0 0 1-1.66.34z"/>
                </svg>
              )}
            </button>

            {/* 4. X (Twitter) */}
            <button
              onClick={() => handleShare('x')}
              className="h-10 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
              title="X (Twitter)"
              aria-label="Compartir en X"
            >
              {activeNetwork === 'x' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )}
            </button>

            {/* 5. Generic Share Icon */}
            <button
              onClick={() => handleShare('share')}
              className="h-10 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
              title="Compartir enlace"
              aria-label="Compartir enlace genérico"
            >
              {activeNetwork === 'share' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShortsSection: React.FC = () => {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleFeedback = (networkOrText: string) => {
    const msg = networkOrText.includes(' ')
      ? networkOrText
      : `¡Texto copiado para ${networkOrText}!`;
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="shorts-section" className="w-full bg-[#f3f3f3] py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="pb-8 border-b-2 border-black mb-10 text-left">
          <h2 className="font-times text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
            {t('share.title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-800 font-sans leading-relaxed max-w-3xl">
            {t('share.subtitle')}
          </p>
        </div>

        {/* 3 Vertical 9:16 Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHARE_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onCopyFeedback={handleFeedback}
            />
          ))}
        </div>

        {/* Global Toast for Sharing feedback */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-black text-white text-xs font-mono tracking-wider uppercase rounded-none border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-bottom duration-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
};
