import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Result from '../features/favoriteCards/result';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeSlice from '../store/store';
import userEvent from '@testing-library/user-event';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../features/api/apiSlice';
import React from 'react';

jest.mock('@remix-run/react', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

describe('create result card', () => {
  test('Renders the main page', async () => {
    const films = {
      '/https://swapi.dev/api/films/1/': 'Nebula',
      '/https://swapi.dev/api/films/2/': 'A New Hope',
      '/https://swapi.dev/api/films/3/': 'The Empire Strikes Back',
      '/https://swapi.dev/api/films/6/': 'The Return of the Jedi',
      '/https://swapi.dev/api/films/7/': 'The Force Awakens',
    };

    const result = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/6/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/7/',
      ],
      species: ['https://swapi.dev/api/species/1/'],
      vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/',
      ],
      starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/',
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    };

    const key = result.url;

    const addFavoriteCardMock = jest.fn();
    const removeFavoriteCardMock = jest.fn();

    const removeFavoriteCard = jest
      .spyOn(storeSlice, 'dispatch')
      .mockImplementation(removeFavoriteCardMock);

    const addFavoriteCard = jest
      .spyOn(storeSlice, 'dispatch')
      .mockImplementation(addFavoriteCardMock);

    render(
      <ApiProvider api={apiSlice}>
        <Provider store={storeSlice}>
          <BrowserRouter>
            <Result
              result={result}
              keyProps={key}
              films={films}
              search="Luke"
              page="1"
            />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    );

    expect(screen.getByText(result.name)).toBeInTheDocument();
    expect(screen.getByText(/172/i)).toBeInTheDocument();
    expect(screen.getByText(/77/i)).toBeInTheDocument();
    expect(screen.getByText(/blond/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(addFavoriteCard).toHaveBeenCalledTimes(1);
    expect(addFavoriteCard).toHaveBeenCalledWith({
      payload: {
        birth_year: '19BBY',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        eye_color: 'blue',
        films: [],
        gender: 'male',
        hair_color: 'blond',
        height: '172',
        id: '1',
        mass: '77',
        name: 'Luke Skywalker',
        skin_color: 'fair',
        url: 'https://swapi.dev/api/people/1/',
      },
      type: 'cards/addFavoriteCard',
    });
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(removeFavoriteCard).toHaveBeenCalledTimes(2);
    expect(removeFavoriteCard).toHaveBeenCalledWith({
      payload: '1',
      type: 'cards/removeFavoriteCard',
    });
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});

const mockFilms = {
  'https://swapi.dev/api/films/1/': 'A New Hope',
  'https://swapi.dev/api/films/2/': 'The Empire Strikes Back',
};

const mockResult = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/'],
  homeworld: 'https://swapi.dev/api/planets/1/',
  species: ['https://swapi.dev/api/species/1/'],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    search: 'Luke',
    page: '1',
  }),
}));

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => ['dark', jest.fn()],
}));

describe('Result Component', () => {
  test('renders Result component with correct data', () => {
    render(
      <ApiProvider api={apiSlice}>
        <Provider store={storeSlice}>
          <BrowserRouter>
            <Result
              result={mockResult}
              keyProps={mockResult.url}
              films={mockFilms}
              search="Luke"
              page="1"
            />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77')).toBeInTheDocument();
    expect(screen.getByText('Hair color: blond')).toBeInTheDocument();
    expect(screen.getByText('Skin color: fair')).toBeInTheDocument();
    expect(screen.getByText('Eye color: blue')).toBeInTheDocument();
    expect(screen.getByText(/Birth year: 19BBY/i)).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });

  test('renders correct template based on local storage value', () => {
    const { rerender } = render(
      <ApiProvider api={apiSlice}>
        <Provider store={storeSlice}>
          <BrowserRouter>
            <Result
              result={mockResult}
              keyProps={mockResult.url}
              films={mockFilms}
              search="Luke"
              page="1"
            />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    );

    rerender(
      <ApiProvider api={apiSlice}>
        <Provider store={storeSlice}>
          <BrowserRouter>
            <Result
              result={mockResult}
              keyProps={mockResult.url}
              films={mockFilms}
              search="Luke"
              page="1"
            />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    );
  });
});
