import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkbox from '../features/favoriteCards/checkbox.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DataInitial } from '../interface/interface';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';

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

const data = {
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
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
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

const data2 = {
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  species: ['https://swapi.dev/api/species/2/'],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:10:51.357000Z',
  edited: '2014-12-20T21:17:50.309000Z',
  url: 'https://swapi.dev/api/people/2/',
};
describe('Checkbox', () => {
  it('should render checkbox', async () => {
    render(
      <Provider store={storeMock}>
        <BrowserRouter>
          <Checkbox data={data} films={data.films} />
        </BrowserRouter>
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toBeChecked();
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should render checkbox', async () => {
    render(
      <Provider store={storeMock}>
        <BrowserRouter>
          <Checkbox data={data2} films={data.films} />
        </BrowserRouter>
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toBeChecked();
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
