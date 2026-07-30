import { ArrowRight, Eye } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';
import { localizedUrl, getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';

export default function Contact({ lang }) {
  const storeLang = useStore(langStore);
  const currentLang = getSupportedLocale(
    lang || (typeof window !== 'undefined' ? getLocaleFromPathname(window.location.pathname) : storeLang)
  );
  const t = (translations[currentLang] || translations.es).contactCta;
  const contactUrl = localizedUrl('/contacto', currentLang);

  return (
    <section id="contact" data-scroll-section="primary" data-scroll-key="contact" className="py-16 md:py-24 px-6 w-full border-t border-main-border/20 bg-card-bg/20">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            {/* TEXTOS */}
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight">
                {t.title}
              </h2>
              <p className="text-[16px] md:text-[17px] text-secondary-text leading-relaxed">
                {t.subtitle}
              </p>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col items-center md:items-start lg:items-end gap-5 flex-shrink-0 mt-4 md:mt-0">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full">
                <a 
                  href={contactUrl} 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-text text-main-bg font-semibold rounded-xl hover:bg-primary-text/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
                >
                  {t.contactBtn} <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  type="button"
                  data-doc-trigger
                  data-doc-mode="pdf"
                  data-doc-title="Currículum — Mathias Solar"
                  data-doc-src="/documentos/cv/mathias-solar-cv.pdf"
                  data-doc-filename="mathias-solar-cv.pdf"
                  data-doc-alt={t.cvAria || "Vista previa del currículum profesional de Mathias Solar"}
                  aria-haspopup="dialog"
                  aria-controls="doc-viewer-dialog"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-main-border/50 text-primary-text font-medium rounded-xl hover:bg-main-border/10 hover:border-accent-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-accent-cyan shrink-0" /> {t.cvBtn}
                </button>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}