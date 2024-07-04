import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLocale = (initialLocale = 'en') => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(initialLocale);

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  };

  useEffect(() => {
    i18n.loadLanguages(locale);
  }, [locale]);

  return { locale, handleLanguageChange };
};