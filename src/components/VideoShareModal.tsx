import React, { useState } from 'react';
import {
  X,
  Download,
  Share2,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface VideoShareItem {
  id: string;
  src: string;
  titleKey: string;
  descKey: string;
  fallbackTitle: string;
  fallbackDesc: string;
}

interface VideoShareModalProps {
  video: VideoShareItem | null;
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'whatsapp' | 'instagram' | 'tiktok' | 'youtube' | 'x' | 'download';
}

export const VideoShareModal: React.FC<VideoShareModalProps> = ({
  video,
  isOpen,
  onClose,
  initialTab = 'whatsapp'
}) => {
  if (!isOpen || !video) return null;

  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'instagram' | 'tiktok' | 'youtube' | 'x' | 'download'>(initialTab);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [shareStatusMsg, setShareStatusMsg] = useState<string | null>(null);

  const title = t(video.titleKey) !== video.titleKey ? t(video.titleKey) : video.fallbackTitle;
  const desc = t(video.descKey) !== video.descKey ? t(video.descKey) : video.fallbackDesc;

  // Clean filename for download
  const cleanFileName = `VOCATIONLOVE_${title.replace(/[^a-zA-Z0-9]/g, '_')}.mp4`;

  // Download video file directly (.mp4)
  const handleDownloadVideo = async () => {
    setIsDownloading(true);
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

      setShareStatusMsg(
        language === 'es'
          ? '¡Video descargado con éxito en tu dispositivo!'
          : 'Video downloaded successfully to your device!'
      );
      setTimeout(() => setShareStatusMsg(null), 3000);
    } catch {
      // Fallback: direct anchor download
      const link = document.createElement('a');
      link.href = video.src;
      link.download = cleanFileName;
      link.target = '_blank';
      link.click();
    } finally {
      setIsDownloading(false);
    }
  };

  // Copy text helper
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setShareStatusMsg(
      language === 'es' ? '¡Copiado al portapapeles!' : 'Copied to clipboard!'
    );
    setTimeout(() => {
      setCopiedKey(null);
      setShareStatusMsg(null);
    }, 2500);
  };

  // Web Share API to share the actual MP4 file
  const handleShareFile = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        setShareStatusMsg(language === 'es' ? 'Preparando archivo de video...' : 'Preparing video file...');
        const response = await fetch(video.src);
        const blob = await response.blob();
        const file = new File([blob], cleanFileName, { type: 'video/mp4' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `VocationLove — ${title}`,
            text: `${title}\n${desc}\nhttps://www.vocationlove.com/#press-section`
          });
          setShareStatusMsg(language === 'es' ? '¡Video compartido!' : 'Video shared!');
          setTimeout(() => setShareStatusMsg(null), 2500);
          return;
        }
      } catch (err) {
        console.warn('Share file aborted or not supported:', err);
      }
    }

    // If file sharing is not supported by device/browser:
    handleDownloadVideo();
  };

  // Instagram Caption
  const instagramCopy =
    language === 'es'
      ? `${title} ✨\n\n«${desc}»\n\nVocationLove es una comunidad con valores compartidos orientada al noviazgo y matrimonio.\n\n📲 Mira más en vocationlove.com y descarga la app en vocationlove.app (enlace en la bio)\n\n#VocationLove #VocationLoveApp #AmorVerdadero #NoviazgoCristiano #ValoresCompartidos #Reels #AmorParaSiempre`
      : `${title} ✨\n\n«${desc}»\n\nVocationLove is a shared-values community focused on intentional dating and marriage.\n\n📲 Learn more at vocationlove.com and download at vocationlove.app (link in bio)\n\n#VocationLove #VocationLoveApp #TrueLove #IntentionalDating #SharedValues #Reels #LoveForever`;

  // TikTok Script & Copy
  const tiktokCopy =
    language === 'es'
      ? `${title} 💐\n«${desc}»\n\nUna red social para los que saben que el amor es la vocación más grande.\n👉 vocationlove.app\n\n#vocationlove #datingapp #relacionessanas #matrimonio #couplegoals #amorverdadero`
      : `${title} 💐\n«${desc}»\n\nA social network for those who know that love is the greatest vocation.\n👉 vocationlove.app\n\n#vocationlove #datingapp #healthyrelationships #marriage #couplegoals #truelove`;

  // YouTube Shorts Copy
  const youtubeCopy =
    language === 'es'
      ? `[TÍTULO SHORTS]:\n${title} | VocationLove #Shorts\n\n[DESCRIPCIÓN]:\n${desc}\n\nÚnete a la red social con valores compartidos orientada al noviazgo y matrimonio.\nSitio web oficial: https://vocationlove.com\nAcceso a la app: https://vocationlove.app\n\n#VocationLove #Shorts #DatingApp #Matrimonio #ValoresCompartidos #AmorVerdadero`
      : `[SHORTS TITLE]:\n${title} | VocationLove #Shorts\n\n[DESCRIPTION]:\n${desc}\n\nJoin the shared-values social network focused on intentional dating and marriage.\nOfficial website: https://vocationlove.com\nApp access: https://vocationlove.app\n\n#VocationLove #Shorts #DatingApp #Marriage #SharedValues #TrueLove`;

  // X (Twitter) Copy
  const xCopy =
    language === 'es'
      ? `${title} 🎬\n«${desc}»\n\nConoce VocationLove, la red social para los que saben que el amor es la vocación más grande:\nhttps://www.vocationlove.com/#press-section\n\n#VocationLove`
      : `${title} 🎬\n«${desc}»\n\nDiscover VocationLove, the social network for those who know that love is the greatest vocation:\nhttps://www.vocationlove.com/#press-section\n\n#VocationLove`;

  const handleOpenX = () => {
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(xCopy)}`;
    window.open(xUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border-2 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-auto overflow-hidden">
        {/* Header Modal Bar */}
        <div className="bg-black text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center gap-2.5 min-w-0">
            <Share2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold block">
                {language === 'es' ? 'CENTRO DE COMPARTIR • SHORTS 9:16' : 'SHARE HUB • 9:16 SHORTS'}
              </span>
              <h2 className="font-times text-sm sm:text-base font-bold uppercase tracking-wider text-white truncate">
                {title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Preview & Core Downloads Strip */}
        <div className="p-4 sm:p-5 bg-neutral-100 border-b-2 border-black flex flex-col sm:flex-row items-center gap-4">
          {/* 9:16 Mini Preview */}
          <div className="relative w-24 sm:w-28 aspect-[9/16] bg-black border border-black shadow-sm shrink-0 overflow-hidden">
            <video
              src={video.src}
              playsInline
              muted
              loop
              autoPlay
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1 left-1 px-1 bg-black/70 text-[9px] font-mono font-bold text-white uppercase">
              9:16
            </div>
          </div>

          {/* Description & 2 Mega Actions */}
          <div className="flex-1 min-w-0 flex flex-col justify-between w-full">
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
                {language === 'es' ? 'VIDEO OFICIAL LISTO PARA DIFUNDIR' : 'OFFICIAL VIDEO READY TO SHARE'}
              </span>
              <p className="font-times font-bold text-sm sm:text-base text-neutral-950 uppercase mt-0.5 leading-snug">
                {title}
              </p>
              <p className="text-xs text-neutral-600 font-sans mt-1 line-clamp-2">
                «{desc}»
              </p>
            </div>

            {/* Quick Actions for Viral Spread */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-neutral-200">
              {/* WhatsApp File Share Primary */}
              <button
                type="button"
                onClick={handleShareFile}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-white" />
                <span>{language === 'es' ? 'Compartir Video como Archivo' : 'Share Video as File'}</span>
              </button>

              {/* Download MP4 file */}
              <button
                type="button"
                onClick={handleDownloadVideo}
                disabled={isDownloading}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4 h-4 text-yellow-400" />
                <span>
                  {isDownloading
                    ? (language === 'es' ? 'Descargando...' : 'Downloading...')
                    : (language === 'es' ? 'Descargar Video (.MP4)' : 'Download Video (.MP4)')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Network Specific Tabs */}
        <div className="border-b-2 border-black bg-neutral-50 px-2 sm:px-4 flex overflow-x-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            type="button"
            onClick={() => setActiveTab('whatsapp')}
            className={`px-3 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'whatsapp'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('instagram')}
            className={`px-3 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'instagram'
                ? 'border-black text-black bg-white'
                : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            <span>Instagram Reels</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tiktok')}
            className={`px-3 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'tiktok'
                ? 'border-black text-black bg-white'
                : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            <span>TikTok</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('youtube')}
            className={`px-3 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'youtube'
                ? 'border-red-600 text-red-700 bg-white'
                : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            <span>YouTube Shorts</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('x')}
            className={`px-3 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'x'
                ? 'border-blue-600 text-blue-700 bg-white'
                : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            <span>X (Twitter)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('download')}
            className={`px-3 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'download'
                ? 'border-yellow-600 text-yellow-800 bg-white'
                : 'border-transparent text-neutral-600 hover:text-black'
            }`}
          >
            <span>{language === 'es' ? 'Archivo / Enviar' : 'File / Send'}</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 bg-white space-y-4 max-h-[50vh] overflow-y-auto">
          {/* 1. WHATSAPP TAB */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-4">
              <div className="bg-white border border-neutral-300 p-4 shadow-xs">
                <h4 className="font-times text-sm font-bold uppercase text-neutral-950 mb-1">
                  {language === 'es' ? 'Compartir Video Real en WhatsApp' : 'Share Real Video on WhatsApp'}
                </h4>
                <p className="text-xs text-neutral-800 font-sans leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Para que en WhatsApp aparezca el <strong>reproductor de video nativo con sonido</strong> (o puedas subirlo a tus <strong>Estados de WhatsApp</strong>), se debe compartir directamente el <strong>archivo multimedia de video (.MP4)</strong>:
                    </>
                  ) : (
                    <>
                      To display the <strong>native playable video with audio</strong> in WhatsApp (or post it to your <strong>WhatsApp Status</strong>), it must be shared as a <strong>multimedia video file (.MP4)</strong>:
                    </>
                  )}
                </p>
              </div>

              {/* 2 Main Functional Actions: Share File & Download File */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleShareFile}
                  className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-white" />
                  <span>{language === 'es' ? 'Compartir Video como Archivo' : 'Share Video as File'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadVideo}
                  disabled={isDownloading}
                  className="px-4 py-3 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-4 h-4 text-yellow-400" />
                  <span>
                    {isDownloading
                      ? (language === 'es' ? 'Descargando...' : 'Downloading...')
                      : (language === 'es' ? 'Descargar Video (.MP4)' : 'Download Video (.MP4)')}
                  </span>
                </button>
              </div>

              <div className="p-3.5 bg-neutral-100 border border-neutral-300 text-xs text-neutral-800 font-sans space-y-2 leading-relaxed">
                <p>
                  <strong>1. En el móvil:</strong> Toca <em>«Compartir Video como Archivo»</em> y selecciona WhatsApp en el menú de aplicaciones para enviarlo directamente a un chat o grupo.
                </p>
                <p>
                  <strong>2. Para Estados de WhatsApp:</strong> Toca <em>«Descargar Video (.MP4)»</em> para guardarlo en la galería de tu dispositivo y subirlo en la pestaña de <strong>Estados</strong>.
                </p>
              </div>
            </div>
          )}

          {/* 2. INSTAGRAM REELS TAB */}
          {activeTab === 'instagram' && (
            <div className="space-y-4">
              <div className="bg-white border border-neutral-300 p-4 shadow-xs">
                <p className="text-xs text-neutral-900 font-sans leading-relaxed">
                  {language === 'es' ? (
                    <>
                      <strong className="text-black font-semibold">Flujo óptimo para Instagram Reels & Stories:</strong>
                      <br />
                      Instagram no permite subir videos por enlace web. Sigue estos 2 sencillos pasos:
                      <br />
                      <strong>1.</strong> Descarga el archivo de video (.MP4 en proporción 9:16) a tu galería.
                      <br />
                      <strong>2.</strong> Copia el pie de foto con hashtags y pégalo al publicar tu Reel.
                    </>
                  ) : (
                    <>
                      <strong className="text-black font-semibold">Optimal flow for Instagram Reels & Stories:</strong>
                      <br />
                      Instagram requires the actual video file. Follow these 2 easy steps:
                      <br />
                      <strong>1.</strong> Download the 9:16 MP4 video file to your gallery.
                      <br />
                      <strong>2.</strong> Copy the caption & hashtags and paste it when posting your Reel.
                    </>
                  )}
                </p>
              </div>

              {/* 3 Step Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={handleDownloadVideo}
                  disabled={isDownloading}
                  className="px-3 py-2.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'es' ? '1. Descargar MP4' : '1. Download MP4'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(instagramCopy, 'ig')}
                  className="px-3 py-2.5 bg-neutral-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  {copiedKey === 'ig' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === 'ig' ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? '2. Copiar Copy' : '2. Copy Caption')}</span>
                </button>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-neutral-950 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'es' ? '3. Abrir Instagram' : '3. Open Instagram'}</span>
                </a>
              </div>

              {/* Text Preview */}
              <div>
                <span className="text-[11px] font-mono font-bold text-neutral-600 uppercase block mb-1.5">
                  {language === 'es' ? 'Copy listo para Instagram Reels:' : 'Ready-to-post Instagram Caption:'}
                </span>
                <pre className="p-3 bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap border border-neutral-700 rounded-none leading-relaxed">
                  {instagramCopy}
                </pre>
              </div>
            </div>
          )}

          {/* 3. TIKTOK TAB */}
          {activeTab === 'tiktok' && (
            <div className="space-y-4">
              <div className="bg-white border border-neutral-300 p-4 shadow-xs">
                <p className="text-xs text-neutral-900 font-sans leading-relaxed">
                  {language === 'es' ? (
                    <>
                      <strong className="text-black font-semibold">Flujo para TikTok:</strong>
                      <br />
                      Descarga el video y copia el guión/hashtags virales para pegarlos directamente en la app de TikTok.
                    </>
                  ) : (
                    <>
                      <strong className="text-black font-semibold">Flow for TikTok:</strong>
                      <br />
                      Download the video and copy the viral hook/hashtags to paste into the TikTok app.
                    </>
                  )}
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={handleDownloadVideo}
                  disabled={isDownloading}
                  className="px-3 py-2.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'es' ? '1. Descargar MP4' : '1. Download MP4'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(tiktokCopy, 'tt')}
                  className="px-3 py-2.5 bg-neutral-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  {copiedKey === 'tt' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === 'tt' ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? '2. Copiar Texto' : '2. Copy Text')}</span>
                </button>

                <a
                  href="https://www.tiktok.com/upload"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-neutral-950 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'es' ? '3. Abrir TikTok' : '3. Open TikTok'}</span>
                </a>
              </div>

              {/* Text Preview */}
              <div>
                <span className="text-[11px] font-mono font-bold text-neutral-600 uppercase block mb-1.5">
                  {language === 'es' ? 'Texto con hashtags para TikTok:' : 'Caption & Hashtags for TikTok:'}
                </span>
                <pre className="p-3 bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap border border-neutral-700 rounded-none leading-relaxed">
                  {tiktokCopy}
                </pre>
              </div>
            </div>
          )}

          {/* 4. YOUTUBE SHORTS TAB */}
          {activeTab === 'youtube' && (
            <div className="space-y-4">
              <div className="bg-white border border-neutral-300 p-4 shadow-xs">
                <p className="text-xs text-neutral-900 font-sans leading-relaxed">
                  {language === 'es' ? (
                    <>
                      <strong className="text-black font-semibold">Flujo para YouTube Shorts:</strong>
                      <br />
                      Descarga el video 9:16 y copia el título, descripción optimizada y etiquetas preparadas para Shorts.
                    </>
                  ) : (
                    <>
                      <strong className="text-black font-semibold">Flow for YouTube Shorts:</strong>
                      <br />
                      Download the 9:16 video and copy the optimized Shorts title, description, and tags.
                    </>
                  )}
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={handleDownloadVideo}
                  disabled={isDownloading}
                  className="px-3 py-2.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-red-400" />
                  <span>{language === 'es' ? '1. Descargar MP4' : '1. Download MP4'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(youtubeCopy, 'yt')}
                  className="px-3 py-2.5 bg-neutral-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  {copiedKey === 'yt' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === 'yt' ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? '2. Copiar Datos' : '2. Copy Data')}</span>
                </button>

                <a
                  href="https://studio.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'es' ? '3. YouTube Studio' : '3. YouTube Studio'}</span>
                </a>
              </div>

              {/* Text Preview */}
              <div>
                <span className="text-[11px] font-mono font-bold text-neutral-600 uppercase block mb-1.5">
                  {language === 'es' ? 'Metadatos para YouTube Shorts:' : 'Metadata for YouTube Shorts:'}
                </span>
                <pre className="p-3 bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap border border-neutral-700 rounded-none leading-relaxed">
                  {youtubeCopy}
                </pre>
              </div>
            </div>
          )}

          {/* 5. X (TWITTER) TAB */}
          {activeTab === 'x' && (
            <div className="space-y-4">
              <div className="bg-white border border-neutral-300 p-4 shadow-xs">
                <p className="text-xs text-neutral-900 font-sans leading-relaxed">
                  {language === 'es' ? (
                    <>
                      <strong className="text-black font-semibold">Publicación en X (Twitter):</strong>
                      <br />
                      Puedes publicar directamente el tweet pre-redactado o descargar el video para adjuntarlo como video nativo en tu tweet (los videos nativos en X reciben hasta 10 veces más visualizaciones).
                    </>
                  ) : (
                    <>
                      <strong className="text-black font-semibold">Posting on X (Twitter):</strong>
                      <br />
                      Post the pre-filled tweet directly or download the MP4 file to attach it natively (native video gets up to 10x more reach on X).
                    </>
                  )}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={handleOpenX}
                  className="flex-1 min-w-[200px] px-4 py-2.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>{language === 'es' ? 'Publicar Tweet Ahora' : 'Post Tweet Now'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadVideo}
                  disabled={isDownloading}
                  className="flex-1 min-w-[200px] px-4 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-300" />
                  <span>{language === 'es' ? 'Descargar para adjuntar video' : 'Download to attach video'}</span>
                </button>
              </div>

              {/* Text Preview */}
              <div>
                <span className="text-[11px] font-mono font-bold text-neutral-600 uppercase block mb-1.5">
                  {language === 'es' ? 'Texto del tweet:' : 'Tweet copy:'}
                </span>
                <pre className="p-3 bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap border border-neutral-700 rounded-none leading-relaxed">
                  {xCopy}
                </pre>
              </div>
            </div>
          )}

          {/* 6. UNIVERSAL DOWNLOAD & FILE SHARE TAB */}
          {activeTab === 'download' && (
            <div className="space-y-4">
              <div className="bg-white border border-neutral-300 p-4 shadow-xs">
                <p className="text-xs text-neutral-900 font-sans leading-relaxed">
                  {language === 'es' ? (
                    <>
                      <strong className="text-black font-semibold">Descarga universal del video (.MP4):</strong>
                      <br />
                      Obtén el archivo multimedia en alta calidad para enviarlo por Telegram, correo, AirDrop, guardarlo en tu galería o transmitirlo en pantallas.
                    </>
                  ) : (
                    <>
                      <strong className="text-black font-semibold">Universal video download (.MP4):</strong>
                      <br />
                      Get the high-definition media file to send via Telegram, email, AirDrop, or store in your camera roll.
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleDownloadVideo}
                  disabled={isDownloading}
                  className="flex-1 min-w-[220px] px-4 py-3 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-yellow-400" />
                  <span>{isDownloading ? (language === 'es' ? 'Descargando...' : 'Downloading...') : (language === 'es' ? 'Descargar Archivo MP4' : 'Download MP4 File')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleShareFile}
                  className="flex-1 min-w-[220px] px-4 py-3 bg-neutral-900 hover:bg-neutral-950 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'es' ? 'Compartir a través del móvil' : 'Share via Mobile OS'}</span>
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold text-neutral-600 uppercase block mb-1">
                  {language === 'es' ? 'Enlace directo al video en la web:' : 'Direct web link to video:'}
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://www.vocationlove.com/#press-section"
                    className="flex-1 px-3 py-2 bg-neutral-100 border border-neutral-400 text-xs font-mono text-neutral-900 select-all"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy('https://www.vocationlove.com/#press-section', 'link')}
                    className="px-3 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {copiedKey === 'link' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Toast Message feedback */}
        <div className="bg-neutral-100 px-4 sm:px-6 py-3 border-t-2 border-black flex items-center justify-between">
          <div className="text-[11px] font-mono text-neutral-600">
            {shareStatusMsg ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                {shareStatusMsg}
              </span>
            ) : (
              <span>VOCATIONLOVE.COM • SHORTS 9:16</span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {language === 'es' ? 'Listo' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
