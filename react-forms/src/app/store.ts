import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countries/countriesSlice';
import formReducer from '../features/formResults/formSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    formResults: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
