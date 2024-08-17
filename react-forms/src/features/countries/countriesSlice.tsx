import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../../validation/allcountries';

export interface CountriesState {
  value: string[];
}


const initialState: CountriesState = {
  value: countries,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});
export default countriesSlice.reducer;
