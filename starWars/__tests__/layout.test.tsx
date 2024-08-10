import Layout from '../components/layout';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

test('Renders the main page', () => {
  render(
    <Layout>
      <div title="test"></div>
    </Layout>
  );

  expect(screen.getByTitle(/test/i)).toBeInTheDocument();
});
