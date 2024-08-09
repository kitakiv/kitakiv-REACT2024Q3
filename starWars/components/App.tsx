import Search from '../components/search';
import ErrorBoundary from '../components/errorBoundary';
import { useCallback, useState } from 'react';
import { MenuCards } from '../features/favoriteCards/menuCards';
import { useRouter } from 'next/router';

function App({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search || '');
  const [template, setTemplate] = useState('dark');
  const handleSearch = useCallback(
    (searchResult: string) => {
      setSearch(searchResult);
      router.push(`/?search=${searchResult}&page=1`);
    },
    [setSearch, router]
  );

  const handleChange = () => {
    if (template === 'dark') {
      setTemplate('light');
    } else {
      setTemplate('dark');
    }
  };

  return (
    <div className={template} data-testId="app">
      <ErrorBoundary>
        <Search
          onSearch={handleSearch}
          onChangeTemplate={handleChange}
          initialSearch={search.toString()}
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
