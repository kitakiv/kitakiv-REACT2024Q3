import { render, screen } from '@testing-library/react';
import React from 'react';
import Loader from '../app/loading';

test('Renders the loading page', () => {
  render(<Loader />);
  expect(screen.getByTestId('Loading')).toBeInTheDocument();
});
