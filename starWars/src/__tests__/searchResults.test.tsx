// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import SearchResults from '../features/results/searchResults';
// import {
//   BrowserRouter,
//   useLoaderData,
//   useNavigation,
//   useParams,
// } from 'react-router-dom';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useLoaderData: jest.fn(),
//   useNavigation: jest.fn(),
//   useParams: jest.fn(),
// }));

// const mockLoaderData = {
//   count: 1,
//   next: null,
//   previous: null,
//   results: [
//     {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       hair_color: 'blond',
//       skin_color: 'fair',
//       eye_color: 'blue',
//       birth_year: '19BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/1/',
//       films: [
//         'https://swapi.dev/api/films/1/',
//         'https://swapi.dev/api/films/2/',
//         'https://swapi.dev/api/films/3/',
//         'https://swapi.dev/api/films/6/',
//       ],
//       species: [],
//       vehicles: [
//         'https://swapi.dev/api/vehicles/14/',
//         'https://swapi.dev/api/vehicles/30/',
//       ],
//       starships: [
//         'https://swapi.dev/api/starships/12/',
//         'https://swapi.dev/api/starships/22/',
//       ],
//       created: '2014-12-09T13:50:51.644000Z',
//       edited: '2014-12-20T21:17:56.891000Z',
//       url: 'https://swapi.dev/api/people/1/',
//     },
//   ],
// };

// const seconddata = {
//   count: 24,
//   next: 'https://swapi.dev/api/people/?search=d&page=2',
//   previous: null,
//   results: [
//     {
//       name: 'R2-D2',
//       height: '96',
//       mass: '32',
//       hair_color: 'n/a',
//       skin_color: 'white, blue',
//       eye_color: 'red',
//       birth_year: '33BBY',
//       gender: 'n/a',
//       homeworld: 'https://swapi.dev/api/planets/8/',
//       films: [
//         'https://swapi.dev/api/films/1/',
//         'https://swapi.dev/api/films/2/',
//         'https://swapi.dev/api/films/3/',
//         'https://swapi.dev/api/films/4/',
//         'https://swapi.dev/api/films/5/',
//         'https://swapi.dev/api/films/6/',
//       ],
//       species: ['https://swapi.dev/api/species/2/'],
//       vehicles: [],
//       starships: [],
//       created: '2014-12-10T15:11:50.376000Z',
//       edited: '2014-12-20T21:17:50.311000Z',
//       url: 'https://swapi.dev/api/people/3/',
//     },
//     {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       hair_color: 'none',
//       skin_color: 'white',
//       eye_color: 'yellow',
//       birth_year: '41.9BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/1/',
//       films: [
//         'https://swapi.dev/api/films/1/',
//         'https://swapi.dev/api/films/2/',
//         'https://swapi.dev/api/films/3/',
//         'https://swapi.dev/api/films/6/',
//       ],
//       species: [],
//       vehicles: [],
//       starships: ['https://swapi.dev/api/starships/13/'],
//       created: '2014-12-10T15:18:20.704000Z',
//       edited: '2014-12-20T21:17:50.313000Z',
//       url: 'https://swapi.dev/api/people/4/',
//     },
//     {
//       name: 'R5-D4',
//       height: '97',
//       mass: '32',
//       hair_color: 'n/a',
//       skin_color: 'white, red',
//       eye_color: 'red',
//       birth_year: 'unknown',
//       gender: 'n/a',
//       homeworld: 'https://swapi.dev/api/planets/1/',
//       films: ['https://swapi.dev/api/films/1/'],
//       species: ['https://swapi.dev/api/species/2/'],
//       vehicles: [],
//       starships: [],
//       created: '2014-12-10T15:57:50.959000Z',
//       edited: '2014-12-20T21:17:50.321000Z',
//       url: 'https://swapi.dev/api/people/8/',
//     },
//     {
//       name: 'Biggs Darklighter',
//       height: '183',
//       mass: '84',
//       hair_color: 'black',
//       skin_color: 'light',
//       eye_color: 'brown',
//       birth_year: '24BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/1/',
//       films: ['https://swapi.dev/api/films/1/'],
//       species: [],
//       vehicles: [],
//       starships: ['https://swapi.dev/api/starships/12/'],
//       created: '2014-12-10T15:59:50.509000Z',
//       edited: '2014-12-20T21:17:50.323000Z',
//       url: 'https://swapi.dev/api/people/9/',
//     },
//     {
//       name: 'Greedo',
//       height: '173',
//       mass: '74',
//       hair_color: 'n/a',
//       skin_color: 'green',
//       eye_color: 'black',
//       birth_year: '44BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/23/',
//       films: ['https://swapi.dev/api/films/1/'],
//       species: ['https://swapi.dev/api/species/4/'],
//       vehicles: [],
//       starships: [],
//       created: '2014-12-10T17:03:30.334000Z',
//       edited: '2014-12-20T21:17:50.336000Z',
//       url: 'https://swapi.dev/api/people/15/',
//     },
//     {
//       name: 'Jabba Desilijic Tiure',
//       height: '175',
//       mass: '1,358',
//       hair_color: 'n/a',
//       skin_color: 'green-tan, brown',
//       eye_color: 'orange',
//       birth_year: '600BBY',
//       gender: 'hermaphrodite',
//       homeworld: 'https://swapi.dev/api/planets/24/',
//       films: [
//         'https://swapi.dev/api/films/1/',
//         'https://swapi.dev/api/films/3/',
//         'https://swapi.dev/api/films/4/',
//       ],
//       species: ['https://swapi.dev/api/species/5/'],
//       vehicles: [],
//       starships: [],
//       created: '2014-12-10T17:11:31.638000Z',
//       edited: '2014-12-20T21:17:50.338000Z',
//       url: 'https://swapi.dev/api/people/16/',
//     },
//     {
//       name: 'Wedge Antilles',
//       height: '170',
//       mass: '77',
//       hair_color: 'brown',
//       skin_color: 'fair',
//       eye_color: 'hazel',
//       birth_year: '21BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/22/',
//       films: [
//         'https://swapi.dev/api/films/1/',
//         'https://swapi.dev/api/films/2/',
//         'https://swapi.dev/api/films/3/',
//       ],
//       species: [],
//       vehicles: ['https://swapi.dev/api/vehicles/14/'],
//       starships: ['https://swapi.dev/api/starships/12/'],
//       created: '2014-12-12T11:08:06.469000Z',
//       edited: '2014-12-20T21:17:50.341000Z',
//       url: 'https://swapi.dev/api/people/18/',
//     },
//     {
//       name: 'Yoda',
//       height: '66',
//       mass: '17',
//       hair_color: 'white',
//       skin_color: 'green',
//       eye_color: 'brown',
//       birth_year: '896BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/28/',
//       films: [
//         'https://swapi.dev/api/films/2/',
//         'https://swapi.dev/api/films/3/',
//         'https://swapi.dev/api/films/4/',
//         'https://swapi.dev/api/films/5/',
//         'https://swapi.dev/api/films/6/',
//       ],
//       species: ['https://swapi.dev/api/species/6/'],
//       vehicles: [],
//       starships: [],
//       created: '2014-12-15T12:26:01.042000Z',
//       edited: '2014-12-20T21:17:50.345000Z',
//       url: 'https://swapi.dev/api/people/20/',
//     },
//     {
//       name: 'Lando Calrissian',
//       height: '177',
//       mass: '79',
//       hair_color: 'black',
//       skin_color: 'dark',
//       eye_color: 'brown',
//       birth_year: '31BBY',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/30/',
//       films: [
//         'https://swapi.dev/api/films/2/',
//         'https://swapi.dev/api/films/3/',
//       ],
//       species: [],
//       vehicles: [],
//       starships: ['https://swapi.dev/api/starships/10/'],
//       created: '2014-12-15T12:56:32.683000Z',
//       edited: '2014-12-20T21:17:50.357000Z',
//       url: 'https://swapi.dev/api/people/25/',
//     },
//     {
//       name: 'Arvel Crynyd',
//       height: 'unknown',
//       mass: 'unknown',
//       hair_color: 'brown',
//       skin_color: 'fair',
//       eye_color: 'brown',
//       birth_year: 'unknown',
//       gender: 'male',
//       homeworld: 'https://swapi.dev/api/planets/28/',
//       films: ['https://swapi.dev/api/films/3/'],
//       species: [],
//       vehicles: [],
//       starships: ['https://swapi.dev/api/starships/28/'],
//       created: '2014-12-18T11:16:33.020000Z',
//       edited: '2014-12-20T21:17:50.367000Z',
//       url: 'https://swapi.dev/api/people/29/',
//     },
//   ],
// };

// describe('write results', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('render results', async () => {
//     (useLoaderData as jest.Mock).mockReturnValue([
//       {
//         count: 0,
//         next: null,
//         previous: null,
//         results: [],
//       },
//     ]);
//     (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });
//     (useParams as jest.Mock).mockReturnValue({
//       page: '1',
//       search: 'Llllke',
//     });

//     render(
//       <BrowserRouter>
//         <SearchResults />
//       </BrowserRouter>
//     );
//     expect(screen.getByText(/no results/i)).toBeInTheDocument();
//   });

//   test('render not found page', async () => {
//     (useLoaderData as jest.Mock).mockReturnValue([mockLoaderData]);
//     (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });
//     (useParams as jest.Mock).mockReturnValue({
//       page: '1',
//       search: 'Luke',
//     });
//     render(
//       <BrowserRouter>
//         <SearchResults />
//       </BrowserRouter>
//     );

//     expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
//     expect(screen.getByText(/172/i)).toBeInTheDocument();
//     expect(screen.getByText(/male/i)).toBeInTheDocument();

//     const user = userEvent.setup();
//     await user.click(screen.getByText(/Luke Skywalker/i));
//     expect(window.location.pathname).toBe('/search/Luke/page/1/detail/1');
//     const item = screen.getByTitle('Results');
//     expect(item).toBeInTheDocument();
//     expect(item).toHaveClass('app-results');
//   });

//   test('render not found page', async () => {
//     (useLoaderData as jest.Mock).mockReturnValue([mockLoaderData]);
//     (useNavigation as jest.Mock).mockReturnValue({ state: 'loading' });
//     render(
//       <BrowserRouter>
//         <SearchResults />
//       </BrowserRouter>
//     );

//     expect(screen.getByTitle('Loading')).toBeInTheDocument();
//   });

//   test('render not found page', async () => {
//     (useLoaderData as jest.Mock).mockReturnValue([seconddata]);
//     (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });
//     (useParams as jest.Mock).mockReturnValue({ search: 'd', page: '1' });
//     render(
//       <BrowserRouter>
//         <SearchResults />
//       </BrowserRouter>
//     );

//     expect(screen.getAllByRole('list')).toHaveLength(10);
//     const pagination = screen.getByTitle('Pagination');
//     expect(pagination).toBeInTheDocument();
//     const links = pagination.querySelectorAll('a');
//     expect(links).toHaveLength(1);

//     const user = userEvent.setup();
//     await user.click(links[0]);
//     expect(window.location.pathname).toBe('/search/d/page/2');

//     const page2 = screen.getAllByRole('list');
//     expect(page2).toHaveLength(10);

//     const pagination2 = screen.getByTitle('Pagination');
//     expect(pagination2).toBeInTheDocument();
//     const links2 = pagination2.querySelectorAll('a');
//     expect(links2).toHaveLength(1);
//   });
// });
