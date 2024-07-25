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
  },
});

export const { addFavoriteCard, removeFavoriteCard } = cardsSlice.actions;

// export const selectCards = (cards: DataInitial, id: string) => {
//     console.log(cards.ids, id )
//     return cards.ids.includes(id) ? true : false;
// }

export default cardsSlice.reducer;
