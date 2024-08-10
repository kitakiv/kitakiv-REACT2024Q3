import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { addFavoriteCard, removeFavoriteCard } from './cardsSlice';
import { SWCharacter } from '../../interface/interface';

const Checkbox = ({ data, films }: { data: SWCharacter; films: string[] }) => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (cards.ids.includes(data.url.split('/').at(-2) || '0')) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [cards, data]);
  const setRemoveFromStore = () => {
    const res = !checked;
    setChecked(res);
    if (res) {
      dispatch(addFavoriteCard(data, films));
    } else {
      dispatch(removeFavoriteCard(data.url.split('/').at(-2) || '0'));
    }
  };
  return (
    <div className="checkbox-container">
      <label
        className="checkbox-wrapper"
        htmlFor={`checkbox${data.url.split('/').at(-2) || '0'}-check`}
      >
        <input
          className="checkbox-input"
          type="checkbox"
          checked={checked}
          onChange={setRemoveFromStore}
          id={`checkbox${data.url.split('/').at(-2) || '0'}-check`}
        />
        <div className="round"></div>
      </label>
    </div>
  );
};

export default Checkbox;
