import { Button, EnterName, FildName, Forms } from './ContactFormStyle';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/cotactsSlice/slice';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors/selectors';


export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);
  console.log(contacts);
  console.log(addContact());

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
	 if(contacts.find(item => item.name === data.name)){
		return alert('this name alredy exist')
	}
	if(contacts.find(item => item.number === data.number)){
		return alert('this number alredy exist')
	}
    dispatch(addContact({ data }));

    form.reset();
  };

  return (
    <Forms onSubmit={handleSubmit}>
      <FildName htmlFor="name">
        Name
        <EnterName
          id="name"
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FildName>
      <FildName htmlFor="number">
        Number
        <EnterName
          id="number"
          type="tel"
          name="number"
          placeholder="345-90-90"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FildName>
      <Button type="submit">Add contact</Button>
    </Forms>
  );
};
