import React from 'react';
import Search from './components/search';
import Results from './components/searchResults';
import Loader from './components/loader';
import ErrorBoundary from './components/errorBoundary';
import {
  SWFilm,
  SWCharacterWithFilms,
  SWApiResponse,
} from './interface/interface';

interface State {
  link: string;
  search: string;
  result: SWApiResponse | null;
  films: string;
  filmRes: SWFilm[] | null;
  loader: boolean;
}

class App extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      link: 'https://swapi.dev/api/people/',
      search: 'https://swapi.dev/api/people/?search=',
      films: 'https://swapi.dev/api/films/',
      filmRes: null,
      result: null,
      loader: false,
    };
  }

  getElement = async (link: string) => {
    this.setState({ loader: true });
    try {
      const response = await fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = (await response.json()) as SWApiResponse;
      const filmResponse = await fetch(this.state.films, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const filmRes = ((await filmResponse.json()) as SWCharacterWithFilms)
        .results as SWFilm[];
      this.setState({ result: data });
      this.setState({ filmRes: filmRes });
    } catch (error) {
      console.log(error);
    }
    this.setState({ loader: false });
  };

  componentDidMount() {
    if (localStorage.getItem('search')) {
      const search = localStorage.getItem('search');
      const link = this.state.search + search;
      this.getElement(link);
    } else {
      this.getElement(this.state.link);
    }
  }

  handleSearch = (search: string) => {
    localStorage.setItem('search', search);
    const link = this.state.search + search;
    this.getElement(link);
  };
  render() {
    return (
      <>
        <ErrorBoundary>
          <Search onSearch={this.handleSearch} />
        </ErrorBoundary>
        {this.state.loader && <Loader />}
        {!this.state.loader && (
          <ErrorBoundary>
            <Results result={this.state.result} filmRes={this.state.filmRes} />
          </ErrorBoundary>
        )}
      </>
    );
  }
}

export default App;
