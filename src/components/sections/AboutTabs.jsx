import { useState, useEffect } from 'react';
import { ChevronDown, Code, RefreshCw, LayoutTemplate, Database, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';
import { localizedUrl, getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';
import { TECHNOLOGIES } from '../../data/technologies';

/** @typedef {import("../../data/technologies").TechnologyKey} TechnologyKey */

/**
 * @typedef {Object} AboutTechnology
 * @property {string} id
 * @property {string} name
 * @property {TechnologyKey} catalogKey
 */

export default function EngineeringProfile({ lang }) {
  const storeLang = useStore(langStore);
  const currentLang = getSupportedLocale(
    lang || (typeof window !== 'undefined' ? getLocaleFromPathname(window.location.pathname) : storeLang)
  );
  const t = (translations[currentLang] || translations.es).about;

  const CATEGORIES = [
    { id: 'perfil-pensamiento', num: '01', key: 'thinking', title: t.categories?.thinking || 'Pensamiento' },
    { id: 'perfil-capacidades', num: '02', key: 'capabilities', title: t.categories?.capabilities || 'Capacidades' },
    { id: 'perfil-herramientas', num: '03', key: 'tools', title: t.categories?.tools || 'Herramientas' },
    { id: 'perfil-formacion', num: '04', key: 'education', title: t.categories?.education || 'Formación' }
  ];

  const thinkingSteps = t.thinking?.steps || [];
  const capabilityItems = (t.capabilities?.items || []).map((item, idx) => {
    const icons = [Code, RefreshCw, LayoutTemplate, Database, Users];
    return { ...item, icon: icons[idx % icons.length] };
  });

  const studyLabels = t.education?.labels || {};
  const studyItems = t.education?.items || [];

  // Estado inicial vacío para SSR seguro.
  const [activeId, setActiveId] = useState('perfil-pensamiento'); 
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeCap, setActiveCap] = useState(0);

  // Hidratación y lectura inicial segura de hash
  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.substring(1);
    const isValid = CATEGORIES.some(c => c.id === hash);
    if (isValid) {
      setActiveId(hash);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (CATEGORIES.some(c => c.id === hash)) {
        setActiveId(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [mounted]);

  const handleSelect = (id) => {
    setActiveId(id);
    if (mounted) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const studyLogos = ["/logo-utfsm.png", "/logo-usach.png", "/logo-udemy.png"];

  /** @type {AboutTechnology[]} */
  const techConfig = [
    { id: 'react', name: 'React', catalogKey: 'react' },
    { id: 'js', name: 'JavaScript', catalogKey: 'javascript' },
    { id: 'node', name: 'Node.js', catalogKey: 'nodejs' },
    { id: 'python', name: 'Python', catalogKey: 'python' },
    { id: 'django', name: 'Django', catalogKey: 'django' },
    { id: 'laravel', name: 'Laravel', catalogKey: 'laravel' },
    { id: 'astro', name: 'Astro', catalogKey: 'astro' },
    { id: 'postgresql', name: 'PostgreSQL', catalogKey: 'postgresql' },
    { id: 'mysql', name: 'SQL / MySQL', catalogKey: 'mysql' },
    { id: 'firebase', name: 'Firebase', catalogKey: 'firebase' },
    { id: 'analytics', name: 'Google Analytics', catalogKey: 'google-analytics' },
    { id: 'powerbi', name: 'Power BI', catalogKey: 'powerbi' },
    { id: 'wp', name: 'WordPress', catalogKey: 'wordpress' },
    { id: 'docker', name: 'Docker', catalogKey: 'docker' },
    { id: 'linux', name: 'Linux', catalogKey: 'linux' },
    { id: 'git', name: 'Git', catalogKey: 'git' }
  ];

  const ecosystems = [
    {
      title: t.tools?.categories?.software || "Desarrollo de software",
      main: 'react',
      techs: ['js', 'node', 'python', 'django', 'laravel', 'astro'],
      colSpan: 'md:col-span-2'
    },
    {
      title: t.tools?.categories?.data || "Datos y analítica",
      main: 'postgresql',
      techs: ['mysql', 'firebase', 'analytics', 'powerbi'],
      colSpan: 'md:col-span-1'
    },
    {
      title: t.tools?.categories?.infra || "Plataformas e infraestructura",
      main: 'docker',
      techs: ['linux', 'git', 'wp'],
      colSpan: 'md:col-span-1'
    }
  ];

  return (
    <section id="about" data-scroll-section="primary" data-scroll-key="about" className="py-12 md:py-20 px-6 relative z-10 w-full bg-surface-soft/40 text-text-main">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10 text-center lg:text-left">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-text-main">{t.title}</h2>
          </RevealSection>
          <RevealSection delay={200}>
            <p className="text-text-muted text-[15px] md:text-[17px] max-w-[650px] mx-auto lg:mx-0 leading-[1.6]">{t.subtitle}</p>
          </RevealSection>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full relative">
          
          {/* ÍNDICE LATERAL (ESCRITORIO) */}
          <RevealSection delay={300} className="hidden lg:flex flex-col w-full lg:w-1/4 shrink-0 gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeId === cat.id;
              return (
                <button
                  key={`desktop-${cat.id}`}
                  onClick={() => handleSelect(cat.id)}
                  aria-expanded={isActive}
                  aria-controls={`panel-${cat.id}`}
                  className={`
                    w-full text-left py-2.5 flex items-center gap-3.5 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-main relative
                    ${isActive 
                      ? 'text-text-main font-bold pl-4 border-l-[3px] border-accent-cyan' 
                      : 'text-text-muted hover:text-text-main font-medium pl-4 border-l-[3px] border-transparent'}
                  `}
                >
                  <span className={`text-xs tracking-widest ${isActive ? 'text-accent-cyan' : 'text-text-muted/50'}`}>{cat.num}</span>
                  <span className="text-[15px]">{cat.title}</span>
                </button>
              );
            })}
          </RevealSection>

          {/* CONTENIDO Y ACORDEÓN (MÓVIL E HÍBRIDO) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-0 lg:min-h-[430px]">
            {CATEGORIES.map((cat, index) => {
              const isActive = activeId === cat.id;
              
              return (
                <RevealSection key={`content-${cat.id}`} delay={400 + (index * 100)} className="w-full">
                  
                  {/* BOTÓN ACORDEÓN MÓVIL */}
                  <button
                    onClick={() => handleSelect(cat.id)}
                    aria-expanded={isActive}
                    aria-controls={`panel-${cat.id}`}
                    className={`
                      lg:hidden w-full text-left px-5 py-4 rounded-xl flex items-center justify-between transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-main
                      ${isActive ? 'bg-main-border/10 text-text-main font-bold border border-main-border/10' : 'bg-transparent text-text-muted hover:bg-main-border/5 border border-main-border/10'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono ${isActive ? 'text-accent-cyan' : 'text-text-muted/50'}`}>{cat.num}</span>
                      <span className="text-[15px]">{cat.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180 text-accent-cyan' : 'opacity-50'}`} />
                  </button>

                  {/* PANEL DE CONTENIDO */}
                  <div
                    id={`panel-${cat.id}`}
                    role="region"
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isActive ? 'opacity-100 max-h-[2000px] mt-4 lg:mt-0 translate-y-0' : 'opacity-0 max-h-0 lg:max-h-0 -translate-y-2 pointer-events-none hidden lg:block'}
                    `}
                  >
                    
                    <div className={`
                      w-full bg-transparent
                      ${isActive ? 'block' : 'hidden'}
                    `}>
                      
                      {/* --- CONTENIDO: PENSAMIENTO --- */}
                      {cat.id === 'perfil-pensamiento' && (
                        <div className="flex flex-col gap-4 md:gap-6 max-w-[850px]">
                          <h3 className="text-[26px] font-bold text-text-main mb-2 hidden lg:block">{cat.title}</h3>
                          
                          {/* SELECTOR INTERACTIVO */}
                          {mounted && (
                            <div className="flex flex-nowrap lg:flex-wrap items-center overflow-x-auto lg:overflow-visible pb-1 snap-x snap-mandatory lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                              {thinkingSteps.map((step, idx) => (
                                <button
                                  key={`step-btn-${idx}`}
                                  onClick={() => setActiveStep(idx)}
                                  className={`relative flex flex-col justify-center gap-1 pb-1 pt-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-main shrink-0 snap-start mr-5 md:mr-8 group`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className={`text-[12px] font-mono ${activeStep === idx ? 'text-accent-cyan font-bold' : 'text-text-muted/70 group-hover:text-text-muted'}`}>{step.num}</span>
                                    <span className={`text-[14px] md:text-[14.5px] whitespace-nowrap ${activeStep === idx ? 'text-text-main font-bold' : 'text-text-muted group-hover:text-text-main font-medium'}`}>{step.shortTitle}</span>
                                  </div>
                                  <div className={`h-[2px] rounded-full transition-all duration-300 ${activeStep === idx ? 'w-full bg-accent-cyan' : 'w-0 bg-transparent'}`}></div>
                                </button>
                              ))}
                            </div>
                          )}

                          {/* CONTENIDO */}
                          <div className="flex flex-col">
                            {thinkingSteps.map((step, idx) => {
                              if (activeStep !== idx) return null;
                              
                              const ContentWrapper = motion.div;
                              const animationProps = {
                                initial: mounted ? { opacity: 0, y: 4 } : false,
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.2 }
                              };

                              return (
                                <ContentWrapper
                                  key={`step-content-${idx}`}
                                  {...animationProps}
                                  className={`flex flex-col gap-4 md:gap-5 pt-3 md:pt-4`}
                                >
                                  <h4 className="text-[22px] md:text-[26px] font-bold text-text-main leading-tight">{step.title}</h4>
                                  
                                  <p className="text-[16px] md:text-[17px] leading-[1.65] text-text-muted max-w-[750px]">
                                    {step.text}
                                  </p>
                                  
                                  <div className="mt-2 flex flex-col gap-1.5">
                                    <span className="text-[11px] uppercase tracking-widest text-text-muted/60 font-bold flex items-center gap-2">
                                      <span className="w-1 h-1 rounded-full bg-accent-cyan"></span>
                                      {step.criteriaLabel || "Criterio"}
                                    </span>
                                    <p className="text-[15px] italic text-text-muted leading-relaxed">{step.criteria}</p>
                                  </div>
                                </ContentWrapper>
                              );
                            })}
                          </div>

                          {/* ENLACE DISCRETO A PÁGINA SOBRE MÍ */}
                          <div className="pt-3 border-t border-main-border/10">
                            <a 
                              href={localizedUrl('/sobre-mi', currentLang)} 
                              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                            >
                              <span>{t.thinking?.moreAboutMe || "Conocer más sobre mí"}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      )}

                      {/* --- CONTENIDO: CAPACIDADES --- */}
                      {cat.id === 'perfil-capacidades' && (
                        <div className="flex flex-col gap-4 md:gap-6 max-w-[850px]">
                          <h3 className="text-[26px] font-bold text-text-main mb-2 hidden lg:block">{cat.title}</h3>
                          
                          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                            
                            {/* SELECTOR INTERACTIVO */}
                            {mounted && (
                              <div className="flex md:flex-col items-stretch gap-1 md:gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory md:snap-none w-full md:w-[32%] shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {capabilityItems.map((cap, idx) => {
                                  const Icon = cap.icon;
                                  return (
                                    <button
                                      key={`cap-btn-${idx}`}
                                      onClick={() => setActiveCap(idx)}
                                      className={`relative flex items-center gap-2 md:gap-3 py-2.5 md:py-3 w-full text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-main shrink-0 snap-start group`}
                                    >
                                      <div className={`hidden md:flex transition-colors`}>
                                        <Icon className={`w-[18px] h-[18px] ${activeCap === idx ? 'text-accent-cyan' : 'opacity-40 group-hover:opacity-70'}`} />
                                      </div>
                                      <span className={`text-[12px] font-mono md:hidden ${activeCap === idx ? 'text-accent-cyan font-bold' : 'text-text-muted/70 group-hover:text-text-muted'}`}>{cap.num}</span>
                                      <span className={`text-[14px] md:text-[13.5px] lg:text-[14px] whitespace-nowrap md:whitespace-normal leading-tight ${activeCap === idx ? 'text-text-main font-bold' : 'text-text-muted font-medium group-hover:text-text-main'}`}>{cap.shortTitle}</span>
                                      
                                      {activeCap === idx && (
                                        <div className="absolute left-0 right-0 bottom-0 h-[2px] md:hidden bg-accent-cyan rounded-full"></div>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            )}

                            {/* CONTENIDO DE CAPACIDAD */}
                            <div className="flex flex-col w-full md:w-[68%]">
                              {capabilityItems.map((cap, idx) => {
                                if (activeCap !== idx) return null;
                                
                                const ContentWrapper = motion.div;
                                const animationProps = {
                                  initial: mounted ? { opacity: 0, y: 4 } : false,
                                  animate: { opacity: 1, y: 0 },
                                  transition: { duration: 0.2 }
                                };

                                return (
                                  <ContentWrapper
                                    key={`cap-content-${idx}`}
                                    {...animationProps}
                                    className={`flex flex-col gap-4 md:gap-5 pt-2 md:pt-1`}
                                  >
                                    <div className="flex flex-col gap-2">
                                      <span className="text-[12px] font-mono tracking-widest text-text-muted/70 uppercase">
                                        <span className="text-accent-cyan/80 mr-2">{cap.num}</span> 
                                        {cap.shortTitle}
                                      </span>
                                      <h4 className="text-[20px] md:text-[24px] font-bold text-text-main leading-tight">{cap.title}</h4>
                                    </div>
                                    
                                    <p className="text-[16px] md:text-[16.5px] leading-[1.65] text-text-muted max-w-[600px]">
                                      {cap.text}
                                    </p>
                                    
                                    <div className="mt-2 flex flex-col gap-1.5">
                                      <span className="text-[11px] uppercase tracking-widest text-text-muted/60 font-bold flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-accent-cyan"></span>
                                        {cap.aporteLabel || "Aporte"}
                                      </span>
                                      <p className="text-[15px] font-medium text-text-main/90 leading-relaxed">{cap.aporte}</p>
                                    </div>
                                  </ContentWrapper>
                                );
                              })}
                            </div>
                            
                            {/* Enlace editorial a /capacidades */}
                            <div className="pt-4 border-t border-main-border/10 mt-2">
                              <a
                                href={localizedUrl('/capacidades', currentLang)}
                                className="inline-flex items-center gap-2 text-[14px] md:text-[14.5px] font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors focus-visible:outline-none focus-visible:underline rounded-xs"
                              >
                                {t.capabilities?.viewMore || 'Ver capacidades y herramientas'} <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* --- CONTENIDO: HERRAMIENTAS --- */}
                      {cat.id === 'perfil-herramientas' && (
                        <div className="flex flex-col gap-6 max-w-[850px]">
                          <h3 className="text-[26px] font-bold text-text-main mb-1 hidden lg:block">{cat.title}</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ecosystems.map((eco, idx) => {
                              const mainTech = techConfig.find(t => t.id === eco.main);
                              const mainCatalogTech = mainTech ? TECHNOLOGIES[mainTech.catalogKey] : undefined;
                              return (
                                <div key={idx} className={`flex flex-col gap-4 p-5 rounded-xl bg-surface-soft/40 border border-main-border/10 transition-colors hover:bg-surface-soft/60 ${eco.colSpan}`}>
                                  <h4 className="text-[12.5px] font-bold text-text-muted uppercase tracking-widest">{eco.title}</h4>
                                  <div className="flex flex-wrap items-center gap-3">
                                    {mainTech && (
                                      <div className="flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-soft border border-main-border/10 rounded-lg">
                                        {mainCatalogTech?.icon && (
                                          <img src={mainCatalogTech.icon} alt="" aria-hidden="true" className={`w-[20px] h-[20px] object-contain ${mainCatalogTech.darkClass || ""}`} />
                                        )}
                                        <span className="text-[14.5px] font-bold text-text-main">{mainTech.name}</span>
                                      </div>
                                    )}
                                    <div className="w-[1px] h-4 bg-main-border/20 hidden sm:block mx-0.5"></div>
                                    {eco.techs.map((techId) => {
                                      const tech = techConfig.find(t => t.id === techId);
                                      if (!tech) return null;
                                      const catalogTech = TECHNOLOGIES[tech.catalogKey];
                                      return (
                                        <div key={tech.id} className="flex items-center gap-2 px-2.5 py-1 border border-main-border/10 rounded-md bg-transparent hover:bg-main-border/5 transition-colors">
                                          {catalogTech?.icon && (
                                            <img src={catalogTech.icon} alt="" aria-hidden="true" className={`w-[14px] h-[14px] object-contain opacity-90 ${catalogTech.darkClass || ""}`} />
                                          )}
                                          <span className="text-[13px] font-medium text-text-main">{tech.name}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Enlace editorial a /capacidades */}
                          <div className="pt-4 border-t border-main-border/10 mt-1">
                            <a
                              href={localizedUrl('/capacidades', currentLang)}
                              className="inline-flex items-center gap-2 text-[14px] md:text-[14.5px] font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors focus-visible:outline-none focus-visible:underline rounded-xs"
                            >
                              {t.tools?.viewMore || 'Ver capacidades y herramientas'} <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      )}

                      {/* --- CONTENIDO: FORMACIÓN --- */}
                      {cat.id === 'perfil-formacion' && (
                        <div className="flex flex-col gap-4 md:gap-6 max-w-[850px]">
                          <h3 className="text-[26px] font-bold text-text-main mb-2 hidden lg:block">{cat.title}</h3>
                          
                          <div className="flex flex-col gap-5 md:gap-6">
                            {/* Nivel 1: UTFSM */}
                            {studyItems[0] && (
                              <div className="flex flex-col sm:flex-row items-start gap-5 p-6 md:p-7 rounded-xl bg-surface-soft/40 border border-main-border/10 relative overflow-hidden">
                                <div className="bg-surface-soft p-3 rounded-lg shrink-0 border border-main-border/10">
                                  <img src={studyLogos[0]} alt="UTFSM" className="w-12 h-12 md:w-14 md:h-14 object-contain"/>
                                </div>
                                <div className="flex flex-col gap-1.5 z-10">
                                  <span className="text-[12px] font-mono tracking-widest text-accent-cyan uppercase font-bold">{studyLabels.degree || "Título profesional"}</span>
                                  <h4 className="text-[20px] md:text-[23px] font-bold text-text-main leading-tight">{studyItems[0].title}</h4>
                                  <span className="text-[15.5px] md:text-[16.5px] font-medium text-text-main/90">{studyItems[0].desc}</span>
                                  {studyItems[0].details && <p className="text-[14.5px] text-text-muted mt-1 leading-[1.65] max-w-[600px]">{studyItems[0].details}</p>}
                                </div>
                              </div>
                            )}

                            {/* Nivel 2: USACH */}
                            {studyItems[1] && (
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border border-main-border/10 bg-surface-soft/30 transition-colors hover:bg-surface-soft/50">
                                <div className="bg-surface-soft p-2.5 rounded-lg shrink-0 border border-main-border/10">
                                  <img src={studyLogos[1]} alt="USACH" className="w-9 h-9 object-contain"/>
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                                    <h4 className="text-[17px] md:text-[18px] font-bold text-text-main leading-tight">{studyItems[1].title}</h4>
                                    <span className="text-[11px] font-mono tracking-widest text-text-muted/80 uppercase shrink-0 bg-main-border/10 px-2.5 py-0.5 rounded-md w-fit sm:w-auto">{studyLabels.diploma || "Diplomado"}</span>
                                  </div>
                                  <span className="text-[15px] font-medium text-text-main/90">{studyItems[1].desc}</span>
                                  {studyItems[1].details && <p className="text-[14.5px] text-text-muted leading-[1.6] max-w-[600px] mt-0.5">{studyItems[1].details}</p>}
                                </div>
                              </div>
                            )}

                            {/* Nivel 3: Formación Continua */}
                            {studyItems[2] && (
                              <div className="flex items-center gap-3.5 py-3 px-4 rounded-xl border border-main-border/10 bg-surface-soft/20 opacity-90 hover:opacity-100 transition-opacity">
                                <div className="bg-surface-soft p-1.5 rounded-md shrink-0 border border-main-border/10">
                                  <img src={studyLogos[2]} alt="Formación Continua" className="w-6 h-6 object-contain"/>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 w-full">
                                  <span className="text-[10px] font-mono tracking-widest text-text-muted/60 uppercase shrink-0 sm:w-[150px]">{studyLabels.ongoing || "Formación continua"}</span>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                                    <h4 className="text-[14.5px] md:text-[15px] font-semibold text-text-main leading-none">{studyItems[2].title}</h4>
                                    <span className="hidden sm:block text-text-muted/40 text-[12px]">•</span>
                                    <span className="text-[13.5px] text-text-muted leading-tight md:leading-none">{studyItems[2].desc}</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Enlace editorial a /formacion */}
                            <div className="pt-4 border-t border-main-border/10 mt-1">
                              <a
                                href={localizedUrl('/formacion', currentLang)}
                                className="inline-flex items-center gap-2 text-[14px] md:text-[14.5px] font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors focus-visible:outline-none focus-visible:underline rounded-xs"
                              >
                                {t.education?.viewMore || 'Ver formación y credenciales'} <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                      
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}