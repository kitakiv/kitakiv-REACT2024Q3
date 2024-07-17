import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import Results from './components/searchResults';
import NoResults from './components/noResults';
import NotFound from './components/notFound';
import DetailsPage from './components/detailsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loaderDetails, loaderResult } from './components/loaders/loaders.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error! Redirecting...</div>,
    children: [
      {
        path: '/no-results',
        element: <NoResults />,
      },
      {
        path: 'search/:search/page/:page',
        element: <Results />,
        loader: loaderResult,
        errorElement: <NoResults />,
        children: [
          {
            path: 'detail/:id',
            element: <DetailsPage />,
            loader: loaderDetails,
            errorElement: <NoResults />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
