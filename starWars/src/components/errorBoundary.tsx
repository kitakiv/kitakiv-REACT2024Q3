import React, { ComponentState } from 'react';

interface IErrorBoundary {
  children: JSX.Element;
}

class ErrorBoundary extends React.Component<IErrorBoundary> {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, info: ComponentState) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <div className="error">{this.state.errorMessage}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
