import { convertToCSV } from '../features/favoriteCards/cardsSlice';
import { DataInitial } from '../interface/interface';

test('convertToCSV', () => {
  const cards: DataInitial = {
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

  const result = convertToCSV(cards);
  expect(result).toEqual(
    [
      'id;name;height;mass;hair_color;skin_color;eye_color;birth_year;gender;url;films;created;edited',
      '1;Luke Skywalker;172;77;blond;fair;blue;19BBY;male;https://swapi.dev/api/people/1/;A New Hope,The Empire Strikes Back,Return of the Jedi,Revenge of the Sith;2014-12-09T13:50:51.644000Z;2014-12-20T21:17:56.891000Z',
      '2;C-3PO;167;75;n/a;gold;yellow;112BBY;n/a;https://swapi.dev/api/people/2/;A New Hope,The Empire Strikes Back,Return of the Jedi,The Phantom Menace,Attack of the Clones,Revenge of the Sith;2014-12-10T15:10:51.357000Z;2014-12-20T21:17:50.309000Z',
    ].join('\n')
  );
});
