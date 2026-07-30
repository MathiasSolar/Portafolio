import { atom } from 'nanostores';
import { DEFAULT_LANGUAGE } from '../i18n/languages';
import { getLocaleFromPathname, getSupportedLocale } from '../i18n/utils';

const STORAGE_KEY = 'portfolio-language';

/**
 * Obtiene la locale inicial dando prioridad absoluta a la URL
 */
export function getInitialLanguage() {
  if (typeof window !== 'undefined') {
    return getLocaleFromPathname(window.location.pathname);
  }
  return DEFAULT_LANGUAGE;
}

const initialLang = getInitialLanguage();

export const langStore = atom(initialLang);

export function setLanguage(newCode) {
  const normalized = getSupportedLocale(newCode);
  langStore.set(normalized);
}

export function setLanguagePreference(newCode) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, getSupportedLocale(newCode));
    } catch (e) {}
  }
}

export function syncLanguageFromRoute(pathname) {
  if (typeof window !== 'undefined') {
    const routeLocale = getLocaleFromPathname(pathname || window.location.pathname);
    langStore.set(routeLocale);
  }
}
