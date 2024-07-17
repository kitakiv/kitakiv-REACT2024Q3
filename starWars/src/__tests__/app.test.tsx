import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { useLocation, useNavigation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigation: jest.fn(),
}));

describe('App', () => {
  test('Renders the main page', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
    (useNavigation as jest.Mock).mockReturnValue({ state: 'loading' });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.getByTitle('Loading');
    expect(screen.getByTitle('Loading')).toBeInTheDocument();
  });

  test('Renders the main page', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/search' });
    (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
