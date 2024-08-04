import Search from '../components/search';
import ErrorBoundary from '../components/errorBoundary';
import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { MenuCards } from '../features/favoriteCards/menuCards';
import { useRouter } from 'next/router';

function App({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [search, setSearch, removeSearch] = useLocalStorage('search', '');
  const [template, setTemplate] = useState('dark');
  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        removeSearch();
      } else {
        setSearch(searchResult);
      }
      router.push(`/?search=${searchResult}&page=1`);
    },
    [removeSearch, setSearch, router]
  );

  const handleChange = () => {
    if (template === 'dark') {
      setTemplate('light');
    } else {
      setTemplate('dark');
    }
  };

  useEffect(() => {
    if (!router.query.search && !router.query.page) {
      router.push(`/?search=&page=1`);
    }
  }, [router.query.search, search, router]);

  return (
    <div className={template} data-testId="app">
      <ErrorBoundary>
        <Search
          onSearch={handleSearch}
          onChangeTemplate={handleChange}
          initialSearch={search}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <>{children}</>
      </ErrorBoundary>

      <ErrorBoundary>
        <MenuCards />
      </ErrorBoundary>
    </div>
  );
}

export default App;
