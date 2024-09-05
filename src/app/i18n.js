import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'fr', // langue par défaut
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      common: require('/public/locales/fr/common.json'),
    },
    en: {
      common: require('/public/locales/en/common.json'),
    },
    es: {
      common: require('/public/locales/es/common.json'),
    },
  },
});

export default i18n;
