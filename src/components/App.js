import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Api from '../utils/api';

// GIF preloader
import gifPreloader from '../images/gif/preloaderProfileImg.gif';

// Страницы
import Mesto from './mesto/Mesto';
import Register from './auth/register/Register';
import Login from './auth/login/Login';

import { checkTokenApi, signInApi, registerApi } from '../utils/auth';

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
      })
      .catch(err => {
        console.error(err);
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

  // Стутус загрузки данных
  const [isLoadingData, setIsLoadingData] = useState(false);

  const submitFormLogin = (e, setFieldValue, fieldValue, setLogIn) => {
    e.preventDefault();
    setIsLoadingData(true);
    const { authEmail, authPassword } = fieldValue;
    signInApi({
      password: authPassword,
      email: authEmail
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        setFieldValue({
          authEmail: '',
          authPassword: ''
        });
        setLoggedIn(true);
        // setLogIn(true);
        // Единственный вариант, так как history.push() перенаправляет сразу, не дав переписать состояние
        // По идее можно было бы использовать Promise, но он почему-то не срабатывает
        setTimeout(() => {
          history.push(`${appUrl}/mesto`);
          closeAllPopups();
        }, 0);
      }
    })
    .catch(err => {
      // rej.then(err => {
        console.error(err.message);
        
        // Я в Api вернул Promise. Мне нужно получать ответ от сервера, что произошла не просто ошибка, а вывести сообщение которое сервер вернул в консоль. Я не знаю что у меня не так. Я могу так же проверить на статус ответа в response, и вывести там ответ от сервера в случае ошибки, но зачем, если с промисом все работало. В случае ошибки у меня в консоль выводиться undefined, так как я возвращаю promise с ошибкой в методе.
        console.log(err)

        setLogIn(false);
      // });
    })
    .finally(() => {
      handAuthClick();
      setIsLoadingData(false);
    });
  }

  const submitFormReg = (e, setRegIn, fieldValue, setFieldValue) => {
    e.preventDefault();
    setIsLoadingData(true);
    const { authEmail, authPassword } = fieldValue;
    registerApi({
      password: authPassword,
      email: authEmail
    })
    .then(res => {
      res.data.email ? localStorage.setItem('email', res.data.email)
      : localStorage.setItem('email', 'Здесь должен быть Ваш email');
      setRegIn(true);
      setFieldValue({
        authEmail: '',
        authPassword: ''
      });
      // Единственный вариант, так как history.push() перенаправляет сразу, не дав переписать состояние
      setTimeout(() => {
        history.push(`${appUrl}/signin`);
        closeAllPopups();
      }, 2000);
    })
    .catch(err => {
      // rej.then(err => {
        console.error(err.error);
        setRegIn(false);
      // });
    })
    .finally(() => {
      handAuthClick();
      setIsLoadingData(false);
    });
  }

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
        })
        .catch(err => {
          console.error(err);
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

  /* const handleLogin = () => {
    setLoggedIn(true);
  }; */

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
              setStateUser={setCurrentUser} setStateCards={setCardList} isLoadingData={isLoadingData} setIsLoadingData={setIsLoadingData} component={Mesto}
              />

              {/* Если пользователь авторизировался, ему нельзя посещать эти страницы. Не знаю как реализовать, обычная запись не работает */}
              {/* {
                !loggedIn ? (
                <> */}
                  <Route path={`${appUrl}/signup`}>
                    <Register submitFormReg={submitFormReg} isLoadingData={isLoadingData} />
                  </Route>
                  <Route path={`${appUrl}/signin`}>
                    <Login submitForm={submitFormLogin} isLoadingData={isLoadingData} />
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
