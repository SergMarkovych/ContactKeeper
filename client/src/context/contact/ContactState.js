import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = contact => {
    contact.id = uuid();
    dispatch({type: ADD_CONTACT, payload: contact});
  }

  const updateContact = contact => {
    dispatch({type: UPDATE_CONTACT, payload: contact});
  }

  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id});
  }

  const setCurrent = contact => {
    dispatch({type: SET_CURRENT, payload: contact});
  }

  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});
  }

  const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS, payload: text});
  }

  const clearFilter = () => {
    dispatch({type:CLEAR_FILTER})
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
