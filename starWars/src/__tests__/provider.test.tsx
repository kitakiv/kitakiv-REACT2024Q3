import React from 'react';
import { render, screen } from '@testing-library/react';
import ProviderApp from '../components/provider';
import { BrowserRouter } from 'react-router-dom';

describe('Provider', () => {
  test('Renders the main page', () => {
    render(
      <BrowserRouter>
        <ProviderApp>
          <div title="test"></div>
        </ProviderApp>
      </BrowserRouter>
    );

    expect(screen.getByTitle('test')).toBeInTheDocument();
  });
});
