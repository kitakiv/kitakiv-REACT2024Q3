import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NoResults from '../components/noResults';

test('Renders the main page', () => {
  render(<NoResults />);
  screen.getByText('No results');
  expect(screen.getByText('No results')).toBeInTheDocument();
  expect(screen.getByText('No results')).toHaveClass('no-results-text');
});
