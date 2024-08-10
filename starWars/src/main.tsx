import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App.tsx';
import './index.scss';
import Results from './features/results/searchResults.tsx';
import NoResults from './components/noResults';
import NotFound from './components/notFound';
import DetailsPage from './features/details/detailsPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './features/api/apiSlice.ts';
import store from '../store/store.ts';
import { Provider } from 'react-redux';

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
        errorElement: <NoResults />,
        children: [
          {
            path: 'detail/:id',
            element: <DetailsPage />,
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
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
