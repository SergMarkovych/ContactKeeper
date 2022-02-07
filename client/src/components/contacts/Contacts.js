import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/ContactContext';
import Spinner from '../layout/Spinner';
import ContactItem from './ContactItem';

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
    console.log(contacts);
  },[]);

  if (contacts != null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition timeout={500} classNames='item'>
                  <ContactItem key={contact._id} contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition timeout={500} classNames='item'>
                  <ContactItem key={contact._id} contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
