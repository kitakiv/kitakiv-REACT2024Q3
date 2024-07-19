import { Outlet, useLocation } from 'react-router-dom';
import Search from './components/search';
import ErrorBoundary from './components/errorBoundary';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Loader from './components/loader';

function App() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const [template, setTemplate] = useState('dark');

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

  const handleChange = () => {
    if (template === 'dark') {
      setTemplate('light');
    } else {
      setTemplate('dark');
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const search = localStorage.getItem('search') || '';
      handleSearch(search);
    }
  }, [handleSearch, location.pathname]);

  return (
    <div className={template}>
      {state === 'loading' && <Loader />}
      <ErrorBoundary>
        <Search onSearch={handleSearch} onChangeTemplate={handleChange} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

export default App;
