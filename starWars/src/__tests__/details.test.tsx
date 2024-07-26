// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import Details from '../features/details/detailsPage';
// import { BrowserRouter, useLoaderData, useNavigation } from 'react-router-dom';
// import { useGetDetailsQuery, apiSlice } from '../features/api/apiSlice';
// import { Provider } from 'react-redux';

// const LoaderData = [
//   {
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//     skin_color: 'fair',
//     eye_color: 'blue',
//     birth_year: '19BBY',
//     gender: 'male',
//     homeworld: 'https://swapi.dev/api/planets/1/',
//     films: [
//       'https://swapi.dev/api/films/2/',
//       'https://swapi.dev/api/films/6/',
//       'https://swapi.dev/api/films/3/',
//       'https://swapi.dev/api/films/1/',
//       'https://swapi.dev/api/films/7/',
//     ],
//     species: ['https://swapi.dev/api/species/1/'],
//     vehicles: [
//       'https://swapi.dev/api/vehicles/14/',
//       'https://swapi.dev/api/vehicles/30/',
//     ],
//     starships: [
//       'https://swapi.dev/api/starships/12/',
//       'https://swapi.dev/api/starships/22/',
//     ],
//     created: '2014-12-09T13:50:51.644000Z',
//     edited: '2014-12-20T21:17:56.891000Z',
//     url: 'https://swapi.dev/api/people/1/',
//   },
//   ['film1', 'film2', 'film3'],
//   'Tatooine',
//   ['vehicle1', 'vehicle2'],
//   ['starship1', 'starship2'],
// ];

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigation: jest.fn(),
// }));

// const { store } = setupApiStore(apiSlice);

// describe('make details page with right values', () => {
//   test('render details page', async () => {
//     (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });

//     render(
//         <Provider store={store}>
//             <BrowserRouter>
//         <Details />
//       </BrowserRouter>
//         </Provider>
//     );

//     const gender = screen.getByText(/male/i);
//     expect(gender).toBeInTheDocument();

//     const height = screen.getByText(/172/i);
//     expect(height).toBeInTheDocument();

//     const mass = screen.getByText(/77/i);
//     expect(mass).toBeInTheDocument();

//     const hair_color = screen.getByText(/blond/i);
//     expect(hair_color).toBeInTheDocument();

//     const skin_color = screen.getByText(/fair/i);
//     expect(skin_color).toBeInTheDocument();

//     const eye_color = screen.getByText(/blue/i);
//     expect(eye_color).toBeInTheDocument();
//   });

//   test('render not found page', async () => {
//     (useLoaderData as jest.Mock).mockReturnValue(LoaderData);
//     (useNavigation as jest.Mock).mockReturnValue({ state: 'loading' });
//     render(
//       <BrowserRouter>
//         <Details />
//       </BrowserRouter>
//     );
//     expect(screen.getByTitle('Loading')).toBeInTheDocument();
//   });
// });
// function setupApiStore(apiSlice: any): { store: any; } {
//     throw new Error('Function not implemented.');
// }
