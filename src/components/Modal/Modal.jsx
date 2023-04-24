import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FornPatch } from 'components/FormPatch/FormPatch';
import { patchContacts } from 'redux/contacts/operations';

import { Overlay, ModalContainer, Button } from './Modal.styled';

export const Modal = ({ onClose, id }) => {
  const dispatch = useDispatch();

  const patchContact = e => {
    dispatch(patchContacts(e));
  };

  const hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const hendlerKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', hendlerKeydown);
    return () => {
      window.removeEventListener('keydown', hendlerKeydown);
    };
  });

  return createPortal(
    <Overlay oonClick={hendleBackdropClick}>
      <ModalContainer>
        <Button onClick={onClose}></Button>
        <FornPatch
          text={'Update contact'}
          modalClose={onClose}
          onSubmit={patchContact}
          id={id}
        />
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
