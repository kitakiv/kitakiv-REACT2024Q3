import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFound from '../app/not-found';
import React from 'react';

describe('not found page', () => {
  test('Renders the main page', () => {
    render(<NotFound />);
    screen.getByText('Page Not Found');
  });
});
