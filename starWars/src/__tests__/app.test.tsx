import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { useLocation, useNavigation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../app/store';

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
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    screen.getByTestId('Loading');
    expect(screen.getByTestId('Loading')).toBeInTheDocument();
  });

  test('Renders the main page', async () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/search' });
    (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
    expect(app).toHaveClass('dark');
    const template = screen.getByTestId('template');
    const user = userEvent.setup();
    await user.click(template);
    expect(app).toHaveClass('light');

    await user.click(template);
    expect(app).toHaveClass('dark');

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    expect(button).toBeInTheDocument();
    await user.type(input, 'Luke');
    await user.click(button);
    expect(window.location.pathname).toBe('/search/Luke/page/1');
  });
});
