import Home from '../app/routes/_index';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { SWApiResponse, SWCharacter } from '../interface/interface';
import { useNavigation } from '@remix-run/react';

const detail: SWCharacter = {
  homeworld: 'https://swapi.dev/api/planets/1/',
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
  films: [
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'Revenge of the Sith',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  species: [],
  starships: [],
  vehicles: [],
};

const result: SWApiResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [detail],
};

const films = {
  count: 6,
  next: null,
  previous: null,
  results: [],
};

jest.mock('@remix-run/react', () => ({
  useLoaderData: jest.fn().mockImplementation(() => {
    return {
      data: result,
      dataDetails: null,
      dataFilms: films,
      searchProps: '',
      pageProps: '1',
      detailProps: undefined,
    };
  }),
  useNavigation: jest.fn().mockImplementation(() => {
    return { state: 'idle' };
  }),
  useNavigate: jest.fn(),
}));

test('Renders the main page', () => {
  render(<Home />);
  expect(screen.getByTestId('app')).toBeInTheDocument();
});

test('Renders the main page', () => {
  render(<Home />);
  expect(screen.getByPlaceholderText('Darth Vader')).toBeInTheDocument();
});
