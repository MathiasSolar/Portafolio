import React, { useState } from 'react';
import { Code2, Monitor, Terminal, ChevronDown, ExternalLink, X, Code } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const currentLang = useStore(langStore);
  const t = translations[currentLang].projects;

  const visConf = [
    { icon: <Code2 className="w-3 h-3 text-accent-cyan" />, hov: "from-blue-950/10 dark:from-blue-900/5", vis: "from-blue-500/20", number: "01" },
    { icon: <Monitor className="w-3 h-3 text-emerald-500" />, hov: "from-emerald-950/10 dark:from-emerald-900/5", vis: "from-emerald-500/20", number: "02" },
    { icon: <Terminal className="w-3 h-3 text-purple-400" />, hov: "from-purple-950/10 dark:from-purple-900/5", vis: "from-purple-500/20", number: "03" }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-alt-bg/45 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left"><RevealSection><h2 className="text-3xl md:text-4xl font-bold text-primary-text tracking-tight">{t.title}</h2></RevealSection></div>
        <div className="transition-all duration-500">
          <div className="space-y-8">
            {t.items.slice(0, 2).map((proj, index) => {
              const conf = visConf[index];
              return (
              <RevealSection key={index} delay={index * 100}>
                <div 
                  onClick={() => setSelectedProject(proj)}
                  className="group relative rounded-2xl overflow-hidden bg-card-bg/95 backdrop-blur-md border border-main-border/80 shadow-2xl hover:border-accent-cyan/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] active:scale-[0.98] cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${conf.hov} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  <div className="grid md:grid-cols-[3fr_2fr] items-stretch">
                    <div className="p-8 md:p-10 relative z-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-main-border text-[10px] uppercase font-semibold mb-4 text-muted-text w-fit bg-main-bg/35">{conf.icon} {proj.cat}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-3 tracking-tight">{proj.title}</h3>
                      <p className="text-[15px] md:text-base text-secondary-text mb-6 font-light leading-relaxed">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">{proj.techs.map((tech) => <span key={tech} className="px-3 py-1 bg-main-border/5 border border-main-border rounded-md text-xs font-medium text-secondary-text">{tech}</span>)}</div>
                    </div>
                    <div className="h-40 md:h-auto relative overflow-hidden flex items-center justify-center border-t md:border-t-0 md:border-l border-main-border bg-main-bg/25">
                      <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${conf.vis} via-transparent to-transparent`} />
                      <span className="text-7xl md:text-8xl lg:text-9xl font-black text-primary-text/10 tracking-tighter select-none transition-all duration-700 group-hover:scale-110 group-hover:text-accent-cyan/20">
                        {conf.number}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            )})}
          </div>

          {t.items.length > 2 && (
            <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${showAllProjects ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="pt-8 space-y-8">
                  {t.items.slice(2).map((proj, index) => {
                    const conf = visConf[index + 2];
                    return(
                    <div 
                      key={index} 
                      onClick={() => setSelectedProject(proj)}
                      className="group relative rounded-2xl overflow-hidden bg-card-bg/95 backdrop-blur-md border border-main-border/80 shadow-2xl hover:border-accent-cyan/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] active:scale-[0.98] cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${conf.hov} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                      <div className="grid md:grid-cols-[3fr_2fr] items-stretch">
                        <div className="p-8 md:p-10 relative z-10 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-main-border text-[10px] uppercase font-semibold mb-4 text-muted-text w-fit bg-main-bg/35">{conf.icon} {proj.cat}</div>
                          <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-3 tracking-tight">{proj.title}</h3>
                          <p className="text-[15px] md:text-base text-secondary-text mb-6 font-light leading-relaxed">{proj.desc}</p>
                          <div className="flex flex-wrap gap-2 mt-auto">{proj.techs.map((tech) => <span key={tech} className="px-3 py-1 bg-main-border/5 border border-main-border rounded-md text-xs font-medium text-secondary-text">{tech}</span>)}</div>
                        </div>
                        <div className="h-40 md:h-auto relative overflow-hidden flex items-center justify-center border-t md:border-t-0 md:border-l border-main-border bg-main-bg/25">
                          <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${conf.vis} via-transparent to-transparent`} />
                          <span className="text-7xl md:text-8xl lg:text-9xl font-black text-primary-text/10 tracking-tighter select-none transition-all duration-700 group-hover:scale-110 group-hover:text-accent-cyan/20">
                            {conf.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              </div>
            </div>
          )}
        </div>
        {t.items.length > 2 && (
          <RevealSection delay={200} className="mt-12 flex justify-center w-full">
            <button onClick={() => setShowAllProjects(!showAllProjects)} className="flex items-center gap-2 px-6 py-3 bg-main-border/5 border border-main-border rounded-full text-primary-text font-bold hover:bg-main-border/10 hover:text-accent-cyan transition-all duration-300 group cursor-pointer">
              {showAllProjects ? t.hide : t.showMore}
              <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${showAllProjects ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
            </button>
          </RevealSection>
        )}
      </div>

      {/* Modal del Proyecto */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${selectedProject ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${selectedProject ? 'opacity-100' : 'opacity-0'}`} onClick={() => setSelectedProject(null)} />
        
        <div className={`relative w-full max-w-3xl bg-card-bg border border-main-border rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out ${selectedProject ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}>
          <div className="absolute top-4 right-4 z-10">
            <button onClick={() => setSelectedProject(null)} className="p-2 bg-main-bg/50 backdrop-blur-md rounded-full text-muted-text hover:text-primary-text hover:bg-red-500/20 transition-all cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-main-border text-xs uppercase font-bold mb-6 text-accent-cyan bg-accent-cyan/10">
              {selectedProject?.cat}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-primary-text mb-6 tracking-tight">
              {selectedProject?.title}
            </h2>
            
            <p className="text-lg text-secondary-text leading-relaxed mb-8 font-light">
              {selectedProject?.extendedDesc || selectedProject?.desc}
            </p>
            
            <div className="mb-10">
              <h4 className="text-sm font-bold text-primary-text mb-4 uppercase tracking-widest">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techs.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-main-border/10 border border-main-border rounded-lg text-sm font-medium text-primary-text">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {selectedProject?.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-white rounded-full font-bold hover:bg-accent-cyan/80 transition-all cursor-pointer">
                  <ExternalLink className="w-4 h-4" /> Visitar Proyecto
                </a>
              )}
              {selectedProject?.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-main-border/10 border border-main-border text-primary-text rounded-full font-bold hover:bg-main-border/20 transition-all cursor-pointer">
                  <Code className="w-4 h-4" /> Ver Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
