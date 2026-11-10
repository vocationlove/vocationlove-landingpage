import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { ChevronDown, Globe, Check } from 'lucide-react';

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
      {/* Brutalist Minimalist Dropdown Trigger: [ES | EN] */}
      <div className="flex items-center border border-black bg-white rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <button
          onClick={() => selectLanguage('es')}
          title="Español de Argentina (es-AR)"
          className={`px-2 py-1 text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer ${
            language === 'es'
              ? 'bg-black text-white'
              : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
          }`}
          aria-label="Seleccionar Español"
        >
          ES
        </button>
        <div className="w-[1px] h-4 bg-neutral-300" />
        <button
          onClick={() => selectLanguage('en')}
          title="English (en)"
          className={`px-2 py-1 text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer ${
            language === 'en'
              ? 'bg-black text-white'
              : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
          }`}
          aria-label="Select English"
        >
          EN
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-1.5 py-1 text-neutral-600 hover:text-black hover:bg-neutral-100 border-l border-neutral-300 transition-colors cursor-pointer"
          title="Opciones de idioma / Language options"
          aria-expanded={isOpen}
        >
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Minimalist Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-52 bg-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 py-1 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 border-b border-neutral-200 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest flex items-center justify-between">
            <span>IDIOMA / LANGUAGE</span>
            <Globe className="w-3 h-3 text-neutral-400" />
          </div>

          <button
            onClick={() => selectLanguage('es')}
            className={`w-full px-3 py-2 text-left text-xs font-mono flex items-center justify-between hover:bg-neutral-100 transition-colors cursor-pointer ${
              language === 'es' ? 'bg-neutral-50 font-bold text-black' : 'text-neutral-700'
            }`}
          >
            <div className="flex flex-col">
              <span className="font-sans font-semibold">Español (Argentina)</span>
              <span className="text-[10px] text-neutral-500 font-mono">es-AR • Predeterminado</span>
            </div>
            {language === 'es' && <Check className="w-4 h-4 text-black shrink-0" />}
          </button>

          <button
            onClick={() => selectLanguage('en')}
            className={`w-full px-3 py-2 text-left text-xs font-mono flex items-center justify-between hover:bg-neutral-100 transition-colors cursor-pointer ${
              language === 'en' ? 'bg-neutral-50 font-bold text-black' : 'text-neutral-700'
            }`}
          >
            <div className="flex flex-col">
              <span className="font-sans font-semibold">English</span>
              <span className="text-[10px] text-neutral-500 font-mono">en-US • International</span>
            </div>
            {language === 'en' && <Check className="w-4 h-4 text-black shrink-0" />}
          </button>
        </div>
      )}
    </div>
  );
};
