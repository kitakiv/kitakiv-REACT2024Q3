import { Outlet, useLocation } from 'react-router-dom';
import Search from './components/search';
import ErrorBoundary from './components/errorBoundary';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import Loader from './components/loader';
import { useLocalStorage } from 'usehooks-ts';
import { MenuCards } from './features/favoriteCards/menuCards';

function App() {
  const [search, setSearch, removeSearch] = useLocalStorage('search', '');
  const [template, setTemplate] = useLocalStorage('background', 'dark');
  const { state } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        navigate(`/search/default/page/1`);
        removeSearch();
      } else {
        setSearch(searchResult);
        navigate(`/search/${searchResult}/page/1`);
      }
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
    <div className={template}>
      {state === 'loading' && <Loader />}
      <ErrorBoundary>
        <Search
          onSearch={handleSearch}
          onChangeTemplate={handleChange}
          initialSearch={search}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>

      <ErrorBoundary>
        <MenuCards />
      </ErrorBoundary>
    </div>
  );
}

export default App;
