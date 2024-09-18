// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

// Configuração de recursos de idioma
const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

// Inicialização do i18next
i18n
  .use(LanguageDetector) // Detecta automaticamente o idioma do navegador
  .use(initReactI18next) // Passa a instância para o react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Idioma padrão caso o navegador não detecte um suportado
    interpolation: {
      escapeValue: false // React já faz a proteção contra XSS
    }
  });

export default i18n;
