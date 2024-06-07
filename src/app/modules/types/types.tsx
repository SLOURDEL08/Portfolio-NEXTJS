// types.ts
export interface Project {
    id: number;
    title: string;
    categories: string[];
    tags: string[];
    image: string;
    symbol: string;
    link: string;
    hoverBackgroundColor?: string;
    description?: string;
    pageUrl?: string;
    repoUrl?: string;
    gallery?: {
      topleft: string;
      topright: string;
      big: string;
      botleft: string;
      botright: string;
      vertical: string;
      mkt: string;
    };
  }
  