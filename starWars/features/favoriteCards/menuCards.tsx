import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { removeAllCards } from './cardsSlice';
import { useState, useEffect } from 'react';
import { convertToCSV } from './cardsSlice';

export const MenuCards = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards);
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (cards.ids.length > 0 && cards) {
      const csv = convertToCSV(cards);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      setUrl(url);
    }
  }, [cards]);

  return (
    <div data-testid="menu-cards">
      {cards.ids.length > 0 && (
        <div className="menu-cards">
          <span className="menu-cards-span">
            {cards.ids.length} items are selected
          </span>
          <button className="button" onClick={() => dispatch(removeAllCards())}>
            Unselect all
          </button>
          <a
            className="button"
            href={url}
            download={`${cards.ids.length}_people.csv`}
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};
