import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { useEffect } from 'react';
import { Wrapper, Container } from './AppContacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Caption } from '../UI/Title/Title';
import { filterListContacts } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const AppContacts = () => {
  const contactList = useSelector(filterListContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addTodo = contact => {
    if (!contact) {
      return;
    }

    for (let userContact of contacts) {
      if (userContact.number === contact.number) {
        console.log(userContact.number === contact.number)
        toast.error(
          `Oops!!! this phone number ${contact.number} is already saved in your contact list under the name "${userContact.name}".`
        );
        return;
      }
    }
    contact.id = nanoid();

    dispatch(addContact(contact));

    toast.success('Contact added. ✅');
  };

  return (
    <Wrapper>
      <Caption title="Phonebook" />
      <ContactForm onSubmit={addTodo} text={'Add contact'} />
      <Container>
        <Caption title="Contacts" />
        <Filter />
      </Container>
        <ContactList contactList={contactList} />
    </Wrapper>
  );
};
