import { useState, useRef, useEffect } from 'react';
import Result from '../favoriteCards/result';
import NoResults from '../../components/noResults';
import Pagination from '../../components/pagination';
import {
  SWCharacterWithFilms,
  SWFilm,
  SWApiResponse,
  SWCharacter,
} from '../../interface/interface';
import { useAppDispatch } from '../../store/hooks';
import { setCurrentPage } from './currentPageSlice';
import DetailsPage from '../details/detailsPage';

function Results({
  result,
  filmsResult,
  detailResult,
  isSuccess,
  page,
  search,
  detail,
}: {
  result: SWApiResponse;
  filmsResult: SWCharacterWithFilms;
  detailResult: SWCharacter | null;
  isSuccess: boolean;
  page: string;
  search: string;
  detail: string | undefined | null;
}) {
  const [films, setFilms] = useState<{ [key: string]: string }>({});
  const [errorThrown, setErrorThrown] = useState(false);
  const errorText = 'Something went wrong. Please try again later.';
  const resultRef = useRef(null);
  const pageName = page ? page : '1';
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      filmsResult.results.forEach((film: SWFilm) => {
        setFilms((prev) => ({ ...prev, [film.url]: film.title }));
      });
    }
    dispatch(setCurrentPage(result?.results || []));
  }, [isSuccess, filmsResult, dispatch, result?.results]);

  if (errorThrown) {
    throw new Error(errorText);
  }

  return (
    <>
      <section className="app-results" data-testid="Results">
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
                    <Result
                      result={elem}
                      keyProps={number}
                      films={films}
                      search={search || ''}
                      page={pageName.toString() || '1'}
                    />
                  );
                })}
              </div>
              <Pagination
                result={result}
                page={pageName.toString() || '1'}
                search={search?.toString() || ''}
                detail={detail?.toString() || undefined}
              />
            </div>
          )}
          {isSuccess && result.count === 0 && <NoResults />}
        </>
        {detailResult && (
          <DetailsPage
            details={detailResult}
            filmsResult={films}
            page={pageName.toString() || '1'}
            search={search?.toString() || ''}
            detail={detail?.toString() || '1'}
          />
        )}
      </section>
    </>
  );
}

export default Results;
