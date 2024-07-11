import { useState, useEffect } from 'react';
import Search from './components/search';
import Results from './components/searchResults';
import Loader from './components/loader';
import ErrorBoundary from './components/errorBoundary';
import {
  SWFilm,
  SWCharacterWithFilms,
  SWApiResponse,
} from './interface/interface';

function App() {
  const link = 'https://swapi.dev/api/people/';
  const search = 'https://swapi.dev/api/people/?search=';
  const films = 'https://swapi.dev/api/films/';
  const [filmRes, setFilmRes] = useState<SWFilm[] | null>(null);
  const [result, setResult] = useState<SWApiResponse | null>(null);
  const [loader, setLoader] = useState(false);

  async function getElement(link: string) {
    setLoader(true);
    try {
      const response = await fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = (await response.json()) as SWApiResponse;
      const filmResponse = await fetch(films, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const filmRes = ((await filmResponse.json()) as SWCharacterWithFilms)
        .results as SWFilm[];
      setResult(data);
      setFilmRes(filmRes);
    } catch (error) {
      console.error(error);
    }
    setLoader(false);
  }

  useEffect(() => {
    if (localStorage.getItem('search')) {
      const searchResult = localStorage.getItem('search');
      const link = search + searchResult;
      getElement(link);
    } else {
      getElement(link);
    }
  }, []);

  function handleSearch(searchResult: string) {
    localStorage.setItem('search', searchResult);
    const link = search + searchResult;
    getElement(link);
  }

  return (
    <>
      <ErrorBoundary>
        <Search onSearch={handleSearch} />
      </ErrorBoundary>
      {loader && <Loader />}
      {!loader && (
        <ErrorBoundary>
          <Results result={result} filmRes={filmRes} />
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
