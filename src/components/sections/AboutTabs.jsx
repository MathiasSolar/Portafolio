import React, { useState, useEffect } from 'react';
import { Terminal, Target, Server, Cloud, Lightbulb, User, Monitor, X, Layers } from 'lucide-react';
import RevealSection from '../ui/RevealSection.jsx';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('presentacion');
  
  const [activeModalTech, setActiveModalTech] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const currentLang = useStore(langStore);
  const t = translations[currentLang].about;

  const openModal = (tech) => {
    setActiveModalTech(tech);
    setTimeout(() => setShowModal(true), 10);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setActiveModalTech(null), 300);
  };

  useEffect(() => {
    if (activeModalTech) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.paddingRight = '0px'; document.body.style.overflow = 'unset'; };
  }, [activeModalTech]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const iconifyUrl = "https://api.iconify.design/";

  const techConfig = [
    { id: 'react', name: 'React', url: iconifyUrl + 'logos:react.svg', invert: false, color: '#61DAFB' },
    { id: 'js', name: 'JavaScript', url: iconifyUrl + 'logos:javascript.svg', invert: false, color: '#F7DF1E' },
    { id: 'node', name: 'Node.js', url: iconifyUrl + 'logos:nodejs-icon.svg', invert: false, color: '#339933' },
    { id: 'python', name: 'Python', url: iconifyUrl + 'logos:python.svg', invert: false, color: '#3776AB' },
    { id: 'django', name: 'Django', url: iconifyUrl + 'logos:django-icon.svg', invert: false, color: '#092E20' },
    { id: 'laravel', name: 'Laravel', url: iconifyUrl + 'logos:laravel.svg', invert: false, color: '#FF2D20' },
    { id: 'sql', name: 'SQL / DBs', url: iconifyUrl + 'logos:postgresql.svg', invert: false, color: '#336791' },
    { id: 'firebase', name: 'Firebase', url: iconifyUrl + 'logos:firebase.svg', invert: false, color: '#FFCA28' },
    { id: 'wp', name: 'WordPress', url: iconifyUrl + 'logos:wordpress-icon.svg', invert: false, color: '#21759B' },
    { id: 'docker', name: 'Docker', url: iconifyUrl + 'logos:docker-icon.svg', invert: false, color: '#2496ED' },
    { id: 'git', name: 'Git', url: iconifyUrl + 'logos:git-icon.svg', invert: false, color: '#F05032' },
    { id: 'linux', name: 'Linux', url: iconifyUrl + 'logos:linux-tux.svg', invert: false, color: '#FCC624' },
    { id: 'analytics', name: 'Analytics', url: iconifyUrl + 'logos:google-analytics.svg', invert: false, color: '#E37400' },
    { id: 'astro', name: 'Astro', url: iconifyUrl + 'vscode-icons:file-type-astro.svg', invert: false, color: '#FF5D01' },
    { id: 'powerbi', name: 'Power BI', url: iconifyUrl + 'logos:microsoft-power-bi.svg', invert: false, color: '#F2C811' }
  ];

  const competenceIcons = [<Target className="w-5 h-5 text-accent-cyan" />, <Cloud className="w-5 h-5 text-accent-cyan" />, <Server className="w-5 h-5 text-accent-cyan" />, <Lightbulb className="w-5 h-5 text-accent-cyan" />];
  
  const studyLogos = ["/logo-utfsm.png", "/logo-usach.png", "/logo-udemy.png"];

  return (
    <section id="about" className="py-32 px-6 relative z-10 bg-alt-bg/45 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <RevealSection><h2 className="text-3xl md:text-4xl font-bold text-primary-text tracking-tight mb-4">{t.title}</h2></RevealSection>
          <RevealSection delay={200}><p className="text-muted-text text-base mt-4">{t.subtitle}</p></RevealSection>
        </div>

        <RevealSection delay={400}>
          <div className="relative rounded-3xl border border-main-border bg-card-bg/80 backdrop-blur-xl py-8 px-6 md:px-12 overflow-hidden shadow-[0_0_50px_rgba(0,120,255,0.02)] flex flex-col transition-all duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Selector de pestañas minimalista en la parte superior */}
            <div className="mb-10 pb-6 border-b border-main-border/30 flex justify-center relative z-10 w-full">
              <div className="flex items-center p-1 rounded-xl border border-main-border bg-main-bg/50 backdrop-blur-md flex-wrap justify-center gap-1">
                {t.tabs.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 outline-none cursor-pointer ${activeTab === tab.id ? 'bg-primary-text text-main-bg shadow-sm' : 'text-muted-text hover:text-primary-text hover:bg-main-border/5'}`}>{tab.label}</button>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full grid">
              
              <div className={`col-start-1 row-start-1 flex flex-col justify-start w-full pt-2 pb-6 transition-all duration-500 ${activeTab === 'presentacion' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 invisible translate-y-4 pointer-events-none'}`}>
                <div className="flex items-center gap-3 mb-6"><Terminal className="w-6 h-6 text-accent-cyan" /><h3 className="text-2xl font-bold text-primary-text">{t.greeting}</h3></div>
                <div className="space-y-6 w-full">
                  <div className="flex gap-4 items-start"><User className="w-6 h-6 text-accent-cyan shrink-0 mt-1" /><p className="text-secondary-text leading-relaxed text-base md:text-lg">{t.p1}</p></div>
                  <div className="pl-5 py-4 border-l-4 border-main-border bg-main-border/5 rounded-r-xl text-muted-text italic flex gap-4 items-center w-full"><Lightbulb className="w-6 h-6 text-yellow-500/70 shrink-0" /><span>{t.quote}</span></div>
                  <div className="flex gap-4 items-start"><Monitor className="w-6 h-6 text-accent-cyan shrink-0 mt-1" /><p className="text-muted-text leading-relaxed">{t.p2}</p></div>
                </div>
              </div>

              <div className={`col-start-1 row-start-1 flex flex-col justify-start w-full pt-2 pb-6 transition-all duration-500 ${activeTab === 'tecnologias' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 invisible translate-y-4 pointer-events-none'}`}>
                <h3 className="text-2xl font-bold text-primary-text mb-6 text-center">{t.techTitle}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full mx-auto">
                  {techConfig.map((config, index) => {
                    const techData = t.techs[config.id];
                    const fullTech = { ...config, ...techData };
                    return (
                      <button key={index} onClick={() => openModal(fullTech)} className="flex flex-col items-center justify-center gap-4 p-5 md:p-6 rounded-2xl bg-main-border/5 border border-main-border hover:bg-main-border/10 hover:border-hover-border transition-all duration-300 group hover:-translate-y-1 outline-none cursor-pointer">
                        <img src={fullTech.url} alt={fullTech.name} className={`w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110 ${fullTech.invert ? 'filter invert opacity-80 group-hover:opacity-100' : ''}`} />
                        <span className="text-xs md:text-sm text-center font-bold text-secondary-text group-hover:text-primary-text transition-colors">{fullTech.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={`col-start-1 row-start-1 w-full pt-2 pb-6 transition-all duration-500 ${activeTab === 'competencias' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 invisible translate-y-4 pointer-events-none'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {t.competences.map((comp, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-main-border/5 border border-main-border hover:bg-main-border/10 transition-colors group h-full">
                      <div className="p-3 bg-main-bg rounded-xl border border-main-border group-hover:border-accent-cyan/50">{competenceIcons[i]}</div>
                      <div><h4 className="text-base md:text-lg font-bold text-primary-text mb-1">{comp.title}</h4><p className="text-muted-text text-sm font-light">{comp.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`col-start-1 row-start-1 flex flex-col justify-start w-full gap-6 pt-2 pb-6 transition-all duration-500 ${activeTab === 'estudios' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 invisible translate-y-4 pointer-events-none'}`}>
                {t.studies.map((study, i) => (
                   <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 md:p-6 rounded-2xl bg-main-border/5 border border-main-border hover:bg-main-border/10 transition-colors">
                     <div className="bg-white p-3 rounded-xl shrink-0 border border-slate-100 shadow-sm">
                       <img src={studyLogos[i] || "/logo-udemy.png"} className="w-10 h-10 object-contain"/>
                     </div>
                     <div>
                       <h4 className="text-lg font-bold text-primary-text mb-1">{study.title}</h4>
                       <p className="text-accent-cyan font-bold text-sm">{study.desc}</p>
                       {study.details && <p className="text-muted-text text-sm mt-1 font-light">{study.details}</p>}
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      {activeModalTech && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ease-out ${showModal ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer" onClick={closeModal}></div>
          
          <div className={`relative w-full max-w-2xl bg-gradient-to-b from-card-bg to-main-bg border border-main-border rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col gap-6 sm:gap-8 transform transition-all duration-300 ease-out ${showModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`} style={{ boxShadow: showModal ? `0 20px 50px -10px ${activeModalTech.color}30` : 'none' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ backgroundColor: activeModalTech.color, transform: 'translate(30%, -30%)' }} />
            
            <div className="flex items-start justify-between relative z-10 border-b border-main-border pb-5">
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="p-4 sm:p-5 bg-main-border/5 rounded-2xl border border-main-border shrink-0 shadow-inner">
                  <img src={activeModalTech.url} alt={activeModalTech.name} className={`w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-xl ${activeModalTech.invert ? 'filter invert opacity-90' : ''}`} />
                </div>
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-primary-text tracking-tight">{activeModalTech.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeModalTech.color }}></div>
                    <span className="text-sm font-semibold tracking-wide text-secondary-text uppercase">{t.techLevel} {activeModalTech.level}</span>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="text-muted-text hover:text-primary-text bg-main-border/5 p-2.5 rounded-full hover:bg-main-border/10 transition-all outline-none border border-transparent hover:border-main-border cursor-pointer">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <p className="relative z-10 text-base sm:text-lg text-secondary-text font-light leading-relaxed">{activeModalTech.desc}</p>
            
            {activeModalTech.sub && (
              <div className="relative z-10 pt-6 mt-2 border-t border-main-border">
                <h4 className="text-xs sm:text-sm font-bold text-muted-text uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" style={{ color: activeModalTech.color }} /> {t.techSpecialties}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {activeModalTech.sub.map((s,i) => (
                    <span key={i} className="px-4 py-2 bg-main-bg/40 border border-main-border/50 rounded-xl text-sm text-secondary-text font-medium hover:bg-main-border/10 transition-colors backdrop-blur-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}