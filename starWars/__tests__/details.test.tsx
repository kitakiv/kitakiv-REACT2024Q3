import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Details from '../features/details/detailsPage';
import userEvent from '@testing-library/user-event';
import React from 'react';

const details = {
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

const films = {
  'https://swapi.dev/api/films/1/': 'A New Hope',
  'https://swapi.dev/api/films/2/': 'The Empire Strikes Back',
  'https://swapi.dev/api/films/3/': 'Return of the Jedi',
  'https://swapi.dev/api/films/4/': 'Revenge of the Sith',
  'https://swapi.dev/api/films/5/': 'The Phantom Menace',
  'https://swapi.dev/api/films/6/': 'The Return of the Jedi',
  'https://swapi.dev/api/films/7/': 'The Force Awakens',
};

describe('details page', () => {
  test('should render details page', async () => {
    render(
      <Details
        details={details}
        filmsResult={films}
        page={'1'}
        search={'luke'}
      />
    );
    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/172/i)).toBeInTheDocument();
    expect(screen.getByText(/77/i)).toBeInTheDocument();
    expect(screen.getByText(/blond/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
    expect(screen.getByText(/The Empire Strikes Back/i)).toBeInTheDocument();
    expect(screen.getByText(/The Return of the Jedi/i)).toBeInTheDocument();
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    const user = userEvent.setup();
    const link = screen.getByRole('link');
    await user.click(link);
    expect(link).toHaveAttribute('href', '/?search=luke&page=1');
    expect(window.location.pathname).toBe('/');
  });

  test('should render details page', async () => {
    render(
      <Details
        details={{ name: 'No results' }}
        filmsResult={films}
        page={'1'}
        search={'luke'}
      />
    );
    expect(screen.getByText(/No results/i)).toBeInTheDocument();
  });
});
