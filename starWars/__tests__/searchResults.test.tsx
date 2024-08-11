import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from '../features/results/searchResults';
import { BrowserRouter } from 'react-router-dom';
import storeApp from '../store/store';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../features/api/apiSlice';
import React from 'react';
import { SWCharacter } from '../interface/interface';
import userEvent from '@testing-library/user-event';

fetchMock.enableMocks();

jest.mock('@remix-run/react', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

const resultData = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [],
};
const filmsResult = {
  count: 6,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [],
};
const detailResult: SWCharacter = {
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
  homeworld: 'https://swapi.dev/api/planets/1/',
  starships: ['https://swapi.dev/api/starships/2/'],
  species: ['https://swapi.dev/api/species/1/'],
  vehicles: ['https://swapi.dev/api/vehicles/14/'],
};

describe('results page', () => {
  it('should render results page', async () => {
    render(
      <ApiProvider api={apiSlice}>
        <Provider store={storeApp}>
          <BrowserRouter>
            <Results
              result={resultData}
              isSuccess={true}
              filmsResult={filmsResult}
              detailResult={detailResult}
              page="1"
              search="luke"
              detail="1"
            />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    );
    expect(screen.getByText(/172/i)).toBeInTheDocument();
    expect(screen.getByText(/77/i)).toBeInTheDocument();
    expect(screen.getByText(/blond/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Results/i)).toBeInTheDocument();

    const user = userEvent.setup();
    const button = screen.getByRole('button');
    await user.click(button);
    expect(
      screen.getByText(/Something went wrong. Please try again later/i)
    ).toBeInTheDocument();
  });
});
