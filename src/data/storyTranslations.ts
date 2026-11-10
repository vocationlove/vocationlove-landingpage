import { ChronicleStory } from './chronicles';

export interface LocalizedText {
  titular: string;
  bajada: string;
}

export const CATEGORY_TRANSLATIONS: Record<string, { es: string; en: string }> = {
  'all': { es: 'Todas las Crónicas', en: 'All Stories' },
  'SEEDS OF LOVE': { es: 'SEMILLAS DE AMOR', en: 'SEEDS OF LOVE' },
  'HOPE IN BLOOM': { es: 'ESPERANZA EN FLOR', en: 'HOPE IN BLOOM' },
  'DARE TO LOVE': { es: 'ATREVETE A AMAR', en: 'DARE TO LOVE' }
};

export const STORY_TRANSLATIONS_ES: Record<string, LocalizedText> = {
  // SEEDS OF LOVE
  'sol-01': {
    titular: 'LA PERSONA SE DESCUBRE A SÍ MISMA A TRAVÉS DE LA ENTREGA',
    bajada: 'Crecemos más cuando aprendemos a dar, no sólo a recibir.'
  },
  'sol-02': {
    titular: 'EL AMOR CRECE DONDE LA GENEROSIDAD ECHA RAÍCES',
    bajada: 'Las relaciones más sanas prosperan mediante el cuidado y el servicio mutuo.'
  },
  'sol-03': {
    titular: 'EL DON DE SÍ ES EL LENGUAJE DEL AMOR',
    bajada: 'Los lazos más profundos nacen cuando dos personas buscan el bien del otro.'
  },
  'sol-04': {
    titular: 'LA VERDADERA LIBERTAD HACE POSIBLE EL COMPROMISO',
    bajada: 'El amor florece cuando se elige libremente y se renueva cada día.'
  },
  'sol-05': {
    titular: 'EL CUERPO EXPRESA UN LENGUAJE DE PERTENENCIA',
    bajada: 'Las relaciones humanas revelan nuestro anhelo de conexión y comunión.'
  },
  'sol-06': {
    titular: 'NOS VOLVEMOS MÁS HUMANOS CUANDO APRENDEMOS A AMAR',
    bajada: 'El crecimiento personal y las relaciones auténticas maduran juntos.'
  },
  'sol-07': {
    titular: 'LAS MEJORES HISTORIAS DE AMOR SE CONSTRUYEN DESPACIO',
    bajada: 'La confianza, el respeto y el cariño se consolidan con el tiempo y la constancia.'
  },
  'sol-08': {
    titular: 'TODA RELACIÓN COMIENZA COMO UNA SEMILLA',
    bajada: 'El gesto más pequeño de bondad puede transformar una vida entera.'
  },
  'sol-09': {
    titular: 'EL AMOR FLORECE DONDE SE CULTIVA LA CONFIANZA',
    bajada: 'Los lazos sólidos rara vez son repentinos: se cuidan con dedicación.'
  },
  'sol-10': {
    titular: 'LAS GRANDES FAMILIAS COMIENZAN CON PEQUEÑOS ACTOS DE AMOR',
    bajada: 'Los gestos cotidianos forjan generaciones más que los grandes discursos.'
  },
  'sol-11': {
    titular: 'EL CORAZÓN SE ENSANCHA A TRAVÉS DE LA GENEROSIDAD',
    bajada: 'Entregarnos a los demás revela quiénes somos en verdad.'
  },
  'sol-12': {
    titular: 'LA CONFIANZA MUTUA ES EL SUELO DEL AMOR DURADERO',
    bajada: 'Sin confianza, las relaciones difícilmente van más allá de la atracción.'
  },
  'sol-13': {
    titular: 'EL AMOR SE PROFUNDIZA CUANDO EL EGOÍSMO DISMINUYE',
    bajada: 'Los lazos más firmes no se centran en recibir, sino en darse.'
  },
  'sol-14': {
    titular: 'CADA PROMESA PLANTA UN FUTURO',
    bajada: 'El compromiso crea el terreno propicio para que crezca la esperanza.'
  },
  'sol-15': {
    titular: 'AMAR ES AYUDAR AL OTRO A FLORECER',
    bajada: 'Las relaciones nobles sacan a relucir lo mejor de cada persona.'
  },
  'sol-16': {
    titular: 'LAS VIDAS CON MAYOR SENTIDO SON LAS QUE SE COMPARTEN',
    bajada: 'No fuimos creados para el aislamiento, sino para el encuentro y la comunión.'
  },
  'sol-17': {
    titular: 'LA COMUNIÓN ESTÁ ESCRITA EN LA HISTORIA HUMANA',
    bajada: 'El anhelo de conexión sigue siendo uno de nuestros deseos más universales.'
  },
  'sol-18': {
    titular: 'TODO GRAN AMOR COMIENZA CON LA ATENCIÓN',
    bajada: 'Escuchar, advertir y cuidar son los primeros pasos de la entrega sincera.'
  },
  'sol-19': {
    titular: 'EL AMOR REAL SIEMPRE MIRA MÁS ALLÁ DE UNO MISMO',
    bajada: 'La madurez nace cuando la alegría del otro verdaderamente importa.'
  },
  'sol-20': {
    titular: 'EL CORAZÓN APRENDE A AMAR EN LA PRÁCTICA COTIDIANA',
    bajada: 'La paciencia, el perdón y la ternura son hábitos antes de convertirse en virtudes.'
  },

  // HOPE IN BLOOM
  'hib-01': {
    titular: 'EL CORAZÓN FUE CREADO PARA LA COMUNIÓN',
    bajada: 'Nuestro deseo de encuentro señala una vocación profundamente humana.'
  },
  'hib-02': {
    titular: 'EL AMOR PARA TODA LA VIDA SIGUE SIENDO UNA ESPERANZA UNIVERSAL',
    bajada: 'A través de culturas y generaciones, seguimos buscando vínculos duraderos.'
  },
  'hib-03': {
    titular: 'EL SUEÑO DE LA FAMILIA SIGUE INSPIRANDO A MILLONES',
    bajada: 'El hogar, la pertenencia y el compromiso continúan guiando nuestros anhelos.'
  },
  'hib-04': {
    titular: 'EL MATRIMONIO ES UNA DE LAS PROMESAS MÁS ESPERANZADORAS',
    bajada: 'Dos personas eligiendo un futuro compartido sigue siendo un acto extraordinario.'
  },
  'hib-05': {
    titular: 'CADA HIJO MERECE UNA HISTORIA DE AMOR',
    bajada: 'Las relaciones estables brindan entornos de confianza y crecimiento seguro.'
  },
  'hib-06': {
    titular: 'HAY SUEÑOS QUE NUNCA PIERDEN SU BELLEZA',
    bajada: 'El amor, la familia y la pertenencia son anhelos que trascienden las épocas.'
  },
  'hib-07': {
    titular: 'LA ESPERANZA NACE CUANDO ALGUIEN DECIDE QUEDARSE',
    bajada: 'La fidelidad brinda certeza y consuelo en un mundo incierto.'
  },
  'hib-08': {
    titular: 'EN LA FAMILIA ES DONDE EL AMOR APRENDE A HABLAR',
    bajada: 'Las primeras lecciones de generosidad y pertenencia comienzan en casa.'
  },
  'hib-09': {
    titular: 'EL MUNDO TODAVÍA NECESITA TESTIMONIOS DE AMOR DURADERO',
    bajada: 'Los lazos fieles continúan inspirando a comunidades y culturas enteras.'
  },
  'hib-10': {
    titular: 'EL AMOR ES MÁS FUERTE QUE EL CINISMO MODERNO',
    bajada: 'Frente a las modas pasajeras, seguimos creyendo en compromisos con sentido.'
  },
  'hib-11': {
    titular: 'CADA GENERACIÓN REDESCUBRE LA ESPERANZA DEL AMOR',
    bajada: 'Las preguntas pueden variar, pero el anhelo del alma sigue siendo el mismo.'
  },
  'hib-12': {
    titular: 'EL HOGAR COMIENZA CON UN CORAZÓN ABIERTO',
    bajada: 'La verdadera pertenencia empieza mucho antes de que una casa sea familia.'
  },
  'hib-13': {
    titular: 'EL AMOR FORJA UN FUTURO QUE VALE LA PENA CONSTRUIR',
    bajada: 'El compromiso compartido transforma la esperanza en realidad palpable.'
  },
  'hib-14': {
    titular: 'LAS MEJORES COSAS DE LA VIDA CRECEN JUNTAS',
    bajada: 'Los afectos, las familias y las comunidades maduran con paciencia y tiempo.'
  },
  'hib-15': {
    titular: 'UN SÍ PARA TODA LA VIDA TRANSFORMA GENERACIONES',
    bajada: 'Los frutos de un amor fiel van mucho más allá de una sola pareja.'
  },
  'hib-16': {
    titular: 'DONDE EL AMOR PERDURA, LA ESPERANZA FLORECE',
    bajada: 'La entrega incondicional es uno de los mayores signos de optimismo de la humanidad.'
  },
  'hib-17': {
    titular: 'EL FUTURO NECESITA PERSONAS QUE CREAN EN EL AMOR',
    bajada: 'Las sociedades más sólidas se sostienen en relaciones nobles y transparentes.'
  },
  'hib-18': {
    titular: 'TODA HISTORIA DE AMOR PUEDE CONVERTIRSE EN UN LEGADO',
    bajada: 'La huella de una vida fiel llega mucho más lejos de lo que alcanzamos a ver.'
  },
  'hib-19': {
    titular: 'EL CORAZÓN NUNCA FUE HECHO PARA LA SOLEDAD',
    bajada: 'Nacimos naturalmente orientados hacia la amistad profunda, la intimidad y la comunión.'
  },
  'hib-20': {
    titular: 'EL AMOR ES LA SEMILLA DE LA CUAL NACEN LAS FAMILIAS',
    bajada: 'Cada árbol genealógico comienza con una relación dispuesta a perseverar.'
  },

  // DARE TO LOVE
  'dtl-01': {
    titular: 'EL CORAJE ES ELEGIR LA ENTREGA EN UN MUNDO DE DISTRACCIONES',
    bajada: 'Amar con hondura es un acto de valentía frente a la cultura de lo descartable.'
  },
  'dtl-02': {
    titular: 'LO MÁS VALIENTE QUE DOS PERSONAS PUEDEN HACER ES PROMETERSE PARA SIEMPRE',
    bajada: 'Un sí permanente crea el espacio donde los temores se disuelven y las familias crecen.'
  },
  'dtl-03': {
    titular: 'EL VERDADERO ROMANCE TIENE EL CARÁCTER DE LA ALTA COSTURA',
    bajada: 'Es a medida, paciente y artesanalmente tejido con devoción día tras día.'
  },
  'dtl-04': {
    titular: 'NO ESTAMOS LLAMADOS AL TEMOR, SINO A GOZAR EN EL AMOR',
    bajada: 'Cuando el amor se apoya en la verdad, la alegría es su firma inconfundible.'
  },
  'dtl-05': {
    titular: 'LA FIDELIDAD ES LA REVOLUCIÓN SILENCIOSA DE NUESTRO TIEMPO',
    bajada: 'Permanecer leal en cada estación es el mayor testimonio de nobleza.'
  },
  'dtl-06': {
    titular: 'MIRAR EN LA MISMA DIRECCIÓN CREA ARMONÍA',
    bajada: 'Amar no es sólo mirarse mutuamente, sino caminar juntos hacia un propósito compartido.'
  },
  'dtl-07': {
    titular: 'LA VULNERABILIDAD AUTÉNTICA ES LA CUNA DE LA ALEGRÍA',
    bajada: 'Cuando nos atrevemos a deponer las defensas, comienza la verdadera comunión.'
  },
  'dtl-08': {
    titular: 'LAS FLORES MARCHITAN PERO LOS VOTOS PERMANECEN SIEMPRE JÓVENES',
    bajada: 'La belleza de los brotes nos recuerda que el amor se riega cada mañana.'
  },
  'dtl-09': {
    titular: 'NO HAY MAYOR REGALO PARA LAS PRÓXIMAS GENERACIONES',
    bajada: 'Ver a padres que se honran mutuamente da a los hijos un ancla inamovible.'
  },
  'dtl-10': {
    titular: 'LA ENTREGA NO ES PÉRDIDA CUANDO NUTRE EL AMOR',
    bajada: 'Cada elección generosa abre paso a una ternura más honda y duradera.'
  },
  'dtl-11': {
    titular: 'EL ALMA HALLA REPOSO EN LA ALIANZA Y EN LA PAZ',
    bajada: 'Más allá de las prisas del mundo, existe el puerto seguro de la pertenencia sincera.'
  },
  'dtl-12': {
    titular: 'EL AMOR TRANSFORMA MOMENTOS SIMPLES EN ARTE SAGRADO',
    bajada: 'Una mesa tranquila, un paraguas compartido, un ramo matinal: ahí habita la elegancia.'
  },
  'dtl-13': {
    titular: 'DIGNIDAD Y CALIDEZ: LOS DOS PILARES DE LA DEVOCIÓN',
    bajada: 'El respeto cuida el amor, mientras la risa y el afecto encienden su corazón.'
  },
  'dtl-14': {
    titular: 'UNA VIDA SIN CONCESIONES ES UNA VIDA LLENA DE SENTIDO',
    bajada: 'Al atrevernos a amar con todo el corazón, cumplimos la vocación más alta de nuestro ser.'
  },
  'dtl-15': {
    titular: 'ATRÉVETE A AMAR SIN RESERVAS NI ARREPENTIMIENTOS',
    bajada: 'El mundo exalta lo efímero, pero la eternidad pertenece a los que aman sin condiciones.'
  }
};

export function getStoryTitle(story: ChronicleStory, lang: 'es' | 'en'): string {
  if (lang === 'es') {
    return story.titular_es || STORY_TRANSLATIONS_ES[story.id]?.titular || story.titular;
  }
  return story.titular;
}

export function getStorySubtitle(story: ChronicleStory, lang: 'es' | 'en'): string {
  if (lang === 'es') {
    return story.bajada_es || STORY_TRANSLATIONS_ES[story.id]?.bajada || story.bajada;
  }
  return story.bajada;
}

export function getStoryCategory(story: ChronicleStory, lang: 'es' | 'en'): string {
  if (lang === 'es') {
    return story.categoria_es || CATEGORY_TRANSLATIONS[story.categoria]?.es || story.categoria;
  }
  return story.categoria;
}
