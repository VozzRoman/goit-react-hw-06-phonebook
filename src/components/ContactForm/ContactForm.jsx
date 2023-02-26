import { Button, EnterName, FildName, Forms } from './ContactFormStyle';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/cotactsSlice/slice';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors/selectors';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);
  console.log(contacts);
  console.log(addContact());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });
  const onFormSubmit = data => {
    console.log(data.name);
    console.log(data.number);
    const { name, number } = data;
    if (contacts.find(item => item.name === name)) {
      return alert('this name alredy exist');
    }
    if (contacts.find(item => item.number === number)) {
      return alert('this number alredy exist');
    }

    dispatch(addContact({ data }));
    reset();

    //  e.preventDefault();

    //  const form = e.currentTarget;

    //  const data = {
    //    name: form.elements.name.value,
    //    number: form.elements.number.value,
    //  };
    //  if(contacts.find(item => item.name === data.name)){
    // 	return alert('this name alredy exist')
    // }
    // if(contacts.find(item => item.number === data.number)){
    // 	return alert('this number alredy exist')
    // }
    // if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(data.number)) {
    // 	return alert('Enter the correct number phone!');
    // }
    //  dispatch(addContact({ data }));

    //  form.reset();
  };

  return (
    <>
      <Forms onSubmit={handleSubmit(onFormSubmit)}>
        <FildName htmlFor="name">
          Name
          <EnterName
            {...register('name', {
              required: 'please enter name',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan',
              },
            })}
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </FildName>
        {errors?.name && (
          <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.name?.message || 'Error'}
          </span>
        )}
        <FildName htmlFor="number">
          Number
          <EnterName
            {...register('number', {
              required: 'please enter phone number',
              pattern: {
                value: /\d{3}[-]\d{2}[-]\d{2}/,
                message:
                  'Phone number must be digits and can contain spaces, dashes, parentheses',
              },
              maxLength: 9,
              message: 'phone number has 7 digits',
            })}
            id="number"
            type="tel"
            name="number"
            placeholder="345-90-90"
          />
        </FildName>
        {errors?.number && (
          <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.number?.message || 'phone number has 7 digits'}
          </span>
        )}
        <Button type="submit" disabled={!isValid}>
          Add contact
        </Button>
      </Forms>
      {!contacts.length ? <h2>The phonebook is empty</h2> : <h2>Contacts</h2>}
    </>
  );
};
