// Для каждого отдельного сервера, свой apiServe объект
const apiServeMesto = {
  CONECT_SERVER: 'https://mesto.nomoreparties.co/v1',
  TOKEN: '8e942f57-cf63-4abe-b1a4-d7c8e2f5f3b4',
  COHORT_ID: 'cohort-23',
  PATHS: {
    user: 'users/me',
    cards: 'cards',
    cardLikes: 'cards/likes'
  }
};

const apiServeAuth = {
  CONECT_SERVER: 'https://auth.nomoreparties.co',
  PATHS: {
    reg: 'signup',
    login: 'signin',
    checkToken: 'users/me'
  }
};

const appUrl = '/mesto-react';

export { apiServeMesto, apiServeAuth, appUrl };
