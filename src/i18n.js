import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationRU from "../src/locales/ru/traslation.json"
import translationEN from "../src/locales/en/traslation.json"
import translationES from "../src/locales/es/traslation.json"


const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },

  })

export default i18n