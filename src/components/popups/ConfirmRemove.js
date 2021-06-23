import React, { useContext } from 'react';

import PopupWithForm from './PopupWithForm';

// Контекст
import { LogicsAllPopups } from '../../contexts/logicsAllPopups';

function ConfirmRemove({ onRemoveCard, loading }) {

  // Контекст
  const {
    isConfirmPoppup: isOpen,
    closeAllPopups: onClose
  } = useContext(LogicsAllPopups);

  const handleSubmit = e => {
    e.preventDefault();

    onRemoveCard();
  };

  return (
    <PopupWithForm title={'Вы уверены?'} name={'popup_remove_card'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText='Да' loading={loading} />
  );
}

export default ConfirmRemove;
