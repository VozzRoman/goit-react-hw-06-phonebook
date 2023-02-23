import { FildName, EnterName } from 'components/ContactForm/ContactFormStyle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/store';
import PropTypes from 'prop-types';


export const Filter = () => {
const dispatch = useDispatch();
	

const onChangeHandle = (e) => {
console.log(e.currentTarget.value);
dispatch(filteredContacts(e.currentTarget.value));
}

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

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };
