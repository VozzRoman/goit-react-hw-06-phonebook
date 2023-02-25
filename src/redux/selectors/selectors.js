
// значение берем через стор через стор

export const getContactsList = state => {
	console.log(state.contacts.contacts);
	return state.contacts.contacts;
};
export const getFilterValue = state => state.filter.filter;