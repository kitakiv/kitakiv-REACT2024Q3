import React from 'react';
import Loader from './loader';
// import Result from './result';

class Results extends React.Component {
  state = {
    link: 'https://swapi.dev/api/people/',
    search: 'https://swapi.dev/api/people/?search=',
    result: [],
    loader: false,
  };

  getElement = async (link: string) => {
    this.setState({ loader: true });
    try {
      const response = await fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      this.setState({ result: data.results });
    } catch (error) {
      console.log(error);
    }
    this.setState({ loader: false });
  };

  componentDidMount() {
    this.getElement(this.state.link);
    console.log(this.state.result);
  }
  render() {
    return (
      <>
        {this.state.loader && <Loader />}
        {!this.state.loader && (
          <div className="results">{JSON.stringify(this.state.result)}</div>
        )}
      </>
    );
  }
}

export default Results;
