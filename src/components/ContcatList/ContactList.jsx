import { ItemList, ListContacts } from './ContactListStyle';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors/selectors';
import { getFilterValue } from 'redux/selectors/selectors';

const getFilteredCOntacts = (inputData, listContact) => {
	console.log(listContact);
  return listContact.filter(item => item.name.toLocaleLowerCase().includes(inputData));
};

export const ContactList = () => {
  // const inputData = useSelector(state => state.filter);
  // console.log(inputData);
  const inputData = useSelector(getFilterValue); //Selectors

  // const listContacts = useSelector(state => state.contacts);
  // console.log(listContacts);
  const listContacts = useSelector(getContactsList); //Selectors

  const filteredContacts = getFilteredCOntacts(inputData, listContacts);

  return (
    <>
      <ListContacts>
        {filteredContacts.map(({ id, name, number }) => (
          <ItemList key={id}>
            <ContactItem name={name} number={number} id={id} />
          </ItemList>
        ))}
      </ListContacts>
    </>
  );
};
