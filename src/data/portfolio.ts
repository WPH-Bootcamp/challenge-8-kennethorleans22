export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: 'Landing Page',
    title: 'Portfolio 1',
    image: '/portfolio/portfolio-1.png',
  },
  {
    id: 2,
    category: 'Landing Page',
    title: 'Portfolio 2',
    image: '/portfolio/portfolio-2.png',
  },
  {
    id: 3,
    category: 'Landing Page',
    title: 'Portfolio 3',
    image: '/portfolio/portfolio-3.png',
  },
];