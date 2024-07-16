import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Welcome: 'Welcome to React and react-i18next',
    },
  },
  es: {
    translation: {
      Welcome: 'hola como esta',
    },
  },
  fr: {
    translation: {
      'Welcome': 'Bienvenue sur mon Portfolio NextJS',
      'index.description':
        "Je m'appelle Sébastien LOURDEL j'ai 25 ans, j'ai commencé le développement il y a 5 ans par HTML/CSS et Wordpress puis j'ai continué de me former pour développer mes compétences de développeur front-end. Je suis passionné depuis petit par l'informatique, j'ai beaucoup utilisé la suite Adobe ce qui me permet aujourd'hui d'être à l'aise avec les maquettes, l'intégration de création graphique et la notion d'UX/UI.",
      'index.button.first': 'Mon CV',
      'index.button.second': 'Mes projets',
      'madewith': 'Fait avec',
      'index.titleexp': 'Dernières expériences',
      'index.titleform': 'Formation',
      'index.titleproject': 'Mes projets',
      'index.download.cv': 'Télécharger mon CV !',
      'projectpage.description':
        'Retrouvrez tous mes projets de développement web, de graphisme, back/front-end et bien plus..',
      'label.segmented': 'Tous',
      'projetpage.title': 'Mes projets',
      'header.home': 'Accueil',
      'header.cv': 'CV',
      'header.project': 'Projets',
      'header.contact': 'Contact',
      'about.title': 'Quelques informations',
      /* DIPLOME BLOCK */
      'openclassroom.dip.title':
        'Titre professionnel bac +2 Développeur web et application (RNCP 5)',
      'popschool.dip.title':
        'Titre professionnel bac +2 Développeur web et application mobile (RNCP 5)',
      'bac.dip.title': 'Baccalauréat sciences et technologies du management et de la gestion',
      /* FORMATION BLOCK */
      'openclassroom.description':
        "Alternance développeur web, création d'application front-end / back-end fonctionnel avec les notions de seo, responsive, green code et travail agile",
      'popschool.description':
        'Formation de 6 mois de développeur web et application mobile à Popschool Valenciennes, apprentissage des languages, des methodes de travail agiles, le développement mobile les bonnes pratique.',
      'bac.description':
        'Bacclauréat Sciences et technologies du management et de la gestion à Sin-le-Noble au Lycée Arthur-Rimbaud',
      'brevet.description': 'Collège André Malraux Lambres-lez-Douai',
      /* EXPERIENCE BLOCK */
      'freelance.description':
        'Développement de site vitrine, e-commerce ou booking clé en main pour des auto-entrepreneur, ou PME. Campagne publicitaire, graphisme, seo, tracking, optimisation.',
      'flexpress.description':
        'Livraison de colis pour particuliers et professionnels (Fedex, Chronopost, GLS) avec camions de 14m3 et transport de pièces lourdes et cuisines à domicile avec camions de 20m3. Travail à cadence élevée et gestion des journées de 8 à 12 heures.',
      'toast.exp.description':
        'Développement de sites WordPress, maintenance, ajout de fonctionnalités, création de pages et optimisation de tunnels de vente. Conception de maquettes et prototypes, gestion de campagnes publicitaires Facebook et Google Ads, et tracking via Google Tag Manager.',
      'faurecia.description':
        'Assemblage de textiles pour sièges automobiles, contrôle qualité et sécurité, intervention rapide en cas d’arrêt de chaîne, et maîtrise des différents matériaux et postes d’assemblage textile et métal.',
      'trigo.va.description':
        'Contrôle qualité des pièces esthétiques, mise à l’écart des non-conformes, rédaction de rapports, retouches de pièces automobiles, et maintien de la cadence de production.',
      'trigo.sin.description':
        'Contrôle qualité des pièces esthétiques pour Renault Talisman, mise à l’écart des non-conformes, retouches de pièces, gestion des stocks, réglage de machines, et tests de tablettes R-LINK.',
      'dk.description':
        'Développement et maintenance de sites WordPress, développement d’un intranet en HTML/CSS/PHP, optimisation et SEO, conception de maquettes et prototypes.',
      'graphic.description':
        'Découpe et assemblage de prototypes de cartons pour la grande distribution. Approvisionnement des machines, contrôle de la ligne de production et gestion des équipements pour les emballages industriels',
      /* PROJECT BLOCK */
      'project.netflix.description.fr':
        "Développement front-end de la page d'accueil de l'application web Netflix, avec intégration de contenu dynamique, un slider pour naviguer parmi les films et les catégories variées. Travail de design et d'optimisation pour une meilleure expérience utilisateur.",
      'project.uber-eats.description.fr':
        "Reproduction de l'ancienne page d'accueil d'Uber Eats, utilisant Vue.js pour une interface dynamique avec un système de filtres fonctionnel dans la barre de recherche. Création de pages dynamiques pour chaque restaurant avec menus spécifiques et gestion des commandes en temps réel.",
      'project.abc-renov.description.fr':
        "Création d'un site vitrine WordPress pour une entreprise de BTP basée à Nice. Mise en place d'un site multipage incluant des formulaires de contact, un référencement SEO optimisé et un suivi analytique pour améliorer la visibilité et l'engagement des visiteurs.",
      'project.booki.description.fr':
        'Projet front-end visant à recréer une page web dynamique et responsive, dans le style de Booking.com. Utilisation des technologies modernes pour une interface utilisateur fluide et une compatibilité sur différents appareils.',
      'project.couvretanche.description.fr':
        "Site vitrine pour une PME spécialisée dans la toiture, couverture, étanchéité et isolation. Design inspiré d'un site similaire, avec une mise en page multipage et intégration de formulaires de contact, permettant aux clients de demander des devis ou des informations.",
      'project.couvrassistance.description.fr':
        "Site vitrine pour une entreprise spécialisée dans l'assistance et la rénovation de toitures et couvertures, avec une réactivité pour les urgences. Mise en avant des services offerts et témoignages de clients satisfaits.",
      'project.kasa.description.fr':
        "Développement des pages du site Kasa, similaire à Booking.com, permettant l'affichage des hébergements disponibles avec des descriptions détaillées, des avis sur les hôtes, et des fonctionnalités de réservation en ligne.",
      'project.ferrari.description.fr':
        "Reproduction de la page d'accueil du site Ferrari Beverly Hills en React, avec intégration des éléments tels que le menu, l'en-tête animé et les différents blocs jusqu'au pied de page. Optimisation pour les performances et la réactivité.",
      'project.ladigitoile.description.fr':
        "Création d'un site sur-mesure pour une agence WebAgency en WordPress, avec ajout de fonctionnalités personnalisées et animations. Mise en place d'un portfolio interactif et de formulaires de contact pour attirer de nouveaux clients.",
      'project.lesvanniers.description.fr':
        'Site vitrine WordPress avec fonctionnalités de réservation de table, commande de plats et redirection vers les services de livraison. Mise en avant des plats, menus et du restaurant. Optimisation SEO pour attirer plus de clients locaux.',
      'project.monvieuxgrimoire.description.fr':
        "Développement back-end d'un projet de notation de livres, incluant authentification, gestion des routes, permissions et opérations CRUD sur la base de données. Intégration d'un système de notation et de commentaires des utilisateurs.",
      'project.paulsavine.description.fr':
        "Site vitrine pour une entreprise spécialisée dans l'agencement de pharmacies et la rénovation intérieure. Présentation des projets réalisés et des services offerts, avec des images avant/après pour illustrer les transformations.",
      'project.rocketschool.description.fr':
        'Développement de landing pages pour plusieurs filières spécifiques de RocketSchool, optimisées pour la publicité et le suivi avec Google Tag Manager, en respectant la mise en page du site officiel. Amélioration du taux de conversion des visiteurs.',
      'project.sirius.description.fr':
        'Site vitrine WordPress pour une entreprise de sécurité événementielle et de lieux. Refonte de la mise en page avec animations, slider et formulaires. Mise en avant des services offerts et des événements sécurisés avec succès.',
      'project.tesla.description.fr':
        "Reproduction de la page d'accueil du site Tesla, incluant une logique de blocs qui défilent verticalement, un méga menu avec différentes sections et animations au survol. Optimisation pour la performance et la compatibilité mobile.",
      'project.toast.description.fr':
        "Site vitrine sur-mesure WordPress pour une agence de WebMarketing, avec mise en page personnalisée, slider manuel et lightbox. Intégration de témoignages clients et de cas d'études pour démontrer l'expertise de l'agence.",
      'project.sophiebluel.description.fr':
        "Développement front-end du site de l'artiste SophieBluel, intégration de contenus dynamiques, connexion à une base de données et opérations CRUD. Mise en avant des œuvres et des expositions, avec une interface utilisateur moderne et intuitive.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;