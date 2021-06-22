import React, { useState, useContext } from 'react';

import Api from '../../utils/api';

import Header from '../Header';
import Main from './main/Main';
import Footer from '../Footer';
import ImagePopup from '../popups/ImagePopup';
import EditProfilePopup from '../popups/EditProfilePopup';
import EditAvatarPopup from '../popups/EditAvatarPopup';
import AddPlacePopup from '../popups/AddPlacePopup';
import ConfirmRemove from '../popups/ConfirmRemove';

// Контекст
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CardListContext } from '../../contexts/cardListContext';
import { LogicsAllPopups } from '../../contexts/logicsAllPopups';

function Mesto({ setStateUser, setStateCards, loggedIn, signOut }) {

  const [isLoadingData, setIsLoadingData] = useState(false);

  const user = useContext(CurrentUserContext);
  const cardList = useContext(CardListContext);
  const { closeAllPopups, cardRemove } = useContext(LogicsAllPopups);

  const handleUpdateUser = ({ profileDoes, profileName }) => {
    setIsLoadingData(true);
    Api.patchUpdateProfile(profileDoes, profileName)
      .then(newUser => {
        setStateUser(newUser);
        closeAllPopups();
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  };

  const handleUpdateAvatar = ({ avatar }) => {
    setIsLoadingData(true);
    Api.patchUpdateUserAvatar(avatar)
      .then(newUser => {
        setStateUser(newUser);
        closeAllPopups();
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    Api.postAddCard(name, link)
      .then(newCard => {
        setStateCards([newCard, ...cardList]);
        closeAllPopups();
      });
  };

  const handleCardDelete = () => {
    setIsLoadingData(true);
    Api.deleteCard(cardRemove._id)
      .then(newCard => {
        setStateCards(state => {
          return state.filter(previousCard => {
            return previousCard._id !== cardRemove._id;
          });
        })
        closeAllPopups();
    })
    .finally(() => {
      setIsLoadingData(false);
    });
  };

  //* Card
  const addLike = idCard => {
    Api.putAppendLike(idCard)
      .then(newCard => {
        setStateCards(state => {
          return state.map(previousCard => {
            return previousCard._id === idCard ? newCard : previousCard;
          });
        });
      });
  };

  const deleteLike = idCard => {
    Api.deleteLike(idCard)
      .then(newCard => {
        setStateCards(state => {
          return state.map(previousCard => {
            return previousCard._id === idCard ? newCard : previousCard;
          });
        });
      });
  };

  const handleCardLike = card => {
    // true лайк стоит
    const isLiked = card.likes.some(like => like._id === user._id);

    isLiked ? deleteLike(card._id) : addLike(card._id);
  };
  //*

  return (
    <>
      <Header loggedIn={ loggedIn } signOut={ signOut } />
      <Main onCardLike={handleCardLike} />
      <Footer />

      <EditProfilePopup onUpdateUser={handleUpdateUser} loading={isLoadingData} />
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} loading={isLoadingData} />
      <AddPlacePopup onAddPlace={handleAddPlaceSubmit} loading={isLoadingData} />
      <ConfirmRemove onRemoveCard={handleCardDelete} loading={isLoadingData} />

      <ImagePopup name={'popup_edit_img'} />
    </>
  );
}

export default Mesto;
