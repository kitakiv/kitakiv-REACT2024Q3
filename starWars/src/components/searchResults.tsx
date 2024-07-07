import React from 'react';
import { SWApiResponse, SWFilm } from '../interface/interface';
// import Loader from './loader';
import Result from './result';

interface State {
  errorText: string;
  error: boolean;
}

class Results extends React.Component<
  {
    result: SWApiResponse | null;
    filmRes: null | SWFilm[];
  },
  State
> {
  constructor(props: {
    result: SWApiResponse | null;
    filmRes: SWFilm[] | null;
  }) {
    super(props);

    this.state = {
      errorText: 'Something went wrong. Please try again later.',
      error: false,
    };
  }
  render() {
    if (this.state.error) {
      throw new Error(this.state.errorText);
    }

    if (this.props.result !== null && this.props.filmRes !== null) {
      return (
        <>
          <button
            className="error-button shadow"
            onClick={() => this.setState({ error: true })}
          >
            Throw an error
          </button>
          <div className="results">
            {...this.props.result.results.map((elem) => {
              return <Result result={elem} filmRes={this.props.filmRes} />;
            })}
          </div>
        </>
      );
    }

    return (
      <button
        className="error-button shadow"
        onClick={() => this.setState({ error: true })}
      >
        Throw an error
      </button>
    );
  }
}

export default Results;
