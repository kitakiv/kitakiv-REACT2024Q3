'use client';

import Search from '../components/search';
import ErrorBoundary from '../components/errorBoundary';
import { useCallback, useState } from 'react';
import { MenuCards } from '../features/favoriteCards/menuCards';
import { useRouter, useSearchParams } from 'next/navigation';
import { createCookie } from '../app/action';

function App({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchQuery = useSearchParams();
  const [search, setSearch] = useState(searchQuery.get('search') || '');
  const [template, setTemplate] = useState('dark');
  const handleSearch = useCallback(
    (searchResult: string) => {
      if (searchResult === '') {
        setSearch('');
      } else {
        setSearch(searchResult);
      }
      createCookie(searchResult);
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
