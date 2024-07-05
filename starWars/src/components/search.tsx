import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <header className="app-header">
        <form>
          <input type="text" name="search" className="shadow" />
          <button type="submit"></button>
        </form>
      </header>
    );
  }
}

export default Search;
