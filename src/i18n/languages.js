export const SUPPORTED_LANGUAGES = [
  { code: 'es', short: 'ES', label: 'Español', htmlLang: 'es' },
  { code: 'en', short: 'EN', label: 'English', htmlLang: 'en' },
  { code: 'fr', short: 'FR', label: 'Français', htmlLang: 'fr' },
  { code: 'pt', short: 'PT', label: 'Português', htmlLang: 'pt' },
  { code: 'zh-CN', short: 'ZH', label: '简体中文', htmlLang: 'zh-CN' }
];

export const DEFAULT_LANGUAGE = 'es';

/**
 * Normaliza cualquier codigo de idioma recibido (ej. 'ES' -> 'es', 'zh' -> 'zh-CN')
 */
export function normalizeLanguageCode(code) {
  if (!code) return DEFAULT_LANGUAGE;
  const lower = str(code).toLowerCase();
  if (lower === 'es') return 'es';
  if (lower === 'en') return 'en';
  if (lower === 'fr') return 'fr';
  if (lower === 'pt') return 'pt';
  if (lower === 'zh' || lower === 'zh-cn') return 'zh-CN';
  
  // Si coincide exactamente con alguno
  const match = SUPPORTED_LANGUAGES.find(l => l.code === code || l.short === code);
  return match ? match.code : DEFAULT_LANGUAGE;
}

function str(val) {
  return String(val || '');
}
