import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenLegal: () => void;
  onOpenEditor?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-neutral-800">
          {/* Brand mark */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-times text-2xl font-bold tracking-widest text-white uppercase">
              VOCATIONLOVE
            </span>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mt-1">
              vocationlove.com
            </span>
          </div>

          {/* Minimalist Navigation Menu: Direct links to App, Store, Legal Notice */}
          <nav className="flex items-center flex-wrap justify-center gap-8 text-xs font-semibold tracking-widest uppercase">
            <a
              href="https://vocationlove.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{t('footer.app')}</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
            <a
              href="#ecosistema-app"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t('footer.store')}
            </a>
            <a
              href="#press-section"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {t('nav.press')}
            </a>
            <button
              onClick={onOpenLegal}
              className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              {t('footer.legal')}
            </button>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-xs border border-neutral-800 transition-colors cursor-pointer"
            title={t('footer.backToTop')}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            {t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}
          </div>
          <div className="flex items-center gap-4">
            <span>{t('footer.cat1')}</span>
            <span>·</span>
            <span>{t('footer.cat2')}</span>
            <span>·</span>
            <span>{t('footer.cat3')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
