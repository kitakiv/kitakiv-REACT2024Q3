import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../features/favoriteCards/cardsSlice';
import { apiSlice } from '../features/api/apiSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
