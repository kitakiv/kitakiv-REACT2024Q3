import { useState } from 'react';
import { SWApiResponse } from '../interface/interface';
import Result from './result';
import { useLoaderData, Outlet, useParams, Link } from 'react-router-dom';
import NoResults from './noResults';

function Results() {
  const [result] = useLoaderData() as [SWApiResponse];
  const [error, setError] = useState(false);
  const errorText = 'Something went wrong. Please try again later.';
  const { search, page, id } = useParams();

  if (error) {
    throw new Error(errorText);
  }

  return (
    <section className="app-results">
      <>
        <button className="error-button shadow" onClick={() => setError(true)}>
          Throw an error
        </button>
        {result !== null && result.count > 0 && (
          <div className="results-container">
            <div className="results">
              {...result.results.map((elem) => {
                const number = elem.url;
                return <Result result={elem} keyProps={number} />;
              })}
            </div>
            <div className="pagination">
              {result.previous !== null && id !== undefined && (
                <Link
                  className="link-page"
                  to={`/search/${search}/page/${(result.previous as string).split('page=')[1]}/detail/${id}`}
                >
                  {(result.previous as string).split('page=')[1]}
                </Link>
              )}
              {result.previous !== null && id === undefined && (
                <Link
                  className="link-page"
                  to={`/search/${search}/page/${(result.previous as string).split('page=')[1]}`}
                >
                  {(result.previous as string).split('page=')[1]}
                </Link>
              )}
              <div className="link-page link-page-active">{page}</div>
              {result.next !== null && id !== undefined && (
                <Link
                  className="link-page"
                  to={`/search/${search}/page/${(result.next as string).split('page=')[1]}/detail/${id}`}
                >
                  {(result.next as string).split('page=')[1]}
                </Link>
              )}
              {result.next !== null && id === undefined && (
                <Link
                  className="link-page"
                  to={`/search/${search}/page/${(result.next as string).split('page=')[1]}`}
                >
                  {(result.next as string).split('page=')[1]}
                </Link>
              )}
            </div>
          </div>
        )}
        {result !== null && result.count === 0 && <NoResults />}
      </>
      <Outlet />
    </section>
  );
}

export default Results;
