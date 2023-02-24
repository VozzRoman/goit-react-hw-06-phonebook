import {
  ButtonContact,
  DialeName,
} from 'components/ContcatList/ContactListStyle';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/cotactsSlice/slice';
// import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  console.log(id);
  return (
    <>
      <DialeName>
        {name} : <span>{number}</span>
      </DialeName>
      <ButtonContact onClick={() => dispatch(removeContact(id))}>
        Delete
      </ButtonContact>
    </>
  );
};

// ContactItem.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	number: PropTypes.number.isRequired,
// 	id: PropTypes.string.isRequired,
// }

