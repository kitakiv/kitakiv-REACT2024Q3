import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/main/App.tsx';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UncontrolledForm from './components/uncontrolForm/uncontrolForm';
import ReactForm from './components/reactHookForm/reactForm';
import Header from './components/header/header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <p>Oops! There was an error.</p>,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <p>Oops! There was an error.</p>,
      },
      {
        path: "/uncontrolled_form",
        element: <UncontrolledForm />,
        errorElement: <p>Oops! There was an error.</p>,
      },
      {
        path: "/react_form",
        element: <ReactForm />,
        errorElement: <p>Oops! There was an error.</p>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
