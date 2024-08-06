import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DataInitial,
  DetailsCharacter,
  SWCharacter,
} from '../../interface/interface';

const initialState: DataInitial = {
  ids: [],
  entities: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFavoriteCard: {
      reducer: (state, action: PayloadAction<DetailsCharacter>) => {
        if (!state.ids.includes(action.payload.id)) {
          state.ids.push(action.payload.id);
        }
        state.entities[action.payload.id] = action.payload;
      },
      prepare: (card: SWCharacter, films: string[]) => {
        const {
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          url,
          created,
          edited,
        } = card;
        const id = url.split('/').at(-2)?.toString() || '0';
        const result: DetailsCharacter = {
          id,
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          films,
          url,
          created,
          edited,
        };
        return {
          payload: result,
        };
      },
    },
    removeFavoriteCard: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.ids.indexOf(id);
      state.ids.splice(index, 1);
      delete state.entities[id];
    },
    removeAllCards: (state) => {
      state.ids = [];
      state.entities = {};
    },
  },
});

export function convertToCSV(cards: DataInitial) {
  const keys = Object.keys(cards.entities[cards.ids[0]]);
  const value = cards.ids.map((elem) => {
    const obj = cards.entities[elem];
    obj.films.join(',');
    const values = Object.values(obj).join(';');
    return values;
  });
  const str = keys.join(';') + '\n' + value.join('\n');
  return str;
}

export const { addFavoriteCard, removeFavoriteCard, removeAllCards } =
  cardsSlice.actions;
export default cardsSlice.reducer;
