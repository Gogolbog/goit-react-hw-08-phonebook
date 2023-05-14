import { PageWrapper } from 'components/App/AppStyled';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

const ContactsPage = () => {
  return (
    <PageWrapper>
      <ContactForm />

      <Filter />

      <ContactList />
    </PageWrapper>
  );
};
export default ContactsPage;
