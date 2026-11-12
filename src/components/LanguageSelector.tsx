import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { ChevronDown, Check } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Compact Brutalist Dropdown Trigger: displays only the active language */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 border border-black bg-white rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[11px] font-mono font-bold tracking-wider hover:bg-neutral-100 transition-colors cursor-pointer select-none"
        title={language === 'es' ? 'Idioma: Español (clic para cambiar)' : 'Language: English (click to change)'}
        aria-label={language === 'es' ? 'Idioma activo: Español. Clic para cambiar' : 'Active language: English. Click to change'}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-neutral-950">{language.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 text-neutral-700 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Minimalist Dropdown Menu matching user sketch */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 sm:w-36 bg-white border border-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-50 py-1">
          <button
            type="button"
            onClick={() => selectLanguage('en')}
            className={`w-full px-3 py-2 text-left text-xs sm:text-sm font-sans flex items-center justify-between hover:bg-neutral-100 transition-colors cursor-pointer select-none ${
              language === 'en' ? 'font-bold text-black bg-neutral-50' : 'text-neutral-800'
            }`}
          >
            <span>English</span>
            {language === 'en' && <Check className="w-3.5 h-3.5 text-black shrink-0 ml-2" />}
          </button>

          <button
            type="button"
            onClick={() => selectLanguage('es')}
            className={`w-full px-3 py-2 text-left text-xs sm:text-sm font-sans flex items-center justify-between hover:bg-neutral-100 transition-colors cursor-pointer select-none ${
              language === 'es' ? 'font-bold text-black bg-neutral-50' : 'text-neutral-800'
            }`}
          >
            <span>Español</span>
            {language === 'es' && <Check className="w-3.5 h-3.5 text-black shrink-0 ml-2" />}
          </button>
        </div>
      )}
    </div>
  );
};
