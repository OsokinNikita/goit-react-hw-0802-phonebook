import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Label, Input, Span, Button } from './FormPatch.styled';
import { InputElement } from '../UI/Input/Input';
import { filterListContacts } from 'redux/filter/selectors';

export const FornPatch = ({ onSubmit, modalClose, id }) => {
  const contactList = useSelector(filterListContacts);

  const contact = contactList.filter(contact => contact.id === id);

  const [name, setName] = useState(contact[0].name);
  const [number, setNumber] = useState(contact[0].number);

  const hendleChangeName = e => {
    setName(e.currentTarget.value);
  };
  const hendleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    modalClose();
    onSubmit({ name, number, id });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Label>
        <Span>Name</Span>
        <InputElement
          value={name}
          onChange={hendleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <Span>Number</Span>
        <PatternFormat
          customInput={Input}
          format="+38 (###)-###-##-##"
          allowEmptyFormatting
          mask="_"
          value={number}
          onChange={hendleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Save</Button>
    </Form>
  );
};

FornPatch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
