import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFoundApp from '../pages/404';
import React from 'react';

describe('not found page', () => {
  test('Renders the main page', () => {
    render(<NotFoundApp />);
    screen.getByText('Page Not Found');
  });
});
