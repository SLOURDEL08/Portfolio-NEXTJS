import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: {
      "Welcome": "Bienvenue sur mon Portfolio NextJS",
      "index.description": "Je m'appelle Sébastien LOURDEL j'ai 25 ans, j'ai commencé le développement il y a 5 ans par HTML/CSS et Wordpress puis j'ai continué de me former pour développer mes compétences de développeur front-end. Je suis passionné depuis petit par l'informatique, j'ai beaucoup utilisé la suite Adobe ce qui me permet aujourd'hui d'être à l'aise avec les maquettes, l'intégration de création graphique et la notion d'UX/UI.",
      "index.button.first":"Mon CV",
      "index.button.second": "Mes projets",
      "madewith": "Fait avec",
      "index.titleexp": "Dernières expériences",
      "index.titleform": "Formation",
      "index.titleproject": "Mes projets",
      "index.download.cv": "Télécharger mon CV !",
      "projectpage.description": "Retrouvrez tous mes projets de développement web, de graphisme, back/front-end et bien plus..",
      "label.segmented": "Tous",
      "projetpage.title": "Mes projets",
      "header.home": "Accueil",
      "header.cv": "CV",
      "header.project": "Projets",
      "header.contact": "Contact",
      "about.title": "Quelques informations",

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;