import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  locale: string;
  isEs: boolean;
  t: (key: string) => string;
}

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    // Header
    'nav.inBloom': 'EN FLOR',
    'nav.love': 'AMOR',
    'nav.ecosystem': 'ECOSISTEMA',
    'nav.legal': 'LEGAL',
    'nav.goToApp': 'IR A LA APP',
    'brand.tagline': 'ATREVETE A AMAR',

    // Hero Breaking News
    'hero.badge': 'EN FLOR',
    'hero.urgent': 'En Flor - El Papa visita América',
    'hero.headline':
      'El Papa León XIV, durante su visita a la Argentina, destacó la importancia del amor y la familia como pilares fundamentales de la sociedad',
    'hero.popeQuote':
      '«Tu corazón anhela el amor. Un amor que sea profundo, generoso y duradero. Este anhelo no es una casualidad. Es el signo de que estás hecho para amar.» Papa León XIV',
    'hero.launchMarquee':
      'LANZAMIENTO DE LA RED SOCIAL VOCATIONLOVE: PARA LOS QUE SE ATREVEN A AMAR. /// LA PLATAFORMA YA ESTÁ ACTIVA. /// VOCATIONLOVE.APP',
    'hero.goToAppDirect': 'ir a vocationlove.app',
    'hero.floatingAppTitle': 'VOCATION\nLOVE.APP',
    'hero.floatingAppBtn': 'Ir a la App',

    // Runway Chronicles Section
    'chronicles.badge': 'Esperanza en Flor',
    'chronicles.title': 'Semillas de Amor',
    'chronicles.description': 'En un solo lugar podés mantenerte al día con vocationlove',
    'chronicles.status': 'tu presencia y continuidad son verdaderamente valoradas',
    'chronicles.filterAll': 'Todas las Crónicas',
    'chronicles.filterSeeds': 'SEMILLAS DE AMOR',
    'chronicles.filterHope': 'ESPERANZA EN FLOR',
    'chronicles.filterDare': 'ATREVETE A AMAR',
    'chronicles.searchPlaceholder': 'Buscar titular o tema...',
    'chronicles.showingCount': 'Mostrando {count} de {total} publicaciones',
    'chronicles.clearSearch': 'Limpiar búsqueda',
    'chronicles.loadMore': 'Cargar más historias (+12)',
    'chronicles.showAll': 'Ver todas ({total})',

    // Card Toolbar (Editor)
    'card.captionsBtn': 'Textos (4 Redes)',
    'card.copyIg': 'Copiar IG',
    'card.copied': '¡Copiado!',

    // Official Launch Section
    'launch.badge': 'LANZAMIENTO OFICIAL • VOCATIONLOVE.APP',
    'launch.available': 'DISPONIBLE EN APP & TIENDA',
    'launch.text': 'Hoy es el lanzamiento de la nueva VOCATIONLOVE APP, un lugar para los que se atreven a amar.',
    'launch.access': 'Acceder',

    // Story Ecosystem Modal
    'modal.ecosystemBadge': 'VOCATIONLOVE • ECOSISTEMA',
    'modal.destinationTag': 'ELEGÍ TU DESTINO',
    'modal.btnSocialApp': 'ENTRAR A LA RED SOCIAL',
    'modal.btnSocialSub': 'vocationlove.app • Para los que se atreven a amar',
    'modal.btnStore': 'VISITAR LA TIENDA DE FLORES',
    'modal.btnStoreSub': 'vocationlove.store • Ramos exclusivos de autor',
    'modal.footerNav': 'Navegación oficial del ecosistema',
    'modal.close': 'Cerrar',

    // Share Section
    'share.title': 'COMPARTE',
    'share.subtitle': 'Compártelo para que cada día seamos más!',
    'share.copied': '¡Copiado para compartir!',
    'share.copiedFor': '¡Copiado para {network}!',
    'share.video1Title': 'CÓMO FUNCIONA VOCATIONLOVE',
    'share.video1Desc': 'Descubre la app: ingreso seguro con Google, cartilla vocacional y coincidencia mutua.',
    'share.video2Title': 'VOCACIÓN AL AMOR',
    'share.video2Desc': 'Cada historia es una obra de arte. Un lienzo en blanco para la verdad.',
    'share.video3Title': 'EL COMPROMISO CUSTODIA LA PUREZA',
    'share.video3Desc': 'Un refugio en la verdad. El camino hacia tu vocación al amor.',

    // Footer
    'footer.app': 'App',
    'footer.store': 'Tienda',
    'footer.legal': 'LEGAL',
    'footer.backToTop': 'Volver arriba',
    'footer.copyright': '© {year} VOCATIONLOVE.COM • Todos los derechos reservados.',
    'footer.cat1': 'Semillas de Amor',
    'footer.cat2': 'Esperanza en Flor',
    'footer.cat3': 'Atrevete a Amar'
  },
  en: {
    // Header
    'nav.inBloom': 'IN BLOOM',
    'nav.love': 'LOVE',
    'nav.ecosystem': 'ECOSISTEM',
    'nav.legal': 'LEGAL',
    'nav.goToApp': 'GO TO APP',
    'brand.tagline': 'DARE TO LOVE',

    // Hero Breaking News
    'hero.badge': 'IN BLOOM',
    'hero.urgent': 'In Bloom - The pope visits America',
    'hero.headline':
      'Pope Leo XIV, during his visit to Argentina, emphasized the importance of love and family as the pillars of society',
    'hero.popeQuote':
      '«Your heart longs for love. A love that is deep, self-sacrificing and enduring. This longing is no accident. It is a sign that you are made for love.» Pope Leo XIV',
    'hero.launchMarquee':
      'LAUNCHING VOCATIONLOVE SOCIAL NETWORK: FOR THOSE WHO DARE TO LOVE. /// PLATFORM IS NOW ALIVE. /// VOCATIONLOVE.APP',
    'hero.goToAppDirect': 'go to vocationlove.app',
    'hero.floatingAppTitle': 'VOCATION\nLOVE.APP',
    'hero.floatingAppBtn': 'Go to App',

    // Runway Chronicles Section
    'chronicles.badge': 'Hope in Bloom',
    'chronicles.title': 'Seeds of Love',
    'chronicles.description': 'In one place you can stay up to date with vocationlove',
    'chronicles.status': 'your presence and continuity are truly valued',
    'chronicles.filterAll': 'All Stories',
    'chronicles.filterSeeds': 'SEEDS OF LOVE',
    'chronicles.filterHope': 'HOPE IN BLOOM',
    'chronicles.filterDare': 'DARE TO LOVE',
    'chronicles.searchPlaceholder': 'Search headline or theme...',
    'chronicles.showingCount': 'Showing {count} of {total} publications',
    'chronicles.clearSearch': 'Clear search',
    'chronicles.loadMore': 'Load More Stories (+12)',
    'chronicles.showAll': 'Show All ({total})',

    // Card Toolbar (Editor)
    'card.captionsBtn': 'Captions (4 Feeds)',
    'card.copyIg': 'Copy IG',
    'card.copied': 'Copied!',

    // Official Launch Section
    'launch.badge': 'OFFICIAL LAUNCH • VOCATIONLOVE.APP',
    'launch.available': 'AVAILABLE ON APP & STORE',
    'launch.text': 'Today is the launch of the new VOCATIONLOVE APP, a place for those who dare.',
    'launch.access': 'Access',

    // Story Ecosystem Modal
    'modal.ecosystemBadge': 'VOCATIONLOVE • ECOSYSTEM',
    'modal.destinationTag': 'CHOOSE DESTINATION',
    'modal.btnSocialApp': 'ENTER THE SOCIAL APP',
    'modal.btnSocialSub': 'vocationlove.app • For those who dare',
    'modal.btnStore': 'VISIT THE FLOWER STORE',
    'modal.btnStoreSub': 'vocationlove.store • Exclusive curated bouquets',
    'modal.footerNav': 'Official Ecosystem Navigation',
    'modal.close': 'Close',

    // Share Section
    'share.title': 'COMPARTE',
    'share.subtitle': 'Compártelo para que cada día seamos más!',
    'share.copied': 'Copied to share!',
    'share.copiedFor': 'Copied for {network}!',
    'share.video1Title': 'HOW VOCATIONLOVE WORKS',
    'share.video1Desc': 'Discover the app: secure Google login, vocational profile and mutual match.',
    'share.video2Title': 'VOCATION TO LOVE',
    'share.video2Desc': 'Every story is a work of art. A blank canvas for the truth.',
    'share.video3Title': 'COMMITMENT GUARDS PURITY',
    'share.video3Desc': 'A refuge in truth. The journey toward your vocation to love.',

    // Footer
    'footer.app': 'App',
    'footer.store': 'Store',
    'footer.legal': 'LEGAL',
    'footer.backToTop': 'Back to top',
    'footer.copyright': '© {year} VOCATIONLOVE.COM • All rights reserved.',
    'footer.cat1': 'Seeds of Love',
    'footer.cat2': 'Hope in Bloom',
    'footer.cat3': 'Dare to Love'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  locale: 'es-AR',
  isEs: true,
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default Locale: es-AR (Español de Argentina)
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('vocationlove_locale');
      if (saved === 'en' || saved === 'es') return saved;
    } catch {
      // Fallback
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('vocationlove_locale', lang);
    } catch {
      // Storage unavailable
    }
  };

  useEffect(() => {
    // Sync HTML document lang attribute
    document.documentElement.lang = language === 'es' ? 'es-AR' : 'en';
  }, [language]);

  const t = (key: string): string => {
    return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        locale: language === 'es' ? 'es-AR' : 'en-US',
        isEs: language === 'es',
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
