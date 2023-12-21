import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';  //getContacts, getFilter,

const ContactList = () => {
  const filterContacts = useSelector(selectVisibleContacts);  

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






