import { render } from '@testing-library/react';
import Home from '../pages/index';
import {
  SWApiResponse,
  SWCharacterWithFilms,
  SWCharacter,
} from '../interface/interface';
import React from 'react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home Component', () => {
  it('should render the Results component with correct props', () => {
    const mockData: SWApiResponse = {
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          url: 'https://swapi.dev/api/people/1/',
          films: ['https://swapi.dev/api/films/1/'],
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
          edited: '2014-12-20T21:17:56.891000Z',
          created: '2014-12-09T13:50:51.644000Z',
        },
      ],
      count: 1,
      next: null,
      previous: null,
    };
    const mockFilmData: SWCharacterWithFilms = {
      results: [],
      count: 0,
      next: null,
      previous: null,
    };
    const mockDataDetails: SWCharacter | null = null;
    (useRouter as jest.Mock).mockReturnValue({
      query: { search: 'luke', page: '1', detail: '1' },
      push: jest.fn(),
    });

    const { getByTestId } = render(
      <Home
        data={mockData}
        dataDetails={mockDataDetails}
        filmData={mockFilmData}
      />
    );
    expect(getByTestId('template')).toBeInTheDocument();
    expect(getByTestId('app')).toHaveClass('dark');
    expect(getByTestId('Results')).toBeInTheDocument();
  });
});
