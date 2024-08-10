import App from '../pages/_app';
import { render, screen } from '@testing-library/react';
import React from 'react';

test('Renders the main page', () => {
  render(
    <App
      pageProps={{}}
      Component={() => <div>Star Wars App</div>}
      router={{ route: '/', push: jest.fn() }}
    />
  );
  expect(screen.getByText('Star Wars App')).toBeInTheDocument();
});
