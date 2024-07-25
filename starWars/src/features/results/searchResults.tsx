import { useState, useRef, useEffect } from 'react';
import { useGetFilmsQuery, useGetSearchAndPageQuery } from '../api/apiSlice';
import Result from '../favoriteCards/result';
import { Outlet, useParams } from 'react-router-dom';
import NoResults from '../../components/noResults';
import Loader from '../../components/loader';
import Pagination from '../../components/pagination';
import { SWFilm } from '../../interface/interface';
import { useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from './currentPageSlice';

function Results() {
  const [films, setFilms] = useState<{ [key: string]: string }>({});
  const [errorThrown, setErrorThrown] = useState(false);
  const errorText = 'Something went wrong. Please try again later.';
  const { search, page, id } = useParams();
  const resultRef = useRef(null);
  const searchName = search === 'default' ? '' : search;
  const pageName = page ? page : '1';
  const dispatch = useAppDispatch();
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

  const { data: filmsResult, isSuccess: isSuccessFilms } = useGetFilmsQuery();

  useEffect(() => {
    if (isSuccessFilms) {
      filmsResult.results.forEach((film: SWFilm) => {
        setFilms((prev) => ({ ...prev, [film.url]: film.title }));
      });
    }
    dispatch(setCurrentPage(result?.results || []));
  }, [isSuccessFilms, filmsResult, dispatch, result?.results]);

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
                  return (
                    <Result result={elem} keyProps={number} films={films} />
                  );
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
