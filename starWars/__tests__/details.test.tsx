import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Details from '../features/details/detailsPage';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

jest.mock('@remix-run/react', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

const resultData2 = {
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
const resultData3 = {
  'https://swapi.dev/api/films/1/': 'A New Hope',
  'https://swapi.dev/api/films/2/': 'The Empire Strikes Back',
  'https://swapi.dev/api/films/3/': 'Return of the Jedi',
  'https://swapi.dev/api/films/6/': 'The Return of the Jedi',
  'https://swapi.dev/api/films/7/': 'The Force Awakens',
};

describe('details page', () => {
  it('should render details page', async () => {
    render(
      <BrowserRouter>
        <Details
          details={resultData2}
          filmsResult={resultData3}
          page="1"
          search="luke"
          detail="1"
        />
      </BrowserRouter>
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
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
  });

  it('should render details page', async () => {
    render(
      <BrowserRouter>
        <Details
          details={resultData2}
          filmsResult={resultData3}
          page="1"
          search="luke"
          detail="2"
        />
      </BrowserRouter>
    );

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://starwars-visualguide.com/assets/img/characters/2.jpg'
    );
  });

  it('should render details page', async () => {
    render(
      <BrowserRouter>
        <Details
          details={null}
          filmsResult={resultData3}
          page="1"
          search="luke"
          detail="2"
        />
      </BrowserRouter>
    );

    expect(screen.getByText(/No results/i)).toBeInTheDocument();
  });
});
