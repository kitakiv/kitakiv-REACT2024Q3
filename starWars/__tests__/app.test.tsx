import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../store/store';
import React from 'react';
import { useNavigate, useNavigation } from '@remix-run/react';

jest.mock('@remix-run/react', () => ({
  useNavigate: jest.fn(),
  useNavigation: jest.fn(),
}));

describe('App', () => {
  test('Renders the main page', async () => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    (useNavigation as jest.Mock).mockReturnValue(() => {
      return { state: 'idle' };
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
      (useNavigate as jest.Mock).mockReturnValue(jest.fn());
      (useNavigation as jest.Mock).mockReturnValue(() => {
        return { state: 'idle' };
      });
      render(
        <Provider store={store}>
          <App>
            <div title="test"></div>
          </App>
        </Provider>
      );
      expect(screen.getByPlaceholderText(/Darth Vader/i)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('value', '');

      const user = userEvent.setup();
      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, 'darth');
      expect(input).toHaveAttribute('value', 'darth');
      const button = screen.getByRole('button');
      await user.click(button);
      expect(window.location.pathname).toBe('/');
    });

    test('Renders the main page', async () => {
      (useNavigate as jest.Mock).mockReturnValue(jest.fn());
      (useNavigation as jest.Mock).mockReturnValue(() => {
        return { state: 'idle' };
      });
      render(
        <Provider store={store}>
          <App>
            <div title="test"></div>
          </App>
        </Provider>
      );
      const user = userEvent.setup();
      const button = screen.getByTestId('template');
      expect(screen.getByTestId('app')).toHaveClass('dark');
      await user.click(button);
      expect(screen.getByTestId('app')).toHaveClass('light');
      const button2 = screen.getByTestId('template');
      await user.click(button2);
      expect(screen.getByTestId('app')).toHaveClass('dark');
    });
  });
});

test('Renders the main page', async () => {
  (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  (useNavigation as jest.Mock).mockReturnValue(() => {
    return { state: 'loading' };
  });
  render(
    <Provider store={store}>
      <App>
        <div title="test"></div>
      </App>
    </Provider>
  );
  expect(screen.getByTestId('app')).toBeInTheDocument();
});
