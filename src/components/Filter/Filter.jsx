import { FildName, EnterName } from 'components/ContactForm/ContactFormStyle';

import { useDispatch } from 'react-redux';
// import { filteredList } from 'redux/filterSlice/slice';
import { filteredContacts } from 'redux/cotactsSlice/slice';

// import { filteredList } from 'redux/filterSlice/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeHandle = e => {
    console.log(e.currentTarget.value);
    dispatch(filteredContacts(e.currentTarget.value));
  };

  return (
    <FildName>
      Find contacts
      <EnterName
        onChange={onChangeHandle}
        placeholder="Find contacts"
        type="text"
      />
    </FildName>
  );
};
