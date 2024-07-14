import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Result from '../components/result';
import userEvent from '@testing-library/user-event';
import { redirect } from 'react-router-dom';

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
const keyProps = 'https://swapi.dev/api/people/1/';

describe('Result component', () => {
  it('should render', () => {
    render(<Result result={result} keyProps={keyProps} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('172cm')).toBeInTheDocument();
    expect(screen.getByText('77kg')).toBeInTheDocument();
    expect(screen.getByText('blond')).toBeInTheDocument();
    expect(screen.getByText('fair')).toBeInTheDocument();
    expect(screen.getByText('blue')).toBeInTheDocument();
    expect(screen.getByText('19BBY')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
  });

  it('should redirect', async () => {
    render(<Result result={result} keyProps={keyProps} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    const link = screen.getByRole('link');
    userEvent.click(link);
    expect(link).toHaveAttribute('href', '/search/Luke/page/1/detail/1');
    expect(redirect).toHaveBeenCalledWith('/search/Luke/page/1/detail/1');
  });
});
