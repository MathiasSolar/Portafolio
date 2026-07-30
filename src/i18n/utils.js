import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './languages';

/**
 * Normaliza un codigo de idioma o prefijo de URL a la locale interna canonica
 * ('es', 'en', 'fr', 'pt', 'zh-CN')
 */
export function getSupportedLocale(lang) {
  if (!lang) return DEFAULT_LANGUAGE;
  const lower = String(lang).toLowerCase();
  if (lower === 'es') return 'es';
  if (lower === 'en') return 'en';
  if (lower === 'fr') return 'fr';
  if (lower === 'pt') return 'pt';
  if (lower === 'zh' || lower === 'zh-cn') return 'zh-CN';

  const match = SUPPORTED_LANGUAGES.find(
    l => l.code.toLowerCase() === lower || l.short.toLowerCase() === lower
  );
  return match ? match.code : DEFAULT_LANGUAGE;
}

/**
 * Extrae la locale canonica ('es', 'en', 'fr', 'pt', 'zh-CN') directamente desde el pathname de la URL
 */
export function getLocaleFromPathname(pathname) {
  if (!pathname) return 'es';
  const cleanPath = String(pathname).split('?')[0].split('#')[0];
  if (cleanPath === '/en' || cleanPath.startsWith('/en/')) return 'en';
  if (cleanPath === '/fr' || cleanPath.startsWith('/fr/')) return 'fr';
  if (cleanPath === '/pt' || cleanPath.startsWith('/pt/')) return 'pt';
  if (cleanPath === '/zh' || cleanPath.startsWith('/zh/')) return 'zh-CN';
  return 'es';
}

/**
 * Devuelve el atributo htmlLang para la etiqueta <html> de Astro SSG
 */
export function getHtmlLang(locale) {
  const match = SUPPORTED_LANGUAGES.find(l => l.code === locale);
  return match ? match.htmlLang : 'es';
}

/**
 * Mapea una locale canonica ('es', 'en', 'fr', 'pt', 'zh-CN') a su prefijo de URL ('', '/en', '/fr', '/pt', '/zh')
 */
export function getUrlPrefix(locale) {
  if (locale === 'en') return '/en';
  if (locale === 'fr') return '/fr';
  if (locale === 'pt') return '/pt';
  if (locale === 'zh' || locale === 'zh-CN') return '/zh';
  return ''; // 'es' sin prefijo
}

/**
 * Construye la URL localizada equivalente eliminando prefijos previos y aplicando el objetivo
 */
export function getLocalizedPath(pathname, targetLocale) {
  if (!pathname) {
    const prefix = getUrlPrefix(targetLocale);
    return prefix ? `${prefix}/` : '/';
  }
  
  // Limpiar parametros y hashes
  let cleanPath = pathname.split('?')[0].split('#')[0];
  
  // Remover prefijos de idioma existentes ('/en', '/fr', '/pt', '/zh')
  const prefixes = ['/en', '/fr', '/pt', '/zh'];
  for (const prefix of prefixes) {
    if (cleanPath === prefix) {
      cleanPath = '/';
      break;
    }
    if (cleanPath.startsWith(`${prefix}/`)) {
      cleanPath = cleanPath.slice(prefix.length);
      break;
    }
  }
  
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }

  const targetPrefix = getUrlPrefix(targetLocale);

  if (cleanPath === '/') {
    return targetPrefix ? `${targetPrefix}/` : '/';
  }

  return targetPrefix ? `${targetPrefix}${cleanPath}` : cleanPath;
}

/**
 * Helper para formatear enlaces de navegacion interna respetando la locale actual
 */
export function localizedUrl(path, currentLocale) {
  return getLocalizedPath(path, currentLocale);
}
