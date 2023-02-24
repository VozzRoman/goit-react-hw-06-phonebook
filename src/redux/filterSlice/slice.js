import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		filteredList(state, action){
			return state = action.payload;
		}
	}
})

export const {filteredList} = filterSlice.actions;