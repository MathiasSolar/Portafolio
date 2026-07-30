import { ArrowRight, ChevronDown } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';
import { getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';

export default function Hero({ children, lang }) {
  const storeLang = useStore(langStore);
  const currentLang = getSupportedLocale(
    lang || (typeof window !== 'undefined' ? getLocaleFromPathname(window.location.pathname) : storeLang)
  );
  const t = (translations[currentLang] || translations.es).hero;

  return (
    <section id="hero" data-scroll-section="primary" data-scroll-key="hero" className="min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
      {/* Contenedor optimizado original (Restaurado desde HEAD, mantiene children) */}
      <div className="absolute inset-0 w-full h-full earth-isolate pointer-events-auto">
        {children}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-4xl relative z-10">
          <RevealSection>
            <h2 className="text-secondary-text font-mono text-sm md:text-base tracking-widest uppercase mb-4">{t.subtitle}</h2>
          </RevealSection>
          
          <RevealSection delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-8 hero-title text-primary-text">
              Mathias Solar
            </h1>
          </RevealSection>
          
          <RevealSection delay={400}>
            <p className="text-base md:text-lg text-secondary-text max-w-2xl font-normal leading-relaxed mt-4">
              {t.desc}
            </p>
          </RevealSection>
          
          <RevealSection delay={600} className="mt-12 flex gap-6">
            <a href="#projects" className="inline-flex items-center gap-2 text-primary-text pb-1 border-b border-primary-text hover:text-accent-cyan hover:border-accent-cyan transition-colors font-bold outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm">
              {t.btn} <ArrowRight className="w-4 h-4" />
            </a>
          </RevealSection>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
        <ChevronDown className="w-6 h-6 text-primary-text" aria-label={t.scrollAria || "Desplazarse hacia abajo"} />
      </div>
    </section>
  );
}