import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/errorBoundary';

const ProblematicComponent = () => {
  throw new Error('Test error');
  return <div>Problematic Component</div>;
};

describe('ErrorBoundary component', () => {
  test('catches error and displays error message', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
  });

  test('renders child component when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>
    );

    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
