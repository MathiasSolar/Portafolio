import React, { useState } from 'react';
import { Code2, Monitor, Terminal, ChevronDown } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
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
                <div className="group relative rounded-2xl overflow-hidden bg-card-bg border border-main-border shadow-xl hover:border-hover-border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
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
                    <div key={index} className="group relative rounded-2xl overflow-hidden bg-card-bg border border-main-border shadow-xl hover:border-hover-border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
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
    </section>
  );
}
