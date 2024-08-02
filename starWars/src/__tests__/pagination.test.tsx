import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/pagination';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

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
          <Pagination result={resultData} page="1" search="default" />
        </BrowserRouter>
      </Provider>
    );
    const link2 = screen.getByRole('link', { name: '2' });
    expect(link2).toBeInTheDocument();
    const link1 = screen.getByText('1');
    expect(link1).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(link2);
    expect(window.location.pathname).toBe('/search/default/page/2');
  });

  test('Renders the pagination component', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination result={resultData2} page="2" search="default" />
        </BrowserRouter>
      </Provider>
    );
    const link1 = screen.getByRole('link', { name: '1' });
    expect(link1).toBeInTheDocument();
    const link2 = screen.getByText('2');
    expect(link2).toBeInTheDocument();
    const Link3 = screen.getByRole('link', { name: '3' });
    expect(Link3).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(Link3);
    expect(window.location.pathname).toBe('/search/default/page/3');
  });

  test('Renders the pagination component', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination result={resultData2} page="2" search="default" id="1" />
        </BrowserRouter>
      </Provider>
    );
    const link3 = screen.getByRole('link', { name: '3' });
    expect(link3).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(link3);
    expect(window.location.pathname).toBe('/search/default/page/3/detail/1');
  });
});
