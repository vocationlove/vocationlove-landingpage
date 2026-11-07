import React from 'react';
import { X, Scale, Mail, ShieldCheck } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-white rounded-xs border border-neutral-300 shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-950 text-white border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-rose-400" />
            <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-neutral-100">
              LEGAL
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
          {/* Main Title Badge */}
          <div className="border-b border-neutral-200 pb-4">
            <div className="text-[11px] font-mono font-bold tracking-widest text-neutral-500 uppercase mb-1">
              DOCUMENTO VINCULANTE OFICIAL
            </div>
            <h2 className="font-cinzel text-lg sm:text-xl font-bold uppercase text-neutral-950 tracking-wide">
              VOCATIONLOVE.COM – CONDICIONES DE USO Y PRIVACIDAD
            </h2>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              1. IDENTIDAD DEL RESPONSABLE
            </h4>
            <p>
              VocationLove (en adelante, "VocationLove", "la Plataforma" o "el Servicio") es una red social y plataforma de citas diseñada para facilitar el contacto entre personas interesadas en establecer relaciones personales, sentimentales o familiares.
            </p>
            <p>
              Para cualquier cuestión relacionada con privacidad o protección de datos, los usuarios podrán contactar a través de:
            </p>
            <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xs flex items-center gap-2 font-mono text-xs text-neutral-900">
              <Mail className="w-4 h-4 text-neutral-600" />
              <span>Email: <strong>privacy@vocationlove.com</strong></span>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              2. ACEPTACIÓN DE LAS CONDICIONES
            </h4>
            <p>
              El acceso, registro y utilización de la Plataforma implica la aceptación plena de este documento.
            </p>
            <p>
              Si el usuario no está de acuerdo con cualquiera de las disposiciones aquí recogidas, deberá abstenerse de utilizar la Plataforma.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              3. REQUISITOS DE ACCESO
            </h4>
            <p>
              La utilización de VocationLove está reservada exclusivamente a personas mayores de 18 años.
            </p>
            <p>
              Al registrarse, el usuario declara y garantiza que: tiene al menos 18 años; posee capacidad legal suficiente para contratar; la información facilitada es veraz, exacta y actualizada; y no suplantará la identidad de terceros.
            </p>
            <p>
              VocationLove podrá suspender o cancelar cualquier cuenta respecto de la cual existan indicios de incumplimiento de estas condiciones.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              4. OBJETO DEL SERVICIO Y ECOSISTEMA DIGITAL
            </h4>
            <p>
              El dominio <strong>vocationlove.com</strong> constituye el portal oficial informativo, editorial y de comunicación pública de la red. La aplicación interactiva y los servicios de red social entre usuarios operan a través del ecosistema oficial en <strong>vocationlove.app</strong>.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              5. NORMAS DE CONDUCTA Y USO ADECUADO
            </h4>
            <p>
              El usuario se compromete a hacer un uso lícito, diligente y respetuoso de la Plataforma. Queda expresamente prohibido: publicar contenido ilícito, ofensivo, amenazante, difamatorio, obsceno o que vulnere derechos de terceros; el acoso o intimidación a otros usuarios; el uso de bots, scrapers o sistemas automatizados de extracción de datos; y el uso de la Plataforma con fines comerciales no autorizados o envío de spam.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              6. CONTENIDO GENERADO POR EL USUARIO
            </h4>
            <p>
              El usuario conserva la propiedad de los contenidos (textos, fotografías, perfiles) que publique. Al compartirlos, otorga a VocationLove una licencia no exclusiva, mundial, libre de cánones y transferible para alojar, almacenar, reproducir y mostrar dicho contenido en el marco del funcionamiento del Servicio.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              7. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL
            </h4>
            <p>
              Todos los elementos de la Plataforma, incluidos logotipos, marcas comerciales ("VOCATIONLOVE", "SEEDS OF LOVE", "HOPE IN BLOOM", "DARE TO LOVE"), diseños editoriales, código fuente, fotografías de producción y elementos visuales, son propiedad exclusiva de VocationLove o de sus legítimos licenciantes.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              8. PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL
            </h4>
            <p>
              De conformidad con la normativa europea y nacional aplicable en materia de protección de datos (RGPD / LOPDGDD), VocationLove trata los datos personales recabados con estricta confidencialidad y bajo las medidas técnicas y organizativas adecuadas para garantizar la seguridad de la información.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              9. FINALIDAD DEL TRATAMIENTO DE DATOS
            </h4>
            <p>
              Los datos se tratan con las siguientes finalidades: gestión del registro y cuenta de usuario; prestación de los servicios de conexión y afinidad de la red social; atención de solicitudes, dudas o incidencias; y cumplimiento de obligaciones legales de seguridad y prevención de fraudes.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              10. BASE JURÍDICA DEL TRATAMIENTO
            </h4>
            <p>
              La base legal que legitima el tratamiento es la ejecución del contrato de prestación de servicios entre el usuario y la Plataforma, el consentimiento expreso otorgado para datos de perfil adicionales, y el interés legítimo en mantener la seguridad de la comunidad.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              11. CONSERVACIÓN DE LOS DATOS
            </h4>
            <p>
              Los datos personales se conservarán mientras se mantenga activa la cuenta del usuario y, posteriormente, durante los plazos legalmente exigibles para la prescripción de posibles responsabilidades civiles o contractuales.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              12. DESTINATARIOS Y TRANSFERENCIAS INTERNACIONALES
            </h4>
            <p>
              VocationLove no cederá datos a terceros salvo obligación legal expresa o cuando sea necesario para proveedores técnicos esenciales de infraestructura, garantizando en caso de transferencias internacionales cláusulas contractuales tipo aprobadas por las autoridades de control.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              13. EJERCICIO DE DERECHOS (ARCO)
            </h4>
            <p>
              El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición dirigiéndose mediante correo electrónico a <strong>privacy@vocationlove.com</strong>, acreditando debidamente su identidad.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              14. POLÍTICA DE COOKIES Y RASTREADORES
            </h4>
            <p>
              El portal vocationlove.com utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento del sitio y la preservación de preferencias de navegación segura, sin emplear mecanismos de rastreo intrusivo de terceros.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              15. MEDIDAS DE SEGURIDAD
            </h4>
            <p>
              Se aplican protocolos de cifrado robusto (HTTPS/TLS) y procedimientos internos de control de accesos para salvaguardar la integridad y disponibilidad de la información personal almacenada.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              16. LIMITACIÓN DE RESPONSABILIDAD
            </h4>
            <p>
              VocationLove no garantiza el resultado de las interacciones personales entre usuarios ni se hace responsable de la exactitud de las afirmaciones vertidas voluntariamente por los miembros de la red en sus perfiles individuales. Se recomienda actuar con la debida prudencia en los encuentros personales.
            </p>
          </div>

          {/* Section 17 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              17. SUSPENSIÓN Y RESOLUCIÓN DEL SERVICIO
            </h4>
            <p>
              VocationLove se reserva el derecho de retirar el acceso o dar de baja a aquellos usuarios que incumplan las presentes condiciones de uso, los principios éticos de la comunidad o la normativa vigente.
            </p>
          </div>

          {/* Section 18 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              18. LEY APLICABLE Y JURISDICCIÓN
            </h4>
            <p>
              Las relaciones entre el usuario y VocationLove se regirán por la legislación común aplicable. Salvo que la ley imperativa determine otro fuero, cualquier controversia se someterá a los juzgados y tribunales competentes.
            </p>
          </div>

          {/* Section 19 */}
          <div className="space-y-2 p-4 bg-neutral-100 border border-neutral-200 rounded-xs">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              19. MODIFICACIONES
            </h4>
            <p>
              VocationLove podrá actualizar o modificar estas condiciones en cualquier momento para adaptarlas a novedades normativas o técnicas. Las modificaciones serán publicadas oportunamente en este apartado.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-700">
              Contacto legal: <strong>privacy@vocationlove.com</strong>
              <br />
              Entidad: <strong>VocationLove Social network</strong>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Condiciones oficiales vigentes</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-950 text-white font-semibold uppercase tracking-wider text-xs rounded-xs hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Aceptar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
