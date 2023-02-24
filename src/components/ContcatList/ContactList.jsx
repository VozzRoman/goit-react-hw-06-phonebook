import { ItemList, ListContacts } from './ContactListStyle';
// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/cotactsSlice/slice';
// import { getContactsList } from 'redux/cotactsSlice/slice';

export const ContactList = () => {
	const dispatch = useDispatch();

	console.log(dispatch(addContact));
	// const inputData = useSelector(state => {
	// 	console.log(state);
	// })
	// console.log(inputData);

	const listContacts = useSelector(state => {
		console.log(state.contacts);
	return state.contacts;
	})

	

	// const filteredList = listContacts.filter(item => item.name.includes(inputData));
	// console.log(filteredList);
	
	// const listContacts = useSelector(getContactsList); //Selectors
	



return (
	<>
<ListContacts>
    {listContacts.map(({ id, name, number }) => (
      <ItemList key={id}>
        <ContactItem
          name={name}
          number={number}
          id={id}
        />
      </ItemList>
    ))}
  </ListContacts>
	
	
	</>

);

}


