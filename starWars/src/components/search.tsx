import { ChangeEvent, FormEvent, useState } from 'react';

function Search(props: {
  onSearch: (search: string) => void;
  onChangeTemplate: () => void;
  initialSearch: string | undefined;
}) {
  const [inputValue, setInputValue] = useState<string>(
    props.initialSearch === 'default' ? '' : props.initialSearch || ''
  );
  const [errorInput, setErrorInput] = useState('');

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
      setErrorInput('Please remove space');
    } else {
      setErrorInput('');
    }
  }
  return (
    <section className="app-search">
      <form onSubmit={submitResult}>
        <div className="input-container">
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
        <div
          data-testid="template"
          className="template"
          onClick={props.onChangeTemplate}
        >
          <div className="template-circle"></div>
        </div>
      </form>
    </section>
  );
}

export default Search;
