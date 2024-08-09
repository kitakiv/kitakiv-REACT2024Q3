import '@testing-library/jest-dom';
import { MenuCards } from '../features/favoriteCards/menuCards';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { DataInitial } from '../interface/interface';
import React from 'react';

URL.createObjectURL = jest.fn();

const initialState: DataInitial = {
  ids: ['1', '2'],
  entities: {
    '1': {
      id: '1',
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
    },
    '2': {
      id: '2',
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      url: 'https://swapi.dev/api/people/2/',
      films: [
        'A New Hope',
        'The Empire Strikes Back',
        'Return of the Jedi',
        'The Phantom Menace',
        'Attack of the Clones',
        'Revenge of the Sith',
      ],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
    },
  },
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

const storeMock = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
  },
});

describe('menu cards', () => {
  test('Renders the main page', () => {
    render(
      <Provider store={storeMock}>
        <BrowserRouter>
          <MenuCards />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('menu-cards')).toBeInTheDocument();
    expect(screen.getByText(/items are selected/i)).toBeInTheDocument();
  });
});
