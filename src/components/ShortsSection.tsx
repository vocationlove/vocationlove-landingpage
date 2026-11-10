import React, { useState, useEffect, useRef } from 'react';
import {
  Share2,
  Copy,
  Check,
  Pause,
  Play,
  Maximize2,
  X,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface TutorialStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  narration: string;
  duration: number; // in seconds
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    stepNumber: 1,
    title: 'PASO 1: LOGIN SEGURO',
    subtitle: 'Ingreso en 1 solo clic con Google',
    narration: 'Ingreso inmediato y blindado con la pasarela oficial e inmutable de Google. Tus datos siempre protegidos.',
    duration: 5
  },
  {
    stepNumber: 2,
    title: 'PASO 2: CARTILLA VOCACIONAL',
    subtitle: 'Registro de valores y foto de perfil',
    narration: 'Escribe tu manifiesto personal, sube tu fotografía facial y acepta los 4 términos de transparencia.',
    duration: 6
  },
  {
    stepNumber: 3,
    title: 'PASO 3: EXPLORAR PERFILES',
    subtitle: 'Descubrimiento sin frivolidad',
    narration: 'Conoce personas con valores afines, lee su visión de vida y decide con serenidad.',
    duration: 5
  },
  {
    stepNumber: 4,
    title: 'PASO 4: SWIPE NO',
    subtitle: 'Descartar hacia la izquierda',
    narration: 'Desliza a la izquierda (← NO) para descartar con discreción y explorar el siguiente perfil.',
    duration: 4
  },
  {
    stepNumber: 5,
    title: 'PASO 5: SWIPE QUIZÁS',
    subtitle: 'Posibilidad de match hacia la derecha',
    narration: 'Desliza a la derecha (QUIZÁS →) para expresar interés honesto en construir un vínculo.',
    duration: 4
  },
  {
    stepNumber: 6,
    title: 'PASO 6: COINCIDENCIA VOCACIONAL',
    subtitle: '¡Match mutuo confirmado!',
    narration: 'Cuando ambos eligen QUIZÁS, nace una coincidencia vocacional mutua para contactarse con respeto.',
    duration: 5
  },
  {
    stepNumber: 7,
    title: 'PASO 7: EXPLORAR MATCHS',
    subtitle: 'Conexión directa por WhatsApp',
    narration: 'Tus matches se guardan en tu lista privada para conversar por WhatsApp o eliminarlos cuando desees.',
    duration: 5
  },
  {
    stepNumber: 8,
    title: 'PASO 8: CIERRE CHIC',
    subtitle: 'Una red para los que se atreven a amar',
    narration: 'Únete a la revolución del amor con propósito. Menos swipes vacíos, más familias y matrimonios felices.',
    duration: 5
  },
  {
    stepNumber: 9,
    title: 'PASO 9: LATIDO SERENO',
    subtitle: 'VocationLove.app latiendo por ti',
    narration: 'La plataforma oficial está viva y latiendo al ritmo de un amor duradero. Ingresa ahora.',
    duration: 5
  }
];

export const ShortsSection: React.FC = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [stepProgress, setStepProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeShareFeedback, setActiveShareFeedback] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);

  const activeStep = TUTORIAL_STEPS[currentStepIdx];

  // Auto-advance loop through the 9 steps
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = 50; // update progress every 50ms
    const totalStepMs = activeStep.duration * 1000;
    const increment = (intervalMs / totalStepMs) * 100;

    const timer = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 100) {
          setCurrentStepIdx((idx) => (idx + 1) % TUTORIAL_STEPS.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentStepIdx, activeStep.duration]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  const handleShare = async (platform: 'youtube' | 'instagram' | 'x' | 'tiktok' | 'generic') => {
    const shareUrl = 'https://vocationlove.app';
    const title = 'VocationLove.app — Tutorial Oficial en 9 Pasos | Shorts (9:16)';
    const text = `Descubre cómo funciona VocationLove.app, la red social y app de citas con valores compartidos enfocada en el matrimonio y relaciones duraderas: ${shareUrl}`;

    if (platform === 'generic') {
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url: shareUrl });
          return;
        } catch {
          // fallback to clipboard
        }
      }
      await navigator.clipboard.writeText(`${title}\n\n${text}`);
      setActiveShareFeedback('generic');
      setTimeout(() => setActiveShareFeedback(null), 2500);
      return;
    }

    if (platform === 'x') {
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `Mira el tutorial oficial de @VocationLove (9:16): La nueva red social con valores compartidos orientada al noviazgo y matrimonio.\n\n${shareUrl}`
      )}`;
      window.open(tweetUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (platform === 'youtube') {
      const ytCopy = `[TÍTULO SHORTS]:\nCÓMO FUNCIONA VOCATIONLOVE.APP EN 9 PASOS #Shorts #VocationLove\n\n[DESCRIPCIÓN]:\nTutorial oficial de la red social para quienes se atreven a amar.\n1. Login Google\n2. Cartilla de Valores\n3. Explorar Perfiles\n4. Swipe No / Quizás\n5. Coincidencia Vocacional\n6. WhatsApp Match\n\nWeb: https://vocationlove.com\nApp: https://vocationlove.app\n\n[TAGS]:\nVocationLove, Dating App, Matrimonio, Valores Cristianos, Shorts`;
      await navigator.clipboard.writeText(ytCopy);
      setActiveShareFeedback('youtube');
      setTimeout(() => setActiveShareFeedback(null), 2500);
      return;
    }

    if (platform === 'instagram') {
      const igCopy = `CÓMO FUNCIONA VOCATIONLOVE.APP ✨\n\nUna guía de 9 pasos para quienes buscan un amor auténtico, con valores y compromiso:\n• Ingreso en 1 clic con Google\n• Cartilla de valores y manifiesto\n• Coincidencias honestas con WhatsApp mutuo\n\n📲 Únete ahora en vocationlove.app (link en bio).\n\n#VocationLove #VocationLoveApp #AmorConProposito #NoviazgoCristiano #ValoresCompartidos #Reels`;
      await navigator.clipboard.writeText(igCopy);
      setActiveShareFeedback('instagram');
      setTimeout(() => setActiveShareFeedback(null), 2500);
      return;
    }

    if (platform === 'tiktok') {
      const ttCopy = `[TIKTOK 9:16 TUTORIAL VOCATIONLOVE.APP]\nAudio sugerido: Música de piano clásica contemporánea suave.\nGuión: ${activeStep.narration}\nHashtags: #vocationlove #datingapp #relacionessanas #matrimonio #couplegoals`;
      await navigator.clipboard.writeText(ttCopy);
      setActiveShareFeedback('tiktok');
      setTimeout(() => setActiveShareFeedback(null), 2500);
      return;
    }
  };

  return (
    <section id="shorts-section" className="w-full bg-[#f3f3f3] py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-black mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 mb-1.5 font-bold">
              <span className="w-2.5 h-2.5 bg-black inline-block" />
              <span>SHORTS • 9:16 TUTORIAL SERIES</span>
            </div>
            <h2 className="font-times text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">
              HOW VOCATIONLOVE.APP WORKS
            </h2>
            <p className="mt-2 text-sm text-neutral-700 max-w-2xl font-sans leading-relaxed">
              Step-by-step interactive walkthrough in 9:16 vertical proportion. Optimized for YouTube Shorts, Instagram Reels, X, and TikTok.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-black text-white text-[11px] font-mono tracking-widest uppercase border border-black">
              PROPORCIÓN 9:16 • 1080×1920 READY
            </span>
          </div>
        </div>

        {/* Centerpiece: The 9:16 Short Showcase */}
        <div className="flex flex-col items-center">
          {/* Main 9:16 Container (Exact YouTube Shorts / Instagram Reels frame) */}
          <div className="w-full max-w-[360px] sm:max-w-[400px]">
            {/* The Video Screen */}
            <div
              onClick={() => setIsExpanded(true)}
              className="relative w-full aspect-[9/16] bg-black border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden cursor-pointer select-none group"
            >
              {/* Top Segmented Story / Shorts Progress Bars */}
              <div className="absolute top-2 inset-x-2 z-30 flex gap-1">
                {TUTORIAL_STEPS.map((s, idx) => (
                  <div
                    key={s.stepNumber}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentStepIdx(idx);
                      setStepProgress(0);
                    }}
                    className="flex-1 h-1 bg-white/30 rounded-none overflow-hidden cursor-pointer"
                  >
                    <div
                      className="h-full bg-white transition-all duration-75"
                      style={{
                        width:
                          idx < currentStepIdx
                            ? '100%'
                            : idx === currentStepIdx
                            ? `${stepProgress}%`
                            : '0%'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Status Bar simulation */}
              <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between text-[10px] font-mono font-bold text-white/80">
                <span>VOCATIONLOVE.APP</span>
                <span className="bg-black/60 px-1.5 py-0.5 border border-white/20">
                  {currentStepIdx + 1} / {TUTORIAL_STEPS.length}
                </span>
              </div>

              {/* Step Display Area: High-fidelity visual reconstruction of each step */}
              <div className="absolute inset-0 flex flex-col justify-between pt-10 pb-20 px-3">
                {/* STEP 1: Login */}
                {currentStepIdx === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center bg-white border-2 border-black p-4 text-center text-black animate-in fade-in duration-200">
                    <div className="font-times text-xl sm:text-2xl font-bold uppercase tracking-widest mb-1 text-black">
                      VOCATIONLOVE
                    </div>
                    <div className="font-times italic text-xs tracking-wider mb-6 text-neutral-700">
                      "PARA LOS QUE SE ATREVEN A AMAR"
                    </div>

                    <div className="w-full max-w-[240px] p-2.5 bg-white border-2 border-black flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">G</span>
                      <span>INICIAR SESIÓN CON GOOGLE</span>
                    </div>

                    <p className="text-[9px] font-mono text-neutral-600 leading-tight max-w-[210px] uppercase">
                      Acceso seguro. Estás ingresando con la pasarela oficial e inmutable de Google. VocationLove jamás tendrá acceso a tus contraseñas.
                    </p>
                  </div>
                )}

                {/* STEP 2: Cartilla de Registro */}
                {currentStepIdx === 1 && (
                  <div className="flex-1 flex flex-col bg-white border-2 border-black p-3 text-black text-left overflow-hidden animate-in fade-in duration-200 text-[10px] font-sans">
                    <div className="text-[9px] font-mono text-neutral-500 uppercase font-bold">PASO 2 DE 2</div>
                    <div className="font-times font-bold text-sm uppercase tracking-wide border-b border-black pb-1 mb-2">
                      REGISTRO DE USUARIO
                    </div>

                    <div className="space-y-1.5 overflow-hidden">
                      <div className="border border-neutral-300 p-1 bg-neutral-50">
                        <span className="font-mono text-[9px] font-bold uppercase text-neutral-600 block">FOTOGRAFÍA DE PERFIL ÚNICA:</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="px-1.5 py-0.5 bg-neutral-200 border border-neutral-400 font-mono text-[8px]">Seleccionar archivo</span>
                          <span className="font-mono text-[8px] text-neutral-500">foto_perfil.jpg</span>
                        </div>
                        <span className="text-[8px] font-mono text-neutral-400 block mt-0.5">Encuadre facial automático 20% superior.</span>
                      </div>

                      <div className="border border-neutral-300 p-1 bg-neutral-50">
                        <span className="font-mono text-[9px] font-bold uppercase text-neutral-600 block">MANIFIESTO / VALORES:</span>
                        <div className="text-[8px] italic text-neutral-800 bg-white p-1 border border-neutral-200">
                          "¿Qué valores guían tu vida y qué buscas construir en un vínculo duradero?"
                        </div>
                      </div>

                      <div className="space-y-1 pt-1">
                        <div className="flex items-start gap-1 text-[8px] font-mono text-neutral-700">
                          <span className="w-2.5 h-2.5 border border-black inline-block bg-black text-white text-[7px] text-center leading-none">✓</span>
                          <span>He leído y acepto Términos, Privacidad y Aviso Legal</span>
                        </div>
                        <div className="flex items-start gap-1 text-[8px] font-mono text-neutral-700">
                          <span className="w-2.5 h-2.5 border border-black inline-block bg-black text-white text-[7px] text-center leading-none">✓</span>
                          <span>Consiento que mi foto, nombre y ciudad sean visibles</span>
                        </div>
                        <div className="flex items-start gap-1 text-[8px] font-mono text-neutral-700">
                          <span className="w-2.5 h-2.5 border border-black inline-block bg-black text-white text-[7px] text-center leading-none">✓</span>
                          <span>Consiento compartir WhatsApp solo si hay match mutuo</span>
                        </div>
                        <div className="flex items-start gap-1 text-[8px] font-mono text-neutral-700">
                          <span className="w-2.5 h-2.5 border border-black inline-block bg-black text-white text-[7px] text-center leading-none">✓</span>
                          <span>Declaro ser mayor de 18 años con capacidad legal</span>
                        </div>
                      </div>

                      <div className="w-full py-1.5 bg-black text-white text-center font-mono font-bold text-[9px] uppercase tracking-wider mt-1">
                        ACTIVAR MI CUENTA
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Explorar Perfiles */}
                {currentStepIdx === 2 && (
                  <div className="flex-1 flex flex-col bg-white border-2 border-black p-3 text-black animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-black pb-1 mb-2 text-[9px] font-mono font-bold">
                      <span className="bg-black text-white px-1.5 py-0.5">EXPLORAR</span>
                      <span>18 - 99 AÑOS</span>
                      <span className="border border-black px-1.5 py-0.5">MATCHES</span>
                    </div>

                    <div className="relative flex-1 bg-neutral-900 border-2 border-black overflow-hidden flex flex-col justify-end p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <img
                        src="/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png"
                        alt="Lucía Demo"
                        className="absolute inset-0 w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="relative z-10 text-white text-left">
                        <div className="font-times text-base font-bold uppercase">LUCÍA (DEMO), 27</div>
                        <div className="text-[9px] font-mono text-neutral-300">CIUDAD DE MÉXICO • POLANCO</div>
                        <div className="inline-block mt-1 px-1.5 py-0.5 bg-black/80 border border-white/40 text-[8px] font-mono uppercase">
                          VALORES +
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 px-2 text-[10px] font-mono font-bold">
                      <span className="text-neutral-700">← NO</span>
                      <span className="text-black">QUIZÁS →</span>
                    </div>
                  </div>
                )}

                {/* STEP 4: Swipe NO (Left Tilt) */}
                {currentStepIdx === 3 && (
                  <div className="flex-1 flex flex-col bg-white border-2 border-black p-3 text-black animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-black pb-1 mb-2 text-[9px] font-mono font-bold">
                      <span className="bg-black text-white px-1.5 py-0.5">EXPLORAR</span>
                      <span>FILTRO ACTIVO</span>
                      <span className="border border-black px-1.5 py-0.5">MATCHES</span>
                    </div>

                    <div className="relative flex-1 bg-neutral-900 border-2 border-black overflow-hidden flex flex-col justify-end p-3 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-6 translate-x-[-12px] transition-transform">
                      <img
                        src="/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png"
                        alt="Lucía Demo"
                        className="absolute inset-0 w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Prominent NO Badge */}
                      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black text-white font-mono font-black text-sm uppercase tracking-widest border-2 border-white shadow-lg">
                        NO
                      </div>

                      <div className="relative z-10 text-white text-left">
                        <div className="font-times text-base font-bold uppercase">LUCÍA (DEMO), 27</div>
                        <div className="text-[9px] font-mono text-neutral-300">DESCARTE RESPETUOSO</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 px-2 text-[10px] font-mono font-bold text-neutral-900">
                      <span className="bg-neutral-200 px-2 py-0.5 font-black">← NO (DESCARTE)</span>
                      <span className="text-neutral-400">QUIZÁS →</span>
                    </div>
                  </div>
                )}

                {/* STEP 5: Swipe QUIZÁS (Right Tilt) */}
                {currentStepIdx === 4 && (
                  <div className="flex-1 flex flex-col bg-white border-2 border-black p-3 text-black animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-black pb-1 mb-2 text-[9px] font-mono font-bold">
                      <span className="bg-black text-white px-1.5 py-0.5">EXPLORAR</span>
                      <span>FILTRO ACTIVO</span>
                      <span className="border border-black px-1.5 py-0.5">MATCHES</span>
                    </div>

                    <div className="relative flex-1 bg-neutral-900 border-2 border-black overflow-hidden flex flex-col justify-end p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-6 translate-x-[12px] transition-transform">
                      <img
                        src="/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png"
                        alt="Lucía Demo"
                        className="absolute inset-0 w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Prominent QUIZÁS Badge */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black text-white font-mono font-black text-sm uppercase tracking-widest border-2 border-white shadow-lg">
                        QUIZÁS
                      </div>

                      <div className="relative z-10 text-white text-left">
                        <div className="font-times text-base font-bold uppercase">LUCÍA (DEMO), 27</div>
                        <div className="text-[9px] font-mono text-neutral-300">INTERÉS HONESTO</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 px-2 text-[10px] font-mono font-bold text-neutral-900">
                      <span className="text-neutral-400">← NO</span>
                      <span className="bg-black text-white px-2 py-0.5 font-black">QUIZÁS → (MATCH)</span>
                    </div>
                  </div>
                )}

                {/* STEP 6: Coincidencia Vocacional Modal */}
                {currentStepIdx === 5 && (
                  <div className="flex-1 flex flex-col items-center justify-center bg-black/95 border-2 border-black p-3 text-center text-white animate-in zoom-in-95 duration-200">
                    <div className="w-full bg-white text-black p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                      <div className="text-[8px] font-mono font-bold uppercase text-neutral-500 tracking-widest mb-0.5">
                        VOCATIONLOVE COINCIDENCIA
                      </div>
                      <div className="font-times text-sm sm:text-base font-bold uppercase tracking-wide text-black mb-3 border-b border-black pb-1">
                        ¡COINCIDENCIA VOCACIONAL!
                      </div>

                      <div className="flex items-center justify-center gap-3 my-2">
                        <div className="w-14 h-18 bg-neutral-200 border border-black overflow-hidden relative">
                          <img
                            src="/assets/aistudio/The_Selene_VocationLove_Production_2.3_41c94c32.jpg"
                            alt="Tú"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-black text-white text-[7px] font-mono uppercase">TÚ</span>
                        </div>
                        <span className="font-times text-lg font-bold text-black">+</span>
                        <div className="w-14 h-18 bg-neutral-200 border border-black overflow-hidden relative">
                          <img
                            src="/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png"
                            alt="Lucía"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-black text-white text-[7px] font-mono uppercase truncate">LUCÍA</span>
                        </div>
                      </div>

                      <p className="text-[8px] font-sans text-neutral-700 leading-tight my-2">
                        Ambos han sentido un QUIZÁS mutuo y honesto orientado a construir un vínculo para toda la vida.
                      </p>

                      <div className="space-y-1 mt-2">
                        <div className="w-full py-1.5 bg-black text-white text-[8px] font-mono font-bold uppercase tracking-wider">
                          VER EN MATCHES & WHATSAPP
                        </div>
                        <div className="w-full py-1 bg-white text-black border border-black text-[8px] font-mono font-bold uppercase tracking-wider">
                          CONTINUAR EXPLORANDO
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 7: Listado de Matchs */}
                {currentStepIdx === 6 && (
                  <div className="flex-1 flex flex-col bg-white border-2 border-black p-3 text-black animate-in fade-in duration-200 text-left">
                    <div className="flex items-center justify-between border-b border-black pb-1 mb-2">
                      <div>
                        <div className="font-times text-sm font-bold uppercase tracking-wider">MATCHES</div>
                        <div className="text-[8px] font-mono text-neutral-500 uppercase">CONEXIONES BILATERALES CONFIRMADAS</div>
                      </div>
                      <span className="bg-black text-white text-[8px] font-mono px-1.5 py-0.5">← EXPLORAR</span>
                    </div>

                    <div className="space-y-2 overflow-hidden flex-1">
                      {/* Match 1 */}
                      <div className="border border-black p-2 bg-neutral-50 flex gap-2 items-center">
                        <div className="w-10 h-12 bg-neutral-900 border border-black shrink-0 overflow-hidden">
                          <img src="/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png" alt="Lucia" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-times font-bold text-[10px] uppercase truncate">LUCÍA (DEMO), 27</div>
                          <div className="text-[7px] font-mono text-neutral-500 truncate">CIUDAD DE MÉXICO • MÉDICA</div>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="px-1.5 py-0.5 bg-black text-white text-[7px] font-mono uppercase font-bold">CONVERSAR EN WHATSAPP ↗</span>
                            <span className="text-[7px] font-mono underline text-neutral-500">ELIMINAR</span>
                          </div>
                        </div>
                      </div>

                      {/* Match 2 */}
                      <div className="border border-black p-2 bg-neutral-50 flex gap-2 items-center">
                        <div className="w-10 h-12 bg-neutral-900 border border-black shrink-0 overflow-hidden">
                          <img src="/assets/aistudio/The_Selene_VocationLove_Production_2.3_41c94c32.jpg" alt="Camila" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-times font-bold text-[10px] uppercase truncate">CAMILA (DEMO), 26</div>
                          <div className="text-[7px] font-mono text-neutral-500 truncate">BOGOTÁ • DISEÑADORA</div>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="px-1.5 py-0.5 bg-black text-white text-[7px] font-mono uppercase font-bold">CONVERSAR EN WHATSAPP ↗</span>
                            <span className="text-[7px] font-mono underline text-neutral-500">ELIMINAR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 8: Cierre Chic con Actores y Flores */}
                {currentStepIdx === 7 && (
                  <div className="flex-1 flex flex-col bg-black border-2 border-black relative overflow-hidden text-white p-4 justify-between animate-in fade-in duration-200">
                    <img
                      src="/assets/aistudio/THE_BANKET_VOCATIONLOVE_PRODUCTION_2.3_f6c7e31b.jpg"
                      alt="Pareja feliz con flores"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                    <div className="relative z-10 text-center">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-amber-300 font-bold mb-1">
                        VOCATIONLOVE.APP
                      </div>
                      <div className="font-times text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                        FOR THOSE WHO DARE TO LOVE
                      </div>
                    </div>

                    <div className="relative z-10 text-center bg-black/80 p-3 border border-white/20">
                      <p className="text-[9px] font-sans leading-relaxed text-neutral-200 mb-2">
                        "Una invitación elegante a sumarse y viralizar la nueva red en todo el mundo."
                      </p>
                      <div className="text-[8px] font-mono text-white font-bold uppercase tracking-widest">
                        vocationlove.app
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 9: Latido Sereno (Final Heartbeat Pulse) */}
                {currentStepIdx === 8 && (
                  <div className="flex-1 flex flex-col items-center justify-center bg-white border-2 border-black p-4 text-center text-black relative overflow-hidden animate-in fade-in duration-200">
                    {/* Pulsing serene heartbeat background circle */}
                    <div className="absolute w-48 h-48 rounded-full bg-rose-500/10 animate-ping pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
                      </div>

                      <div className="font-times text-xl font-bold uppercase tracking-widest text-black">
                        VOCATIONLOVE
                      </div>
                      <div className="font-times italic text-xs tracking-wider mb-5 text-neutral-700">
                        "PARA LOS QUE SE ATREVEN A AMAR"
                      </div>

                      <div className="w-full max-w-[220px] p-2 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]">
                        INGRESAR A VOCATIONLOVE.APP
                      </div>

                      <span className="text-[8px] font-mono uppercase text-neutral-500 tracking-wider">
                        LATIDO SERENO • MATRIMONIO & FAMILIA
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Vertical Social Overlay (YouTube Shorts / Reels style) */}
              <div className="absolute right-2 bottom-16 z-20 flex flex-col items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                  }}
                  className="p-2 bg-black/60 backdrop-blur-xs text-white rounded-none border border-white/20 transition-transform active:scale-90"
                  title="Like"
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                  <span className="text-[9px] font-mono block mt-0.5">{liked ? '4.8k' : '4.7k'}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare('generic');
                  }}
                  className="p-2 bg-black/60 backdrop-blur-xs text-white rounded-none border border-white/20 transition-transform active:scale-90"
                  title="Share"
                >
                  <Share2 className="w-4 h-4 text-white" />
                  <span className="text-[9px] font-mono block mt-0.5">Share</span>
                </button>
              </div>

              {/* Bottom Subtle Overlay: Discrete pause button '||' and Step Title */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-black/90 p-3 flex items-center justify-between border-t-2 border-black text-white">
                <div className="flex-1 min-w-0 pr-2 text-left">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-amber-400 font-bold truncate">
                    {activeStep.title}
                  </div>
                  <div className="text-[11px] font-times font-bold uppercase tracking-tight text-white truncate">
                    {activeStep.subtitle}
                  </div>
                </div>

                {/* Discrete Pause / Play 'II' Toggle per strict user directive */}
                <button
                  onClick={togglePlay}
                  title={isPlaying ? 'Pausar reproducción' : 'Reanudar reproducción'}
                  className="shrink-0 p-1.5 bg-white text-black hover:bg-neutral-200 transition-colors rounded-none border border-black font-mono font-bold text-xs"
                >
                  {isPlaying ? 'II' : '▶'}
                </button>
              </div>
            </div>

            {/* Social Share Bar Directly Below the Video (Requested specifically) */}
            <div className="mt-4 p-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 font-bold text-center mb-2.5">
                SHARE TO CHANNELS (9:16 READY)
              </div>

              <div className="grid grid-cols-5 gap-1.5">
                {/* 1. YouTube Shorts */}
                <button
                  onClick={() => handleShare('youtube')}
                  title="Copy formatted for YouTube Shorts"
                  className="flex flex-col items-center justify-center p-2 bg-neutral-50 hover:bg-black hover:text-white border border-black transition-colors rounded-none text-center group cursor-pointer"
                >
                  <span className="text-red-600 group-hover:text-white font-bold text-xs">YT</span>
                  <span className="text-[8px] font-mono uppercase mt-1 truncate">Shorts</span>
                </button>

                {/* 2. Instagram */}
                <button
                  onClick={() => handleShare('instagram')}
                  title="Copy caption for Instagram Reels"
                  className="flex flex-col items-center justify-center p-2 bg-neutral-50 hover:bg-black hover:text-white border border-black transition-colors rounded-none text-center group cursor-pointer"
                >
                  <span className="text-pink-600 group-hover:text-white font-bold text-xs">IG</span>
                  <span className="text-[8px] font-mono uppercase mt-1 truncate">Reels</span>
                </button>

                {/* 3. X (Twitter) */}
                <button
                  onClick={() => handleShare('x')}
                  title="Post to X / Twitter"
                  className="flex flex-col items-center justify-center p-2 bg-neutral-50 hover:bg-black hover:text-white border border-black transition-colors rounded-none text-center group cursor-pointer"
                >
                  <span className="text-black group-hover:text-white font-bold text-xs">𝕏</span>
                  <span className="text-[8px] font-mono uppercase mt-1 truncate">Post</span>
                </button>

                {/* 4. TikTok */}
                <button
                  onClick={() => handleShare('tiktok')}
                  title="Copy TikTok script & sound cues"
                  className="flex flex-col items-center justify-center p-2 bg-neutral-50 hover:bg-black hover:text-white border border-black transition-colors rounded-none text-center group cursor-pointer"
                >
                  <span className="text-cyan-600 group-hover:text-white font-bold text-xs">TT</span>
                  <span className="text-[8px] font-mono uppercase mt-1 truncate">TikTok</span>
                </button>

                {/* 5. Generic Share */}
                <button
                  onClick={() => handleShare('generic')}
                  title="Share link across device"
                  className="flex flex-col items-center justify-center p-2 bg-neutral-50 hover:bg-black hover:text-white border border-black transition-colors rounded-none text-center group cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-black group-hover:text-white" />
                  <span className="text-[8px] font-mono uppercase mt-1 truncate">Share</span>
                </button>
              </div>

              {/* Copy Feedback notification */}
              {activeShareFeedback && (
                <div className="mt-2.5 py-1 px-2 bg-black text-white text-[10px] font-mono text-center flex items-center justify-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>
                    {activeShareFeedback === 'youtube' && 'YouTube Shorts package copied to clipboard!'}
                    {activeShareFeedback === 'instagram' && 'Instagram Reel caption copied!'}
                    {activeShareFeedback === 'tiktok' && 'TikTok script & hashtags copied!'}
                    {activeShareFeedback === 'generic' && 'Link copied to clipboard!'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Modal Player for Lightweight On-Screen Walkthrough */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative w-full max-w-[420px] aspect-[9/16] bg-black border-2 border-white shadow-2xl overflow-hidden flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button & Step Tracker */}
            <div className="absolute top-3 inset-x-3 z-30 flex items-center justify-between text-white">
              <span className="text-[10px] font-mono font-bold bg-black/80 px-2 py-0.5 border border-white/20">
                PASO {currentStepIdx + 1} DE {TUTORIAL_STEPS.length}: {activeStep.title}
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 bg-black text-white border border-white hover:bg-white hover:text-black transition-colors"
                title="Cerrar reproductor"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Inner Interactive Visual Container */}
            <div className="flex-1 flex flex-col justify-center p-4 pt-12 pb-16 text-center text-white">
              {/* Narration caption box */}
              <div className="bg-black/80 border border-white/30 p-3 text-left mb-4">
                <div className="text-[10px] font-mono text-amber-400 font-bold uppercase mb-1">
                  LOCUCIÓN / GUION DE PASO:
                </div>
                <p className="text-xs font-sans text-neutral-100 leading-relaxed">
                  {activeStep.narration}
                </p>
              </div>

              {/* Navigation stepper buttons */}
              <div className="flex items-center justify-between gap-3 text-xs font-mono">
                <button
                  onClick={() => {
                    setCurrentStepIdx((prev) => (prev - 1 + TUTORIAL_STEPS.length) % TUTORIAL_STEPS.length);
                    setStepProgress(0);
                  }}
                  className="px-3 py-1.5 bg-neutral-900 border border-white/40 text-white hover:bg-white hover:text-black transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Anterior</span>
                </button>

                <button
                  onClick={togglePlay}
                  className="px-4 py-1.5 bg-white text-black font-bold border border-white hover:bg-neutral-200 transition-colors"
                >
                  {isPlaying ? 'PAUSAR (II)' : 'REANUDAR (▶)'}
                </button>

                <button
                  onClick={() => {
                    setCurrentStepIdx((prev) => (prev + 1) % TUTORIAL_STEPS.length);
                    setStepProgress(0);
                  }}
                  className="px-3 py-1.5 bg-neutral-900 border border-white/40 text-white hover:bg-white hover:text-black transition-colors flex items-center gap-1"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bottom Bar: Quick link to app */}
            <div className="p-3 bg-black border-t border-white/20 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">vocationlove.app</span>
              <a
                href="https://vocationlove.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-colors flex items-center gap-1 text-[11px]"
              >
                <span>Ir a la App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
