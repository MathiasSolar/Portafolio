import { ExternalLink, ChevronDown } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';
import { getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';

const THEMES = {
  primary: { 
    surface: "bg-surface border-main-border hover:border-accent-cyan/40",
    visual: "bg-surface-soft border-main-border/50",
    accent: "text-accent-cyan",
    badge: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    svgPrimary: "text-accent-cyan",
    svgSecondary: "text-accent-cyan/30",
    svgTertiary: "text-accent-secondary"
  },
  secondary: {
    surface: "bg-surface border-main-border hover:border-accent-cyan/40",
    visual: "bg-surface-soft/70 border-main-border/50",
    accent: "text-accent-cyan",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    svgPrimary: "text-accent-cyan",
    svgSecondary: "text-accent-cyan/30",
    svgTertiary: "text-secondary-text"
  }
};

export default function ProjectCard({ project, variant = 'default', index = null, lang }) {
  const storeLang = useStore(langStore);
  const currentLang = getSupportedLocale(
    lang || (typeof window !== 'undefined' ? getLocaleFromPathname(window.location.pathname) : storeLang)
  );
  const tProj = (translations[currentLang] || translations.es).projects || {};

  const isCompact = variant === 'compact';
  const themeKey =
    project.themeKey && THEMES[project.themeKey]
      ? project.themeKey
      : "primary";
  const theme = THEMES[themeKey];

  // Buscar traducciones i18n personalizadas por slug si existen
  const projectTrans = tProj.items?.find(i => 
    i.slug === project.slug || 
    (project.slug === 'portal-gore-aysen' && i.slug === 'goreaysen') || 
    (project.slug === 'goreaysen' && i.slug === 'portal-gore-aysen')
  ) || {};

  const displayType = projectTrans.type || project.type;
  const displayStatusLabel = projectTrans.statusLabel || project.statusLabel;
  const displayTitle = projectTrans.title || project.title;
  const displaySubtitle = projectTrans.subtitle || project.subtitle;
  const displaySummary = projectTrans.summary || project.summary;
  const displayProblem = projectTrans.problem || project.problem;
  const displayParticipationText = projectTrans.participationText || project.participationText;
  const displayScope = projectTrans.scope || project.scope;
  const displayResponsibilities = projectTrans.responsibilities || project.responsibilities;
  const displayStack = projectTrans.stack || project.stack || [];
  const displayImgAlt = projectTrans.imageAlt || project.imageAlt || displayTitle || "";

  const imageFitClass = {
    cover: "object-cover",
    contain: "object-contain"
  }[project.imageFit] || "object-cover";

  const imagePositionClass = {
    center: "object-center",
    top: "object-top",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right"
  }[project.imagePosition] || "object-center";

  const containerClass = isCompact 
    ? `flex-col md:flex-row md:items-stretch gap-5 md:gap-6 p-5 md:p-6 rounded-2xl border transition-colors ${theme.surface}`
    : "flex-col h-full rounded-2xl bg-surface-base/80 border border-main-border/40 overflow-hidden hover:border-main-border/70 p-6 md:p-8 transition-colors";

  return (
    <article className={`flex group ${containerClass}`}>
      
      {/* RECURSO VISUAL SUPERIOR / LATERAL */}
      <div 
        className={`${
          isCompact 
            ? `w-full md:w-[28%] lg:w-[26%] min-h-[140px] md:min-h-[160px] flex-shrink-0 rounded-xl border ${theme.visual}` 
            : 'w-full h-[180px] md:h-[210px] rounded-xl border border-main-border/30 bg-surface-soft mb-6'
        } relative flex items-center justify-center overflow-hidden`}
      >
        <img 
          src={project.image} 
          alt={displayImgAlt}
          width="600"
          height="337"
          loading="lazy"
          decoding="async"
          className={`w-full h-full ${imageFitClass} ${imagePositionClass} relative z-10 transition-transform duration-500 group-hover:scale-105`}
        />
      </div>

      {/* CONTENIDO EDITORIAL DE LA TARJETA */}
      <div className={`flex flex-col flex-grow ${isCompact ? 'w-full md:w-[72%] lg:w-[74%]' : ''}`}>
        
        {/* NIVEL A: CONTENIDO SIEMPRE VISIBLE */}
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {isCompact && index && (
              <span className="text-xs font-mono tracking-widest text-accent-cyan font-bold">
                0{index}.
              </span>
            )}
            <span className="text-xs font-mono tracking-wider uppercase text-secondary-text">
              {displayType}
            </span>
            <span className="text-main-border text-xs">•</span>
            <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
              {displayStatusLabel}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-primary-text leading-tight tracking-tight">
            {displayTitle}
          </h3>
          {displaySubtitle && (
            <p className="text-xs md:text-sm font-medium text-accent-cyan">
              {displaySubtitle}
            </p>
          )}
        </div>

        {/* DESCRIPCIÓN BREVE */}
        <p className="text-sm md:text-[15px] text-secondary-text leading-relaxed mb-4">
          {displaySummary}
        </p>

        {/* NIVEL B: CONTENIDO DESPLEGABLE (SOLO VISTA /PROYECTOS) */}
        {!isCompact && (
          <details className="group/details my-3 border border-main-border/30 rounded-xl bg-surface-soft/40 overflow-hidden transition-colors">
            <summary className="px-4 py-2.5 text-xs font-mono font-medium text-accent-cyan hover:text-accent-cyan/80 cursor-pointer flex items-center justify-between select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-xl">
              <span>{tProj.detailsLabel || "Ver más detalles"}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-open/details:rotate-180 text-secondary-text" />
            </summary>
            
            <div className="px-4 pb-4 pt-2 flex flex-col gap-4 border-t border-main-border/20 text-xs md:text-sm text-secondary-text">
              {displayProblem && (
                <div>
                  <span className="font-bold text-primary-text block mb-1">{tProj.challengeLabel || "Desafío / Problema:"}</span>
                  <p className="leading-relaxed">{displayProblem}</p>
                </div>
              )}
              
              {displayParticipationText && (
                <div>
                  <span className="font-bold text-primary-text block mb-1">{tProj.participationLabel || "Participación Personal:"}</span>
                  <p className="leading-relaxed">{displayParticipationText}</p>
                </div>
              )}
              
              {displayScope && displayScope.length > 0 && (
                <div>
                  <span className="font-bold text-primary-text block mb-1">{tProj.scopeLabel || "Alcance y Funcionalidades:"}</span>
                  <ul className="list-disc list-inside space-y-1 text-secondary-text mt-1">
                    {displayScope.map((s, idx) => <li key={idx}>{s}</li>)}
                  </ul>
                </div>
              )}
              
              {displayResponsibilities && displayResponsibilities.length > 0 && (
                <div>
                  <span className="font-bold text-primary-text block mb-1">{tProj.responsibilitiesLabel || "Responsabilidades Principales:"}</span>
                  <ul className="list-disc list-inside space-y-1 text-secondary-text mt-1">
                    {displayResponsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </details>
        )}

        {/* ETIQUETAS TÉCNICAS */}
        <div className="flex flex-wrap items-center gap-2 mb-6 mt-auto">
          {displayStack.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-soft/80 border border-main-border/30 text-secondary-text"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ENLACES / ACCIONES PRINCIPALES */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-main-border/20 mt-auto">
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-soft/80 hover:bg-surface-soft border border-main-border/40 text-xs md:text-sm font-semibold text-primary-text hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              {tProj.viewRepo || "Ver repositorio"}
            </a>
          )}

          {project.links?.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-xs md:text-sm font-semibold text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            >
              <ExternalLink className="w-4 h-4" />
              {tProj.viewLive || "Ver sitio en producción"}
            </a>
          )}
        </div>

      </div>
      
    </article>
  );
}
