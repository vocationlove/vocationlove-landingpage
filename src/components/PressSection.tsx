import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Download,
  Copy,
  Check,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  Globe,
  Sparkles
} from 'lucide-react';

export const PressSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedRelease, setExpandedRelease] = useState<number | null>(1);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleDownloadAsset = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      link.click();
    }
  };

  const pressEmail = 'press@vocationlove.com';

  const pressRelease1Text = language === 'es'
    ? `COMUNICADO DE PRENSA OFICIAL #01 — VOCATIONLOVE
FECHA: 12 DE NOVIEMBRE DE 2026
LUGAR: REDACCIÓN CENTRAL VOCATIONLOVE

TITULAR:
NACE VOCATIONLOVE RED SOCIAL: PARA LOS QUE SABEN QUE EL AMOR ES LA VOCACIÓN MÁS GRANDE.

Nace formalmente VOCATIONLOVE (vocationlove.com / vocationlove.app), la primera red social orientada al noviazgo y matrimonio duradero con valores compartidos.

Bajo la convicción profunda de que el amor es la vocación más trascendente del ser humano, VOCATIONLOVE ofrece un refugio en la verdad donde las personas pueden reencontrarse con el anhelo de enamorarse para siempre.

CARACTERÍSTICAS FUNDAMENTALES DE LA PLATAFORMA:
1. Acceso y Verificación Segura: Ingreso verificado mediante cuentas Google para garantizar identidades genuinas y respeto comunitario.
2. Cartilla Vocacional Intencional: Cada miembro define sus valores, visión del matrimonio y convicciones esenciales.
3. Coincidencia Mutua: Interacción basada en el descubrimiento sincero y la comunión de principios.

CONTACTO OFICIAL PARA MEDIOS:
Prensa y Portavocía: ${pressEmail}
Sitio web oficial: https://www.vocationlove.com/#press-section
Aplicación oficial: https://vocationlove.app`
    : `OFFICIAL PRESS RELEASE #01 — VOCATIONLOVE
DATE: NOVEMBER 12, 2026
ORIGIN: VOCATIONLOVE EDITORIAL HEADQUARTERS

HEADLINE:
VOCATIONLOVE SOCIAL NETWORK IS BORN: FOR THOSE WHO KNOW THAT LOVE IS THE GREATEST VOCATION.

VOCATIONLOVE (vocationlove.com / vocationlove.app) officially launches as the first social network focused on lasting courtship and marriage rooted in shared values.

Driven by the deep conviction that love is the highest vocation of human life, VOCATIONLOVE offers a refuge in truth where people can rediscover the longing to fall in love forever.

KEY HIGHLIGHTS:
1. Verified Secure Access: Safe Google Authentication ensuring genuine identity and mutual respect.
2. Intentional Vocational Profile: Members define their values, vision of marriage, and core convictions.
3. Mutual Matching: Interaction rooted in sincere discovery and shared principles.

MEDIA CONTACT:
Press & Communications: ${pressEmail}
Official Website: https://www.vocationlove.com/#press-section
Official App: https://vocationlove.app`;

  const pressRelease2Text = language === 'es'
    ? `DOSSIER EDITORIAL #02 — VOCATIONLOVE
FECHA: NOVIEMBRE 2026

TITULAR:
VOCATIONLOVE CONECTA PERSONAS CON VALORES COMPARTIDOS HACIA EL MATRIMONIO.

La red social reúne a hombres y mujeres que anhelan comenzar un noviazgo y construir una familia, impulsando vínculos auténticos basados en principios comunes, respeto mutuo y un proyecto de vida compartido.

El ecosistema articula tres pilares integrados:
• vocationlove.com: El hogar editorial con noticias y recursos de comunicación de la red social.
• vocationlove.app: La red social privada con ingreso seguro de Google y coincidencia mutua para contactarse e iniciar una conservación..
• vocationlove.store: La floristería boutique que rescata el detalle caballeroso y el gesto poético de regalarse flores.

CONTACTO DE PRENSA: press@vocationlove.com`
    : `EDITORIAL DOSSIER #02 — VOCATIONLOVE
DATE: NOVEMBER 2026

HEADLINE:
VOCATIONLOVE CONNECTS PEOPLE WITH SHARED VALUES TOWARD MARRIAGE.

The social network brings together men and women who long to begin a courtship and build a family, fostering authentic bonds rooted in shared principles, mutual respect, and a common life vision.

The ecosystem integrates three core pillars:
• vocationlove.com: The editorial home featuring news and communication resources for the social network.
• vocationlove.app: The private social network with secure Google sign-in and mutual matching to connect and start a conversation.
• vocationlove.store: The boutique flower shop reviving chivalrous gestures and the poetic tradition of giving flowers.

MEDIA INQUIRIES: press@vocationlove.com`;

  return (
    <section id="press-section" className="w-full bg-[#f8f8f8] py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2 border-black">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-black">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest font-bold mb-3">
              <span>{language === 'es' ? 'SALA DE PRENSA OFICIAL' : 'OFFICIAL PRESS ROOM'}</span>
            </div>
            <h2 className="font-times text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
              {language === 'es' ? 'INFORMACIÓN DE PRENSA' : 'PRESS & MEDIA ROOM'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-800 font-sans leading-relaxed max-w-3xl">
              {language === 'es'
                ? 'Toda la información oficial de VOCATIONLOVE: comunicados de prensa, ficha técnica, kit de recursos gráficos descargables y contacto directo para periodistas y creadores.'
                : 'All official VOCATIONLOVE press materials: press releases, company factsheet, downloadable media kit assets, and direct press office contact.'}
            </p>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3.5 py-1.5 bg-neutral-950 text-white text-[11px] font-mono tracking-widest uppercase border border-neutral-800">
              {language === 'es' ? 'PRENSA • ACTUALIZADO 2026' : 'PRESS • UPDATED 2026'}
            </div>
          </div>
        </div>

        {/* 1. Official Press Releases */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-times text-xl sm:text-2xl font-bold uppercase tracking-wide text-neutral-950 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-neutral-800" />
              <span>{language === 'es' ? 'Comunicados Oficiales' : 'Official Press Releases'}</span>
            </h3>
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">
              {language === 'es' ? '2 COMUNICADOS DISPONIBLES' : '2 RELEASES AVAILABLE'}
            </span>
          </div>

          {/* Release #1 */}
          <div className="bg-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider pb-3 border-b border-neutral-200">
              <span className="text-black">COMUNICADO OFICIAL #01 • 12 NOV 2026</span>
              <span>VOCATIONLOVE.COM • GLOBAL</span>
            </div>

            <h4 className="font-times text-lg sm:text-2xl font-bold uppercase tracking-tight text-neutral-950 mt-3 leading-snug">
              {language === 'es'
                ? 'Nace VOCATIONLOVE Red Social: Para los que saben que el amor es la vocación más grande.'
                : 'VOCATIONLOVE Social Network Is Born: For those who know that love is the greatest vocation.'}
            </h4>
            <p className="text-sm text-neutral-700 font-sans mt-2 leading-relaxed">
              {language === 'es'
                ? 'VOCATIONLOVE propone una comunidad intencional orientada al noviazgo y al matrimonio.'
                : 'VOCATIONLOVE proposes an intentional community focused on dating and marriage.'}
            </p>

            {/* Expandable Full Release Text */}
            {expandedRelease === 1 && (
              <div className="mt-4 pt-4 border-t border-neutral-200 animate-in fade-in duration-200">
                <pre className="p-4 bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap border border-neutral-700 rounded-none leading-relaxed max-h-[360px] overflow-y-auto">
                  {pressRelease1Text}
                </pre>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => setExpandedRelease(expandedRelease === 1 ? null : 1)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-neutral-600 cursor-pointer"
              >
                <span>{expandedRelease === 1 ? (language === 'es' ? 'Ocultar texto completo' : 'Hide full release') : (language === 'es' ? 'Leer comunicado completo' : 'Read full release')}</span>
                {expandedRelease === 1 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(pressRelease1Text, 'rel1')}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                {copiedKey === 'rel1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'rel1' ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Copiar Comunicado' : 'Copy Release')}</span>
              </button>
            </div>
          </div>

          {/* Release #2 */}
          <div className="bg-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider pb-3 border-b border-neutral-200">
              <span className="text-neutral-800">DOSSIER EDITORIAL #02 • NOVIEMBRE 2026</span>
              <span>Ecosistema vocationlove</span>
            </div>

            <h4 className="font-times text-lg sm:text-2xl font-bold uppercase tracking-tight text-neutral-950 mt-3 leading-snug">
              {language === 'es'
                ? 'VOCATIONLOVE conecta personas con valores compartidos hacia el matrimonio.'
                : 'VOCATIONLOVE connects people with shared values toward marriage.'}
            </h4>
            <p className="text-sm text-neutral-700 font-sans mt-2 leading-relaxed">
              {language === 'es'
                ? 'La red social reúne a hombres y mujeres que anhelan comenzar un noviazgo y construir una familia, impulsando vínculos auténticos basados en principios comunes, respeto mutuo y un proyecto de vida compartido.'
                : 'The social network brings together men and women who long to begin a courtship and build a family, fostering authentic bonds rooted in shared principles, mutual respect, and a common life vision.'}
            </p>

            {/* Expandable Text */}
            {expandedRelease === 2 && (
              <div className="mt-4 pt-4 border-t border-neutral-200 animate-in fade-in duration-200">
                <pre className="p-4 bg-neutral-900 text-neutral-100 text-xs font-mono whitespace-pre-wrap border border-neutral-700 rounded-none leading-relaxed max-h-[360px] overflow-y-auto">
                  {pressRelease2Text}
                </pre>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => setExpandedRelease(expandedRelease === 2 ? null : 2)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-neutral-600 cursor-pointer"
              >
                <span>{expandedRelease === 2 ? (language === 'es' ? 'Ocultar texto completo' : 'Hide full release') : (language === 'es' ? 'Leer comunicado completo' : 'Read full release')}</span>
                {expandedRelease === 2 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(pressRelease2Text, 'rel2')}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                {copiedKey === 'rel2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'rel2' ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Copiar Comunicado' : 'Copy Release')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Factsheet & Key Facts (Ficha Técnica) */}
        <div className="space-y-4">
          <h3 className="font-times text-xl sm:text-2xl font-bold uppercase tracking-wide text-neutral-950 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-neutral-800" />
            <span>{language === 'es' ? 'Ficha Técnica para Medios' : 'Media Factsheet & Key Facts'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block">
                {language === 'es' ? 'PROPÓSITO' : 'PURPOSE'}
              </span>
              <p className="font-times font-bold text-base text-neutral-950 uppercase mt-1">
                {language === 'es' ? 'Amor para Siempre' : 'Lifelong Love'}
              </p>
              <p className="text-xs text-neutral-600 font-sans mt-1">
                {language === 'es'
                  ? 'Red social con valores compartidos orientada al noviazgo y matrimonio intencional.'
                  : 'Shared-values social network designed for intentional dating and marriage.'}
              </p>
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block">
                {language === 'es' ? 'SEGURIDAD' : 'SECURITY'}
              </span>
              <p className="font-times font-bold text-base text-neutral-950 uppercase mt-1">
                {language === 'es' ? 'Google Auth Verificado' : 'Verified Google Auth'}
              </p>
              <p className="text-xs text-neutral-600 font-sans mt-1">
                {language === 'es'
                  ? 'Ingreso autenticado para prevenir perfiles falsos y salvaguardar la seriedad comunitaria.'
                  : 'Authentic sign-in preventing fake profiles and guarding community seriousness.'}
              </p>
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block">
                {language === 'es' ? 'ECOSISTEMA' : 'ECOSYSTEM'}
              </span>
              <p className="font-times font-bold text-base text-neutral-950 uppercase mt-1">
                {language === 'es' ? 'Plataforma 3 en 1' : '3-in-1 Platform'}
              </p>
              <p className="text-xs text-neutral-600 font-sans mt-1">
                {language === 'es'
                  ? 'Web oficial (vocationlove.com), App (vocationlove.app) y Tienda (vocationlove.store).'
                  : 'Official website, mobile app, and boutique floral store.'}
              </p>
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block">
                {language === 'es' ? 'ALCANCE' : 'REACH'}
              </span>
              <p className="font-times font-bold text-base text-neutral-950 uppercase mt-1">
                {language === 'es' ? 'Cobertura Global' : 'Global Reach'}
              </p>
              <p className="text-xs text-neutral-600 font-sans mt-1">
                {language === 'es'
                  ? 'Disponible en Español e Inglés para usuarios de América, Europa y el mundo entero.'
                  : 'Available in English and Spanish across the Americas, Europe, and worldwide.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Media Kit & Official Downloadable Assets */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-times text-xl sm:text-2xl font-bold uppercase tracking-wide text-neutral-950 flex items-center gap-2.5">
              <ImageIcon className="w-5 h-5 text-neutral-800" />
              <span>{language === 'es' ? 'Kit de Medios & Recursos Descargables' : 'Media Kit & Downloadable Assets'}</span>
            </h3>
            <span className="text-xs font-mono font-bold uppercase text-neutral-500">
              ALTA RESOLUCIÓN • HD
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Asset 1: Official Logo V */}
            <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-300 flex items-center justify-center p-6 mb-3">
                  <img
                    src="/assets/aistudio/V_bl_1225f1e6.png"
                    alt="VOCATIONLOVE Official V Logo"
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <h4 className="font-times font-bold text-base text-black uppercase">
                  {language === 'es' ? 'Isotipo Oficial «V»' : 'Official «V» Isotype'}
                </h4>
                <p className="text-xs text-neutral-600 font-sans mt-1">
                  {language === 'es' ? 'Logo oficial en alta resolución para publicaciones y prensa.' : 'High-resolution official logo for editorial and broadcast press.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadAsset('/assets/aistudio/V_bl_1225f1e6.png', 'VOCATIONLOVE_Logo_V_Oficial.png')}
                className="mt-4 w-full py-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
                <span>{language === 'es' ? 'Descargar Logo PNG' : 'Download Logo PNG'}</span>
              </button>
            </div>

            {/* Asset 2: Pareja en el Parque (40 años) */}
            <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-full aspect-[4/3] bg-neutral-900 border border-neutral-300 overflow-hidden mb-3">
                  <img
                    src="/assets/aistudio/pareja_de_40_f0af94b2.png"
                    alt="Foto oficial de prensa - Pareja 40"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-times font-bold text-base text-black uppercase">
                  {language === 'es' ? 'Foto de Prensa: +40' : 'Press Photo: +40'}
                </h4>
                <p className="text-xs text-neutral-600 font-sans mt-1">
                  {language === 'es' ? 'Fotografía oficial para artículos, entrevistas y reportajes.' : 'Official campaign photograph for editorial use.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadAsset('/assets/aistudio/pareja_de_40_f0af94b2.png', 'VOCATIONLOVE_Foto_Prensa_Pareja40.png')}
                className="mt-4 w-full py-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
                <span>{language === 'es' ? 'Descargar Foto HD' : 'Download HD Photo'}</span>
              </button>
            </div>

            {/* Asset 3: Pareja +18 */}
            <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <div className="w-full aspect-[4/3] bg-neutral-900 border border-neutral-300 overflow-hidden mb-3">
                  <img
                    src="/assets/aistudio/vlc_66f6ec40.png"
                    alt="Foto oficial de prensa - +18"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-times font-bold text-base text-black uppercase">
                  {language === 'es' ? 'Foto de Prensa: +18' : 'Press Photo: +18'}
                </h4>
                <p className="text-xs text-neutral-600 font-sans mt-1">
                  {language === 'es' ? 'Fotografía oficial de prensa en alta resolución.' : 'Official high-resolution press image.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadAsset('/assets/aistudio/vlc_66f6ec40.png', 'VOCATIONLOVE_Foto_Prensa_18.png')}
                className="mt-4 w-full py-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
                <span>{language === 'es' ? 'Descargar Foto HD' : 'Download HD Photo'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. Contacto Oficial de Prensa */}
        <div className="bg-black text-white p-6 sm:p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white font-bold mb-1.5">
              <span>{language === 'es' ? 'CONTACTO EXCLUSIVO PARA MEDIOS & PERIODISTAS' : 'EXCLUSIVE MEDIA & PRESS CONTACT'}</span>
            </div>
            <h3 className="font-times text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-snug">
              {language === 'es' ? '¿Interesado en una entrevista o cobertura especial?' : 'Interested in an interview or editorial coverage?'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              {language === 'es'
                ? 'Facilitamos portavoces oficiales, acceso a material audiovisual inédito, datos sobre el cortejo vocacional y declaraciones exclusivas para radio, televisión, prensa digital y creadores.'
                : 'We provide official spokespersons, high-resolution media footage, insights on vocational courtship, and exclusive interviews for broadcast, print, and digital media.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0">
            <a
              href={`mailto:${pressEmail}?subject=Consulta%20de%20Prensa%20VOCATIONLOVE`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-neutral-100 text-black font-mono text-xs font-bold uppercase tracking-wider rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] transition-colors text-center"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>{language === 'es' ? 'Escribir a Prensa' : 'Email Press Office'}</span>
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(pressEmail, 'pmail')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-mono text-xs font-bold uppercase tracking-wider rounded-none border border-neutral-700 transition-colors cursor-pointer text-center"
            >
              {copiedKey === 'pmail' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedKey === 'pmail' ? (language === 'es' ? '¡Email copiado!' : 'Email copied!') : pressEmail}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
