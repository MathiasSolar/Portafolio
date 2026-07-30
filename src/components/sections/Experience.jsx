import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';
import { getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';
import RevealSection from '../ui/RevealSection.jsx';
import { ChevronDown } from 'lucide-react';

/**
 * Microcomponente reutilizable para renderizar cada bloque de experiencia.
 */
function ExperienceDetail({ exp, labels, compact = false }) {
  return (
    <div className={`flex flex-col ${compact ? 'gap-4 md:gap-5' : 'gap-5 md:gap-7'} w-full`}>
      {/* Cabecera del detalle */}
      <div className={`flex flex-col sm:flex-row sm:items-start ${compact ? 'gap-3 md:gap-4' : 'gap-4 md:gap-5'}`}>
        {exp.logo && !compact && (
          <div className="bg-white p-2.5 md:p-3 rounded-xl shadow-sm border border-black/5 w-fit shrink-0 mt-1">
            <img src={exp.logo} alt={exp.organization} className="h-9 md:h-11 w-auto object-contain" />
          </div>
        )}
        
        <div className="flex flex-col gap-1">
          <h3 className={`${compact ? 'text-[18px] md:text-[20px]' : 'text-[20px] md:text-[24px] lg:text-[26px]'} font-bold text-primary-text leading-tight`}>
            {exp.role}
          </h3>
          <h4 className={`${compact ? 'text-[14px] md:text-[15px]' : 'text-[15px] md:text-[16px]'} font-semibold text-accent-cyan`}>
            {exp.organization}
          </h4>
          
          <div className={`flex items-center flex-wrap gap-2 ${compact ? 'mt-1 md:mt-1.5 text-[13px]' : 'mt-1 md:mt-1.5 text-[13.5px] md:text-[14px]'}`}>
            <span className="md:hidden font-mono text-[11px] uppercase text-muted-text bg-main-border/10 px-2 py-0.5 rounded border border-main-border/30">
              {exp.period}
            </span>
            <span className="font-medium text-secondary-text">
              {exp.location}
            </span>
          </div>
        </div>
      </div>

      {/* Resumen y Responsabilidades */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-3.5 mb-2">
          <div className="flex items-center gap-4">
            <h4 className="text-[12px] font-mono uppercase tracking-widest text-muted-text font-bold">
              {labels.summaryLabel || "Resumen"}
            </h4>
            <div className="h-[1px] flex-grow bg-main-border/20"></div>
          </div>
          <p className={`${compact ? 'text-[15px] md:text-[15.5px]' : 'text-[15.5px] md:text-[16.5px]'} text-primary-text/90 leading-[1.7] max-w-[700px]`}>
            {exp.summary}
          </p>
        </div>

        {exp.details && exp.details.length > 0 && (
          <details className="group border-t border-main-border/20 mt-1">
            <summary className={`flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden ${compact ? 'text-[13.5px]' : 'text-[14.5px]'} font-medium text-secondary-text hover:text-primary-text transition-colors py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 rounded-sm select-none`}>
              <span className="group-open:hidden">{labels.showDetails || "Ver responsabilidades y aportes"}</span>
              <span className="hidden group-open:block">{labels.hideDetails || "Ocultar responsabilidades y aportes"}</span>
              <ChevronDown className="w-4 h-4 text-accent-cyan transition-transform duration-300 group-open:rotate-180" />
            </summary>
            
            <div className={`pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-10`}>
              {exp.details.map((area, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h5 className="text-[12px] font-mono tracking-widest uppercase text-muted-text font-bold">{area.title}</h5>
                  <ul className="flex flex-col gap-2.5">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent-cyan/40 shrink-0"></div>
                        <p className={`${compact ? 'text-[14px]' : 'text-[14.5px]'} text-secondary-text leading-[1.65]`}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}

export default function Experience({ lang }) {
  const storeLang = useStore(langStore);
  const currentLang = getSupportedLocale(
    lang || (typeof window !== 'undefined' ? getLocaleFromPathname(window.location.pathname) : storeLang)
  );
  const t = (translations[currentLang] || translations.es).experience;
  const jobsList = t.jobs || [];

  const logoMap = {
    'gore-aysen': '/logo-gore.png'
  };

  const experienceData = jobsList.map(j => ({
    ...j,
    logo: logoMap[j.id] || '/logo-gore.png'
  }));

  return (
    <section id="experience" data-scroll-section="primary" data-scroll-key="experience" className="pt-20 pb-12 md:pt-24 md:pb-16 px-6 w-full bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
          <RevealSection>
            <h2 className="text-3xl md:text-[40px] font-bold text-primary-text tracking-tight leading-tight">
              {t.title}
            </h2>
          </RevealSection>
          <RevealSection delay={100}>
            <p className="text-[16px] md:text-[18px] text-secondary-text max-w-[650px] leading-relaxed mx-auto md:mx-0">
              {t.subtitle}
            </p>
          </RevealSection>
        </div>

        {/* ESTRUCTURA BASE ESCALABLE */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          
          {/* LISTA DE EXPERIENCIAS (Izquierda ~28%) */}
          <div className="hidden md:flex flex-col w-[28%] shrink-0 border-l border-main-border/20">
            {experienceData.map((exp, idx) => {
              const isActive = idx === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`flex flex-col gap-1 pl-6 py-2.5 relative transition-colors ${isActive ? 'bg-main-border/5' : 'opacity-60 hover:opacity-100'}`}
                >
                  {isActive && (
                    <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-accent-cyan rounded-r"></div>
                  )}
                  
                  <span className={`text-[12px] font-mono tracking-widest uppercase ${isActive ? 'text-accent-cyan' : 'text-muted-text'}`}>
                    {exp.period}
                  </span>
                  <h3 className={`text-[15px] lg:text-[16px] font-bold ${isActive ? 'text-primary-text' : 'text-secondary-text'}`}>
                    {exp.organization}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* DETALLES DE EXPERIENCIA (Derecha ~72%) */}
          <div className="w-full md:w-[72%] flex flex-col gap-10">
            
            {experienceData.length > 0 && (
              <ExperienceDetail exp={experienceData[0]} labels={t} compact={false} />
            )}

            {experienceData.length > 1 && (
              <details className="group border-t border-main-border/20 mt-2">
                <summary className="flex items-center gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[15px] font-bold text-primary-text hover:text-accent-cyan transition-colors py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 rounded-sm select-none">
                  <span className="group-open:hidden">{t.showPast || "Ver experiencias anteriores"}</span>
                  <span className="hidden group-open:block">{t.hidePast || "Ocultar experiencias anteriores"}</span>
                  <ChevronDown className="w-4 h-4 text-accent-cyan transition-transform duration-300 group-open:rotate-180" />
                </summary>
                
                <div className="flex flex-col gap-12 pt-6 pb-4">
                  {experienceData.slice(1).map((exp, idx) => (
                    <div key={`past-${exp.id}`} className="flex flex-col relative">
                      <ExperienceDetail exp={exp} labels={t} compact={true} />
                      
                      {idx !== experienceData.length - 2 && (
                        <div className="h-[1px] w-full bg-main-border/10 mt-10"></div>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
