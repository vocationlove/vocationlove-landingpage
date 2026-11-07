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
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
          {/* Main Title Badge */}
          <div className="border-b border-neutral-200 pb-4">
            <div className="text-[11px] font-mono font-bold tracking-widest text-neutral-500 uppercase mb-1">
              OFFICIAL BINDING DOCUMENT
            </div>
            <h2 className="font-cinzel text-lg sm:text-xl font-bold uppercase text-neutral-950 tracking-wide">
              VOCATIONLOVE.COM – TERMS OF USE AND PRIVACY POLICY
            </h2>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              1. CONTROLLER IDENTITY
            </h4>
            <p>
              VocationLove (hereinafter, "VocationLove", the "Platform", or the "Service") is a social network and dating platform designed to facilitate connections between individuals interested in establishing personal, romantic, or family relationships.
            </p>
            <p>
              For any matter related to privacy or data protection, users may contact:
            </p>
            <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xs flex items-center gap-2 font-mono text-xs text-neutral-900">
              <Mail className="w-4 h-4 text-neutral-600" />
              <span>Email: <strong>privacy@vocationlove.com</strong></span>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
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
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              3. ACCESS REQUIREMENTS
            </h4>
            <p>
              The use of VocationLove is exclusively reserved for individuals aged 18 years or older.
            </p>
            <p>
              By registering, the user declares and warrants that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>They are at least 18 years old;</li>
              <li>They have the legal capacity to enter into binding agreements;</li>
              <li>The information provided is truthful, accurate, and up to date; and</li>
              <li>They will not impersonate any third party.</li>
            </ul>
            <p>
              VocationLove may suspend or terminate any account where there are indications of non-compliance with these Terms.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
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
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              5. RULES OF CONDUCT AND PROPER USE
            </h4>
            <p>
              Users agree to use the Platform lawfully, diligently, and respectfully.
            </p>
            <p>
              The following activities are expressly prohibited:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Publishing unlawful, offensive, threatening, defamatory, obscene content, or content that infringes the rights of third parties;</li>
              <li>Harassing or intimidating other users;</li>
              <li>Using bots, scrapers, or automated data extraction systems;</li>
              <li>Using the Platform for unauthorized commercial purposes or sending spam.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
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
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              7. INTELLECTUAL AND INDUSTRIAL PROPERTY RIGHTS
            </h4>
            <p>
              All elements of the Platform, including logos, trademarks ("VOCATIONLOVE," "SEEDS OF LOVE," "HOPE IN BLOOM," and "DARE TO LOVE"), editorial designs, source code, production photography, and visual assets, are the exclusive property of VocationLove or its lawful licensors.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              8. PERSONAL DATA PROTECTION
            </h4>
            <p>
              In accordance with applicable European and national data protection regulations (GDPR / LOPDGDD), VocationLove processes personal data collected with strict confidentiality and under appropriate technical and organizational measures designed to ensure the security of the information.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              9. PURPOSES OF DATA PROCESSING
            </h4>
            <p>
              Personal data are processed for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Managing user registration and accounts;</li>
              <li>Providing social networking, matching, and connection services;</li>
              <li>Responding to inquiries, requests, and support issues;</li>
              <li>Complying with legal obligations, security requirements, and fraud prevention measures.</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              10. LEGAL BASIS FOR PROCESSING
            </h4>
            <p>
              The legal bases that justify the processing of personal data are:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>The performance of the service agreement between the user and the Platform;</li>
              <li>The user's explicit consent regarding additional profile information; and</li>
              <li>VocationLove's legitimate interest in maintaining the security and integrity of the community.</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              11. DATA RETENTION
            </h4>
            <p>
              Personal data will be retained for as long as the user's account remains active and thereafter for any legally required periods necessary to address potential civil, contractual, or legal liabilities.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
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
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              13. EXERCISE OF DATA SUBJECT RIGHTS
            </h4>
            <p>
              Users may exercise their rights of access, rectification, erasure, restriction of processing, data portability, and objection at any time by sending an email to:
            </p>
            <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xs font-mono text-xs text-neutral-900">
              <strong>privacy@vocationlove.com</strong>
            </div>
            <p>
              Users may be required to provide adequate proof of identity before such requests are processed.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              14. COOKIES AND TRACKING POLICY
            </h4>
            <p>
              The portal <strong>vocationlove.com</strong> uses only strictly necessary technical cookies for the operation of the website and the preservation of secure browsing preferences, without employing intrusive third-party tracking mechanisms.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              15. SECURITY MEASURES
            </h4>
            <p>
              Robust encryption protocols (HTTPS/TLS) and internal access-control procedures are implemented to safeguard the integrity, confidentiality, and availability of stored personal information.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
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
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              17. SUSPENSION AND TERMINATION OF THE SERVICE
            </h4>
            <p>
              VocationLove reserves the right to suspend access to, or terminate the accounts of, users who violate these Terms of Use, the ethical principles of the community, or applicable laws and regulations.
            </p>
          </div>

          {/* Section 18 */}
          <div className="space-y-2">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
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
          <div className="space-y-2 p-4 bg-neutral-100 border border-neutral-200 rounded-xs">
            <h4 className="font-cinzel font-bold text-neutral-950 text-sm uppercase tracking-wide">
              19. MODIFICATIONS
            </h4>
            <p>
              VocationLove may update or modify these Terms at any time in order to adapt them to legal, regulatory, or technical developments.
            </p>
            <p>
              Any changes will be duly published in this section.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-700">
              Legal Contact: <strong>privacy@vocationlove.com</strong>
              <br />
              Entity: <strong>VocationLove Social Network</strong>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Terms & Policy Active</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-950 text-white font-semibold uppercase tracking-wider text-xs rounded-xs hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Accept & Close
          </button>
        </div>
      </div>
    </div>
  );
};
