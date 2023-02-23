
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import shortid from 'shortid';


const contactsSlice = createSlice({
	name: 'contacts',
	initialState: [
{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},

	],
	reducers: {

		addContact(state, action) {
			const newContact = {
							id: shortid(),
				name: action.payload.data.name,
				number: action.payload.data.number,

			}
			return [...state, newContact]
			// state.push({
			// 	id: shortid(),
			// 	name: action.payload.data.name,
			// 	number: action.payload.data.number,
			// })
		},
		removeContact(state, action) {
			return state.filter(item => item.id !== action.payload)
		},
		filteredContacts(state, action) {
			return state.filter(item => item.name.includes(action.payload));
		}


	}

})

export const {addContact, removeContact, filteredContacts} = contactsSlice.actions;


// const filterSlice = createSlice({
// 	name: 'filter',
// 	initialState: [],
// 	reducers: {
// 		filteredContacts(state, action){
// 			return state = action.payload;
// 		}
// 	}
// })

// export const {filteredContacts} = filterSlice.actions;


export const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		// filter: filterSlice.reducer,
		
	},
});





