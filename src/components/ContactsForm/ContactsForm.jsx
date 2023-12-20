import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContactsThunk } from '../../redux/operation';

const ContactsForm = () => {
  const [data, setData] = useState({ name: '', phone: '' })

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === data.name.toLowerCase().trim() ||
        contact.phone === data.phone
    );

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContactsThunk({ name: data.name, phone: data.phone }));
    setData({ name: '', phone: '' });
  };

  const handleChange = event => {
    const { name, phone } = event.target;

    setData({...data, [name] : phone})
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>

      <button type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;

 //   switch (name) {      22<<<<<<<<----------------LINE
  //     case 'name':
  //       const newName = event.target.number.replace(/[^a-zA-Zа-яА-ЯіІʼ\s-]/g, '');
  //       setName(newName);
  //       break;

  //     case 'number':
  //       setNumber(number);
  //       break; 
      
  //     default:
  //       break;
  //   }
  // };
