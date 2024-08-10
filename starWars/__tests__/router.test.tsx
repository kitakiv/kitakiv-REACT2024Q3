import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigation: jest.fn().mockImplementation(() => ({ state: 'idle' })),
}));

describe('router', () => {
  test('Renders the main page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
    const template = screen.getByTestId('template');
    expect(template).toBeInTheDocument();
  });

  test('Renders the main page', async () => {
    render(
      <MemoryRouter initialEntries={['/search/Luke/page/1']}>
        <App />
      </MemoryRouter>
    );
  });
});
