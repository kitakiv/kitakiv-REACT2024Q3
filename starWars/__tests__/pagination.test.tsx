import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/pagination';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import React from 'react';

jest.mock('@remix-run/react', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

const resultData = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [],
};

const resultData2 = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=3',
  previous: 'https://swapi.dev/api/people/?page=1',
  results: [],
};

describe('pagination', () => {
  test('Renders the pagination component', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination result={resultData} page="1" search="" />
        </BrowserRouter>
      </Provider>
    );
    const link2 = screen.getByText('2');
    expect(link2).toHaveAttribute('to', '/?search=&page=2');
    const link1 = screen.getByText('1');
    expect(link1).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(link2);
    expect(window.location.pathname).toBe('/');
  });

  test('Renders the pagination component', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination result={resultData2} page="2" search="" />
        </BrowserRouter>
      </Provider>
    );
    const link1 = screen.getByText('1');
    expect(link1).toBeInTheDocument();
    const link2 = screen.getByText('2');
    expect(link2).toBeInTheDocument();
    const link3 = screen.getByText('3');
    expect(link3).toHaveAttribute('to', '/?search=&page=3');
    const user = userEvent.setup();
    await user.click(link3);
    expect(window.location.pathname).toBe('/');
  });

  test('Renders the pagination component', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination result={resultData2} page="2" search="" detail="1" />
        </BrowserRouter>
      </Provider>
    );
    const link3 = screen.getByText('3');
    expect(link3).toBeInTheDocument();
    expect(link3).toHaveAttribute('to', '/?search=&page=3&detail=1');
    const user = userEvent.setup();
    await user.click(link3);
    expect(window.location.pathname).toBe('/');
  });
});
