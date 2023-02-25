import shortid from 'shortid';
import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      //  const newContact = {
      // 	id: shortid(),
      // 	name: action.payload.data.name,
      // 	number: action.payload.data.number,
      //  };
      //  return [...state, newContact];
      state.contacts.push({
        id: shortid(),
        name: action.payload.data.name,
        number: action.payload.data.number,
      });
    },
    removeContact(state, action) {
      //  return state.contacts.filter(item => item.id !== action.payload);
      const findindex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(findindex, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
