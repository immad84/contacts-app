import HomePage from '../pages/home';
import Article from '../pages/article';

export const pagesData = [
  {
    path: '/',
    element: <HomePage />,
    title: 'home page',
  },
  {
    path: '/:id',
    element: <Article />,
    title: 'article page',
  },
];
