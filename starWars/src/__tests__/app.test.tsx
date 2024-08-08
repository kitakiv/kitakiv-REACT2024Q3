import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../store/store';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockImplementation(() => ({ route: '/' })),
  useSearchParams: jest.fn().mockImplementation(() => ({ get: jest.fn() })),
}));

describe('App', () => {
  test('Renders the main page', async () => {
    (useRouter as jest.Mock).mockReturnValue({ route: '/' });
    (useSearchParams as jest.Mock).mockReturnValue({ get: jest.fn() });
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
      (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
      (useSearchParams as jest.Mock).mockReturnValue({
        get: (t: string) => {
          if (t === 'search') {
            return 'Luke';
          }
        },
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
