/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBreakingNews } from './components/HeroBreakingNews';
import { ChroniclesRunwaySection } from './components/ChroniclesRunwaySection';
import { LaunchBannerStrip } from './components/LaunchBannerStrip';
import { ShortsSection } from './components/ShortsSection';
import { SocialCaptionsModal } from './components/SocialCaptionsModal';
import { ChiefEditorModal } from './components/ChiefEditorModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { StoryEcosystemModal } from './components/StoryEcosystemModal';
import { Footer } from './components/Footer';
import { INITIAL_CHRONICLES, ChronicleStory } from './data/chronicles';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [chronicles, setChronicles] = useState<ChronicleStory[]>(INITIAL_CHRONICLES);
  const [activeStoryForCaptions, setActiveStoryForCaptions] = useState<ChronicleStory | null>(null);
  const [selectedStoryForEcosystem, setSelectedStoryForEcosystem] = useState<ChronicleStory | null>(null);
  const [modalMode, setModalMode] = useState<'captions' | 'preview'>('captions');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check URL parameter or Secret Key combo for Editor access (Invisible to public audience)
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('editor') === 'true' || params.get('admin') === 'true' || params.get('redaccion') === 'vocationlove') {
      setIsAdminMode(true);
      setIsEditorOpen(true);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret key combination for Editor-in-Chief: Ctrl + Shift + E or Cmd + Shift + E
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setIsAdminMode((prev) => !prev);
        setIsEditorOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenCaptions = (story: ChronicleStory) => {
    setActiveStoryForCaptions(story);
    setModalMode('captions');
  };

  const handlePreviewMockup = (story: ChronicleStory) => {
    setActiveStoryForCaptions(story);
    setModalMode('preview');
  };

  const handleAddChronicle = (newChronicle: ChronicleStory) => {
    setChronicles((prev) => [newChronicle, ...prev]);
    showToast(`Chronicle "${newChronicle.titular.slice(0, 32)}..." published in runway feed.`);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-neutral-950 text-white text-xs font-mono tracking-wider uppercase border border-neutral-700 rounded-xs shadow-2xl animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with Top Bar Contract (Clean public navigation) */}
      <Header
        onOpenLegal={() => setIsLegalOpen(true)}
      />

      <main className="flex-1 flex flex-col">
        {/* 2. Zona Superior (Breaking News, Panoramic Hero, VOCATIONLOVE Title, Marquee Bars) */}
        <HeroBreakingNews
          onExploreApp={() => {
            const el = document.getElementById('ecosistema-app');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Bloque de Crónicas (Estilo Pasarela/Runway en formato clásico 2:3 con Molde de Acero) */}
        <ChroniclesRunwaySection
          chronicles={chronicles}
          showAdminTools={isAdminMode || isEditorOpen}
          onOpenCaptions={handleOpenCaptions}
          onPreviewMockup={handlePreviewMockup}
          onSelectStory={(story) => setSelectedStoryForEcosystem(story)}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* 4. Franja de Lanzamiento Ecosistema App (Bloques Vinotinto/Borgoña del Molde) */}
        <LaunchBannerStrip />

        {/* 5. Sección SHORTS (Tutorial en proporción 9:16 para YouTube, Instagram, X, TikTok) */}
        <ShortsSection />
      </main>

      {/* 5. Menú de Navegación de Pie de Página (Minimalista: App, Store, Aviso Legal) */}
      <Footer
        onOpenLegal={() => setIsLegalOpen(true)}
      />

      {/* Interactive Ecosystem Story Destination Modal */}
      <StoryEcosystemModal
        story={selectedStoryForEcosystem}
        isOpen={Boolean(selectedStoryForEcosystem)}
        onClose={() => setSelectedStoryForEcosystem(null)}
      />

      {/* Modals & Overlays */}
      <SocialCaptionsModal
        story={activeStoryForCaptions}
        initialMode={modalMode}
        onClose={() => setActiveStoryForCaptions(null)}
      />

      <ChiefEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onAddChronicle={handleAddChronicle}
      />

      <LegalNoticeModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />
    </div>
  );
}
