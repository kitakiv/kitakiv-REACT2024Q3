import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import Results from './components/searchResults';
import NoResults from './components/noResults';
import NotFound from './components/notFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error! Redirecting...</div>,
    children: [
      {
        path: 'search/:search/page/:page',
        element: <Results />,
        loader: async ({ params }) => {
          const searchName = params.search === 'default' ? '' : params.search;
          try {
            const res = await fetch(
              `https://swapi.dev/api/people/?search=${searchName}&page=${params.page}`
            );
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await res.json();
            return data;
          } catch (error) {
            console.error(error);
          }
        },
        errorElement: <NoResults />,
        children: [
          {
            path: 'detail/:id',
            element: <div>hello children</div>,
            loader: async ({ params }) => {
              try {
                const res = await fetch(
                  `https://swapi.dev/api/people/${params.id}`
                );
                if (!res.ok) {
                  throw new Error('Network response was not ok');
                }
                const data = await res.json();
                return data;
              } catch (error) {
                console.error(error);
              }
            },
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
