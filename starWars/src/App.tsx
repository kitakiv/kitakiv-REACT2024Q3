import { Outlet } from 'react-router-dom';
import Search from './components/search';
import ErrorBoundary from './components/errorBoundary';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function handleSearch(searchResult: string) {
    if (searchResult === '') {
      navigate(`/search/default/page/1`);
      localStorage.removeItem('search');
    } else {
      localStorage.setItem('search', searchResult);
      navigate(`/search/${searchResult}/page/1`);
    }
  }

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
