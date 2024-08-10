import { useLocation } from '@remix-run/react';
import Search from './search';
import ErrorBoundary from './/errorBoundary';
import { useNavigate, useNavigation } from '@remix-run/react';
import { useCallback, useEffect } from 'react';
import Loader from './/loader';
import { useLocalStorage } from 'usehooks-ts';
import { MenuCards } from '../features/favoriteCards/menuCards';

function App() {
  const [search, setSearch, removeSearch] = useLocalStorage('search', '');
  const [template, setTemplate] = useLocalStorage('background', 'dark');
  const { state } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        removeSearch();
      } else {
        setSearch(searchResult);
      }
      navigate(`/?search=${searchResult}&page=1`);
    },
    [navigate, removeSearch, setSearch]
  );

  const handleChange = () => {
    if (template === 'dark') {
      setTemplate('light');
    } else {
      setTemplate('dark');
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      handleSearch(search);
    }
  }, [handleSearch, location.pathname, search]);

  return (
    <div className={template} data-testId="app">
      {state === 'loading' && <Loader />}
      <ErrorBoundary>
        <Search
          onSearch={handleSearch}
          onChangeTemplate={handleChange}
          initialSearch={search}
        />
      </ErrorBoundary>

      {/* <ErrorBoundary>
        <Outlet />
      </ErrorBoundary> */}

      <ErrorBoundary>
        <MenuCards />
      </ErrorBoundary>
    </div>
  );
}

export default App;
