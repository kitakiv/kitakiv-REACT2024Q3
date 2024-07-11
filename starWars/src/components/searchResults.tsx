import { useState } from 'react';
import { SWApiResponse, SWFilm } from '../interface/interface';
import Result from './result';

function Results(props: {
  result: SWApiResponse | null;
  filmRes: SWFilm[] | null;
}) {
  const [error, setError] = useState(false);
  const errorText = 'Something went wrong. Please try again later.';

  if (error) {
    throw new Error(errorText);
  }

  return (
    <section>
      <button className="error-button shadow" onClick={() => setError(true)}>
        Throw an error
      </button>
      {props.result !== null && props.filmRes !== null && (
        <div className="results">
          {...props.result.results.map((elem) => {
            return <Result result={elem} filmRes={props.filmRes} />;
          })}
        </div>
      )}
    </section>
  );
}

export default Results;
