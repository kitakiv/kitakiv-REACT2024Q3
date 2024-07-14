import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/search';
import '@testing-library/jest-dom';

describe('Search Component', () => {
  it('renders the input and button correctly', () => {
    render(<Search onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText('Darth Vader');
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('displays an error message when the input starts or ends with a space', () => {
    render(<Search onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText('Darth Vader');

    fireEvent.change(inputElement, { target: { value: ' Darth Vader' } });
    expect(
      screen.getByText(
        'Please remove space from starting and ending of the name'
      )
    ).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'Darth Vader ' } });
    expect(
      screen.getByText(
        'Please remove space from starting and ending of the name'
      )
    ).toBeInTheDocument();
  });

  it('calls the onSearch function with the correct value when the form is submitted', () => {
    const onSearchMock = jest.fn();
    render(<Search onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('Darth Vader');
    const formElement = screen.getByRole('form');

    fireEvent.change(inputElement, { target: { value: 'Darth Vader' } });
    fireEvent.submit(formElement);

    expect(onSearchMock).toHaveBeenCalledWith('Darth Vader');
  });

  it('does not call the onSearch function if the input starts or ends with a space', () => {
    const onSearchMock = jest.fn();
    render(<Search onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('Darth Vader');
    const formElement = screen.getByRole('form');

    fireEvent.change(inputElement, { target: { value: ' Darth Vader' } });
    fireEvent.submit(formElement);

    expect(onSearchMock).not.toHaveBeenCalled();

    fireEvent.change(inputElement, { target: { value: 'Darth Vader ' } });
    fireEvent.submit(formElement);

    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
