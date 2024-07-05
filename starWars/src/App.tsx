import React from 'react';
import Search from './components/search';
import Results from './components/searchResults';

class App extends React.Component {
  render() {
    return (
      <>
        <Search />
        <Results />
      </>
    );
  }
}

export default App;
