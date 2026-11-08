export interface ShortStage {
  stepNumber: number;
  badge: string;
  title: string;
  voiceover: string;
  uiMockupType: 'login' | 'form' | 'photo_terms' | 'explore' | 'match' | 'viral';
}

export interface AppTutorialShort {
  id: string;
  langCode: 'EN' | 'ES' | 'AL' | 'FR' | 'IT' | 'PT';
  langLabel: string;
  flagEmoji: string;
  actorPairTitle: string;
  actorAttireDescription: string;
  actorImage: string;
  speechLang: string;
  title: string;
  hook: string;
  viralCallToAction: string;
  stages: ShortStage[];
  socialKit: {
    youtube: {
      title: string;
      description: string;
      tags: string[];
    };
    instagram: {
      caption: string;
      hashtags: string[];
    };
    tiktok: {
      caption: string;
      hashtags: string[];
    };
    x: {
      text: string;
    };
  };
}

export const APP_TUTORIAL_SHORTS: AppTutorialShort[] = [
  // ==========================================
  // SHORT 1: ENGLISH (EN) - The Selene Couple
  // ==========================================
  {
    id: "short-en",
    langCode: "EN",
    langLabel: "English",
    flagEmoji: "🇬🇧",
    actorPairTitle: "The Selene Couple",
    actorAttireDescription: "Graduation academic regalia & vibrant peach-pink rose bouquet",
    actorImage: "/assets/aistudio/The_Selene_VocationLove_Production_2.3_41c94c32.jpg",
    speechLang: "en-US",
    title: "HOW VOCATIONLOVE WORKS: FROM 1-CLICK LOGIN TO REAL MARRIAGE MATCH",
    hook: "Tired of endless superficial swiping? Here is how real love begins on VocationLove!",
    viralCallToAction: "Dare to love without compromise! Join us today at vocationlove.app and share this with someone who deserves true devotion.",
    stages: [
      {
        stepNumber: 1,
        badge: "STEP 1 • INSTANT ACCESS",
        title: "1-Click Google Sign-In",
        voiceover: "Welcome to VocationLove! Just open vocationlove.app and tap 'Sign in with Google'. Instant, safe, and zero tedious passwords.",
        uiMockupType: "login"
      },
      {
        stepNumber: 2,
        badge: "STEP 2 • VOCATIONAL CARD",
        title: "The Intentional Registration Form",
        voiceover: "Next, fill out your Vocational Card. Answer genuine questions about your faith, family vision, values, and life goals.",
        uiMockupType: "form"
      },
      {
        stepNumber: 3,
        badge: "STEP 3 • SACRED PILLARS",
        title: "Upload Photo & Accept 4 Community Terms",
        voiceover: "Upload your favorite authentic smile, and check the 4 Pillars of Respect, Truth, Marriage Intent, and Privacy. Done in 30 seconds!",
        uiMockupType: "photo_terms"
      },
      {
        stepNumber: 4,
        badge: "STEP 4 • REAL DISCOVERY",
        title: "Explore Intentional Profiles",
        voiceover: "Now you are inside! Explore curated profiles of men and women who also dream of enduring love and lifelong devotion.",
        uiMockupType: "explore"
      },
      {
        stepNumber: 5,
        badge: "STEP 5 • THE MATCH",
        title: "Mutual Match & Direct Contact",
        voiceover: "When the mutual spark ignites, it's a Vocational Match! You can contact each other directly with total respect and peace of mind.",
        uiMockupType: "match"
      },
      {
        stepNumber: 6,
        badge: "CHIC FINALE • VIRAL CALL",
        title: "Join the Revolution of Devotion",
        voiceover: "Love is calling! Enter vocationlove.app now, tag your friends, and help us spread the word across the world!",
        uiMockupType: "viral"
      }
    ],
    socialKit: {
      youtube: {
        title: "How VocationLove Works: The App for Real Love & Marriage | Official Short",
        description: "Tired of casual dating apps? VocationLove is the social network with shared values focused on authentic courtship, commitment, and marriage.\n\n📲 Enter now: https://vocationlove.app\n💐 Read chronicles: https://vocationlove.com\n\n#VocationLove #DatingApp #Marriage #ChristianDating #Shorts",
        tags: ["VocationLove", "Dating App", "Marriage", "Courtship", "Christian Dating", "VocationLoveApp", "Shorts"]
      },
      instagram: {
        caption: "Tired of endless superficial swiping? ✨ Here is how real love begins on VOCATIONLOVE.APP:\n\n1️⃣ 1-click Google Login\n2️⃣ Intentional profile card\n3️⃣ Upload photo & accept 4 pillars\n4️⃣ Explore profiles & find mutual matches\n5️⃣ Direct, respectful contact!\n\nDare to love. Join today at vocationlove.app 💐",
        hashtags: ["#VocationLove", "#DareToLove", "#TrueConnection", "#MarriageMinded", "#CoupleGoals", "#VocationLoveApp"]
      },
      tiktok: {
        caption: "How to find authentic love without casual games 💍 Tap link in bio to join vocationlove.app! #VocationLove #RelationshipGoals #DatingAdvice #RealLove",
        hashtags: ["#VocationLove", "#RelationshipGoals", "#DatingAdvice", "#RealLove", "#VocationLoveApp"]
      },
      x: {
        text: "Looking for marriage instead of casual swipes? Watch how easy it is to find intentional love on https://vocationlove.app 💐 #VocationLove"
      }
    }
  },

  // ==========================================
  // SHORT 2: SPANISH (ES) - The Banquet Couple
  // ==========================================
  {
    id: "short-es",
    langCode: "ES",
    langLabel: "Español",
    flagEmoji: "🇪🇸",
    actorPairTitle: "The Banquet Couple",
    actorAttireDescription: "Traje de gala negro & vestido cocktail frente al skyline a la luz de las velas",
    actorImage: "/assets/aistudio/THE_BANKET_VOCATIONLOVE_PRODUCTION_2.3_f6c7e31b.jpg",
    speechLang: "es-ES",
    title: "CÓMO FUNCIONA VOCATIONLOVE: DE 1 CLIC A TU MATCH PARA TODA LA VIDA",
    hook: "¿Cansado de la superficialidad de las apps tradicionales? ¡Así nace el amor verdadero en VocationLove!",
    viralCallToAction: "¡Atrévete a amar sin miedo! Únete ahora a vocationlove.app y comparte esta revolución con quien merezca amor verdadero.",
    stages: [
      {
        stepNumber: 1,
        badge: "PASO 1 • ACCESO INMEDIATO",
        title: "Login en 1 solo clic con Google",
        voiceover: "¡Bienvenidos a VocationLove! Solo entra a vocationlove.app y haz clic en 'Iniciar sesión con Google'. Rápido, seguro y sin contraseñas engorrosas.",
        uiMockupType: "login"
      },
      {
        stepNumber: 2,
        badge: "PASO 2 • CARTILLA VOCACIONAL",
        title: "Llena tu Cartilla de Registro",
        voiceover: "Completa tu cartilla vocacional: comparte con honestidad tus valores, fe, metas de vida y tu deseo sincero de formar una familia.",
        uiMockupType: "form"
      },
      {
        stepNumber: 3,
        badge: "PASO 3 • PILARES SAGRADOS",
        title: "Sube tu foto y acepta los 4 términos",
        voiceover: "Sube tu foto más radiante y acepta los 4 pilares comunitarios de Respeto, Verdad, Vocación al Matrimonio y Privacidad. ¡Listo en 30 segundos!",
        uiMockupType: "photo_terms"
      },
      {
        stepNumber: 4,
        badge: "PASO 4 • DESCUBRIMIENTO",
        title: "Comienza a explorar perfiles",
        voiceover: "¡Ya estás dentro! Explora perfiles de personas con tus mismos valores que también sueñan con una entrega generosa y duradera.",
        uiMockupType: "explore"
      },
      {
        stepNumber: 5,
        badge: "PASO 5 • EL MATCH",
        title: "Match Vocacional y Contacto Directo",
        voiceover: "Y cuando surge la afinidad mutua... ¡se produce el match vocacional! Ya pueden ponerse en contacto directamente con total respeto y alegría.",
        uiMockupType: "match"
      },
      {
        stepNumber: 6,
        badge: "CIERRE CHIC • VIRALIZA",
        title: "Súmate a VocationLove",
        voiceover: "El amor de tu vida te espera. Entra a vocationlove.app, comparte este video y viraliza una nueva forma de amar.",
        uiMockupType: "viral"
      }
    ],
    socialKit: {
      youtube: {
        title: "Cómo Funciona VocationLove: La App para el Noviazgo con Propósito y Matrimonio",
        description: "¿Buscabas una red social seria y con valores? VocationLove conecta a personas interesadas en relaciones estables y matrimonio.\n\n📲 Entra aquí: https://vocationlove.app\n💐 Lee crónicas: https://vocationlove.com\n\n#VocationLove #CitasConValores #Matrimonio #AmorVerdadero #Shorts",
        tags: ["VocationLove", "Citas con valores", "Noviazgo catolico", "Matrimonio", "Amor verdadero", "Shorts"]
      },
      instagram: {
        caption: "¿Cansado del deslizamiento superficial? 💍 Mira lo fácil que es registrarse en VOCATIONLOVE.APP:\n\n1️⃣ Login con Google en 1 clic\n2️⃣ Llena tu cartilla vocacional\n3️⃣ Sube tu foto y acepta los 4 pilares\n4️⃣ Explora y haz match mutuo\n5️⃣ ¡Ponte en contacto!\n\nÚnete hoy en vocationlove.app ✨",
        hashtags: ["#VocationLove", "#AmorVerdadero", "#NoviazgoCristiano", "#MatrimonioParaSiempre", "#AtreveteAAmar"]
      },
      tiktok: {
        caption: "La app para los que buscan matrimonio y no cosas pasajeras 💐 Link en perfil: vocationlove.app #VocationLove #ParejasConProposito #AmorReal",
        hashtags: ["#VocationLove", "#ParejasConProposito", "#AmorReal", "#CitasConValores"]
      },
      x: {
        text: "¿Buscabas una plataforma de citas con valores compartidos? Así funciona https://vocationlove.app en 5 pasos 💐 #VocationLove"
      }
    }
  },

  // ==========================================
  // SHORT 3: GERMAN (AL/DE) - The Gladiolus Couple
  // ==========================================
  {
    id: "short-de",
    langCode: "AL",
    langLabel: "Deutsch",
    flagEmoji: "🇩🇪",
    actorPairTitle: "The Gladiolus Couple",
    actorAttireDescription: "Künstler-Overalls im Atelier mit strahlenden Gladiolenblüten",
    actorImage: "/assets/aistudio/THE_GLADIOLUS_VOCATIONLOVE_PROD._2.3_7d13392b.jpg",
    speechLang: "de-DE",
    title: "WIE VOCATIONLOVE FUNKTIONIERT: VOM 1-KLICK-LOGIN ZUR WAHREN LIEBE",
    hook: "Keine oberflächlichen Wisch-Apps mehr! Hier beginnt echte Hingabe und Ehe.",
    viralCallToAction: "Wagen Sie es zu lieben! Werden Sie noch heute Teil von vocationlove.app und teilen Sie diese Mission.",
    stages: [
      {
        stepNumber: 1,
        badge: "SCHRITT 1 • SCHNELLER ZUGANG",
        title: "1-Klick Google-Anmeldung",
        voiceover: "Willkommen bei VocationLove! Öffnen Sie einfach vocationlove.app und melden Sie sich mit einem Klick über Google an. Sicher und unkompliziert.",
        uiMockupType: "login"
      },
      {
        stepNumber: 2,
        badge: "SCHRITT 2 • REGISTRIERUNG",
        title: "Füllen Sie Ihr Profil aus",
        voiceover: "Beantworten Sie ehrliche Fragen zu Ihren Werten, Ihrem Glauben und Ihrer gemeinsamen Zukunftsvision für eine starke Familie.",
        uiMockupType: "form"
      },
      {
        stepNumber: 3,
        badge: "SCHRITT 3 • WERTE & FOTO",
        title: "Foto hochladen & 4 Säulen akzeptieren",
        voiceover: "Laden Sie Ihr Profilfoto hoch und bestätigen Sie die 4 Grundwerte: Respekt, Wahrheit, Ehe-Absicht und Schutz der Privatsphäre.",
        uiMockupType: "photo_terms"
      },
      {
        stepNumber: 4,
        badge: "SCHRITT 4 • ENTDECKUNG",
        title: "Profile mit Herz erkunden",
        voiceover: "Jetzt geht es los! Entdecken Sie Profile von Menschen, die dieselben tiefen Werte teilen und nach einer lebenslangen Ehe suchen.",
        uiMockupType: "explore"
      },
      {
        stepNumber: 5,
        badge: "SCHRITT 5 • DAS MATCH",
        title: "Berufungs-Match & Direkter Kontakt",
        voiceover: "Sobald ein beidseitiges Interesse besteht, entsteht Ihr Match! Sie können direkt und respektvoll in Kontakt treten.",
        uiMockupType: "match"
      },
      {
        stepNumber: 6,
        badge: "CHIC FINALE • VIRAL",
        title: "Teilen Sie VocationLove",
        voiceover: "Echte Liebe wartet auf Sie. Besuchen Sie vocationlove.app und teilen Sie diese wunderbare Neuigkeit mit Ihren Freunden!",
        uiMockupType: "viral"
      }
    ],
    socialKit: {
      youtube: {
        title: "Wie VocationLove funktioniert: Die App für echte Werte & Ehe",
        description: "VocationLove ist das soziale Netzwerk für Partnersuche mit gemeinsamen Werten und dem Ziel der Ehe.\n\n📲 Jetzt anmelden: https://vocationlove.app\n💐 Entdecken: https://vocationlove.com\n\n#VocationLove #Partnersuche #Ehe #Werte #Shorts",
        tags: ["VocationLove", "Partnersuche mit Werten", "Ehe", "Christliche Partnersuche", "Shorts"]
      },
      instagram: {
        caption: "Schluss mit Oberflächlichkeit! So einfach funktioniert VOCATIONLOVE.APP 💐 Ein Klick, echte Werte, wahre Liebe fürs Leben. Jetzt dabei sein auf vocationlove.app ✨",
        hashtags: ["#VocationLove", "#EchteWerte", "#LiebeFürsLeben", "#Partnersuche", "#VocationLoveApp"]
      },
      tiktok: {
        caption: "Partnersuche mit Werten und Absicht zur Ehe 💍 Jetzt entdecken auf vocationlove.app #VocationLove #WahreLiebe #DatingApp",
        hashtags: ["#VocationLove", "#WahreLiebe", "#DatingApp", "#Ehe"]
      },
      x: {
        text: "Suchen Sie eine Partnerschaft fürs Leben statt flüchtiger Bekanntschaften? Entdecken Sie https://vocationlove.app 💐 #VocationLove"
      }
    }
  },

  // ==========================================
  // SHORT 4: FRENCH (FR) - The Autumn Couple
  // ==========================================
  {
    id: "short-fr",
    langCode: "FR",
    langLabel: "Français",
    flagEmoji: "🇫🇷",
    actorPairTitle: "The Autumn Couple",
    actorAttireDescription: "Trench-coat chic d'automne tenant un bouquet de pivoines blanches",
    actorImage: "/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png",
    speechLang: "fr-FR",
    title: "COMMENT FONCTIONNE VOCATIONLOVE : DE LA CONNEXION À L'AMOUR VÉRITABLE",
    hook: "Fini les rencontres éphémères ! Voici comment naît le véritable amour sur VocationLove.",
    viralCallToAction: "Osez aimer pour toujours ! Rejoignez vocationlove.app et partagez cette élégante révolution.",
    stages: [
      {
        stepNumber: 1,
        badge: "ÉTAPE 1 • ACCÈS IMMÉDIAT",
        title: "Connexion Google en 1 clic",
        voiceover: "Bienvenue sur VocationLove ! Rendez-vous sur vocationlove.app et connectez-vous d'un seul clic avec Google. Simple, sécurisé et rapide.",
        uiMockupType: "login"
      },
      {
        stepNumber: 2,
        badge: "ÉTAPE 2 • FICHE DE VALEURS",
        title: "Remplissez votre fiche vocationnelle",
        voiceover: "Complétez votre profil en partageant vos valeurs spirituelles, votre vision de la famille et votre aspiration au mariage.",
        uiMockupType: "form"
      },
      {
        stepNumber: 3,
        badge: "ÉTAPE 3 • LES 4 PILIERS",
        title: "Votre photo et les 4 principes sacrés",
        voiceover: "Ajoutez votre plus beau sourire et acceptez les 4 piliers fondamentaux : Respect, Vérité, Vocation au Mariage et Confidentialité.",
        uiMockupType: "photo_terms"
      },
      {
        stepNumber: 4,
        badge: "ÉTAPE 4 • DÉCOUVERTE",
        title: "Explorez des profils inspirants",
        voiceover: "Vous y êtes ! Découvrez des profils authentiques d'hommes et de femmes désireux de bâtir un foyer solide et rempli d'amour.",
        uiMockupType: "explore"
      },
      {
        stepNumber: 5,
        badge: "ÉTAPE 5 • LE MATCH",
        title: "Match Vocationnel et Contact Direct",
        voiceover: "Dès que l'affinité est partagée... le match se produit ! Vous pouvez alors échanger directement en toute élégance et confiance.",
        uiMockupType: "match"
      },
      {
        stepNumber: 6,
        badge: "FINALE CHIC • VIRAL",
        title: "Rejoignez l'Écosystème",
        voiceover: "L'amour authentique vous attend. Rejoignez vocationlove.app et partagez cette nouvelle manière d'aimer avec vos proches !",
        uiMockupType: "viral"
      }
    ],
    socialKit: {
      youtube: {
        title: "Comment Fonctionne VocationLove : L'App Dédiée au Mariage et aux Valeurs",
        description: "VocationLove est le réseau social pour les célibataires qui partagent des valeurs profondes et recherchent l'engagement du mariage.\n\n📲 Rejoignez-nous : https://vocationlove.app\n💐 Chroniques : https://vocationlove.com\n\n#VocationLove #RencontresChretiennes #Mariage #AmourDurable #Shorts",
        tags: ["VocationLove", "Rencontres chrétiennes", "Mariage", "Amour véritable", "Shorts"]
      },
      instagram: {
        caption: "Prêt pour une rencontre qui compte vraiment ? 💍 Découvrez VOCATIONLOVE.APP :\n\n1️⃣ Connexion Google en 1 clic\n2️⃣ Remplissez vos valeurs\n3️⃣ Validez les 4 piliers\n4️⃣ Découvrez votre match !\n\nOsez aimer. Rendez-vous sur vocationlove.app ✨",
        hashtags: ["#VocationLove", "#AmourVrai", "#RencontreSerieuse", "#MariageChretien", "#VocationLoveApp"]
      },
      tiktok: {
        caption: "Pour ceux qui cherchent le mariage et l'amour sincère 💐 Lien en bio : vocationlove.app #VocationLove #RencontreChretienne #AmourDurable",
        hashtags: ["#VocationLove", "#RencontreChretienne", "#AmourDurable", "#CoupleGoals"]
      },
      x: {
        text: "Envie d'un amour fondé sur des valeurs partagées ? Voici comment fonctionne https://vocationlove.app 💐 #VocationLove"
      }
    }
  },

  // ==========================================
  // SHORT 5: ITALIAN (IT) - The Libra Couple
  // ==========================================
  {
    id: "short-it",
    langCode: "IT",
    langLabel: "Italiano",
    flagEmoji: "🇮🇹",
    actorPairTitle: "The Libra Couple",
    actorAttireDescription: "Abito sartoriale da sera & tavola imbandita a lume di candela",
    actorImage: "/assets/aistudio/THE_LIBRA_VOCATIONLOVE_PRODUCTION_2.3_1b386506.jpg",
    speechLang: "it-IT",
    title: "COME FUNZIONA VOCATIONLOVE: DAL LOGIN AL TUO MATCH PER TUTTA LA VITA",
    hook: "Basta con gli incontri superficiali! Ecco come sboccia il vero amore su VocationLove.",
    viralCallToAction: "Abbiate il coraggio di amare! Unitevi a vocationlove.app e diffondete questa bellissima novità.",
    stages: [
      {
        stepNumber: 1,
        badge: "PASSO 1 • ACCESSO IMMEDIATO",
        title: "Login con Google in 1 click",
        voiceover: "Benvenuti su VocationLove! Aprite vocationlove.app e cliccate su 'Accedi con Google'. Immediato, sicuro e senza password da ricordare.",
        uiMockupType: "login"
      },
      {
        stepNumber: 2,
        badge: "PASSO 2 • SCHEDA VOCAZIONALE",
        title: "Compila la tua Scheda di Valori",
        voiceover: "Racconta con sincerità i tuoi valori, la tua fede e il tuo sogno di costruire una famiglia autentica fondata sul rispetto.",
        uiMockupType: "form"
      },
      {
        stepNumber: 3,
        badge: "PASSO 3 • I 4 PILASTRI",
        title: "Foto profilo e i 4 pilastri sacri",
        voiceover: "Carica la tua foto più bella e accetta i 4 pilastri: Rispetto, Verità, Vocazione al Matrimonio e Privacy. Fatto in trenta secondi!",
        uiMockupType: "photo_terms"
      },
      {
        stepNumber: 4,
        badge: "PASSO 4 • ESPLORAZIONE",
        title: "Inizia a scoprire i profili",
        voiceover: "Ora sei dentro! Esplora profili di persone meravigliose che condividono il tuo stesso desiderio di fedeltà e amore duraturo.",
        uiMockupType: "explore"
      },
      {
        stepNumber: 5,
        badge: "PASSO 5 • IL MATCH",
        title: "Match Vocazionale e Contatto Diretto",
        voiceover: "Quando scatta la scintilla reciproca... ecco il match vocazionale! Potete mettervi in contatto direttamente con gioia e rispetto.",
        uiMockupType: "match"
      },
      {
        stepNumber: 6,
        badge: "FINALE CHIC • VIRAL",
        title: "Unisciti a VocationLove",
        voiceover: "L'amore della tua vita ti aspetta. Entra su vocationlove.app, condividi questo video e fai parte di questa rivoluzione!",
        uiMockupType: "viral"
      }
    ],
    socialKit: {
      youtube: {
        title: "Come Funziona VocationLove: L'App per Chi Cerca il Matrimonio e Valori Puri",
        description: "VocationLove è la piattaforma creata per chi cerca un amore profondo, vocazionale e orientato al matrimonio.\n\n📲 Entra ora: https://vocationlove.app\n💐 Scopri di più: https://vocationlove.com\n\n#VocationLove #IncontriConValori #Matrimonio #AmoreVero #Shorts",
        tags: ["VocationLove", "Incontri con valori", "Matrimonio", "Fidanzamento", "Shorts"]
      },
      instagram: {
        caption: "Stanco dei soliti swipe superficiali? 💍 Ecco come nasce il vero amore su VOCATIONLOVE.APP:\n\n1️⃣ Login con Google in un click\n2️⃣ Compila i tuoi valori\n3️⃣ Accetta i 4 pilastri comunitari\n4️⃣ Trova il tuo match vocazionale\n5️⃣ Contatto diretto!\n\nIscriviti oggi su vocationlove.app ✨",
        hashtags: ["#VocationLove", "#AmorePerSempre", "#IncontriCattolici", "#Matrimonio", "#VocationLoveApp"]
      },
      tiktok: {
        caption: "La piattaforma per chi desidera il matrimonio e non storie passeggere 💐 Link in bio: vocationlove.app #VocationLove #AmoreAutentico #Matrimonio",
        hashtags: ["#VocationLove", "#AmoreAutentico", "#Matrimonio", "#IncontriSeri"]
      },
      x: {
        text: "Cerchi un amore duraturo basato su valori cristiani e rispetto? Scopri https://vocationlove.app 💐 #VocationLove"
      }
    }
  },

  // ==========================================
  // SHORT 6: PORTUGUESE (PT) - The Bewitching Couple
  // ==========================================
  {
    id: "short-pt",
    langCode: "PT",
    langLabel: "Português",
    flagEmoji: "🇵🇹",
    actorPairTitle: "The Bewitching Couple",
    actorAttireDescription: "Abraço terno no metrô sob chuva de outono com flores silvestres",
    actorImage: "/assets/aistudio/The_Bewitching_2.3_2ba77900.png",
    speechLang: "pt-BR",
    title: "COMO FUNCIONA O VOCATIONLOVE: DO LOGIN AO SEU MATCH PARA TODA A VIDA",
    hook: "Cansado de relacionamentos vazios e superficiais? Veja como o amor verdadeiro começa no VocationLove!",
    viralCallToAction: "Tenha a coragem de amar de verdade! Entre agora em vocationlove.app e compartilhe com seus amigos.",
    stages: [
      {
        stepNumber: 1,
        badge: "PASSO 1 • ACESSO RÁPIDO",
        title: "Login em 1 clique com o Google",
        voiceover: "Bem-vindos ao VocationLove! Acesse vocationlove.app e clique em 'Entrar com o Google'. Sem senhas demoradas, totalmente seguro e rápido.",
        uiMockupType: "login"
      },
      {
        stepNumber: 2,
        badge: "PASSO 2 • CARTELA VOCACIONAL",
        title: "Preencha sua Cartela de Registro",
        voiceover: "Conte com sinceridade sobre seus valores, sua fé e o desejo genuíno de viver um noivado santo e construir uma família.",
        uiMockupType: "form"
      },
      {
        stepNumber: 3,
        badge: "PASSO 3 • OS 4 PILARES",
        title: "Sua foto e os 4 termos sagrados",
        voiceover: "Envie sua melhor foto e aceite os 4 pilares comunitários: Respeito, Verdade, Vocação para o Matrimônio e Privacidade. Pronto em 30 segundos!",
        uiMockupType: "photo_terms"
      },
      {
        stepNumber: 4,
        badge: "PASSO 4 • EXPLORAÇÃO",
        title: "Comece a explorar perfis",
        voiceover: "Agora você está conectado! Descubra perfis de homens e mulheres que também sonham com uma doação sincera e amor para toda a vida.",
        uiMockupType: "explore"
      },
      {
        stepNumber: 5,
        badge: "PASSO 5 • O MATCH",
        title: "Match Vocacional e Contato Direto",
        voiceover: "E quando a afinidade acontece... é um Match Vocacional! Vocês já podem conversar diretamente com total respeito e alegria.",
        uiMockupType: "match"
      },
      {
        stepNumber: 6,
        badge: "FINAL CHIC • VIRALIZE",
        title: "Junte-se ao VocationLove",
        voiceover: "O amor que você sempre sonhou está ao seu alcance. Entre em vocationlove.app, envie para os amigos e viralize esse lindo movimento!",
        uiMockupType: "viral"
      }
    ],
    socialKit: {
      youtube: {
        title: "Como Funciona o VocationLove: A Rede para Namoro Sério e Casamento",
        description: "O VocationLove foi criado para quem busca um amor duradouro com valores cristãos e propósito de matrimônio.\n\n📲 Acesse agora: https://vocationlove.app\n💐 Conheça mais: https://vocationlove.com\n\n#VocationLove #NamoroSanto #Casamento #AmorVerdadeiro #Shorts",
        tags: ["VocationLove", "Namoro santo", "Casamento", "Amor verdadeiro", "Shorts"]
      },
      instagram: {
        caption: "Chega de joguinhos e superficialidade! 💍 Veja como é simples encontrar alguém de verdade no VOCATIONLOVE.APP:\n\n1️⃣ Login com Google\n2️⃣ Preencha seus valores\n3️⃣ Aceite os 4 pilares\n4️⃣ Encontre seu par vocacional\n5️⃣ Contato direto e respeitoso!\n\nCadastre-se hoje em vocationlove.app ✨",
        hashtags: ["#VocationLove", "#NamoroComProposito", "#Casamento", "#AmorParaSempre", "#VocationLoveApp"]
      },
      tiktok: {
        caption: "Para quem quer namoro com propósito e casamento 💐 Link na bio: vocationlove.app #VocationLove #NamoroSanto #AmorReal",
        hashtags: ["#VocationLove", "#NamoroSanto", "#AmorReal", "#Casamento"]
      },
      x: {
        text: "Procurando um amor com propósito e valores compartilhados? Veja como funciona o https://vocationlove.app 💐 #VocationLove"
      }
    }
  }
];
