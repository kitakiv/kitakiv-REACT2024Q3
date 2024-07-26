import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Search from '../components/search';
import userEvent from '@testing-library/user-event';

describe('submit result with right values', () => {
  const functionSearch = jest.fn();
  const onChangeTemplate = jest.fn();
  test('Renders the search component', async () => {
    const { queryByText, getByRole } = render(
      <Search
        onSearch={functionSearch}
        onChangeTemplate={onChangeTemplate}
        initialSearch="Luke"
      />
    );

    expect(getByRole('textbox')).toHaveAttribute('value', 'Luke');
    const user = userEvent.setup();
    const input = getByRole('textbox');

    await user.clear(input);

    await user.type(input, 'darth');
    await user.click(getByRole('button'));
    expect(functionSearch).toHaveBeenCalledWith('darth');

    await user.type(input, 'luke ');
    expect(queryByText('Please remove space')).toBeInTheDocument();
  });

  test('check template', async () => {
    const { getByRole, getByTestId } = render(
      <Search
        onSearch={functionSearch}
        onChangeTemplate={onChangeTemplate}
        initialSearch={undefined}
      />
    );

    expect(getByRole('textbox')).toHaveAttribute('value', '');
    const user = userEvent.setup();

    await user.click(getByTestId('template'));
    expect(onChangeTemplate).toHaveBeenCalled();
  });

  test('check template', async () => {
    const { getByRole } = render(
      <Search
        onSearch={functionSearch}
        onChangeTemplate={onChangeTemplate}
        initialSearch={'default'}
      />
    );
    expect(getByRole('textbox')).toHaveAttribute('value', '');
  });
});
