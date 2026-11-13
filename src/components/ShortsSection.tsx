import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Volume2, VolumeX, Share2, Check, Download } from 'lucide-react';
import { VideoShareModal, VideoShareItem } from './VideoShareModal';

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

// Single Video Card Component with brutalist solid-black share icons and direct Share Hub access
const VideoCard: React.FC<{
  video: VideoItem;
  onOpenShareModal: (video: VideoItem, tab?: 'whatsapp' | 'instagram' | 'tiktok' | 'youtube' | 'x' | 'download') => void;
  onCopyFeedback: (msg: string) => void;
}> = ({ video, onOpenShareModal, onCopyFeedback }) => {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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
  const cleanFileName = `VOCATIONLOVE_${title.replace(/[^a-zA-Z0-9]/g, '_')}.mp4`;

  // Quick download video direct action
  const handleDirectDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(video.src);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = cleanFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      onCopyFeedback(language === 'es' ? '¡Video descargado (.MP4)!' : 'Video downloaded (.MP4)!');
    } catch {
      const link = document.createElement('a');
      link.href = video.src;
      link.download = cleanFileName;
      link.target = '_blank';
      link.click();
      onCopyFeedback(language === 'es' ? 'Descargando video...' : 'Downloading video...');
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

        {/* Share Hub Mega Button + Social Network Logos Row */}
        <div className="mt-4 pt-3 border-t border-neutral-200 space-y-2.5">
          {/* Main Action Bar */}
          <button
            type="button"
            onClick={() => onOpenShareModal(video, 'whatsapp')}
            className="w-full py-2.5 px-3 bg-black hover:bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer select-none"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'es' ? 'Compartir o Descargar Video' : 'Share or Download Video'}</span>
          </button>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1.5 flex items-center justify-between">
              <span>{t('share.shareOn')}</span>
              <span className="text-[9px] text-neutral-400">MP4 HD</span>
            </div>

            <div className="grid grid-cols-6 gap-1">
              {/* 1. WhatsApp */}
              <button
                onClick={() => onOpenShareModal(video, 'whatsapp')}
                className="h-9 bg-black hover:bg-emerald-700 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
                title="Compartir en WhatsApp"
                aria-label="Compartir en WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.888 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>

              {/* 2. Instagram Reels */}
              <button
                onClick={() => onOpenShareModal(video, 'instagram')}
                className="h-9 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
                title="Instagram Reels"
                aria-label="Compartir en Instagram Reels"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </button>

              {/* 3. TikTok */}
              <button
                onClick={() => onOpenShareModal(video, 'tiktok')}
                className="h-9 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
                title="TikTok"
                aria-label="Compartir en TikTok"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.6-1.57 2.47-3.74 2.47-6.02V8.12a8.27 8.27 0 0 0 4.96 1.63v-3.4a4.86 4.86 0 0 1-1.66.34z"/>
                </svg>
              </button>

              {/* 4. YouTube Shorts */}
              <button
                onClick={() => onOpenShareModal(video, 'youtube')}
                className="h-9 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
                title="YouTube Shorts"
                aria-label="Compartir en YouTube Shorts"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>

              {/* 5. X (Twitter) */}
              <button
                onClick={() => onOpenShareModal(video, 'x')}
                className="h-9 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
                title="X (Twitter)"
                aria-label="Compartir en X"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>

              {/* 6. Quick Direct Download MP4 */}
              <button
                onClick={handleDirectDownload}
                className="h-9 bg-black hover:bg-neutral-800 text-white rounded-none border-0 flex items-center justify-center transition-colors cursor-pointer"
                title="Descargar archivo MP4 directamente"
                aria-label="Descargar archivo MP4 directamente"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShortsSection: React.FC = () => {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedVideoForShare, setSelectedVideoForShare] = useState<VideoItem | null>(null);
  const [selectedShareTab, setSelectedShareTab] = useState<'whatsapp' | 'instagram' | 'tiktok' | 'youtube' | 'x' | 'download'>('whatsapp');

  const handleFeedback = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenShareModal = (video: VideoItem, tab: 'whatsapp' | 'instagram' | 'tiktok' | 'youtube' | 'x' | 'download' = 'whatsapp') => {
    setSelectedVideoForShare(video);
    setSelectedShareTab(tab);
  };

  return (
    <section id="shorts-section" className="w-full bg-[#f3f3f3] py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Right-Hand Status Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-black mb-10">
          <div>
            <h2 className="font-times text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
              {t('share.title')}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-800 font-sans leading-relaxed max-w-3xl">
              {t('share.subtitle')}
            </p>
          </div>

          {/* Right-Hand Brutalist Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3.5 py-1.5 bg-neutral-950 text-white text-[11px] font-mono tracking-widest uppercase border border-neutral-800">
              {t('share.status')}
            </div>
          </div>
        </div>

        {/* 3 Vertical 9:16 Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHARE_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onOpenShareModal={handleOpenShareModal}
              onCopyFeedback={handleFeedback}
            />
          ))}
        </div>

        {/* Dedicated Video Share Modal (Share Hub) */}
        <VideoShareModal
          video={selectedVideoForShare}
          isOpen={Boolean(selectedVideoForShare)}
          onClose={() => setSelectedVideoForShare(null)}
          initialTab={selectedShareTab}
        />

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
