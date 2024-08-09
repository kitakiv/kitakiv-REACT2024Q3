import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../store/store';
import React from 'react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest
    .fn()
    .mockImplementation(() => ({
      route: '/',
      push: jest.fn(),
      query: { search: 'Luke', page: '1' },
    })),
}));

describe('App', () => {
  test('Renders the main page', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      push: jest.fn(),
      query: { search: 'Luke', page: '1' },
    });
    render(
      <Provider store={store}>
        <App>
          <div title="test"></div>
        </App>
      </Provider>
    );
    expect(screen.getByTitle(/test/i)).toBeInTheDocument();
    const user = userEvent.setup();
    expect(screen.getByTestId('app')).toHaveClass('dark');
    await user.click(screen.getByTestId('template'));
    expect(screen.getByTestId('app')).toHaveClass('light');
  });

  describe('App', () => {
    test('Renders the main page', async () => {
      (useRouter as jest.Mock).mockReturnValue({
        route: '/',
        push: jest.fn(),
        query: { search: 'Luke', page: '1' },
      });
      render(
        <Provider store={store}>
          <App>
            <div title="test"></div>
          </App>
        </Provider>
      );
      expect(screen.getByPlaceholderText(/Darth Vader/i)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('value', 'Luke');

      const user = userEvent.setup();
      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, 'darth');
      expect(input).toHaveAttribute('value', 'darth');
    });
  });
});
