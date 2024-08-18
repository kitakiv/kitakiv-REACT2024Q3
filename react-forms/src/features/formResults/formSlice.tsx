import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormInput } from '../../validation/validation';

interface FormState extends FormInput {
    newForm: boolean;
    id: string;
  }

interface StateInitial {
  ids: string[];
  entities: {[key: string]: FormState};
}

const initialState: StateInitial = JSON.parse(localStorage.getItem('formResults') as string) || {
  ids: [],
  entities: {},
};
export const counterSlice = createSlice({
  name: 'formResults',
  initialState,
  reducers: {
    addNewForm: (state, action: PayloadAction<FormState>) => {
      state.ids.push(action.payload.id)
      state.entities[action.payload.id] = action.payload
      localStorage.setItem('formResults', JSON.stringify(state))
    },
    updateForm: (state, action: PayloadAction<string>) => {
      if (state.ids.includes(action.payload)) {
        state.entities[action.payload].newForm = false
        localStorage.setItem('formResults', JSON.stringify(state))
      }

    },
  }
})

export const { addNewForm, updateForm} = counterSlice.actions
export default counterSlice.reducer