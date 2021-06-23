import Header from '../../Header';
import Auth from '../Auth';

import React, { useState, /* useContext */ } from "react";
// import { useHistory } from 'react-router-dom';

// import { LogicsAllPopups } from '../../../contexts/logicsAllPopups';

// import { signInApi } from '../../../utils/auth';
// import { appUrl } from '../../../utils/constants';

function Login({ /* handleLogin */ submitForm, isLoadingData }) {

  const [fieldValue, setFieldValue] = useState({
    authEmail: '',
    authPassword: ''
  });
  const { authEmail, authPassword } = fieldValue;

  const [logIn, setLogIn] = useState(false);

  // Контекст
  // const { handAuthClick, closeAllPopups } = useContext(LogicsAllPopups);

  // const history = useHistory();

  // const submitForm = e => {
  //   e.preventDefault();
  //   signInApi({
  //     password: authPassword,
  //     email: authEmail
  //   })
  //   .then(data => {
  //     if (data.token) {
  //       localStorage.setItem('jwt', data.token);
  //       setFieldValue({
  //         authEmail: '',
  //         authPassword: ''
  //       });
  //       handleLogin();
  //       setLogIn(true);
  //       // Единственный вариант, так как history.push() перенаправляет сразу, не дав переписать состояние
  //       setTimeout(() => {
  //         history.push(`${appUrl}/mesto`);
  //         closeAllPopups();
  //       }, 2000);
  //     }
  //   })
  //   .catch(rej => {
  //     rej.then(err => {
  //       console.error(err.message);
  //       setLogIn(false);
  //     });
  //   })
  //   .finally(() => {
  //     handAuthClick();
  //   });
  // }

  const setValueFields = e => {
    const { name, value } = e.target;
    setFieldValue(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Header />
      <Auth titleAuth='Вход' authIn={logIn} messagePopup='Успех. Подождите...' >
        <form className='auth__form' name='loginInMesto' onSubmit={ e => submitForm(e, setFieldValue, fieldValue, setLogIn) } >
          <input type='email' name='authEmail' className='auth__field-text' placeholder='Email' required onChange={setValueFields} value={ authEmail } />
          <input type='password' name='authPassword' className='auth__field-text' placeholder='Пароль' required onChange={setValueFields} value={ authPassword } />
          <button className='auth__form-button'>
            {isLoadingData ? 'Войти...' : 'Войти'}
          </button>
        </form>
      </Auth>
    </>
  );
}

export default Login;

