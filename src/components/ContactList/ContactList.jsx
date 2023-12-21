import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';  //getContacts, getFilter,

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const filterContacts = useSelector(selectVisibleContacts);  

  //const sortedContacts = [...filterContacts].sort((a, b) => b.name - a.name);

  return (
    <>
      {filterContacts.length > 0 ? (
        <ul>
        {filterContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
        </ul>
      ) : (<h2>Not found...</h2>)}
      
    </>
  );
};

export default ContactList;






