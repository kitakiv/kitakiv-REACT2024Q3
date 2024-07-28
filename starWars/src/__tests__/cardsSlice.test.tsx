import cardsReducer, {
  addFavoriteCard,
  removeFavoriteCard,
  removeAllCards,
} from '../features/favoriteCards/cardsSlice';
import { SWCharacter } from '../interface/interface';

describe('cardsSlice', () => {
  const initialState = {
    ids: [],
    entities: {},
  };

  const sampleCharacter: SWCharacter = {
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
    vehicles: [],
    starships: [],
    homeworld: '',
  };

  const sampleFilms = ['A New Hope', 'The Empire Strikes Back'];

  it('should handle initial state', () => {
    expect(cardsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addFavoriteCard', () => {
    const action = addFavoriteCard(sampleCharacter, sampleFilms);
    const state = cardsReducer(initialState, action);

    const expectedState = {
      ids: ['1'],
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
          films: ['A New Hope', 'The Empire Strikes Back'],
          url: 'https://swapi.dev/api/people/1/',
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
        },
      },
    };

    expect(state).toEqual(expectedState);
  });

  it('should handle removeFavoriteCard', () => {
    const initialStateWithCharacter = {
      ids: ['1'],
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
          films: ['A New Hope', 'The Empire Strikes Back'],
          url: 'https://swapi.dev/api/people/1/',
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
        },
      },
    };

    const action = removeFavoriteCard('1');
    const state = cardsReducer(initialStateWithCharacter, action);

    expect(state).toEqual(initialState);
  });

  it('should handle removeAllCards', () => {
    const initialStateWithMultipleCharacters = {
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
          films: ['A New Hope', 'The Empire Strikes Back'],
          url: 'https://swapi.dev/api/people/1/',
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
        },
        '2': {
          id: '2',
          name: 'Darth Vader',
          height: '202',
          mass: '136',
          hair_color: 'none',
          skin_color: 'white',
          eye_color: 'yellow',
          birth_year: '41.9BBY',
          gender: 'male',
          films: ['A New Hope', 'The Empire Strikes Back'],
          url: 'https://swapi.dev/api/people/4/',
          created: '2014-12-10T15:18:20.704000Z',
          edited: '2014-12-20T21:17:50.313000Z',
        },
      },
    };

    const action = removeAllCards();
    const state = cardsReducer(initialStateWithMultipleCharacters, action);

    expect(state).toEqual(initialState);
  });
});
