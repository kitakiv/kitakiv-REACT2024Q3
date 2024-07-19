import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { loaderDetails } from '../components/loaders/loaders';

fetchMock.enableMocks();

const mockCharacterData = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/'],
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

const mockFilmData1 = {
  title: 'A New Hope',
};

const mockFilmData2 = {
  title: 'The Empire Strikes Back',
};

const mockVehicleData1 = {
  name: 'Snowspeeder',
};

const mockVehicleData2 = {
  name: 'Imperial Speeder Bike',
};

const mockStarshipData1 = {
  name: 'X-wing',
};

const mockStarshipData2 = {
  name: 'Imperial shuttle',
};

const mockHomeworldData = {
  name: 'Tatooine',
};

describe('loaderDetails function', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should fetch character details and related data successfully', async () => {
    fetchMock
      .mockResponseOnce(JSON.stringify(mockCharacterData))
      .mockResponseOnce(JSON.stringify(mockFilmData1))
      .mockResponseOnce(JSON.stringify(mockFilmData2))
      .mockResponseOnce(JSON.stringify(mockVehicleData1))
      .mockResponseOnce(JSON.stringify(mockVehicleData2))
      .mockResponseOnce(JSON.stringify(mockStarshipData1))
      .mockResponseOnce(JSON.stringify(mockStarshipData2))
      .mockResponseOnce(JSON.stringify(mockHomeworldData));

    const params = { id: '1' };
    const result = await loaderDetails({ params });

    expect(result).toEqual([
      mockCharacterData,
      ['A New Hope', 'The Empire Strikes Back'],
      'Tatooine',
      ['Snowspeeder', 'Imperial Speeder Bike'],
      ['X-wing', 'Imperial shuttle'],
    ]);

    expect(fetchMock).toHaveBeenCalledTimes(8);
    expect(fetchMock).toHaveBeenCalledWith('https://swapi.dev/api/people/1');
    expect(fetchMock).toHaveBeenCalledWith('https://swapi.dev/api/films/1/');
    expect(fetchMock).toHaveBeenCalledWith('https://swapi.dev/api/films/2/');
    expect(fetchMock).toHaveBeenCalledWith(
      'https://swapi.dev/api/vehicles/14/'
    );
    expect(fetchMock).toHaveBeenCalledWith(
      'https://swapi.dev/api/vehicles/30/'
    );
    expect(fetchMock).toHaveBeenCalledWith(
      'https://swapi.dev/api/starships/12/'
    );
    expect(fetchMock).toHaveBeenCalledWith(
      'https://swapi.dev/api/starships/22/'
    );
    expect(fetchMock).toHaveBeenCalledWith('https://swapi.dev/api/planets/1/');
  });
});
