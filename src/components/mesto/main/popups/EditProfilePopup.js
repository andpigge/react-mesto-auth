import React, { useEffect, useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';

// Контекст
import { CurrentUserContext } from '../../../../contexts/CurrentUserContext';
import { ValidationFormContext } from '../../../../contexts/validationFormContext';
import { LogicsAllPopups } from '../../../../contexts/logicsAllPopups';

function EditProfilePopup({ onUpdateUser, loading }) {
  const [profileValue, setProfileValue] = useState({
    profileName: '',
    profileDoes: ''
  });
  const {profileName, profileDoes} = profileValue;

  const [isValidProfileName, setValidProfileName] = useState(false);
  const [isValidProfileDoes, setValidProfileDoes] = useState(false);

  // Контекст
  const { about, name } = useContext(CurrentUserContext);
  const validation = useContext(ValidationFormContext);
  const {
    isEditAvatarPopupOpen: isOpen,
    closeAllPopups: onClose
  } = useContext(LogicsAllPopups);

  // Вторым параметром передал переменные зависимости, те что используются в useEffect
  useEffect(() => {
    setProfileValue({
      profileName: about,
      profileDoes: name
    });
  }, [about, name]);

  useEffect(() => {
    const isValidProfileName = validation(profileValue.profileName, 2, 40);
    const isValidProfileDoes = validation(profileValue.profileDoes, 2, 200);
    // console.log(isValidProfileName, isValidProfileDoes)

    setValidProfileName(isValidProfileName);
    setValidProfileDoes(isValidProfileDoes);
  }, [profileValue, validation]);

  // Немного усложнил задачу, чтобы потренироваться, понять как реализуется задача по-другому
  const handleChange = e => {
    setProfileValue(state => {
      const previousValue = Object.assign({}, state);
      previousValue[e.target.name] = e.target.value;
      return previousValue;
    });
  }

  const handleSabmit = e => {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(profileValue);
  };

  return (
    <PopupWithForm title={'Редактировать профиль'} name={'popup_edit_profile'} isOpen={isOpen} onClose={onClose} onSubmit={handleSabmit}>
      <>
        <label className="popup__form-label">
          {/* С помощью value и onChange создал управляющий компонент, где содержимое берется из state компонента */}
          <input type="text" className="popup__form-input popup__form-input_value_name" id="profile-name-input" placeholder="Имя" name="profileName" minLength="2" maxLength="40" required value={profileName} onChange={handleChange} style={{borderBottom: !isValidProfileName ? '1px solid red' : ''}} />
          <span className={!isValidProfileName ? "popup__error-message profile-name-input-error popup__error-message_active" : "popup__error-message profile-name-input-error"}>Ошибка валидации</span>
        </label>
        <label className="popup__form-label">
          <input type="text" className="popup__form-input popup__form-input_value_does" id="profile-does-input" placeholder="Деятельность" name="profileDoes" minLength="2" maxLength="200" required value={profileDoes} onChange={handleChange} style={{borderBottom: !isValidProfileDoes ? '1px solid red' : ''}} />
          <span className={!isValidProfileDoes ? "popup__error-message profile-does-input-error popup__error-message_active" : "popup__error-message profile-does-input-error"}>Ошибка валидации</span>
        </label>
        <button className="button-popup button-popup_edit_profile" type="submit" disabled={isValidProfileName && isValidProfileDoes ? false : true} style={{opacity: !(isValidProfileName && isValidProfileDoes) ? '.2' : ''}}>
          {loading ? 'Сохранить...' : 'Сохранить'}
        </button>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
