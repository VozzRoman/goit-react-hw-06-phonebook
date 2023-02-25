import { FildName, EnterName } from 'components/ContactForm/ContactFormStyle';
import { useDispatch } from 'react-redux';
import { filteredValue } from 'redux/filterSlice/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeHandle = e => {
    console.log(e.currentTarget.value);
    dispatch(filteredValue(e.currentTarget.value));
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
