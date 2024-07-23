import { useState, useRef } from 'react';
import { useGetSearchAndPageQuery } from '../api/apiSlice';
import Result from '../../components/result';
import { Outlet, useParams } from 'react-router-dom';
import NoResults from '../../components/noResults';
import Loader from '../../components/loader';
import Pagination from '../../components/pagination';

function Results() {
  const [errorThrown, setErrorThrown] = useState(false);
  const errorText = 'Something went wrong. Please try again later.';
  const { search, page, id } = useParams();
  const resultRef = useRef(null);
  const searchName = search === 'default' ? '' : search;
  const pageName = page ? page : '1';
  const {
    data: result,
    isError,
    isSuccess,
    isFetching,
    error,
  } = useGetSearchAndPageQuery({
    search: searchName || '',
    page: pageName,
  });

  if (errorThrown || isError || error) {
    throw new Error(errorText);
  }

  return (
    <>
      {isFetching && <Loader />}
      <section className="app-results" title="Results">
        <>
          <button
            className="error-button shadow"
            onClick={() => setErrorThrown(true)}
          >
            Throw an error
          </button>
          {isSuccess && result.count > 0 && (
            <div className="results-container" ref={resultRef}>
              <div className="results">
                {...result.results.map((elem) => {
                  const number = elem.url;
                  return <Result result={elem} keyProps={number} />;
                })}
              </div>
              <Pagination
                result={result}
                page={pageName}
                search={search || 'default'}
                id={id}
              />
            </div>
          )}
          {isSuccess && result.count === 0 && <NoResults />}
        </>
        <Outlet />
      </section>
    </>
  );
}

export default Results;
