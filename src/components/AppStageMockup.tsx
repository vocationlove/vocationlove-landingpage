import React from 'react';
import {
  Check,
  Heart,
  Sparkles,
  Smartphone,
  ShieldCheck,
  UserCheck,
  MessageCircle,
  ExternalLink,
  Lock,
  ArrowRight
} from 'lucide-react';

interface AppStageMockupProps {
  type: 'login' | 'form' | 'photo_terms' | 'explore' | 'match' | 'viral';
  actorImage: string;
}

export const AppStageMockup: React.FC<AppStageMockupProps> = ({ type, actorImage }) => {
  return (
    <div className="w-full h-full bg-neutral-950/90 backdrop-blur-md p-3.5 sm:p-4 flex flex-col justify-between text-white font-sans animate-in fade-in duration-300 select-none">
      {/* Top App Status Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[10px] font-mono text-neutral-400">
        <span className="flex items-center gap-1.5 font-bold tracking-wider text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          VOCATIONLOVE.APP
        </span>
        <span className="uppercase text-[9px] bg-neutral-900 px-1.5 py-0.5 border border-neutral-700">
          Official Stage Mockup
        </span>
      </div>

      {/* Dynamic Content by Stage */}
      <div className="flex-1 flex flex-col justify-center my-2">
        {type === 'login' && (
          <div className="bg-neutral-900 border-2 border-white/20 p-4 rounded-none text-center space-y-3.5 shadow-2xl">
            <div className="font-times font-bold text-lg uppercase tracking-wider text-white">
              VOCATIONLOVE
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              For those who dare to love without compromise.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center justify-center gap-2.5 w-full py-2.5 px-3 bg-white text-neutral-900 font-semibold text-xs rounded-none border border-neutral-300 shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.9c2.28-2.1 3.6-5.2 3.6-9.14z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.93H1.26v3.13C3.26 21.36 7.36 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.6H1.26C.46 8.2 0 10.04 0 12s.46 3.8 1.26 5.4l4.06-3.13z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.26 6.6l4.06 3.13c.94-2.83 3.58-4.98 6.68-4.98z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Instant • Safe • 1-Click Access</span>
            </div>
          </div>
        )}

        {type === 'form' && (
          <div className="bg-neutral-900 border-2 border-white/20 p-3.5 rounded-none space-y-2.5 shadow-2xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
              VOCATIONAL REGISTRATION CARD
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="bg-neutral-800/80 p-2 border border-neutral-700 flex justify-between items-center">
                <span className="text-neutral-300">Faith & Core Values:</span>
                <span className="text-white font-semibold">Shared Devotion ✓</span>
              </div>
              <div className="bg-neutral-800/80 p-2 border border-neutral-700 flex justify-between items-center">
                <span className="text-neutral-300">Calling:</span>
                <span className="text-white font-semibold">Lifelong Marriage ✓</span>
              </div>
              <div className="bg-neutral-800/80 p-2 border border-neutral-700 flex justify-between items-center">
                <span className="text-neutral-300">Life Goals:</span>
                <span className="text-white font-semibold">Family & Service ✓</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 text-center pt-1">
              No superficial algorithms • Pure human intentionality
            </div>
          </div>
        )}

        {type === 'photo_terms' && (
          <div className="bg-neutral-900 border-2 border-white/20 p-3.5 rounded-none space-y-2.5 shadow-2xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
              AUTHENTIC PHOTO & 4 PILLARS
            </div>
            <div className="flex items-center gap-2.5 p-2 bg-neutral-800 border border-neutral-700">
              <div className="w-9 h-9 rounded-none overflow-hidden bg-black border border-white/30 shrink-0">
                <img
                  src={actorImage}
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[11px] text-white">
                <div className="font-bold">Verified Authentic Portrait</div>
                <div className="text-[9px] text-neutral-400 font-mono">Approved for community</div>
              </div>
            </div>
            <div className="space-y-1 text-[10px] font-mono">
              {[
                '1. Truth & Honest Identity',
                '2. Mutual Respect & Dignity',
                '3. Calling to Holy Matrimony',
                '4. Confidentiality & Zero Spam'
              ].map((pillar, pIdx) => (
                <div key={pIdx} className="flex items-center gap-1.5 text-neutral-300">
                  <div className="w-3.5 h-3.5 bg-rose-600 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'explore' && (
          <div className="bg-neutral-900 border-2 border-white/20 p-3 rounded-none space-y-2 shadow-2xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="text-white font-bold">EXPLORE FEED</span>
              <span className="text-rose-400 font-semibold">98% Shared Values</span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-700 bg-neutral-950">
              <img
                src={actorImage}
                alt="Profile in feed"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="text-xs font-times font-bold uppercase text-white">
                  Intentional Match Candidate
                </div>
                <div className="text-[10px] text-neutral-300 font-sans">
                  "Ready for marriage, devotion, and a lifetime of shared purpose."
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-center text-neutral-400">
              Tap to view full vocational statement
            </div>
          </div>
        )}

        {type === 'match' && (
          <div className="bg-neutral-900 border-2 border-rose-600 p-4 rounded-none text-center space-y-3 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-10 h-10 mx-auto bg-rose-600 flex items-center justify-center text-white shadow-lg">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <div className="font-times font-bold text-base sm:text-lg uppercase tracking-wider text-rose-300">
                IT'S A VOCATIONAL MATCH!
              </div>
              <p className="mt-1 text-xs text-neutral-300 font-sans">
                Both individuals shared mutual respect and vision for lifelong commitment.
              </p>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="py-2 px-3 bg-white text-black font-semibold text-xs tracking-wider uppercase border border-neutral-300">
                Send Direct Respectful Message
              </div>
              <div className="text-[10px] font-mono text-neutral-400">
                Available in your 'My Matches' sanctuary
              </div>
            </div>
          </div>
        )}

        {type === 'viral' && (
          <div className="bg-black border-2 border-white p-4 rounded-none text-center space-y-3.5 shadow-2xl">
            <div className="w-10 h-10 mx-auto bg-white text-black flex items-center justify-center font-bold">
              VL
            </div>
            <div>
              <div className="font-times font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                DARE TO LOVE FOR A LIFETIME
              </div>
              <p className="mt-1 text-xs text-neutral-300 font-sans leading-relaxed">
                Join the international movement. Your future spouse might be one click away.
              </p>
            </div>
            <a
              href="https://vocationlove.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-widest transition-colors"
            >
              <span>ENTER VOCATIONLOVE.APP</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Bottom Stage Progress Indicator */}
      <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[9px] font-mono text-neutral-500">
        <span>STEP COMPLETED</span>
        <span className="text-emerald-400 font-bold">VERIFIED FLOW ✓</span>
      </div>
    </div>
  );
};
