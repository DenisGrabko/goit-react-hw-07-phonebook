import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisualContacts } from '../../redux/selectors';  //getContacts, getFilter,

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const filterContacts = useSelector(selectVisualContacts);  

  const sortedContacts = [...filterContacts].sort((a, b) => b.name - a.name);

  return (
    <>
      <ul>
        {sortedContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;






