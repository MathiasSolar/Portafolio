import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';
import RevealSection from '../ui/RevealSection.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import { PROJECTS_DATA } from '../../data/projects.js';
import { ArrowRight } from 'lucide-react';
import { localizedUrl, getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';

export default function Projects({ lang }) {
  const storeLang = useStore(langStore);
  const currentLang = getSupportedLocale(
    lang || (typeof window !== 'undefined' ? getLocaleFromPathname(window.location.pathname) : storeLang)
  );
  const t = (translations[currentLang] || translations.es).projects;

  const featuredProjects = PROJECTS_DATA.filter(p => p.featured);
  const projectsUrl = localizedUrl('/proyectos', currentLang);

  return (
    <section id="projects" data-scroll-section="primary" data-scroll-key="projects" className="py-12 md:py-20 px-6 relative z-10 w-full bg-surface-soft/40">
      <div className="max-w-7xl mx-auto flex flex-col editorial-section">
        
        {/* ENCABEZADO EDITORIAL */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 border-b border-main-border/30 pb-4 md:pb-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <RevealSection>
                <h2 className="text-2xl md:text-[32px] font-bold text-primary-text tracking-tight leading-tight">
                  {t.title}
                </h2>
              </RevealSection>
            </div>
            <RevealSection delay={100}>
              <p className="text-[15px] md:text-[16px] text-secondary-text max-w-[600px] leading-relaxed">
                {t.subtitle}
              </p>
            </RevealSection>
          </div>
          
          <RevealSection delay={200} className="hidden md:block">
            <a href={projectsUrl} className="inline-flex items-center gap-2 text-[14px] font-medium text-accent-cyan hover:text-accent-cyan/80 transition-colors focus-visible:outline-none focus-visible:underline">
              {t.viewAll || "Ver todos los proyectos"} <ArrowRight className="w-4 h-4" />
            </a>
          </RevealSection>
        </div>

        {/* LISTA COMPACTA DE PROYECTOS */}
        <div className="flex flex-col gap-4">
          {featuredProjects.map((proj, idx) => (
            <div key={proj.slug}>
              <RevealSection delay={100 + (idx * 50)}>
                <ProjectCard project={proj} variant="compact" index={idx + 1} lang={currentLang} />
              </RevealSection>
            </div>
          ))}
        </div>

        {/* ENLACE MÓVIL "VER TODOS LOS PROYECTOS" */}
        <RevealSection delay={200} className="md:hidden mt-8 flex justify-center">
             <a 
                href={projectsUrl} 
                className="inline-flex items-center gap-2 text-[14px] font-bold text-primary-text hover:text-accent-cyan transition-colors group focus-visible:outline-none focus-visible:underline"
              >
                {t.viewAll || "Ver todos los proyectos"} 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
        </RevealSection>

      </div>
    </section>
  );
}
