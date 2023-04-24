import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { BsTrash, BsPersonCircle, BsPen } from 'react-icons/bs';

import { Modal } from 'components/Modal/Modal';
import { Loading } from 'components/UI/Loading/Loading';
import {
  List,
  Item,
  Span,
  Button,
  Error,
  Container,
} from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

export const ContactList = ({ contactList }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idContact, setIdContact] = useState(null);

  const openModal = id => {
    setIdContact(id);
    setIsOpenModal(true);
  };
  const toggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  const deletContact = idContact => {
    dispatch(deleteContact(idContact));
    toast.info(' Contact deleted. ✅ ');
  };

  return (
    <Container>
      <List>
        {isLoading && <Loading visible={isLoading} />}
        {error && <Error>{error}</Error>}
        {contactList.map(({ id, name, number }) => (
          <Item key={id} id={id}>
            <Span>
              <BsPersonCircle />
            </Span>
            <Span>{name} </Span>
            <Span>{number}</Span>
            <Button
              type="button"
              disabled={isLoading}
              onClick={() => openModal(id)}
            >
              <BsPen />
            </Button>
            <Button
              type="button"
              disabled={isLoading}
              onClick={() => deletContact(id)}
            >
              <BsTrash />
            </Button>
          </Item>
        ))}
      </List>

      {isOpenModal && <Modal onClose={toggleModal} id={idContact} />}
    </Container>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
};
