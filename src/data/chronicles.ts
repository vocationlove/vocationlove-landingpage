export interface SocialCaptions {
  instagram: {
    hook: string;
    body: string;
    cta: string;
    hashtags: string[];
  };
  tiktok: {
    hook3s: string;
    voiceoverScript: string;
    hashtags: string[];
  };
  youtube: {
    title: string;
    description: string;
    tags: string[];
  };
  x: {
    headline: string;
    tweetThread: string[];
  };
}

export interface ChronicleStory {
  id: string;
  titular: string;
  bajada: string;
  categoria: string;
  titular_es?: string;
  bajada_es?: string;
  categoria_es?: string;
  fecha: string;
  autor: string;
  edicion: string;
  imagen_9_16: string; // Master visual asset in 2:3 ratio, adaptable to 9:16 for social
  imagenes_runway: string[];
  urgente?: boolean;
  captions: SocialCaptions;
}

export const BREAKING_NEWS_HERO = {
  titular: "Pope Leo XIV, during his visit to Argentina, emphasized the importance of love and family as the pillars of society",
  bajada: "«Your heart longs for love. A love that is deep, self-sacrificing and enduring. This longing is no accident. It is a sign that you are made for love.» Pope Leo XIV",
  subtitulosMarquesina: [
    "«Your heart longs for love. A love that is deep, self-sacrificing and enduring. This longing is no accident. It is a sign that you are made for love.» Pope Leo XIV"
  ],
  noticiasAnteriores: [
    "LAUNCHING VOCATIONLOVE SOCIAL NETWORK: FOR THOSE WHO DARE TO LOVE. /// PLATFORM IS NOW ALIVE. /// LAUNCHING VOCATIONLOVE SOCIAL NETWORK: FOR THOSE WHO DARE TO LOVE."
  ]
};

// User Curated Production Visual Assets from VocationLove.store (Strict 2:3 Editorial Ratio)
const USER_PRODUCTION_PHOTOS = [
  "/assets/aistudio/The_Selene_VocationLove_Production_2.3_41c94c32.jpg",
  "/assets/aistudio/THE_BANKET_VOCATIONLOVE_PRODUCTION_2.3_f6c7e31b.jpg",
  "/assets/aistudio/THE_GLADIOLUS_VOCATIONLOVE_PROD._2.3_7d13392b.jpg",
  "/assets/aistudio/THE_LIBRA_VOCATIONLOVE_PRODUCTION_2.3_1b386506.jpg",
  "/assets/aistudio/THE_AUTUMN_VOCATIONLOVE_PROD._2.3_77c884cc.png",
  "/assets/aistudio/The_Bewitching_2.3_2ba77900.png"
];

export const CURATED_VISUAL_ASSETS: string[] = [
  USER_PRODUCTION_PHOTOS[0],
  USER_PRODUCTION_PHOTOS[1],
  USER_PRODUCTION_PHOTOS[2],
  USER_PRODUCTION_PHOTOS[3],
  USER_PRODUCTION_PHOTOS[4],
  USER_PRODUCTION_PHOTOS[5],
  USER_PRODUCTION_PHOTOS[0],
  USER_PRODUCTION_PHOTOS[1],
  USER_PRODUCTION_PHOTOS[2],
  USER_PRODUCTION_PHOTOS[3],
  USER_PRODUCTION_PHOTOS[4],
  USER_PRODUCTION_PHOTOS[5]
];

// Helper to generate full captions for each story
function createCaptions(titular: string, bajada: string, catTag: string): SocialCaptions {
  return {
    instagram: {
      hook: `${titular} 💐✨`,
      body: `${bajada}\n\nAt VocationLove, we cultivate genuine connection, joyful commitment, and the profound beauty of giving yourself to another with dignity and grace.`,
      cta: "📲 Read the full story at vocationlove.com and join our community at vocationlove.app.",
      hashtags: ["#VocationLove", `#${catTag.replace(/\s+/g, '')}`, "#DareToLove", "#TrueConnection", "#JoyfulLove", "#VocationLoveApp"]
    },
    tiktok: {
      hook3s: `Here is the real secret behind lasting love that nobody talks about. ⏳💐`,
      voiceoverScript: `${bajada}. VocationLove was created for those who dare to love without superficial games. Real bonds are grown with patience, warmth, and daily generosity.`,
      hashtags: ["#VocationLove", `#${catTag.replace(/\s+/g, '')}`, "#LoveAdvice", "#CoupleGoals", "#AuthenticLove", "#VocationLoveApp"]
    },
    youtube: {
      title: `${titular} | VocationLove Shorts`,
      description: `${bajada}\n\nDiscover more at https://vocationlove.com\nJoin the official network: https://vocationlove.app`,
      tags: ["VocationLove", catTag, "Love and Family", "True Romance", "Seeds of Love"]
    },
    x: {
      headline: `${titular} | ${catTag}`,
      tweetThread: [
        `1/2 ${titular}: ${bajada}`,
        `2/2 Discover why thousands are choosing authentic commitment over casual emptiness. https://vocationlove.com | https://vocationlove.app`
      ]
    }
  };
}

// 55 COMPLETE PUBLICATIONS
export const ALL_55_PUBLICATIONS: ChronicleStory[] = [
  // ==========================================
  // CATEGORY 1: SEEDS OF LOVE (20 Publications)
  // ==========================================
  {
    id: "sol-01",
    categoria: "SEEDS OF LOVE",
    titular: "A PERSON DISCOVERS THEMSELVES THROUGH SELF-GIVING",
    bajada: "We grow most when we learn to give, not merely to receive.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 01",
    imagen_9_16: CURATED_VISUAL_ASSETS[0],
    imagenes_runway: [CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[2]],
    captions: createCaptions("A PERSON DISCOVERS THEMSELVES THROUGH SELF-GIVING", "We grow most when we learn to give, not merely to receive.", "SeedsOfLove")
  },
  {
    id: "sol-02",
    categoria: "SEEDS OF LOVE",
    titular: "LOVE GROWS WHERE GENEROSITY TAKES ROOT",
    bajada: "The healthiest relationships thrive through mutual concern and service.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 02",
    imagen_9_16: CURATED_VISUAL_ASSETS[1],
    imagenes_runway: [CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[3]],
    captions: createCaptions("LOVE GROWS WHERE GENEROSITY TAKES ROOT", "The healthiest relationships thrive through mutual concern and service.", "SeedsOfLove")
  },
  {
    id: "sol-03",
    categoria: "SEEDS OF LOVE",
    titular: "THE GIFT OF SELF IS THE LANGUAGE OF LOVE",
    bajada: "The deepest bonds emerge when two people seek each other's good.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 03",
    imagen_9_16: CURATED_VISUAL_ASSETS[2],
    imagenes_runway: [CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[4]],
    captions: createCaptions("THE GIFT OF SELF IS THE LANGUAGE OF LOVE", "The deepest bonds emerge when two people seek each other's good.", "SeedsOfLove")
  },
  {
    id: "sol-04",
    categoria: "SEEDS OF LOVE",
    titular: "REAL FREEDOM MAKES COMMITMENT POSSIBLE",
    bajada: "Love flourishes when it is freely chosen and freely renewed.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 04",
    imagen_9_16: CURATED_VISUAL_ASSETS[3],
    imagenes_runway: [CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[5]],
    captions: createCaptions("REAL FREEDOM MAKES COMMITMENT POSSIBLE", "Love flourishes when it is freely chosen and freely renewed.", "SeedsOfLove")
  },
  {
    id: "sol-05",
    categoria: "SEEDS OF LOVE",
    titular: "THE BODY SPEAKS A LANGUAGE OF BELONGING",
    bajada: "Human relationships reveal our desire for connection and communion.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 05",
    imagen_9_16: CURATED_VISUAL_ASSETS[4],
    imagenes_runway: [CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[6]],
    captions: createCaptions("THE BODY SPEAKS A LANGUAGE OF BELONGING", "Human relationships reveal our desire for connection and communion.", "SeedsOfLove")
  },
  {
    id: "sol-06",
    categoria: "SEEDS OF LOVE",
    titular: "WE BECOME MORE HUMAN WHEN WE LEARN TO LOVE",
    bajada: "Personal growth and authentic relationships often develop together.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 06",
    imagen_9_16: CURATED_VISUAL_ASSETS[5],
    imagenes_runway: [CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[7]],
    captions: createCaptions("WE BECOME MORE HUMAN WHEN WE LEARN TO LOVE", "Personal growth and authentic relationships often develop together.", "SeedsOfLove")
  },
  {
    id: "sol-07",
    categoria: "SEEDS OF LOVE",
    titular: "THE BEST LOVE STORIES ARE BUILT SLOWLY",
    bajada: "Trust, respect, and affection deepen through time and consistency.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 07",
    imagen_9_16: CURATED_VISUAL_ASSETS[6],
    imagenes_runway: [CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[8]],
    captions: createCaptions("THE BEST LOVE STORIES ARE BUILT SLOWLY", "Trust, respect, and affection deepen through time and consistency.", "SeedsOfLove")
  },
  {
    id: "sol-08",
    categoria: "SEEDS OF LOVE",
    titular: "EVERY RELATIONSHIP STARTS AS A SEED",
    bajada: "The smallest gesture of kindness can eventually transform a life.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 08",
    imagen_9_16: CURATED_VISUAL_ASSETS[7],
    imagenes_runway: [CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[9]],
    captions: createCaptions("EVERY RELATIONSHIP STARTS AS A SEED", "The smallest gesture of kindness can eventually transform a life.", "SeedsOfLove")
  },
  {
    id: "sol-09",
    categoria: "SEEDS OF LOVE",
    titular: "LOVE FLOURISHES WHERE TRUST IS CULTIVATED",
    bajada: "Strong relationships are rarely sudden. They are carefully grown.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 09",
    imagen_9_16: CURATED_VISUAL_ASSETS[8],
    imagenes_runway: [CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[0]],
    captions: createCaptions("LOVE FLOURISHES WHERE TRUST IS CULTIVATED", "Strong relationships are rarely sudden. They are carefully grown.", "SeedsOfLove")
  },
  {
    id: "sol-10",
    categoria: "SEEDS OF LOVE",
    titular: "GREAT FAMILIES BEGIN WITH SMALL ACTS OF LOVE",
    bajada: "Daily gestures often shape generations more than grand speeches.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 10",
    imagen_9_16: CURATED_VISUAL_ASSETS[9],
    imagenes_runway: [CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[1]],
    captions: createCaptions("GREAT FAMILIES BEGIN WITH SMALL ACTS OF LOVE", "Daily gestures often shape generations more than grand speeches.", "SeedsOfLove")
  },
  {
    id: "sol-11",
    categoria: "SEEDS OF LOVE",
    titular: "THE HEART EXPANDS THROUGH GENEROSITY",
    bajada: "Giving ourselves to others frequently reveals who we truly are.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 11",
    imagen_9_16: CURATED_VISUAL_ASSETS[0],
    imagenes_runway: [CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[4]],
    captions: createCaptions("THE HEART EXPANDS THROUGH GENEROSITY", "Giving ourselves to others frequently reveals who we truly are.", "SeedsOfLove")
  },
  {
    id: "sol-12",
    categoria: "SEEDS OF LOVE",
    titular: "MUTUAL TRUST IS THE SOIL OF LASTING LOVE",
    bajada: "Without trust, relationships struggle to grow beyond attraction.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 12",
    imagen_9_16: CURATED_VISUAL_ASSETS[1],
    imagenes_runway: [CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[5]],
    captions: createCaptions("MUTUAL TRUST IS THE SOIL OF LASTING LOVE", "Without trust, relationships struggle to grow beyond attraction.", "SeedsOfLove")
  },
  {
    id: "sol-13",
    categoria: "SEEDS OF LOVE",
    titular: "LOVE DEEPENS WHEN SELF-INTEREST DECREASES",
    bajada: "The strongest relationships focus less on taking and more on giving.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 13",
    imagen_9_16: CURATED_VISUAL_ASSETS[2],
    imagenes_runway: [CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[6]],
    captions: createCaptions("LOVE DEEPENS WHEN SELF-INTEREST DECREASES", "The strongest relationships focus less on taking and more on giving.", "SeedsOfLove")
  },
  {
    id: "sol-14",
    categoria: "SEEDS OF LOVE",
    titular: "EVERY PROMISE PLANTS A FUTURE",
    bajada: "Commitment creates the conditions for hope to grow.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 14",
    imagen_9_16: CURATED_VISUAL_ASSETS[3],
    imagenes_runway: [CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[7]],
    captions: createCaptions("EVERY PROMISE PLANTS A FUTURE", "Commitment creates the conditions for hope to grow.", "SeedsOfLove")
  },
  {
    id: "sol-15",
    categoria: "SEEDS OF LOVE",
    titular: "TO LOVE IS TO HELP SOMEONE FLOURISH",
    bajada: "Healthy relationships bring out the best in each person.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 15",
    imagen_9_16: CURATED_VISUAL_ASSETS[4],
    imagenes_runway: [CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[8]],
    captions: createCaptions("TO LOVE IS TO HELP SOMEONE FLOURISH", "Healthy relationships bring out the best in each person.", "SeedsOfLove")
  },
  {
    id: "sol-16",
    categoria: "SEEDS OF LOVE",
    titular: "THE MOST MEANINGFUL LIVES ARE SHARED",
    bajada: "Human beings are not made for isolation but for relationship.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 16",
    imagen_9_16: CURATED_VISUAL_ASSETS[5],
    imagenes_runway: [CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[9]],
    captions: createCaptions("THE MOST MEANINGFUL LIVES ARE SHARED", "Human beings are not made for isolation but for relationship.", "SeedsOfLove")
  },
  {
    id: "sol-17",
    categoria: "SEEDS OF LOVE",
    titular: "COMMUNION IS WRITTEN INTO THE HUMAN STORY",
    bajada: "Connection remains one of our deepest and most universal desires.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 17",
    imagen_9_16: CURATED_VISUAL_ASSETS[6],
    imagenes_runway: [CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[0]],
    captions: createCaptions("COMMUNION IS WRITTEN INTO THE HUMAN STORY", "Connection remains one of our deepest and most universal desires.", "SeedsOfLove")
  },
  {
    id: "sol-18",
    categoria: "SEEDS OF LOVE",
    titular: "EVERY GREAT LOVE STARTS WITH ATTENTION",
    bajada: "Listening, noticing, and caring are often the first steps of devotion.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 18",
    imagen_9_16: CURATED_VISUAL_ASSETS[7],
    imagenes_runway: [CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[1]],
    captions: createCaptions("EVERY GREAT LOVE STARTS WITH ATTENTION", "Listening, noticing, and caring are often the first steps of devotion.", "SeedsOfLove")
  },
  {
    id: "sol-19",
    categoria: "SEEDS OF LOVE",
    titular: "REAL LOVE ALWAYS LOOKS BEYOND THE SELF",
    bajada: "Maturity begins when another person's happiness truly matters.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 19",
    imagen_9_16: CURATED_VISUAL_ASSETS[8],
    imagenes_runway: [CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[2]],
    captions: createCaptions("REAL LOVE ALWAYS LOOKS BEYOND THE SELF", "Maturity begins when another person's happiness truly matters.", "SeedsOfLove")
  },
  {
    id: "sol-20",
    categoria: "SEEDS OF LOVE",
    titular: "THE HEART LEARNS LOVE THROUGH PRACTICE",
    bajada: "Patience, forgiveness, and kindness are habits before they become virtues.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Seeds of Love No. 20",
    imagen_9_16: CURATED_VISUAL_ASSETS[9],
    imagenes_runway: [CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[3]],
    captions: createCaptions("THE HEART LEARNS LOVE THROUGH PRACTICE", "Patience, forgiveness, and kindness are habits before they become virtues.", "SeedsOfLove")
  },

  // ==========================================
  // CATEGORY 2: HOPE IN BLOOM (20 Publications)
  // ==========================================
  {
    id: "hib-01",
    categoria: "HOPE IN BLOOM",
    titular: "THE HEART WAS CREATED FOR COMMUNION",
    bajada: "Our longing for connection points toward something profoundly human.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 01",
    imagen_9_16: CURATED_VISUAL_ASSETS[0],
    imagenes_runway: [CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[8]],
    captions: createCaptions("THE HEART WAS CREATED FOR COMMUNION", "Our longing for connection points toward something profoundly human.", "HopeInBloom")
  },
  {
    id: "hib-02",
    categoria: "HOPE IN BLOOM",
    titular: "LOVE FOR LIFE REMAINS A UNIVERSAL HOPE",
    bajada: "Across cultures and generations, people continue searching for lasting bonds.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 02",
    imagen_9_16: CURATED_VISUAL_ASSETS[1],
    imagenes_runway: [CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[9]],
    captions: createCaptions("LOVE FOR LIFE REMAINS A UNIVERSAL HOPE", "Across cultures and generations, people continue searching for lasting bonds.", "HopeInBloom")
  },
  {
    id: "hib-03",
    categoria: "HOPE IN BLOOM",
    titular: "THE DREAM OF FAMILY STILL INSPIRES MILLIONS",
    bajada: "Home, belonging, and commitment continue to shape human aspirations.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 03",
    imagen_9_16: CURATED_VISUAL_ASSETS[2],
    imagenes_runway: [CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[0]],
    captions: createCaptions("THE DREAM OF FAMILY STILL INSPIRES MILLIONS", "Home, belonging, and commitment continue to shape human aspirations.", "HopeInBloom")
  },
  {
    id: "hib-04",
    categoria: "HOPE IN BLOOM",
    titular: "MARRIAGE REMAINS ONE OF HUMANITY’S MOST HOPEFUL PROMISES",
    bajada: "Two people choosing a shared future is still a remarkable act.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 04",
    imagen_9_16: CURATED_VISUAL_ASSETS[3],
    imagenes_runway: [CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[1]],
    captions: createCaptions("MARRIAGE REMAINS ONE OF HUMANITY’S MOST HOPEFUL PROMISES", "Two people choosing a shared future is still a remarkable act.", "HopeInBloom")
  },
  {
    id: "hib-05",
    categoria: "HOPE IN BLOOM",
    titular: "EVERY CHILD DESERVES A STORY OF LOVE",
    bajada: "Stable relationships help create environments of trust and growth.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 05",
    imagen_9_16: CURATED_VISUAL_ASSETS[4],
    imagenes_runway: [CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[2]],
    captions: createCaptions("EVERY CHILD DESERVES A STORY OF LOVE", "Stable relationships help create environments of trust and growth.", "HopeInBloom")
  },
  {
    id: "hib-06",
    categoria: "HOPE IN BLOOM",
    titular: "SOME DREAMS NEVER LOSE THEIR BEAUTY",
    bajada: "Love, family, and belonging remain timeless aspirations.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 06",
    imagen_9_16: CURATED_VISUAL_ASSETS[5],
    imagenes_runway: [CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[3]],
    captions: createCaptions("SOME DREAMS NEVER LOSE THEIR BEAUTY", "Love, family, and belonging remain timeless aspirations.", "HopeInBloom")
  },
  {
    id: "hib-07",
    categoria: "HOPE IN BLOOM",
    titular: "HOPE BEGINS WHEN SOMEONE CHOOSES TO STAY",
    bajada: "Faithfulness offers reassurance in an uncertain world.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 07",
    imagen_9_16: CURATED_VISUAL_ASSETS[6],
    imagenes_runway: [CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[4]],
    captions: createCaptions("HOPE BEGINS WHEN SOMEONE CHOOSES TO STAY", "Faithfulness offers reassurance in an uncertain world.", "HopeInBloom")
  },
  {
    id: "hib-08",
    categoria: "HOPE IN BLOOM",
    titular: "THE FAMILY IS WHERE LOVE LEARNS TO SPEAK",
    bajada: "The earliest lessons of generosity and belonging often begin at home.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 08",
    imagen_9_16: CURATED_VISUAL_ASSETS[7],
    imagenes_runway: [CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[5]],
    captions: createCaptions("THE FAMILY IS WHERE LOVE LEARNS TO SPEAK", "The earliest lessons of generosity and belonging often begin at home.", "HopeInBloom")
  },
  {
    id: "hib-09",
    categoria: "HOPE IN BLOOM",
    titular: "THE WORLD STILL NEEDS EXAMPLES OF LASTING LOVE",
    bajada: "Enduring relationships continue to inspire communities and cultures.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 09",
    imagen_9_16: CURATED_VISUAL_ASSETS[8],
    imagenes_runway: [CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[6]],
    captions: createCaptions("THE WORLD STILL NEEDS EXAMPLES OF LASTING LOVE", "Enduring relationships continue to inspire communities and cultures.", "HopeInBloom")
  },
  {
    id: "hib-10",
    categoria: "HOPE IN BLOOM",
    titular: "LOVE IS STRONGER THAN MODERN CYNICISM",
    bajada: "Despite changing trends, people continue believing in meaningful commitment.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 10",
    imagen_9_16: CURATED_VISUAL_ASSETS[9],
    imagenes_runway: [CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[7]],
    captions: createCaptions("LOVE IS STRONGER THAN MODERN CYNICISM", "Despite changing trends, people continue believing in meaningful commitment.", "HopeInBloom")
  },
  {
    id: "hib-11",
    categoria: "HOPE IN BLOOM",
    titular: "EVERY GENERATION REDISCOVERS THE HOPE OF LOVE",
    bajada: "The questions may change, but the longing remains remarkably similar.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 11",
    imagen_9_16: CURATED_VISUAL_ASSETS[0],
    imagenes_runway: [CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[7]],
    captions: createCaptions("EVERY GENERATION REDISCOVERS THE HOPE OF LOVE", "The questions may change, but the longing remains remarkably similar.", "HopeInBloom")
  },
  {
    id: "hib-12",
    categoria: "HOPE IN BLOOM",
    titular: "HOME BEGINS WITH AN OPEN HEART",
    bajada: "True belonging starts long before a house becomes a family.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 12",
    imagen_9_16: CURATED_VISUAL_ASSETS[1],
    imagenes_runway: [CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[8]],
    captions: createCaptions("HOME BEGINS WITH AN OPEN HEART", "True belonging starts long before a house becomes a family.", "HopeInBloom")
  },
  {
    id: "hib-13",
    categoria: "HOPE IN BLOOM",
    titular: "LOVE CREATES A FUTURE WORTH BUILDING",
    bajada: "Shared commitment turns hope into reality.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 13",
    imagen_9_16: CURATED_VISUAL_ASSETS[2],
    imagenes_runway: [CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[9]],
    captions: createCaptions("LOVE CREATES A FUTURE WORTH BUILDING", "Shared commitment turns hope into reality.", "HopeInBloom")
  },
  {
    id: "hib-14",
    categoria: "HOPE IN BLOOM",
    titular: "THE BEST THINGS IN LIFE GROW TOGETHER",
    bajada: "Relationships, families, and communities flourish through time.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 14",
    imagen_9_16: CURATED_VISUAL_ASSETS[3],
    imagenes_runway: [CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[0]],
    captions: createCaptions("THE BEST THINGS IN LIFE GROW TOGETHER", "Relationships, families, and communities flourish through time.", "HopeInBloom")
  },
  {
    id: "hib-15",
    categoria: "HOPE IN BLOOM",
    titular: "A LIFELONG YES CAN CHANGE GENERATIONS",
    bajada: "The effects of faithful love often extend far beyond one couple.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 15",
    imagen_9_16: CURATED_VISUAL_ASSETS[4],
    imagenes_runway: [CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[1]],
    captions: createCaptions("A LIFELONG YES CAN CHANGE GENERATIONS", "The effects of faithful love often extend far beyond one couple.", "HopeInBloom")
  },
  {
    id: "hib-16",
    categoria: "HOPE IN BLOOM",
    titular: "WHERE LOVE ENDURES, HOPE BLOOMS",
    bajada: "Lasting commitment remains one of humanity’s most powerful signs of optimism.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 16",
    imagen_9_16: CURATED_VISUAL_ASSETS[5],
    imagenes_runway: [CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[2]],
    captions: createCaptions("WHERE LOVE ENDURES, HOPE BLOOMS", "Lasting commitment remains one of humanity’s most powerful signs of optimism.", "HopeInBloom")
  },
  {
    id: "hib-17",
    categoria: "HOPE IN BLOOM",
    titular: "THE FUTURE NEEDS PEOPLE WHO BELIEVE IN LOVE",
    bajada: "The strongest societies are built upon strong relationships.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 17",
    imagen_9_16: CURATED_VISUAL_ASSETS[6],
    imagenes_runway: [CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[3]],
    captions: createCaptions("THE FUTURE NEEDS PEOPLE WHO BELIEVE IN LOVE", "The strongest societies are built upon strong relationships.", "HopeInBloom")
  },
  {
    id: "hib-18",
    categoria: "HOPE IN BLOOM",
    titular: "EVERY LOVE STORY CAN BECOME A LEGACY",
    bajada: "The impact of a faithful life reaches further than we imagine.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 18",
    imagen_9_16: CURATED_VISUAL_ASSETS[7],
    imagenes_runway: [CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[4]],
    captions: createCaptions("EVERY LOVE STORY CAN BECOME A LEGACY", "The impact of a faithful life reaches further than we imagine.", "HopeInBloom")
  },
  {
    id: "hib-19",
    categoria: "HOPE IN BLOOM",
    titular: "THE HUMAN HEART WAS NEVER MADE FOR LONELINESS",
    bajada: "We are drawn naturally toward friendship, intimacy, and belonging.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 19",
    imagen_9_16: CURATED_VISUAL_ASSETS[8],
    imagenes_runway: [CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[5]],
    captions: createCaptions("THE HUMAN HEART WAS NEVER MADE FOR LONELINESS", "We are drawn naturally toward friendship, intimacy, and belonging.", "HopeInBloom")
  },
  {
    id: "hib-20",
    categoria: "HOPE IN BLOOM",
    titular: "LOVE IS THE SEED FROM WHICH FAMILIES GROW",
    bajada: "Every family tree begins with a relationship willing to endure.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Hope in Bloom No. 20",
    imagen_9_16: CURATED_VISUAL_ASSETS[9],
    imagenes_runway: [CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[6]],
    captions: createCaptions("LOVE IS THE SEED FROM WHICH FAMILIES GROW", "Every family tree begins with a relationship willing to endure.", "HopeInBloom")
  },

  // ==========================================
  // CATEGORY 3: DARE TO LOVE (15 Publications)
  // Completing the 55 total requested publications
  // ==========================================
  {
    id: "dtl-01",
    categoria: "DARE TO LOVE",
    titular: "COURAGE IS CHOOSING DEVOTION IN A WORLD OF DISTRACTIONS",
    bajada: "To love deeply is an act of defiance against disposable modern culture.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 01",
    imagen_9_16: CURATED_VISUAL_ASSETS[0],
    imagenes_runway: [CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[6]],
    captions: createCaptions("COURAGE IS CHOOSING DEVOTION IN A WORLD OF DISTRACTIONS", "To love deeply is an act of defiance against disposable modern culture.", "DareToLove")
  },
  {
    id: "dtl-02",
    categoria: "DARE TO LOVE",
    titular: "THE BRAVEST THING TWO PEOPLE CAN DO IS PROMISE FOREVER",
    bajada: "A lifelong yes creates sacred ground where fears dissolve and families rise.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 02",
    imagen_9_16: CURATED_VISUAL_ASSETS[1],
    imagenes_runway: [CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[7]],
    captions: createCaptions("THE BRAVEST THING TWO PEOPLE CAN DO IS PROMISE FOREVER", "A lifelong yes creates sacred ground where fears dissolve and families rise.", "DareToLove")
  },
  {
    id: "dtl-03",
    categoria: "DARE TO LOVE",
    titular: "TRUE ROMANCE HAS THE CHARACTER OF HAUTE COUTURE",
    bajada: "It is bespoke, intentional, and handcrafted with patient devotion every single day.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 03",
    imagen_9_16: CURATED_VISUAL_ASSETS[2],
    imagenes_runway: [CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[8]],
    captions: createCaptions("TRUE ROMANCE HAS THE CHARACTER OF HAUTE COUTURE", "It is bespoke, intentional, and handcrafted with patient devotion every single day.", "DareToLove")
  },
  {
    id: "dtl-04",
    categoria: "DARE TO LOVE",
    titular: "WE ARE NOT CALLED TO FEAR BUT TO REJOICE IN LOVE",
    bajada: "When love is grounded in truth, joy becomes its unmistakable signature.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 04",
    imagen_9_16: CURATED_VISUAL_ASSETS[3],
    imagenes_runway: [CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[9]],
    captions: createCaptions("WE ARE NOT CALLED TO FEAR BUT TO REJOICE IN LOVE", "When love is grounded in truth, joy becomes its unmistakable signature.", "DareToLove")
  },
  {
    id: "dtl-05",
    categoria: "DARE TO LOVE",
    titular: "FIDELITY IS THE QUIET REVOLUTION OF OUR TIME",
    bajada: "Staying faithful through every season is the greatest testament of nobility.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 05",
    imagen_9_16: CURATED_VISUAL_ASSETS[4],
    imagenes_runway: [CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[0]],
    captions: createCaptions("FIDELITY IS THE QUIET REVOLUTION OF OUR TIME", "Staying faithful through every season is the greatest testament of nobility.", "DareToLove")
  },
  {
    id: "dtl-06",
    categoria: "DARE TO LOVE",
    titular: "LOOKING INTO THE SAME DIRECTION CREATES HARMONY",
    bajada: "Love is not merely looking at each other, but walking together toward shared purpose.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 06",
    imagen_9_16: CURATED_VISUAL_ASSETS[5],
    imagenes_runway: [CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[1]],
    captions: createCaptions("LOOKING INTO THE SAME DIRECTION CREATES HARMONY", "Love is not merely looking at each other, but walking together toward shared purpose.", "DareToLove")
  },
  {
    id: "dtl-07",
    categoria: "DARE TO LOVE",
    titular: "AUTHENTIC VULNERABILITY IS THE BIRTHPLACE OF JOY",
    bajada: "When we dare to drop our defenses, real communion finally begins.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 07",
    imagen_9_16: CURATED_VISUAL_ASSETS[6],
    imagenes_runway: [CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[2]],
    captions: createCaptions("AUTHENTIC VULNERABILITY IS THE BIRTHPLACE OF JOY", "When we dare to drop our defenses, real communion finally begins.", "DareToLove")
  },
  {
    id: "dtl-08",
    categoria: "DARE TO LOVE",
    titular: "FLOWERS WITHER BUT VOWS REMAIN FOREVER YOUNG",
    bajada: "The beauty of fresh blossoms reminds us that love needs tending every morning.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 08",
    imagen_9_16: CURATED_VISUAL_ASSETS[7],
    imagenes_runway: [CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[3]],
    captions: createCaptions("FLOWERS WITHER BUT VOWS REMAIN FOREVER YOUNG", "The beauty of fresh blossoms reminds us that love needs tending every morning.", "DareToLove")
  },
  {
    id: "dtl-09",
    categoria: "DARE TO LOVE",
    titular: "NO GREATER GIFT CAN BE GIVEN TO THE NEXT GENERATION",
    bajada: "Witnessing parents who truly honor each other gives children an unshakeable anchor.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 09",
    imagen_9_16: CURATED_VISUAL_ASSETS[8],
    imagenes_runway: [CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[4]],
    captions: createCaptions("NO GREATER GIFT CAN BE GIVEN TO THE NEXT GENERATION", "Witnessing parents who truly honor each other gives children an unshakeable anchor.", "DareToLove")
  },
  {
    id: "dtl-10",
    categoria: "DARE TO LOVE",
    titular: "SACRIFICE IS NOT LOSS WHEN IT NOURISHES LOVE",
    bajada: "Every generous choice makes room for a deeper, more enduring tenderness.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 10",
    imagen_9_16: CURATED_VISUAL_ASSETS[9],
    imagenes_runway: [CURATED_VISUAL_ASSETS[9], CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[5]],
    captions: createCaptions("SACRIFICE IS NOT LOSS WHEN IT NOURISHES LOVE", "Every generous choice makes room for a deeper, more enduring tenderness.", "DareToLove")
  },
  {
    id: "dtl-11",
    categoria: "DARE TO LOVE",
    titular: "THE SOUL FINDS REST IN COVENANT AND PEACE",
    bajada: "Beyond the restlessness of the world lies the peaceful harbor of authentic belonging.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 11",
    imagen_9_16: CURATED_VISUAL_ASSETS[0],
    imagenes_runway: [CURATED_VISUAL_ASSETS[0], CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[7]],
    captions: createCaptions("THE SOUL FINDS REST IN COVENANT AND PEACE", "Beyond the restlessness of the world lies the peaceful harbor of authentic belonging.", "DareToLove")
  },
  {
    id: "dtl-12",
    categoria: "DARE TO LOVE",
    titular: "LOVE TURNS ORDINARY MOMENTS INTO SACRED ART",
    bajada: "A quiet meal, a shared umbrella, a morning bouquet: here lives true elegance.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 12",
    imagen_9_16: CURATED_VISUAL_ASSETS[1],
    imagenes_runway: [CURATED_VISUAL_ASSETS[1], CURATED_VISUAL_ASSETS[5], CURATED_VISUAL_ASSETS[8]],
    captions: createCaptions("LOVE TURNS ORDINARY MOMENTS INTO SACRED ART", "A quiet meal, a shared umbrella, a morning bouquet: here lives true elegance.", "DareToLove")
  },
  {
    id: "dtl-13",
    categoria: "DARE TO LOVE",
    titular: "DIGNITY AND WARMTH: THE TWIN PILLARS OF DEVOTION",
    bajada: "Respect protects love, while warmth and laughter breathe life into its core.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 13",
    imagen_9_16: CURATED_VISUAL_ASSETS[2],
    imagenes_runway: [CURATED_VISUAL_ASSETS[2], CURATED_VISUAL_ASSETS[6], CURATED_VISUAL_ASSETS[9]],
    captions: createCaptions("DIGNITY AND WARMTH: THE TWIN PILLARS OF DEVOTION", "Respect protects love, while warmth and laughter breathe life into its core.", "DareToLove")
  },
  {
    id: "dtl-14",
    categoria: "DARE TO LOVE",
    titular: "AN UNCOMPROMISED LIFE IS A LIFE FILLED WITH PURPOSE",
    bajada: "When we dare to love with our entire heart, we fulfill the deepest calling of our being.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 14",
    imagen_9_16: CURATED_VISUAL_ASSETS[3],
    imagenes_runway: [CURATED_VISUAL_ASSETS[3], CURATED_VISUAL_ASSETS[7], CURATED_VISUAL_ASSETS[0]],
    captions: createCaptions("AN UNCOMPROMISED LIFE IS A LIFE FILLED WITH PURPOSE", "When we dare to love with our entire heart, we fulfill the deepest calling of our being.", "DareToLove")
  },
  {
    id: "dtl-15",
    categoria: "DARE TO LOVE",
    titular: "DARE TO LOVE WITHOUT RESERVATIONS OR REGRETS",
    bajada: "The world celebrates the temporary, but eternity belongs to those who love unconditionally.",
    fecha: "NOV 07, 2026",
    autor: "VocationLove Editorial",
    edicion: "Dare to Love No. 15",
    imagen_9_16: CURATED_VISUAL_ASSETS[4],
    imagenes_runway: [CURATED_VISUAL_ASSETS[4], CURATED_VISUAL_ASSETS[8], CURATED_VISUAL_ASSETS[1]],
    captions: createCaptions("DARE TO LOVE WITHOUT RESERVATIONS OR REGRETS", "The world celebrates the temporary, but eternity belongs to those who love unconditionally.", "DareToLove")
  }
];

export const INITIAL_CHRONICLES: ChronicleStory[] = ALL_55_PUBLICATIONS;

export const BRAND_PARTNERS = [
  { name: "MAISON DE HAUTE COUTURE", location: "PARIS" },
  { name: "ATELIER RIVE GAUCHE", location: "MILAN" },
  { name: "EDITORIAL MANIFESTO", location: "MADRID" },
  { name: "PRESS FOUNDATION", location: "NEW YORK" },
  { name: "VOCATION LOVE STUDIOS", location: "LONDON" }
];
