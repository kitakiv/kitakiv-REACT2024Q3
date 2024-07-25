// import '@testing-library/jest-dom';
// import { render, screen, waitFor } from '@testing-library/react';
// import { RouterProvider, createMemoryRouter } from 'react-router-dom';
// import fetchMock from 'jest-fetch-mock';
// import App from '../App';
// import NoResults from '../components/noResults';
// import Results from '../features/results/searchResults';
// import DetailsPage from '../features/details/detailsPage';
// import NotFound from '../components/notFound';
// import { loaderDetails } from '../components/loaders/loaders';
// import { act } from '@testing-library/react';

// fetchMock.enableMocks();

// const routes = [
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <div>Error! Redirecting...</div>,
//     children: [
//       {
//         path: '/no-results',
//         element: <NoResults />,
//       },
//       {
//         path: 'search/:search/page/:page',
//         element: <Results />,
//         errorElement: <NoResults />,
//         children: [
//           {
//             path: 'detail/:id',
//             element: <DetailsPage />,
//             loader: loaderDetails,
//             errorElement: <NoResults />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: '*',
//     element: <NotFound />,
//   },
// ];

// describe('App Router', () => {
//   beforeEach(() => {
//     fetchMock.resetMocks();
//   });

//   test('renders the main app component', async () => {
//     const router = createMemoryRouter(routes, {
//       initialEntries: ['/'],
//     });

//     await act(async () => {
//       render(<RouterProvider router={router} />);
//     });

//     expect(screen.getByPlaceholderText(/Darth Vader/i)).toBeInTheDocument();
//   });

//   test('renders NoResults for no-results route', async () => {
//     const router = createMemoryRouter(routes, {
//       initialEntries: ['/no-results'],
//     });

//     await act(async () => {
//       render(<RouterProvider router={router} />);
//     });
//     expect(screen.getByText(/No Results/i)).toBeInTheDocument();
//   });

//   test('renders Results component and fetches data', async () => {
//     const mockLoaderData = {
//       count: 1,
//       next: null,
//       previous: null,
//       results: [
//         {
//           name: 'Luke Skywalker',
//           height: '172',
//           mass: '77',
//           hair_color: 'blond',
//           skin_color: 'fair',
//           eye_color: 'blue',
//           birth_year: '19BBY',
//           gender: 'male',
//           homeworld: 'https://swapi.dev/api/planets/1/',
//           films: [
//             'https://swapi.dev/api/films/1/',
//             'https://swapi.dev/api/films/2/',
//             'https://swapi.dev/api/films/3/',
//             'https://swapi.dev/api/films/6/',
//           ],
//           species: [],
//           vehicles: [
//             'https://swapi.dev/api/vehicles/14/',
//             'https://swapi.dev/api/vehicles/30/',
//           ],
//           starships: [
//             'https://swapi.dev/api/starships/12/',
//             'https://swapi.dev/api/starships/22/',
//           ],
//           created: '2014-12-09T13:50:51.644000Z',
//           edited: '2014-12-20T21:17:56.891000Z',
//           url: 'https://swapi.dev/api/people/1/',
//         },
//       ],
//     };

//     fetchMock.mockResponseOnce(JSON.stringify(mockLoaderData));

//     const router = createMemoryRouter(routes, {
//       initialEntries: ['/search/llll/page/1'],
//     });

//     await act(async () => {
//       render(<RouterProvider router={router} />);
//     });

//     await waitFor(() => {
//       expect(screen.getByText(/no results/i)).toBeInTheDocument();
//     });
//   });

//   test('renders NotFound for invalid route', async () => {
//     const router = createMemoryRouter(routes, {
//       initialEntries: ['/non-existing-route'],
//     });

//     await act(async () => {
//       render(<RouterProvider router={router} />);
//     });

//     expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
//   });

//   test('renders error element on error', async () => {
//     fetchMock.mockRejectOnce(new Error('Failed to fetch'));

//     const router = createMemoryRouter(routes, {
//       initialEntries: ['/search/Luke/page/1'],
//     });

//     await act(async () => {
//       render(<RouterProvider router={router} />);
//     });

//     await waitFor(() => {
//       expect(screen.getByText(/No Results/i)).toBeInTheDocument();
//     });
//   });
// });
