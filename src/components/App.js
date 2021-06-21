import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Api from '../utils/api';

// GIF preloader
import gifPreloader from '../images/gif/preloaderProfileImg.gif';

// Страницы
import Mesto from './mesto/Mesto';
import Register from './auth/register/Register';
import Login from './auth/login/Login';

import { checkTokenApi } from '../utils/auth';

// Контекст
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/cardListContext';
import { ValidationFormContext, validation } from '../contexts/validationFormContext';
import { LogicsAllPopups } from '../contexts/logicsAllPopups';

import { appUrl } from '../utils/constants';

// HOC
import ProtectedRoute from './ProtectedRoute';

function App() {

  // Информация о пользователе
  const [currentUser, setCurrentUser] = useState({
    about: 'Загрузка...',
    name: 'Пожалуйста подождите',
    avatar: gifPreloader
  });

  // Информация о карточек
  const [cardList, setCardList] = React.useState([]);

  useEffect(() => {
    // Данные должны подгружаться одновремено
    Promise.all([Api.getInitialUser(), Api.getInitialCards()])
      .then(([ user, cardList ]) => {
        setCurrentUser(user);
        setCardList(cardList);
      });
  }, []);

  const [selectedCard, setselectedCard] = useState({});

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isShowPopupImg, setShowPopupImg] = useState(false);
  const [isConfirmPoppup, setConfirmPoppup] = useState(false);
  const [isConfirmAuthPoppup, setConfirmAuthPoppup] = useState(false);

  const [cardRemove, setCardRemove] = React.useState({});

  // Статус пользователя
  const [loggedIn, setLoggedIn] = React.useState(false);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setShowPopupImg(false);
    setConfirmPoppup(false);
    setConfirmAuthPoppup(false);
  }

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      checkTokenApi(token)
        .then(res => {
          res.data.email ? localStorage.setItem('email', res.data.email)
          : localStorage.setItem('email', 'Здесь должен быть Ваш email');
          setLoggedIn(true);
          history.push(`${appUrl}/mesto`);
        });
    }
  });

  // Закрытие попапов на esc
  useEffect(() => {
    const closePopupTouchEsc = e => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    if (isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || isShowPopupImg || isConfirmPoppup || isConfirmAuthPoppup) {
      document.addEventListener('keydown', closePopupTouchEsc);
    }
    return () => {
      document.removeEventListener('keydown', closePopupTouchEsc);
    };
  }, [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, isShowPopupImg, isConfirmPoppup, isConfirmAuthPoppup]);

  function handleCardClick(name, link) {
    setselectedCard({name, link});
    setShowPopupImg(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick(card) {
    setConfirmPoppup(true);
    setCardRemove(card);
  }

  function handAuthClick() {
    setConfirmAuthPoppup(true);
  }

  const popups = {
    closeAllPopups,
    handleEditAvatarClick,
    handleEditProfileClick,
    handleAddPlaceClick,
    handleCardClick,
    handleDeleteCardClick,
    handAuthClick,
    isEditProfilePopupOpen,
    isEditAvatarPopupOpen,
    isAddPlacePopupOpen,
    isConfirmPoppup,
    isShowPopupImg,
    selectedCard,
    cardRemove,
    isConfirmAuthPoppup
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem('jwt');
    history.push(`${appUrl}/signin`);
    setLoggedIn(false);
  }

  return (
    <ValidationFormContext.Provider value={ validation }>
      <CurrentUserContext.Provider value={ currentUser } >
        <CardListContext.Provider value={ cardList }>
          <LogicsAllPopups.Provider value={ popups } >
            {/* { loggedIn ? console.log(1) : console.log(2) } */}
            <Switch>

              <ProtectedRoute path={`${appUrl}/mesto`} loggedIn={loggedIn} signOut={signOut}
              setStateUser={setCurrentUser} setStateCards={setCardList} component={Mesto}
              />

              {/* Если пользователь авторизировался, ему нельзя посещать эти страницы. Не знаю как реализовать, обычная запись не работает */}
              {/* {
                !loggedIn ? (
                <> */}
                  <Route path={`${appUrl}/signup`}>
                    <Register />
                  </Route>
                  <Route path={`${appUrl}/signin`}>
                    <Login handleLogin={handleLogin} />
                  </Route>
                {/* </>
                ) : null
              } */}

              <Route path='*'>
                { loggedIn ? (
                  <Redirect to={`${appUrl}/mesto`} />
                  ) : (
                  <Redirect to={`${appUrl}/signin`} />
                )}
              </Route>
              {/* <Route path='*'>
                <h1 style={mainText}>
                  404
                </h1>
              </Route> */}
            </Switch>
          </LogicsAllPopups.Provider>
        </CardListContext.Provider>
      </CurrentUserContext.Provider>
    </ValidationFormContext.Provider>
  );
}

export default App;
