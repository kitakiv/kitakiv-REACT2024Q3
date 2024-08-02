import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from '../features/results/searchResults';
import { BrowserRouter } from 'react-router-dom';
import storeApp from '../store/store';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../features/api/apiSlice';

fetchMock.enableMocks();

describe('results page', () => {
  it('should render results page', async () => {
    render(
      <ApiProvider api={apiSlice}>
        <Provider store={storeApp}>
          <BrowserRouter>
            <Results />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    );

    expect(screen.getByTestId('Loading')).toBeInTheDocument();
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
