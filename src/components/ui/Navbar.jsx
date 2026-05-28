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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
    } else {
      const isLight = document.documentElement.classList.contains('light-mode');
      setTheme(isLight ? 'light' : 'dark');
    }
  }, []);

  const toggleTheme = (e) => {
    const isDark = theme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    const applyTheme = () => {
      if (isDark) {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    };

    if (!document.startViewTransition) {
      applyTheme();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(applyTheme);

    transition.ready.then(() => {
      // Always expand the NEW theme as a growing circle from the click point
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 800,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
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
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'py-4 bg-nav-bg backdrop-blur-md border-b border-main-border' : 'py-8 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter text-primary-text outline-none">M. SOLAR</a>
          
          <div className="hidden md:flex gap-8 text-[15px] tracking-wide text-primary-text font-bold items-center">
            <button onClick={() => handleNavClick('about')} className="hover:text-accent-cyan transition-colors outline-none cursor-pointer nav-link">{t.profile}</button>
            <button onClick={() => handleNavClick('experience')} className="hover:text-accent-cyan transition-colors outline-none cursor-pointer nav-link">{t.experience}</button>
            <button onClick={() => handleNavClick('projects')} className="hover:text-accent-cyan transition-colors outline-none cursor-pointer nav-link">{t.projects}</button>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1.5 p-2 text-secondary-text hover:text-primary-text transition-colors outline-none cursor-pointer"><Globe className="w-5 h-5" /><span className="text-sm font-bold hidden sm:block">{currentLang}</span></button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-card-bg border border-main-border rounded-xl shadow-xl py-2 flex flex-col z-50 overflow-hidden">
                  {['ES','EN'].map(l => (
                    <button key={l} onClick={() => { langStore.set(l); setIsLangOpen(false); }} className={`text-left px-4 py-2.5 text-sm hover:bg-main-border/5 transition-colors outline-none cursor-pointer ${currentLang === l ? 'text-accent-cyan font-bold bg-main-border/10' : 'text-secondary-text'}`}>{l}</button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={(e) => toggleTheme(e)} className="p-2 text-muted-text hover:text-primary-text transition-colors outline-none cursor-pointer" aria-label="Cambiar Tema">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => handleNavClick('contact')} className="px-5 py-2 border border-main-border rounded-full text-[15px] font-bold text-primary-text hover:bg-primary-text hover:text-main-bg transition-all duration-300 hidden md:block ml-2 cursor-pointer">{t.contact}</button>
            {/* Hamburguesa SIEMPRE visible */}
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-primary-text hover:text-accent-cyan transition-colors outline-none ml-1 cursor-pointer"><Menu className="w-7 h-7" /></button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[100] transition-all duration-300 ${isSidebarOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 md:w-80 bg-card-bg border-l border-main-border p-8 flex flex-col transform transition-transform duration-300 ease-out shadow-2xl ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold tracking-tighter text-primary-text">{t.menu}</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-muted-text hover:text-primary-text bg-main-border/5 p-2 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-all outline-none cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          <nav className="flex flex-col gap-6 text-lg font-medium text-secondary-text">
            <a href="/" className={`text-left outline-none transition-colors hover:text-accent-cyan ${currentPage === 'home' ? 'text-accent-cyan' : ''}`}>{t.home}</a>
            <div className="w-full h-px bg-main-border my-2"></div>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('about'); }} className="text-left outline-none hover:text-accent-cyan transition-colors cursor-pointer">{t.profile}</button>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('experience'); }} className="text-left outline-none hover:text-accent-cyan transition-colors cursor-pointer">{t.experience}</button>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('projects'); }} className="text-left outline-none hover:text-accent-cyan transition-colors cursor-pointer">{t.projects}</button>
            <button onClick={() => { setIsSidebarOpen(false); handleNavClick('contact'); }} className="text-left outline-none hover:text-accent-cyan transition-colors md:hidden cursor-pointer">{t.contact}</button>
            <div className="w-full h-px bg-main-border my-2"></div>
            <a href="/sobre-mi" className={`text-left outline-none transition-colors hover:text-accent-cyan flex items-center gap-3 ${currentPage === 'about' ? 'text-accent-cyan font-bold' : ''}`}><Heart className="w-5 h-5" /> {t.aboutMe}</a>
          </nav>
        </div>
      </div>
    </>
  );
}
