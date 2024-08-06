'use client';

import Search from '../components/search';
import ErrorBoundary from '../components/errorBoundary';
import { useCallback, useEffect, useState } from 'react';
import { MenuCards } from '../features/favoriteCards/menuCards';
import { useRouter, useSearchParams } from 'next/navigation';

function App({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchQuery = useSearchParams();
  const [search, setSearch] = useState('');
  const [template, setTemplate] = useState('dark');
  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        setSearch('');
      } else {
        setSearch(searchResult);
      }
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

  useEffect(() => {
    if (!searchQuery.get('search') && !searchQuery.get('page')) {
      router.push(`/?search=&page=1`);
    }
  }, [searchQuery, router]);

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
