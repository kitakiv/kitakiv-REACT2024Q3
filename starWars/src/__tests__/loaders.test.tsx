import '@testing-library/jest-dom';
import { loaderResult } from '../components/loaders/loaders.tsx';
import { useParams } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

const mockLoaderData = {
  count: 1,
  next: null,
  previous: null,
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
    },
  ],
};

describe('loaders', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
  });
  afterEach(() => {
    fetchMock.disableMocks();
  });

  test('Renders the main page', async () => {
    (useParams as jest.Mock).mockReturnValue({
      id: '1',
      search: 'Luke',
      page: '1',
    });

    fetchMock.mockResponse(JSON.stringify(mockLoaderData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    const params = useParams();

    const result = await loaderResult({ params });
    expect(result).toBeDefined();
    expect(result).toEqual([mockLoaderData]);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `https://swapi.dev/api/people/?search=${params.search}&page=${params.page}`
    );
  });

  test('Renders the details page', async () => {
    (useParams as jest.Mock).mockReturnValue({
      id: '1',
      search: 'llllll',
      page: '1',
    });
    const error = {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
    fetchMock.mockResponse(JSON.stringify(error), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    const params = useParams();

    const result = await loaderResult({ params });
    expect(result).toBeDefined();
    expect(result).toEqual([error]);

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock).toHaveBeenCalledWith(
      `https://swapi.dev/api/people/?search=${params.search}&page=${params.page}`
    );
  });
});
