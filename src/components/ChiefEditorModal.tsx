import React, { useState } from 'react';
import { ChronicleStory } from '../data/chronicles';
import { X, Sparkles, Plus, Image as ImageIcon, CheckCircle, Feather } from 'lucide-react';

interface ChiefEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddChronicle: (newChronicle: ChronicleStory) => void;
}

const AVAILABLE_IMAGES = [
  {
    label: "Paris Sculptural Runway (Black Silk)",
    src: "/src/assets/images/runway_haute_couture_1_1794020634082.jpg"
  },
  {
    label: "Monumental Tailoring (Corsetry & Shoulders)",
    src: "/src/assets/images/runway_haute_couture_2_1794020634029.jpg"
  },
  {
    label: "Liquid Satin Trio (Emerald & Cobalt)",
    src: "/src/assets/images/runway_haute_couture_3_1794020634452.jpg"
  }
];

export const ChiefEditorModal: React.FC<ChiefEditorModalProps> = ({
  isOpen,
  onClose,
  onAddChronicle
}) => {
  if (!isOpen) return null;

  const [titular, setTitular] = useState('');
  const [bajada, setBajada] = useState('');
  const [categoria, setCategoria] = useState('HOPE IN BLOOM');
  const [selectedImage, setSelectedImage] = useState(AVAILABLE_IMAGES[0].src);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Quick preset topics
  const applyPreset = (presetNumber: number) => {
    if (presetNumber === 1) {
      setTitular("ARCHITECTURAL SILHOUETTES AT PARIS FASHION WEEK CELEBRATE TIMELESS DEVOTION");
      setBajada("Under the glass dome of the Grand Palais, structured black silk and sharp tailoring herald a quiet return to lasting vows and authentic devotion.");
      setCategoria("SEEDS OF LOVE");
      setSelectedImage(AVAILABLE_IMAGES[0].src);
    } else if (presetNumber === 2) {
      setTitular("THE RIGOR OF BESPOKE TAILORING: WALKING TOWARDS DESTINY WITHOUT COMPROMISE");
      setBajada("Elevated shoulder silhouettes and contemporary armor corsetry proclaim that genuine tenderness requires unshakeable dignity.");
      setCategoria("HOPE IN BLOOM");
      setSelectedImage(AVAILABLE_IMAGES[1].src);
    } else {
      setTitular("EMERALD, COBALT AND PEARL: THE TRIUMPH OF CLASSIC DIGNITY ON GLOBAL RUNWAYS");
      setBajada("Liquid silk drapery honoring golden ratios and noble simplicity. Quiet elegance emerges as the highest standard of modern commitment.");
      setCategoria("DARE TO LOVE");
      setSelectedImage(AVAILABLE_IMAGES[2].src);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titular.trim() || !bajada.trim()) return;

    const finalImage = customImageUrl.trim() ? customImageUrl.trim() : selectedImage;
    const cleanId = `chronicle-${Date.now().toString().slice(-4)}-${categoria.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

    // Auto-generate optimized captions for the 4 platforms
    const newStory: ChronicleStory = {
      id: cleanId,
      titular: titular.toUpperCase(),
      bajada: bajada,
      categoria: categoria.toUpperCase(),
      fecha: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
      autor: "VocationLove Editorial Desk",
      edicion: "Seeds of Love Edition",
      imagen_9_16: finalImage,
      imagenes_runway: [finalImage, AVAILABLE_IMAGES[1].src, AVAILABLE_IMAGES[2].src],
      captions: {
        instagram: {
          hook: `${titular.toUpperCase()} 🖤✨`,
          body: `${bajada}\n\nAt VocationLove, we stand against the disposable. Our high-couture editorial reveals the non-negotiables of love with purpose: loyalty, distinction, and sovereign commitment.`,
          cta: "📲 Read the full chronicle on vocationlove.com and join the movement at vocationlove.app.",
          hashtags: ["#VocationLove", "#SeedsOfLove", "#HopeInBloom", "#DareToLove", "#HauteCouture", "#VocationLoveApp"]
        },
        tiktok: {
          hook3s: `Why did this silhouette stop the entire runway? Here is the story behind the runway walk. ⏳👠`,
          voiceoverScript: `${bajada}. VocationLove was born for those who reject casual, disposable ties and choose the architecture of enduring devotion. Visit vocationlove.app and dare to love.`,
          hashtags: ["#VocationLove", "#RunwayLook", "#FashionEditorial", "#DareToLove", "#TrueLove", "#VocationLoveApp"]
        },
        youtube: {
          title: `${titular} | VocationLove Editorial`,
          description: `${bajada}\n\nExclusive coverage from VocationLove.com.\n\n🌐 Web: https://vocationlove.com\n📱 Official App: https://vocationlove.app`,
          tags: ["VocationLove", "Seeds of Love", "Hope in Bloom", "High Fashion", "Runway Editorial"]
        },
        x: {
          headline: `CHRONICLE | ${titular}`,
          tweetThread: [
            `1/2 ${titular}: ${bajada}`,
            `2/2 The editorial rigor of VocationLove unites aesthetic excellence with profound connection. Available now at https://vocationlove.com and https://vocationlove.app`
          ]
        }
      }
    };

    onAddChronicle(newStory);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white rounded-xs border border-neutral-300 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-neutral-950 text-white border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <Feather className="w-4 h-4 text-rose-400" />
            <h3 className="font-times text-base font-bold uppercase tracking-wider text-neutral-100">
              Chief Editor Desk • Seeds of Love
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-5">
          {/* Presets */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
              Editorial Presets (Load in 1-Click):
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyPreset(1)}
                className="px-2.5 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-xs font-medium text-neutral-800 transition-colors"
              >
                1. Architectural Paris
              </button>
              <button
                type="button"
                onClick={() => applyPreset(2)}
                className="px-2.5 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-xs font-medium text-neutral-800 transition-colors"
              >
                2. Bespoke Tailoring
              </button>
              <button
                type="button"
                onClick={() => applyPreset(3)}
                className="px-2.5 py-1 text-xs bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-xs font-medium text-neutral-800 transition-colors"
              >
                3. Liquid Satin Elegance
              </button>
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Editorial Category
              </label>
              <input
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                placeholder="E.g. SEEDS OF LOVE, HOPE IN BLOOM, RUNWAY COUTURE"
                className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xs focus:ring-1 focus:ring-black focus:outline-hidden uppercase"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Headline (Serif / Uppercase)
              </label>
              <textarea
                value={titular}
                onChange={(e) => setTitular(e.target.value)}
                rows={2}
                placeholder="HEADLINE IN EDITORIAL FORMAT FOR CHRONICLES AND SOCIAL NETWORKS"
                className="w-full px-3 py-2 text-xs sm:text-sm font-bodoni font-bold italic uppercase border border-neutral-300 rounded-xs focus:ring-1 focus:ring-black focus:outline-hidden"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Deck / Subtitle
              </label>
              <textarea
                value={bajada}
                onChange={(e) => setBajada(e.target.value)}
                rows={3}
                placeholder="Descriptive subtitle that accompanies the chronicle and feeds all 4 social captions..."
                className="w-full px-3 py-2 text-xs sm:text-sm font-sans border border-neutral-300 rounded-xs focus:ring-1 focus:ring-black focus:outline-hidden"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Editorial Runway Image (2:3 / 9:16)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {AVAILABLE_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSelectedImage(img.src);
                      setCustomImageUrl('');
                    }}
                    className={`relative aspect-[2/3] rounded-xs overflow-hidden border-2 transition-all ${
                      selectedImage === img.src && !customImageUrl
                        ? 'border-neutral-950 ring-2 ring-neutral-900 shadow-md'
                        : 'border-neutral-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 text-[9px] text-white p-1 text-center font-mono truncate">
                      {img.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                Or Custom Image URL (Optional):
              </label>
              <input
                type="text"
                value={customImageUrl}
                onChange={(e) => setCustomImageUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded-xs focus:ring-1 focus:ring-black focus:outline-hidden"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-neutral-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-sm"
              >
                {isSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Chronicle Published!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-rose-300" />
                    <span>Publish & Generate Captions</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
