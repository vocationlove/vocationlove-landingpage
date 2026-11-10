import React from 'react';
import { X, Scale, Mail, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  const { isEs, language, setLanguage } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-white rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black text-white border-b-2 border-black shrink-0">
          <div className="flex items-center gap-3">
            <Scale className="w-4 h-4 text-white" />
            <h3 className="font-times text-base font-bold uppercase tracking-widest text-white">
              {isEs ? 'AVISO LEGAL' : 'LEGAL NOTICE'}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Language Toggle in Modal */}
            <div className="flex items-center border border-neutral-700 bg-neutral-900 text-xs font-mono">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                  isEs ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                  !isEs ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer p-1 rounded-none border border-transparent hover:border-white"
              aria-label={isEs ? 'Cerrar modal' : 'Close modal'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
          {/* Main Title Badge */}
          <div className="border-b-2 border-black pb-4">
            <div className="text-[11px] font-mono font-bold tracking-widest text-neutral-600 uppercase mb-1">
              {isEs ? 'DOCUMENTO OFICIAL VINCULANTE' : 'OFFICIAL BINDING DOCUMENT'}
            </div>
            <h2 className="font-times text-lg sm:text-xl font-bold uppercase text-black tracking-wide">
              {isEs
                ? 'VOCATIONLOVE.COM – TÉRMINOS DE USO Y POLÍTICA DE PRIVACIDAD'
                : 'VOCATIONLOVE.COM – TERMS OF USE AND PRIVACY POLICY'}
            </h2>
          </div>

          {isEs ? (
            /* ================= SPANISH LEGAL NOTICE (es-AR) ================= */
            <>
              {/* Section 1 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  1. IDENTIDAD DEL RESPONSABLE
                </h4>
                <p>
                  VocationLove (en adelante, «VocationLove», la «Plataforma» o el «Servicio») es una red social y plataforma de vinculación orientada a facilitar encuentros entre personas interesadas en forjar relaciones personales, afectivas o familiares.
                </p>
                <p>
                  Para cualquier consulta en materia de privacidad o protección de datos, los usuarios pueden comunicarse a:
                </p>
                <div className="p-3 bg-neutral-100 border border-neutral-300 rounded-none flex items-center gap-2 font-mono text-xs text-neutral-900">
                  <Mail className="w-4 h-4 text-neutral-600" />
                  <span>Correo electrónico: <strong>privacy@vocationlove.com</strong></span>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  2. ACEPTACIÓN DE LOS TÉRMINOS
                </h4>
                <p>
                  El acceso, registro y utilización de la Plataforma suponen la aceptación plena y sin reservas de las disposiciones del presente documento.
                </p>
                <p>
                  Si el usuario no está de acuerdo con cualquiera de estas cláusulas, deberá abstenerse de utilizar el Servicio.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  3. REQUISITOS DE ACCESO Y MAYORÍA DE EDAD
                </h4>
                <p>
                  El uso de VocationLove está estrictamente reservado a personas mayores de 18 años.
                </p>
                <p>Al registrarse, el usuario declara y garantiza bajo su responsabilidad que:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Es mayor de 18 años;</li>
                  <li>Posee plena capacidad jurídica para obligarse;</li>
                  <li>La información suministrada es veraz, exacta y actualizada;</li>
                  <li>No suplantará la identidad de ninguna otra persona o entidad.</li>
                </ul>
                <p className="text-neutral-600 italic">
                  VocationLove podrá suspender o cancelar de inmediato cualquier cuenta ante indicios fehacientes de incumplimiento.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  4. OBJETO DEL SERVICIO Y ECOSISTEMA DIGITAL
                </h4>
                <p>
                  El dominio <strong>vocationlove.com</strong> opera como el portal oficial de divulgación informativa, editorial y comunicación institucional de la red.
                </p>
                <p>
                  La aplicación interactiva y las funcionalidades de red social entre usuarios se brindan a través del ecosistema oficial en <strong>vocationlove.app</strong>.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  5. NORMAS DE CONDUCTA Y USO ADECUADO
                </h4>
                <p>Los usuarios se comprometen a utilizar la Plataforma de forma diligente, lícita y con respeto mutuo. Queda expresamente prohibido:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Publicar contenidos ilícitos, violentos, amenazantes, difamatorios, obscenos o que vulneren derechos de terceros;</li>
                  <li>Hostigar, acosar o intimidar a otros miembros de la comunidad;</li>
                  <li>Emplear bots, scrapers o sistemas automatizados de extracción de datos;</li>
                  <li>Utilizar la Plataforma con fines comerciales no autorizados, difusión de spam o prospección masiva.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  6. CONTENIDO GENERADO POR EL USUARIO
                </h4>
                <p>
                  Los usuarios conservan la titularidad sobre los contenidos que publiquen, incluyendo textos, fotos e información de perfil.
                </p>
                <p>
                  Al compartirlos, conceden a VocationLove una licencia no exclusiva, de alcance global, gratuita y transferible para alojar, almacenar, reproducir y mostrar dicho contenido en la medida estrictamente requerida para la prestación del Servicio.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  7. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL
                </h4>
                <p>
                  Todos los componentes de la Plataforma, incluidos logotipos, marcas registradas («VOCATIONLOVE», «SEEDS OF LOVE», «HOPE IN BLOOM», «DARE TO LOVE»), composiciones editoriales, código fuente, fotografía de producción y activos visuales, pertenecen en forma exclusiva a VocationLove o a sus legítimos licenciantes.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  8. PROTECCIÓN DE DATOS PERSONALES
                </h4>
                <p>
                  De conformidad con la normativa europea y nacional aplicable de protección de datos (RGPD / LOPDGDD), VocationLove procesa los datos personales recabados con estricta confidencialidad y bajo sólidas medidas de seguridad técnicas y organizativas.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  9. FINALIDADES DEL TRATAMIENTO DE DATOS
                </h4>
                <p>Los datos personales se procesan con los siguientes propósitos:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Gestionar el registro de usuarios y la administración de sus cuentas;</li>
                  <li>Prestar servicios de red social, afinidad y vinculación de personas;</li>
                  <li>Atender consultas, solicitudes de soporte y requerimientos de ayuda;</li>
                  <li>Cumplir con obligaciones legales, requerimientos de seguridad y prevención de fraudes.</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  10. BASES JURÍDICAS DEL TRATAMIENTO
                </h4>
                <p>Las bases jurídicas que sustentan el tratamiento de datos son:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>La ejecución del contrato de prestación del servicio suscrito entre el usuario y la Plataforma;</li>
                  <li>El consentimiento explícito otorgado por el usuario en relación con sus datos adicionales de perfil;</li>
                  <li>El interés legítimo de VocationLove en salvaguardar la seguridad e integridad de la comunidad.</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  11. CONSERVACIÓN DE LOS DATOS
                </h4>
                <p>
                  Los datos personales serán conservados mientras permanezca activa la cuenta del usuario y, posteriormente, durante los plazos legalmente exigibles para atender eventuales responsabilidades civiles, contractuales o normativas.
                </p>
              </div>

              {/* Section 12 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  12. DESTINATARIOS Y TRANSFERENCIAS INTERNACIONALES DE DATOS
                </h4>
                <p>
                  VocationLove no transferirá datos personales a terceros, con excepción de obligaciones legales o proveedores esenciales de infraestructura tecnológica debidamente auditados.
                </p>
                <p>
                  En caso de transferencias internacionales, VocationLove garantizará la suscripción de cláusulas contractuales tipo u otras garantías reconocidas por las autoridades supervisoras.
                </p>
              </div>

              {/* Section 13 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  13. EJERCICIO DE DERECHOS DE PRIVACIDAD
                </h4>
                <p>
                  Los usuarios pueden ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición en cualquier momento mediante comunicación por correo a:
                </p>
                <div className="p-3 bg-neutral-100 border border-neutral-300 rounded-none font-mono text-xs text-neutral-900">
                  <strong>privacy@vocationlove.com</strong>
                </div>
                <p>Podrá requerirse la acreditación válida de la identidad del solicitante.</p>
              </div>

              {/* Section 14 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  14. POLÍTICA DE COOKIES Y SEGUIMIENTO
                </h4>
                <p>
                  El portal <strong>vocationlove.com</strong> utiliza exclusivamente cookies técnicas indispensables para la navegación y la preservación de preferencias seguras de sesión, sin emplear mecanismos intrusivos de seguimiento comercial de terceros.
                </p>
              </div>

              {/* Section 15 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  15. MEDIDAS DE SEGURIDAD
                </h4>
                <p>
                  Se implementan protocolos avanzados de cifrado (HTTPS/TLS) y políticas rigurosas de control de acceso interno orientadas a proteger la confidencialidad, integridad y disponibilidad de la información almacenada.
                </p>
              </div>

              {/* Section 16 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  16. LIMITACIÓN DE RESPONSABILIDAD
                </h4>
                <p>
                  VocationLove no garantiza un resultado afectivo o vincular particular derivado de las interacciones entre usuarios ni responde por la veracidad de las manifestaciones volcadas voluntariamente por los miembros en sus perfiles individuales.
                </p>
                <p>
                  Se recomienda a los usuarios actuar con prudencia, cuidado y buen juicio al coordinar encuentros en persona.
                </p>
              </div>

              {/* Section 17 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  17. SUSPENSIÓN Y CANCELACIÓN DEL SERVICIO
                </h4>
                <p>
                  VocationLove se reserva la potestad de suspender el acceso o cerrar las cuentas de aquellos miembros que contravengan estos Términos de Uso, los principios de convivencia de la comunidad o la legislación vigente.
                </p>
              </div>

              {/* Section 18 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  18. LEY APLICABLE Y JURISDICCIÓN
                </h4>
                <p>
                  La relación entre el usuario y VocationLove se rige por las normativas generales de aplicación.
                </p>
                <p>
                  Salvo disposición legal imperativa en contrario, cualquier controversia que surja del uso de la Plataforma se someterá a los juzgados y tribunales competentes.
                </p>
              </div>

              {/* Section 19 */}
              <div className="space-y-2 p-4 bg-neutral-100 border border-neutral-300 rounded-none">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  19. MODIFICACIONES
                </h4>
                <p>
                  VocationLove podrá actualizar estos Términos en cualquier momento para adecuarlos a novedades normativas, técnicas o de servicio. Cualquier modificación se reflejará oportunamente en esta sección.
                </p>
                <div className="pt-2 text-xs font-mono text-neutral-700">
                  Contacto Legal: <strong>privacy@vocationlove.com</strong>
                  <br />
                  Entidad: <strong>VocationLove Social Network</strong>
                </div>
              </div>
            </>
          ) : (
            /* ================= ENGLISH LEGAL NOTICE (en) ================= */
            <>
              {/* Section 1 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  1. CONTROLLER IDENTITY
                </h4>
                <p>
                  VocationLove (hereinafter, "VocationLove", the "Platform", or the "Service") is a social network and dating platform designed to facilitate connections between individuals interested in establishing personal, romantic, or family relationships.
                </p>
                <p>
                  For any matter related to privacy or data protection, users may contact:
                </p>
                <div className="p-3 bg-neutral-100 border border-neutral-300 rounded-none flex items-center gap-2 font-mono text-xs text-neutral-900">
                  <Mail className="w-4 h-4 text-neutral-600" />
                  <span>Email: <strong>privacy@vocationlove.com</strong></span>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  2. ACCEPTANCE OF THE TERMS
                </h4>
                <p>
                  Accessing, registering for, and using the Platform implies full acceptance of this document.
                </p>
                <p>
                  If the user does not agree with any of the provisions set forth herein, they must refrain from using the Platform.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  3. ACCESS REQUIREMENTS
                </h4>
                <p>
                  The use of VocationLove is exclusively reserved for individuals aged 18 years or older.
                </p>
                <p>By registering, the user declares and warrants that:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>They are at least 18 years old;</li>
                  <li>They have the legal capacity to enter into binding agreements;</li>
                  <li>The information provided is truthful, accurate, and up to date; and</li>
                  <li>They will not impersonate any third party.</li>
                </ul>
                <p className="text-neutral-600 italic">
                  VocationLove may suspend or terminate any account where there are indications of non-compliance with these Terms.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  4. PURPOSE OF THE SERVICE AND DIGITAL ECOSYSTEM
                </h4>
                <p>
                  The domain <strong>vocationlove.com</strong> serves as the official informational, editorial, and public communications portal of the network.
                </p>
                <p>
                  The interactive application and user-to-user social networking services operate through the official ecosystem at <strong>vocationlove.app</strong>.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  5. RULES OF CONDUCT AND PROPER USE
                </h4>
                <p>Users agree to use the Platform lawfully, diligently, and respectfully. The following activities are expressly prohibited:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Publishing unlawful, offensive, threatening, defamatory, obscene content, or content that infringes the rights of third parties;</li>
                  <li>Harassing or intimidating other users;</li>
                  <li>Using bots, scrapers, or automated data extraction systems;</li>
                  <li>Using the Platform for unauthorized commercial purposes or sending spam.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  6. USER-GENERATED CONTENT
                </h4>
                <p>
                  Users retain ownership of the content they publish, including text, photographs, and profile information.
                </p>
                <p>
                  By sharing such content, users grant VocationLove a non-exclusive, worldwide, royalty-free, and transferable license to host, store, reproduce, and display such content as necessary for the operation of the Service.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  7. INTELLECTUAL AND INDUSTRIAL PROPERTY RIGHTS
                </h4>
                <p>
                  All elements of the Platform, including logos, trademarks ("VOCATIONLOVE," "SEEDS OF LOVE," "HOPE IN BLOOM," and "DARE TO LOVE"), editorial designs, source code, production photography, and visual assets, are the exclusive property of VocationLove or its lawful licensors.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  8. PERSONAL DATA PROTECTION
                </h4>
                <p>
                  In accordance with applicable European and national data protection regulations (GDPR / LOPDGDD), VocationLove processes personal data collected with strict confidentiality and under appropriate technical and organizational measures designed to ensure the security of the information.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  9. PURPOSES OF DATA PROCESSING
                </h4>
                <p>Personal data are processed for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Managing user registration and accounts;</li>
                  <li>Providing social networking, matching, and connection services;</li>
                  <li>Responding to inquiries, requests, and support issues;</li>
                  <li>Complying with legal obligations, security requirements, and fraud prevention measures.</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  10. LEGAL BASIS FOR PROCESSING
                </h4>
                <p>The legal bases that justify the processing of personal data are:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>The performance of the service agreement between the user and the Platform;</li>
                  <li>The user's explicit consent regarding additional profile information; and</li>
                  <li>VocationLove's legitimate interest in maintaining the security and integrity of the community.</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  11. DATA RETENTION
                </h4>
                <p>
                  Personal data will be retained for as long as the user's account remains active and thereafter for any legally required periods necessary to address potential civil, contractual, or legal liabilities.
                </p>
              </div>

              {/* Section 12 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  12. RECIPIENTS AND INTERNATIONAL DATA TRANSFERS
                </h4>
                <p>
                  VocationLove will not disclose personal data to third parties except where required by law or where necessary for essential technical infrastructure providers.
                </p>
                <p>
                  In the event of international data transfers, VocationLove shall ensure the use of standard contractual clauses or other safeguards approved by the relevant supervisory authorities.
                </p>
              </div>

              {/* Section 13 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  13. EXERCISE OF DATA SUBJECT RIGHTS
                </h4>
                <p>
                  Users may exercise their rights of access, rectification, erasure, restriction of processing, data portability, and objection at any time by sending an email to:
                </p>
                <div className="p-3 bg-neutral-100 border border-neutral-300 rounded-none font-mono text-xs text-neutral-900">
                  <strong>privacy@vocationlove.com</strong>
                </div>
                <p>Users may be required to provide adequate proof of identity before such requests are processed.</p>
              </div>

              {/* Section 14 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  14. COOKIES AND TRACKING POLICY
                </h4>
                <p>
                  The portal <strong>vocationlove.com</strong> uses only strictly necessary technical cookies for the operation of the website and the preservation of secure browsing preferences, without employing intrusive third-party tracking mechanisms.
                </p>
              </div>

              {/* Section 15 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  15. SECURITY MEASURES
                </h4>
                <p>
                  Robust encryption protocols (HTTPS/TLS) and internal access-control procedures are implemented to safeguard the integrity, confidentiality, and availability of stored personal information.
                </p>
              </div>

              {/* Section 16 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  16. LIMITATION OF LIABILITY
                </h4>
                <p>
                  VocationLove does not guarantee any particular outcome from interactions between users and shall not be held responsible for the accuracy of statements voluntarily provided by members in their individual profiles.
                </p>
                <p>
                  Users are encouraged to exercise appropriate caution and judgment when meeting other individuals in person.
                </p>
              </div>

              {/* Section 17 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  17. SUSPENSION AND TERMINATION OF THE SERVICE
                </h4>
                <p>
                  VocationLove reserves the right to suspend access to, or terminate the accounts of, users who violate these Terms of Use, the ethical principles of the community, or applicable laws and regulations.
                </p>
              </div>

              {/* Section 18 */}
              <div className="space-y-2">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  18. GOVERNING LAW AND JURISDICTION
                </h4>
                <p>
                  The relationship between the user and VocationLove shall be governed by the applicable general laws.
                </p>
                <p>
                  Unless mandatory law provides otherwise, any dispute arising from the use of the Platform shall be submitted to the competent courts and tribunals.
                </p>
              </div>

              {/* Section 19 */}
              <div className="space-y-2 p-4 bg-neutral-100 border border-neutral-300 rounded-none">
                <h4 className="font-times font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  19. MODIFICATIONS
                </h4>
                <p>
                  VocationLove may update or modify these Terms at any time in order to adapt them to legal, regulatory, or technical developments. Any changes will be duly published in this section.
                </p>
                <div className="pt-2 text-xs font-mono text-neutral-700">
                  Legal Contact: <strong>privacy@vocationlove.com</strong>
                  <br />
                  Entity: <strong>VocationLove Social Network</strong>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-100 border-t-2 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isEs ? 'Términos y Políticas Oficiales Activas' : 'Official Terms & Policy Active'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-white font-semibold uppercase tracking-wider text-xs rounded-none border border-black hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {isEs ? 'Aceptar y Cerrar' : 'Accept & Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
