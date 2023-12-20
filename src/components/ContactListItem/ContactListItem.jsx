import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/operation';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li key={id}>
        {name}: {phone}
      </li>
      <button
        type="button"
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;