import { Outlet, useLocation } from 'react-router-dom';
import Search from './components/search';
import ErrorBoundary from './components/errorBoundary';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        navigate(`/search/default/page/1`);
        localStorage.removeItem('search');
      } else {
        localStorage.setItem('search', searchResult);
        navigate(`/search/${searchResult}/page/1`);
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (location.pathname === '/') {
      const search = localStorage.getItem('search') || '';
      handleSearch(search);
    }
  }, [handleSearch, location.pathname]);

  return (
    <>
      <ErrorBoundary>
        <Search onSearch={handleSearch} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export default App;
