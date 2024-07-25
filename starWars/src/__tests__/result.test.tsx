import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Result from '../features/favoriteCards/result';
import { BrowserRouter } from 'react-router-dom';

describe('create result card', () => {
  test('Renders the main page', async () => {
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

    render(
      <BrowserRouter>
        <Result result={result} keyProps={key} />
      </BrowserRouter>
    );

    expect(screen.getByText(result.name)).toBeInTheDocument();
    expect(screen.getByText(/172/i)).toBeInTheDocument();
    expect(screen.getByText(/77/i)).toBeInTheDocument();
    expect(screen.getByText(/blond/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
  });
});
