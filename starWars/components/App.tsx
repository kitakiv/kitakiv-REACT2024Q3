import Search from '../components/search';
import ErrorBoundary from '../components/errorBoundary';
import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { MenuCards } from '../features/favoriteCards/menuCards';

function App() {
  const [search, setSearch, removeSearch] = useLocalStorage('search', '');
  const [template, setTemplate] = useLocalStorage('background', 'dark');
  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        removeSearch();
      } else {
        setSearch(searchResult);
      }
    },
    [removeSearch, setSearch]
  );

  const handleChange = () => {
    if (template === 'dark') {
      setTemplate('light');
    } else {
      setTemplate('dark');
    }
  };

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     handleSearch(search);
  //   }
  // }, [handleSearch, location.pathname, search]);

  return (
    <div className={template} data-testId="app">
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
