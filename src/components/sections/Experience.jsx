import React, { useState } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Experience() {
  const [showAllExp, setShowAllExp] = useState(false);
  const currentLang = useStore(langStore);
  const t = translations[currentLang].experience;

  const defaultLogo = "[https://cdn-icons-png.flaticon.com/512/2942/2942789.png](https://cdn-icons-png.flaticon.com/512/2942/2942789.png)";
  const logos = ["/logo-gore.png", defaultLogo]; 

  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-20 text-center md:text-left"><RevealSection><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.title}</h2></RevealSection></div>
      <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4 md:ml-0 transition-all duration-500">
        
        <div className="space-y-24">
          {t.jobs.slice(0, 1).map((exp, index) => (
            <RevealSection key={index} delay={index * 100} className="relative">
              <div className="absolute -left-[53px] md:-left-[69px] top-1 p-2 bg-black border border-white/20 rounded-full"><Briefcase className="w-5 h-5 text-cyan-400" /></div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4">
                <img src={logos[index]} alt={exp.company} className="h-12 md:h-14 bg-white px-3 py-2 rounded-lg object-contain w-fit" />
                <div><h3 className="text-2xl md:text-3xl font-bold text-white">{exp.company}</h3><div className="mt-1"><span className="text-sm font-bold text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">{exp.period}</span></div></div>
              </div>
              <h4 className="text-xl text-gray-300 mb-4 font-bold mt-2">{exp.role}</h4>
              <ul className="space-y-3 text-[15px] md:text-base text-gray-300 font-normal w-full">
                {exp.tasks.map((task, i) => (<li key={i} className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 shrink-0" /><p>{task}</p></li>))}
              </ul>
            </RevealSection>
          ))}
        </div>

        {t.jobs.length > 1 && (
          <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${showAllExp ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="pt-24 space-y-24">
                {t.jobs.slice(1).map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[53px] md:-left-[69px] top-1 p-2 bg-black border border-white/20 rounded-full"><Briefcase className="w-5 h-5 text-cyan-400" /></div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4">
                      <img src={logos[index + 1]} alt={exp.company} className="h-12 md:h-14 bg-white px-3 py-2 rounded-lg object-contain w-fit" />
                      <div><h3 className="text-2xl md:text-3xl font-bold text-white">{exp.company}</h3><div className="mt-1"><span className="text-sm font-bold text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">{exp.period}</span></div></div>
                    </div>
                    <h4 className="text-xl text-gray-300 mb-4 font-bold mt-2">{exp.role}</h4>
                    <ul className="space-y-3 text-[15px] md:text-base text-gray-300 font-normal w-full">
                      {exp.tasks.map((task, i) => (<li key={i} className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 shrink-0" /><p>{task}</p></li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {t.jobs.length > 1 && (
        <RevealSection delay={200} className="mt-16 flex justify-center w-full">
          <button onClick={() => setShowAllExp(!showAllExp)} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 outline-none group">
            {showAllExp ? t.hide : t.showMore}
            <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${showAllExp ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
          </button>
        </RevealSection>
      )}
    </section>
  );
}
