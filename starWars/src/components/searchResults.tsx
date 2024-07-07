import React from 'react';
import { SWApiResponse, SWFilm } from '../interface/interface';
// import Loader from './loader';
import Result from './result';

class Results extends React.Component<{
  result: SWApiResponse | null;
  filmRes: null | SWFilm[];
}> {
  constructor(props: {
    result: SWApiResponse | null;
    filmRes: SWFilm[] | null;
  }) {
    super(props);
  }
  render() {
    if (this.props.result !== null && this.props.filmRes !== null) {
      return (
        <div className="results">
          {...this.props.result.results.map((elem) => {
            return <Result result={elem} filmRes={this.props.filmRes} />;
          })}
        </div>
      );
    }
  }
}

export default Results;
