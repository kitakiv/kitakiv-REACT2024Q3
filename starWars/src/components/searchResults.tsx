import { useState } from 'react';
import { SWApiResponse } from '../interface/interface';
import Result from './result';
import { useLoaderData } from 'react-router-dom';

function Results() {
  const result = useLoaderData() as SWApiResponse;
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
      {result !== null && (
        <div className="results">
          {...result.results.map((elem) => {
            return <Result result={elem} keyProps={elem.name} />;
          })}
        </div>
      )}
    </section>
  );
}

export default Results;
