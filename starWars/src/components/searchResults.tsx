import React from 'react';
// import Loader from './loader';
// import Result from './result';

class Results extends React.Component<{ result: [] | object[] }> {
  constructor(props: { result: [] | object[] }) {
    super(props);
  }
  render() {
    return <div className="results">{JSON.stringify(this.props.result)}</div>;
  }
}

export default Results;
