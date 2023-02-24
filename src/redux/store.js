import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice/slice';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { contactsSlice } from './cotactsSlice/slice';
// import {
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
//  } from 'redux-persist'


// const persistConfig = {
// 	key: 'root',
// 	storage,
//  }


//  const persistedContacts = persistReducer(
// 	persistConfig, 
// 	contactsSlice.reducer
// 	)

export const store = configureStore({
  reducer: {
	// contacts: persistedContacts,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
// 	 serializableCheck: {
// 		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 	 },
//   }),
});

// export const  persisitor = persistStore(store);
