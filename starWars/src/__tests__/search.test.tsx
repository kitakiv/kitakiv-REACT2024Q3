import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Search from '../components/search';
import userEvent from '@testing-library/user-event';

describe('submit result with right values', () => {
  test('Renders the main page', async () => {
    const functionSearch = jest.fn();
    const { queryByText, getByRole } = render(
      <Search onSearch={functionSearch} />
    );
    const user = userEvent.setup();
    const input = getByRole('textbox');

    await user.type(input, 'Luke');
    await user.click(getByRole('button'));
    expect(functionSearch).toHaveBeenCalledWith('Luke');

    await user.type(input, 'luke ');
    expect(
      queryByText('Please remove space from starting and ending of the name')
    ).toBeInTheDocument();
  });
});
