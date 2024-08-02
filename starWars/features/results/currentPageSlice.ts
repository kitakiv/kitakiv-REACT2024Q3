import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SWCharacter } from '../../interface/interface';

const initialState: SWCharacter[] = [];

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (_state, action: PayloadAction<SWCharacter[]>) => {
      return action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
