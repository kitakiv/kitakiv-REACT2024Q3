import Layout from '../app/layout';
import { render, screen } from '@testing-library/react';
import React from 'react';

test('Renders the main page', () => {
  render(
    <Layout>
      <div title="test"></div>
    </Layout>
  );

  expect(screen.getByTitle(/test/i)).toBeInTheDocument();
});
