import Search from './search';
import ErrorBoundary from './/errorBoundary';
import { useNavigate, useNavigation } from '@remix-run/react';
import { useCallback, useState } from 'react';
import Loader from './/loader';
import { MenuCards } from '../features/favoriteCards/menuCards';

function App({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');
  const [template, setTemplate] = useState('dark');
  const { state } = useNavigation();
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (searchResult: string) => {
      setSearch(searchResult);
      navigate(`/?search=${searchResult}&page=1`);
    },
    [navigate, setSearch]
  );

  const handleChange = () => {
    if (template === 'dark') {
      setTemplate('light');
    } else {
      setTemplate('dark');
    }
  };

  return (
    <div className={template} data-testid="app">
      {state === 'loading' && <Loader />}
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
