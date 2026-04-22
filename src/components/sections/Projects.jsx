import React, { useState } from 'react';
import { Code2, Monitor, Terminal, Layers, GitBranch, Globe, Lightbulb, ChevronDown } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const currentLang = useStore(langStore);
  const t = translations[currentLang].projects;

  const visConf = [
    { icon: <Code2 className="w-3 h-3" />, hov: "from-blue-900/10", vis: "from-blue-500", html: (<div className="relative z-10 grid grid-cols-2 gap-3 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all"><div className="w-16 h-16 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center"><Layers className="w-6 h-6 text-[#58a6ff]" /></div><div className="w-16 h-16 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center translate-y-6"><GitBranch className="w-6 h-6 text-white/50" /></div></div>) },
    { icon: <Monitor className="w-3 h-3 text-[#39d353]" />, hov: "from-green-900/10", vis: "from-green-500", html: (<div className="relative z-10 flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all"><div className="w-24 h-16 rounded-t-lg border border-b-0 border-white/20 bg-white/5 flex items-start justify-center pt-3"><Globe className="w-6 h-6 text-[#39d353]" /></div><div className="w-28 h-3 rounded-full border border-white/20 bg-white/10"></div></div>) },
    { icon: <Terminal className="w-3 h-3 text-purple-400" />, hov: "from-purple-900/10", vis: "from-purple-500", html: (<div className="relative z-10 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all"><div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center"><Lightbulb className="w-8 h-8 text-purple-400" /></div></div>) }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left"><RevealSection><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.title}</h2></RevealSection></div>
        <div className="transition-all duration-500">
          <div className="space-y-8">
            {t.items.slice(0, 2).map((proj, index) => {
              const conf = visConf[index];
              return (
              <RevealSection key={index} delay={index * 100}>
                <div className="group relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/15 shadow-xl hover:border-white/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${conf.hov} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  <div className="grid md:grid-cols-[3fr_2fr] items-stretch">
                    <div className="p-6 md:p-8 relative z-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase font-bold mb-4 text-gray-300 w-fit">{conf.icon} {proj.cat}</div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{proj.title}</h3>
                      <p className="text-[15px] md:text-base text-gray-300 mb-6">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">{proj.techs.map((tech) => <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-gray-300">{tech}</span>)}</div>
                    </div>
                    <div className="h-40 md:h-auto relative overflow-hidden flex items-center justify-center border-l border-white/10 bg-black/50">
                      <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${conf.vis} via-transparent to-transparent`} />
                      {conf.html}
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
                    <div key={index} className="group relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/15 shadow-xl hover:border-white/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${conf.hov} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                      <div className="grid md:grid-cols-[3fr_2fr] items-stretch">
                        <div className="p-6 md:p-8 relative z-10 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase font-bold mb-4 text-gray-300 w-fit">{conf.icon} {proj.cat}</div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{proj.title}</h3>
                          <p className="text-[15px] md:text-base text-gray-300 mb-6">{proj.desc}</p>
                          <div className="flex flex-wrap gap-2 mt-auto">{proj.techs.map((tech) => <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-gray-300">{tech}</span>)}</div>
                        </div>
                        <div className="h-40 md:h-auto relative overflow-hidden flex items-center justify-center border-l border-white/10 bg-black/50">
                          <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${conf.vis} via-transparent to-transparent`} />
                          {conf.html}
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
            <button onClick={() => setShowAllProjects(!showAllProjects)} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 group">
              {showAllProjects ? t.hide : t.showMore}
              <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${showAllProjects ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
            </button>
          </RevealSection>
        )}
      </div>
    </section>
  );
}
