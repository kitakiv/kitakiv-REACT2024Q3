import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

function Search(props: { onSearch: (search: string) => void }) {
  const [inputValue, setInputValue] = useState('');
  const [errorInput, setErrorInput] = useState('');

  useEffect(() => {
    setInputValue(localStorage.getItem('search') || '');
  }, []);

  function submitResult(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inputValue.startsWith(' ') && !inputValue.endsWith(' ')) {
      props.onSearch(inputValue);
    }
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
    if (value.startsWith(' ') || value.endsWith(' ')) {
      setErrorInput('Please remove space from starting and ending of the name');
    } else {
      setErrorInput('');
    }
  }
  return (
    <>
      <section className="app-search">
        <form onSubmit={submitResult}>
          <div>
            <input
              type="text"
              name="search"
              className="shadow"
              value={inputValue}
              onChange={handleNameChange}
              id="search"
              placeholder="Darth Vader"
            />
            <label htmlFor="search">{errorInput}</label>
          </div>
          <button type="submit"></button>
        </form>
      </section>
    </>
  );
}

export default Search;
