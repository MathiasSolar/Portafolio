import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import EarthCanvas from '../canvas/EarthCanvas.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Hero() {
  const currentLang = useStore(langStore);
  const t = translations[currentLang].hero;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
      <EarthCanvas client:load />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-4xl relative z-10">
          <RevealSection>
            <h2 className="text-secondary-text font-mono text-sm md:text-base tracking-widest uppercase mb-4">{t.subtitle}</h2>
          </RevealSection>
          
          <RevealSection delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-8 hero-title text-primary-text whitespace-nowrap">
              Mathias Solar
            </h1>
          </RevealSection>
          
          <RevealSection delay={400}>
            <p className="text-base md:text-lg text-secondary-text max-w-2xl font-normal leading-relaxed mt-4">
              {t.desc}
            </p>
          </RevealSection>
          
          <RevealSection delay={600} className="mt-12 flex gap-6">
            <button onClick={() => scrollTo('projects')} className="flex items-center gap-2 text-primary-text pb-1 border-b border-primary-text hover:text-accent-cyan hover:border-accent-cyan transition-colors font-bold outline-none cursor-pointer">
              {t.btn} <ArrowRight className="w-4 h-4" />
            </button>
          </RevealSection>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
        <ChevronDown className="w-6 h-6 text-primary-text" />
      </div>
    </section>
  );
}