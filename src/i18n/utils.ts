import { labels, defaultLang } from './ui';

// Esta función me deja acceder a una clave anidada usando notación tipo "hero.overview.title"
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

// Hook para obtener traducciones en el idioma que le pase
export function useTranslations(lang: keyof typeof labels) {
  return function translate(key: string): string {
    // Primero intento buscar la clave en el idioma actual
    const fromCurrentLang = getNestedValue(labels[lang], key);

    // Si no está, me voy al idioma por defecto
    const fromDefaultLang = getNestedValue(labels[defaultLang], key);

    // Si no existe en ninguno, regreso la clave tal cual para no romper nada
    return fromCurrentLang ?? fromDefaultLang ?? key;
  };
}
