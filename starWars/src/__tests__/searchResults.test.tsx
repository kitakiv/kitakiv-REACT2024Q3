import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from '../features/results/searchResults';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Provider } from 'react-redux';
import store from '../store/store';

const mockFilms = {
  count: 1,
  next: '',
  previous: '',
  results: [],
};

const mockResult = {
  count: 1,
  next: '',
  previous: '',
  results: [],
};

const mockDetail = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  homeworld: 'https://swapi.dev/api/planets/1/',
};

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn().mockImplementation(() => ({ get: jest.fn() })),
}));

fetchMock.enableMocks();

describe('results page', () => {
  it('should render results page', async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (t: string) => {
        switch (t) {
          case 'page':
            return '1';
          case 'search':
            return 'luke';
          case 'detail':
            return '1';
          default:
            return '';
        }
      },
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Results
            result={mockResult}
            filmsResult={mockFilms}
            detailResult={mockDetail}
            isSuccess={true}
          />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('Results')).toBeInTheDocument();
  });
});
