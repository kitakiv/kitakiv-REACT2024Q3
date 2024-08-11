import Loader from '../components/loader';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('loader', () => {
  test('Renders the main page', () => {
    render(<Loader />);
    expect(screen.getByTestId('Loading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
