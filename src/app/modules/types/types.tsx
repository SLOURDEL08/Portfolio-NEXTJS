// types.ts
export interface Project {
  id: number;
  title: string;
  categories: string[];
  tags: string[];
  image: string;
  symbol: string;
  link: string;
  pageUrl?: string;
  date: string;
  description?: {
    fr?: string;
    en?: string;
    es?: string;
  };
  repoUrl?: string;
  gallery?: {
    topleft: string;
    topright: string;
    big: string;
    botleft: string;
    botright: string;
    vertical: string;
  };
  slug: string; // Ajouter la propriété slug ici
}
