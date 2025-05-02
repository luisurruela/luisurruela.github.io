import { defaultLang, ui } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  // Define the type for keys based on the default language
  type DefaultKeys = keyof typeof ui[typeof defaultLang];

  // Return the translation function `t`
  return function t(key: DefaultKeys): string { // Add explicit string return type
    // Access the translation in the selected language. Assert that it might be undefined.
    const langValue = (ui[lang] as Record<DefaultKeys, string | undefined>)[key];
    // Use the value from the selected language, or fallback to the default language value.
    return langValue ?? ui[defaultLang][key]; // Use nullish coalescing for fallback
  }
}