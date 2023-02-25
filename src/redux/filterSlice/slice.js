import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filteredValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filteredValue } = filterSlice.actions;
