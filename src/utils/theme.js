/**
 * Utilidad pura para la gestión y aplicación del tema (claro/oscuro).
 */

export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light-mode');
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
    root.classList.remove('light-mode');
  }
  root.style.colorScheme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch (err) {}
}
