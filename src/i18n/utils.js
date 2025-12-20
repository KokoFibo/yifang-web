export const languages = {
  en: "English",
  zh: "Chinese",
};

export const defaultLang = "en";

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang;
  return defaultLang;
}
