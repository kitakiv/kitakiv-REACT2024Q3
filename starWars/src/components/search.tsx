import React, { ChangeEvent, FormEvent } from 'react';

interface MyComponentState {
  inputValue: string;
  errorInput: string;
}

class Search extends React.Component<
  { onSearch: (search: string) => void },
  MyComponentState
> {
  constructor(props: { onSearch: (search: string) => void }) {
    super(props);
    this.state = {
      inputValue: '',
      errorInput: '',
    };
    this.submitResult = this.submitResult.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount(): void {
    this.setState({ inputValue: localStorage.getItem('search') || '' });
  }

  submitResult(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !this.state.inputValue.startsWith(' ') &&
      !this.state.inputValue.endsWith(' ')
    ) {
      this.props.onSearch(this.state.inputValue);
    }
  }

  handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target as HTMLInputElement;
    this.setState({ inputValue: value });
    if (value.startsWith(' ') || value.endsWith(' ')) {
      this.setState({
        errorInput: 'Please remove space from starting and ending of the name',
      });
    } else {
      this.setState({ errorInput: '' });
    }
  }

  render() {
    return (
      <>
        <section className="app-search">
          <form onSubmit={this.submitResult}>
            <div>
              <input
                type="text"
                name="search"
                className="shadow"
                value={this.state.inputValue}
                onChange={this.handleNameChange}
                id="search"
                placeholder="Darth Vader"
              />
              <label htmlFor="search">{this.state.errorInput}</label>
            </div>
            <button type="submit"></button>
          </form>
        </section>
      </>
    );
  }
}

export default Search;
