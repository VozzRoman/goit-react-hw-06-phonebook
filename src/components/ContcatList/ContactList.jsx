import { ItemList, ListContacts } from './ContactListStyle';
// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/store';
export const ContactList = () => {
	const dispatch = useDispatch();

	console.log(dispatch(addContact));

	const listContacts = useSelector(state => {
		console.log(state.contacts);
	return state.contacts;
	})
	console.log(listContacts);



return (
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
);

}


