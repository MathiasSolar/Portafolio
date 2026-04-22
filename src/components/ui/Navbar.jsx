import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sun, Moon, Globe } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { langStore } from '../../store/i18nStore';
import { translations } from '../../i18n/translations';

export default function Navbar({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const currentLang = useStore(langStore);
  const t = translations[currentLang].nav; 

  const [theme, setTheme] = useState('dark');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  const handleNavClick = (id) => {
    setIsSidebarOpen(false);
    if (currentPage !== 'home') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-8 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter text-white outline-none">M. SOLAR</a>
          
          <div className="hidden md:flex gap-8 text-[15px] tracking-wide text-white font-bold items-center">
            <button onClick={() => handleNavClick('about')} className="hover:text-cyan-400 transition-colors outline-none">{t.profile}</button>
            <button onClick={() => handleNavClick('experience')} className="hover:text-cyan-400 transition-colors outline-none">{t.experience}</button>
            <button onClick={() => handleNavClick('projects')} className="hover:text-cyan-400 transition-colors outline-none">{t.projects}</button>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1.5 p-2 text-gray-300 hover:text-white transition-colors outline-none"><Globe className="w-5 h-5" /><span className="text-sm font-bold hidden sm:block">{currentLang}</span></button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-[#0d1117] border border-white/10 rounded-xl shadow-xl py-2 flex flex-col z-50 overflow-hidden">
                  {['ES','EN'].map(l => (
                    <button key={l} onClick={() => { langStore.set(l); setIsLangOpen(false); }} className={`text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors outline-none ${currentLang === l ? 'text-cyan-400 font-bold bg-white/5' : 'text-gray-300'}`}>{l}</button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={toggleTheme} className="p-2 text-gray-300 hover:text-white transition-colors outline-none preserve-color" aria-label="Cambiar Tema">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => handleNavClick('contact')} className="px-5 py-2 border border-white/20 rounded-full text-[15px] font-bold hover:bg-white hover:text-black transition-all duration-300 hidden md:block ml-2">{t.contact}</button>
            {/* Hamburguesa SIEMPRE visible */}
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-white hover:text-cyan-400 transition-colors outline-none ml-1"><Menu className="w-7 h-7" /></button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[100] transition-all duration-300 ${isSidebarOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 md:w-80 bg-[#0d1117] border-l border-white/10 p-8 flex flex-col transform transition-transform duration-300 ease-out shadow-2xl ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold tracking-tighter text-white">{t.menu}</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-white bg-white/5 p-2 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-all outline-none"><X className="w-5 h-5" /></button>
          </div>
          <nav className="flex flex-col gap-6 text-lg font-medium text-gray-300">
            <a href="/" className={`text-left outline-none transition-colors hover:text-cyan-400 ${currentPage === 'home' ? 'text-cyan-400' : ''}`}>{t.home}</a>
            <div className="w-full h-px bg-white/10 my-2"></div>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('about'); }} className="text-left outline-none hover:text-cyan-400 transition-colors">{t.profile}</button>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('experience'); }} className="text-left outline-none hover:text-cyan-400 transition-colors">{t.experience}</button>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('projects'); }} className="text-left outline-none hover:text-cyan-400 transition-colors">{t.projects}</button>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('contact'); }} className="text-left outline-none hover:text-cyan-400 transition-colors md:hidden">{t.contact}</button>
            <div className="w-full h-px bg-white/10 my-2"></div>
            <a href="/sobre-mi" className={`text-left outline-none transition-colors hover:text-cyan-400 flex items-center gap-3 ${currentPage === 'about' ? 'text-cyan-400 font-bold' : ''}`}><Heart className="w-5 h-5" /> {t.aboutMe}</a>
          </nav>
        </div>
      </div>
    </>
  );
}
