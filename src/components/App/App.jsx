import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactsForm/ContactsForm';
import Container from '../../components/Container/Container';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from '../../redux/selectors';
import { getContactsThunk } from '../../redux/operation';


const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <Notification message="No contacts yet" />
        )}
        {error !== null && error}
        {isLoading && <Loader />}
        {contacts.length > 0 && <ContactList />}
      </Section>
    </Container>
  );
};

export default App;


