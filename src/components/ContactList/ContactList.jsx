import { ContactListWrapper } from './ContactListStyled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContactsThunk, getContactsThunk } from 'redux/contacts/thunk';
import React, { useEffect } from 'react';
import { selectContacts, selectFilter } from 'selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsArr = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = (contactsArr, filter) => {
    return contactsArr.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filter
    ? getFilteredContacts(contactsArr, filter)
    : contactsArr;

  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(deleteContactsThunk(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ContactListWrapper>
  );
};
