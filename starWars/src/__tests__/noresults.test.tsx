import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NoResults from '../components/noResults';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(<NoResults />);
  screen.getByText('No results');
  expect(screen.getByText('No results')).toBeInTheDocument();
});
