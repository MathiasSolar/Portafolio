import { useState, useEffect, useRef } from 'react';
import { Menu, X, UserRound, Sun, Moon, ChevronDown, ArrowRight, Check, Globe } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { langStore, setLanguagePreference } from '../../store/i18nStore';
import { SUPPORTED_LANGUAGES } from '../../i18n/languages';
import { translations } from '../../i18n/translations';
import { localizedUrl, getLocalizedPath, getSupportedLocale, getLocaleFromPathname } from '../../i18n/utils';
import { applyTheme } from '../../utils/theme';
import { flushSync } from 'react-dom';

function normalizePathname(input) {
  try {
    const url = new URL(input, window.location.origin);
    let pathname = url.pathname.replace(/\/index\.html$/, '');
    pathname = pathname.replace(/\/{2,}/g, '/');
    pathname = pathname.replace(/\/+$/, '');
    return pathname || '/';
  } catch {
    let pathname = String(input || '/').split(/[?#]/)[0];
    pathname = pathname.replace(/\/index\.html$/, '');
    pathname = pathname.replace(/\/{2,}/g, '/');
    pathname = pathname.replace(/\/+$/, '');
    return pathname || '/';
  }
}

export default function Navbar({ currentPage, currentLocale: propsLocale = 'es', runtimeLocaleFromPath = false }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isSwitching, setIsSwitching] = useState(false);
  const [runtimeLocale, setRuntimeLocale] = useState(null);
  const [isLanguageNavigating, setIsLanguageNavigating] = useState(false);
  
  const storeLang = useStore(langStore);

  useEffect(() => {
    if (runtimeLocaleFromPath && typeof window !== 'undefined') {
      const loc = getLocaleFromPathname(window.location.pathname);
      setRuntimeLocale(loc);
    }
  }, [runtimeLocaleFromPath]);

  const currentLang = (runtimeLocaleFromPath && runtimeLocale)
    ? runtimeLocale
    : (propsLocale ? getSupportedLocale(propsLocale) : getSupportedLocale(storeLang));

  const t = translations[currentLang]?.nav || translations.es.nav; 

  const menuButtonRef = useRef(null);
  const langButtonRef = useRef(null);
  const langDropdownRef = useRef(null);
  const themeButtonRef = useRef(null);
  const thumbRef = useRef(null);

  const activeLangObj = SUPPORTED_LANGUAGES.find(
    l => l.code === currentLang || l.short === currentLang
  ) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    if (!runtimeLocaleFromPath && propsLocale && propsLocale !== storeLang) {
      langStore.set(getSupportedLocale(propsLocale));
    }
  }, [propsLocale, runtimeLocaleFromPath]);

  const getHref = (id) => {
    if (id === 'contact') return localizedUrl('/contacto', currentLang);
    if (currentPage === 'home') {
      return id === 'sobre-mi' ? localizedUrl('/sobre-mi', currentLang) : `#${id}`;
    } else {
      const homePath = localizedUrl('/', currentLang);
      return id === 'sobre-mi' ? localizedUrl('/sobre-mi', currentLang) : `${homePath}#${id}`;
    }
  };

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || !document.documentElement.classList.contains('light-mode');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const handleToggleTheme = () => {
    if (isSwitching) return;
    const targetTheme = theme === 'dark' ? 'light' : 'dark';

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      applyTheme(targetTheme);
      setTheme(targetTheme);
      return;
    }

    setIsSwitching(true);

    if (themeButtonRef.current && document.startViewTransition) {
      const rect = themeButtonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const root = document.documentElement;
      root.classList.add("theme-view-transition");

      const transition = document.startViewTransition(() => {
        applyTheme(targetTheme);
        flushSync(() => {
          setTheme(targetTheme);
        });
      });

      transition.ready.then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 420,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)"
          }
        );
      }).catch(() => {});

      transition.finished.finally(() => {
        root.classList.remove("theme-view-transition");
        setIsSwitching(false);
      });
      
    } else {
      document.documentElement.classList.add('theme-switching');
      applyTheme(targetTheme);
      setTheme(targetTheme);
      
      let cleaned = false;
      const cleanup = () => {
        if (cleaned) return;
        cleaned = true;
        document.documentElement.classList.remove('theme-switching');
        setIsSwitching(false);
      };
      setTimeout(cleanup, 260);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLangOpen) return;
      if (e.key === 'Escape') {
        setIsLangOpen(false);
        langButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (isLangOpen && langDropdownRef.current && !langDropdownRef.current.contains(e.target) && !langButtonRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangOpen]);

  const selectLang = (targetCode) => {
    setIsLangOpen(false);
    
    if (typeof window !== 'undefined') {
      const targetPathRaw = getLocalizedPath(window.location.pathname, targetCode);
      const sourcePathNorm = normalizePathname(window.location.pathname);
      const targetPathNorm = normalizePathname(targetPathRaw);

      if (targetPathNorm === sourcePathNorm) return;
      if (isLanguageNavigating) return;

      setIsLanguageNavigating(true);

      try {
        if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }

        const anchorX = Math.round(window.innerWidth * 0.5);
        const anchorY = Math.round(window.innerHeight * 0.40);

        const primarySections = Array.from(
          document.querySelectorAll('[data-scroll-section="primary"]')
        );

        const pageType = primarySections.length > 0 ? 'home' : 'interior';
        let sectionKey = null;

        if (pageType === 'home') {
          const HOME_SCROLL_KEYS = new Set([
            "hero",
            "about",
            "experience",
            "projects",
            "contact",
            "footer"
          ]);

          const elementAtAnchor = document.elementFromPoint(anchorX, anchorY);
          const visibleSection = elementAtAnchor?.closest(
            '[data-scroll-key="hero"],' +
            '[data-scroll-key="about"],' +
            '[data-scroll-key="experience"],' +
            '[data-scroll-key="projects"],' +
            '[data-scroll-key="contact"],' +
            '[data-scroll-key="footer"]'
          );

          if (visibleSection && visibleSection.dataset) {
            const key = visibleSection.dataset.scrollKey || visibleSection.getAttribute('data-scroll-key');
            if (HOME_SCROLL_KEYS.has(key)) {
              sectionKey = key;
            }
          }

          if (!sectionKey) {
            for (const sec of primarySections) {
              const rect = sec.getBoundingClientRect();
              if (rect.top <= anchorY && rect.bottom > anchorY) {
                const fallbackKey = sec.getAttribute('data-scroll-key') || sec.id;
                if (HOME_SCROLL_KEYS.has(fallbackKey) && fallbackKey !== 'footer' && fallbackKey !== 'contact') {
                  sectionKey = fallbackKey;
                  break;
                }
              }
            }
          }

          if (!sectionKey) {
            const footer = document.querySelector('footer');
            if (footer) {
              const footerRect = footer.getBoundingClientRect();
              if (footerRect.top <= anchorY && footerRect.bottom > anchorY) {
                sectionKey = 'footer';
              }
            }
          }

          if (!sectionKey) {
            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
            if (maxScroll - window.scrollY <= 24) {
              sectionKey = 'footer';
            }
          }

          if (!sectionKey) {
            sectionKey = 'hero';
          }
        }

        const scrollData = {
          targetPath: targetPathNorm,
          pageType: pageType,
          sectionKey: sectionKey,
          timestamp: Date.now(),
          isLanguageNav: true
        };

        if (window.location.search.includes('debug_scroll=true')) {
          console.log('Language scroll SAVE:', scrollData);
        }

        sessionStorage.setItem('portfolio-language-scroll', JSON.stringify(scrollData));
      } catch (err) {}

      try {
        setLanguagePreference(targetCode);
      } catch (err) {}

      try {
        window.location.assign(targetPathRaw);
      } catch (e) {
        window.location.href = targetPathRaw;
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 h-[68px] md:h-[72px] bg-base-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center w-full">
          <a href={localizedUrl('/', currentLang)} aria-current={currentPage === 'home' ? 'page' : undefined} className="text-[17px] font-bold tracking-widest text-text-main hover:text-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg rounded-sm px-1 -ml-1">
            M. SOLAR
          </a>
          
          <nav aria-label={t.mainNavigationLabel || "Navegación principal"} className="hidden md:flex gap-6 lg:gap-8 text-[14px] lg:text-[14.5px] text-text-muted font-medium items-center absolute left-1/2 -translate-x-1/2">
            <a href={getHref('about')} className="hover:text-text-main transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg rounded-sm py-1 relative group">
              {t.profile}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a href={getHref('experience')} className="hover:text-text-main transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg rounded-sm py-1 relative group">
              {t.experience}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a href={getHref('projects')} className="hover:text-text-main transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg rounded-sm py-1 relative group">
              {t.projects}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2.5">
            
            {/* SELECTOR DE IDIOMA REDISEÑADO CON RUTAS Y ÁREA TÁCTIL 44PX MÍNIMA */}
            <div className="relative flex items-center justify-center">
              <button 
                ref={langButtonRef}
                type="button"
                aria-expanded={isLangOpen}
                aria-haspopup="menu"
                aria-controls="language-menu-dropdown"
                aria-label={t.selectLanguage || "Seleccionar idioma"}
                onClick={() => setIsLangOpen(!isLangOpen)} 
                className="group flex items-center gap-1.5 min-w-[44px] min-h-[44px] px-3.5 py-2 rounded-xl bg-surface-soft/60 hover:bg-surface-soft border border-main-border/30 hover:border-accent-cyan/40 text-primary-text font-medium text-xs md:text-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg cursor-pointer shadow-xs"
              >
                <span className="font-mono text-xs font-bold text-accent-cyan">
                  {activeLangObj.short}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-secondary-text opacity-70 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-accent-cyan opacity-100' : 'group-hover:opacity-100'}`} />
              </button>

              {/* DROPDOWN MENU DE 5 IDIOMAS */}
              {isLangOpen && (
                <div 
                  ref={langDropdownRef} 
                  id="language-menu-dropdown"
                  role="menu" 
                  aria-orientation="vertical"
                  className="absolute top-[calc(100%+8px)] right-0 w-56 p-2 bg-surface-base/95 border border-main-border/40 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col gap-1 z-50 overflow-hidden outline-none animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-3 py-1.5 border-b border-main-border/20 mb-1 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-accent-cyan opacity-80" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-text">
                      {t.selectLanguage || "Idioma"}
                    </span>
                  </div>

                  {SUPPORTED_LANGUAGES.map((lang) => {
                    const isActive = currentLang === lang.code || currentLang === lang.short;
                    return (
                      <button 
                        key={lang.code}
                        role="menuitem"
                        tabIndex={isLangOpen ? 0 : -1}
                        aria-current={isActive ? 'true' : undefined}
                        onClick={() => selectLang(lang.code)}
                        className={`min-h-[44px] w-full px-3 py-2 rounded-xl flex items-center justify-between gap-3 text-xs md:text-sm font-medium transition-all duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                          isActive 
                            ? 'bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan font-bold shadow-xs' 
                            : 'hover:bg-surface-soft/80 border border-transparent text-secondary-text hover:text-primary-text'
                        }`}
                      >
                        <span className="font-mono text-xs text-muted-text w-5 text-left shrink-0">
                          {lang.short}
                        </span>

                        <span 
                          className="text-primary-text flex-grow text-left truncate font-sans"
                          style={lang.code === 'zh-CN' ? { fontFamily: 'system-ui, "PingFang SC", "Microsoft YaHei", sans-serif' } : {}}
                        >
                          {lang.label}
                        </span>

                        {isActive && (
                          <Check className="w-4 h-4 text-accent-cyan" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* SWITCH DE TEMA PROFESIONAL CON MICROEXPANSIÓN LOCAL (180ms) */}
            <div className="flex items-center justify-center min-w-[50px] min-h-[44px]">
              <button 
                ref={themeButtonRef}
                type="button"
                role="switch"
                aria-checked={theme === 'dark'}
                aria-busy={isSwitching}
                disabled={isSwitching}
                onClick={handleToggleTheme} 
                className="relative overflow-hidden inline-flex items-center w-[52px] h-[28px] rounded-full transition-colors duration-[220ms] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg cursor-pointer bg-surface-soft hover:bg-surface-soft/80 disabled:opacity-80"
                aria-label={theme === 'dark' ? (t.themeLight || "Cambiar a modo claro") : (t.themeDark || "Cambiar a modo oscuro")}
              >
                <span className="sr-only">Tema: {theme}</span>
                <span
                  ref={thumbRef}
                  className="absolute left-[3px] w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-xs z-10"
                  style={{
                    backgroundColor: 'var(--text-primary)',
                    transform: theme === 'dark' 
                      ? (isSwitching ? 'translateX(24px) scale(1.05)' : 'translateX(24px) scale(1)')
                      : (isSwitching ? 'translateX(0) scale(1.05)' : 'translateX(0) scale(1)'),
                    transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  {theme === 'dark' ? (
                    <Moon className="w-3 h-3" style={{ color: 'var(--bg-main)' }} aria-hidden="true" />
                  ) : (
                    <Sun className="w-3 h-3" style={{ color: 'var(--bg-main)' }} aria-hidden="true" />
                  )}
                </span>
              </button>
            </div>
            
            {/* BOTÓN CONTACTAR LOCALIZADO */}
            <a href={getHref('contact')} className="px-5 py-[9px] bg-accent text-white rounded-lg text-[13px] font-semibold hover:bg-accent-hover flex items-center gap-1.5 transition-colors hidden md:flex ml-2 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg cursor-pointer shadow-sm">
              {t.contact}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Hamburguesa visible solo en móvil */}
            <button 
              ref={menuButtonRef}
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-menu"
              aria-label={t.openMenu || "Abrir menú"}
              onClick={() => setIsSidebarOpen(true)} 
              className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-text-main hover:text-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg rounded-md ml-1 cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL CON INTEGRACIÓN DE IDIOMAS Y RUTAS */}
      <div className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${isSidebarOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-base-bg/60 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => { setIsSidebarOpen(false); menuButtonRef.current?.focus(); }} />
        <div id="mobile-menu" className={`absolute right-0 top-0 h-full max-h-screen overflow-y-auto w-80 bg-surface-base border-l border-border-main p-6 md:p-8 flex flex-col justify-between transform transition-transform duration-300 ease-out shadow-2xl ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center pb-2 border-b border-main-border/20">
              <span className="text-lg font-bold tracking-tight text-text-main">{t.menu}</span>
              <button 
                onClick={() => { setIsSidebarOpen(false); menuButtonRef.current?.focus(); }} 
                aria-label={t.closeMenu || "Cerrar menú"}
                className="flex items-center justify-center min-w-[44px] min-h-[44px] text-text-muted hover:text-text-main transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-main focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg rounded-md -mr-2 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[15px] font-medium text-text-muted">
              <a href={localizedUrl('/', currentLang)} onClick={() => setIsSidebarOpen(false)} aria-current={currentPage === 'home' ? 'page' : undefined} className={`text-left outline-none transition-colors hover:text-accent-main focus-visible:text-accent-main ${currentPage === 'home' ? 'text-accent-main font-bold' : ''}`}>{t.home}</a>
              <div className="editorial-rule my-0.5"></div>
              <a href={getHref('about')} onClick={() => setIsSidebarOpen(false)} className="text-left outline-none hover:text-accent-main transition-colors focus-visible:text-accent-main cursor-pointer">{t.profile}</a>
              <a href={getHref('experience')} onClick={() => setIsSidebarOpen(false)} className="text-left outline-none hover:text-accent-main transition-colors focus-visible:text-accent-main cursor-pointer">{t.experience}</a>
              <a href={getHref('projects')} onClick={() => setIsSidebarOpen(false)} className="text-left outline-none hover:text-accent-main transition-colors focus-visible:text-accent-main cursor-pointer">{t.projects}</a>
              <a href={getHref('contact')} onClick={() => setIsSidebarOpen(false)} className="text-left outline-none hover:text-accent-main transition-colors focus-visible:text-accent-main cursor-pointer">{t.contact}</a>
              <div className="editorial-rule my-0.5"></div>
              
              <a 
                href={localizedUrl('/sobre-mi', currentLang)} 
                onClick={() => setIsSidebarOpen(false)} 
                aria-current={currentPage === 'about' ? 'page' : undefined} 
                className={`w-full min-h-[52px] px-3.5 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-bg cursor-pointer ${
                  currentPage === 'about' 
                    ? 'bg-accent/10 border border-accent/30 text-accent font-semibold' 
                    : 'bg-surface-soft/30 border border-main-border/20 text-text-main hover:bg-surface-soft/80 hover:border-accent/40 font-medium'
                }`}
              >
                <span className={`flex items-center justify-center w-[34px] h-[34px] shrink-0 rounded-lg border transition-colors ${
                  currentPage === 'about'
                    ? 'bg-accent/15 border-accent/40'
                    : 'bg-surface-base border-main-border/20 group-hover:bg-surface-soft/50 group-hover:border-accent/30'
                }`}>
                  <UserRound className="w-[18px] h-[18px] text-accent" aria-hidden="true" />
                </span>
                
                <span className="flex-1 text-[15px] text-left truncate">
                  {t.aboutMe}
                </span>

                <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-[2px] ${
                  currentPage === 'about' ? 'text-accent' : 'text-text-muted group-hover:text-text-main'
                }`} aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* SECCIÓN COMPACTA DE IDIOMAS EN MENÚ MÓVIL */}
          <div className="pt-6 border-t border-main-border/20 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-text px-1">
              <Globe className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{t.selectLanguage || "Idioma"}</span>
            </div>

            <div className="grid grid-cols-1 gap-1 bg-surface-soft/40 p-2 rounded-2xl border border-main-border/20">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isActive = currentLang === lang.code || currentLang === lang.short;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      selectLang(lang.code);
                      setIsSidebarOpen(false);
                    }}
                    className={`min-h-[44px] px-3 py-2 rounded-xl flex items-center justify-between text-xs font-medium transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-bold' 
                        : 'text-secondary-text hover:text-primary-text hover:bg-surface-soft/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-muted-text w-5 text-left">
                        {lang.short}
                      </span>
                      <span 
                        className="text-primary-text"
                        style={lang.code === 'zh-CN' ? { fontFamily: 'system-ui, "PingFang SC", "Microsoft YaHei", sans-serif' } : {}}
                      >
                        {lang.label}
                      </span>
                    </div>

                    {isActive && (
                      <Check className="w-4 h-4 text-accent-cyan" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}