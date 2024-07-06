import React from 'react';
import Search from './components/search';
import Results from './components/searchResults';
import Loader from './components/loader';

interface State {
  link: string;
  search: string;
  result: [];
  loader: boolean;
}

class App extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      link: 'https://swapi.dev/api/people/',
      search: 'https://swapi.dev/api/people/?search=',
      result: [],
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
      const data = await response.json();
      this.setState({ result: data.results });
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
        <Search onSearch={this.handleSearch} />
        {this.state.loader && <Loader />}
        {!this.state.loader && <Results result={this.state.result} />}
      </>
    );
  }
}

export default App;
