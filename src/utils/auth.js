import { apiServeAuth } from './constants';
const { CONECT_SERVER, PATHS: { reg, login, checkToken } } = apiServeAuth;

const getResponceServe = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json());
};

const registerApi = dataReg => {
  return fetch(`${CONECT_SERVER}/${reg}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataReg)
  })
    .then(getResponceServe);
}

const signInApi = dataLogin => {
  return fetch(`${CONECT_SERVER}/${login}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataLogin)
  })
    .then(getResponceServe)
}

const checkTokenApi = token => {
  return fetch(`${CONECT_SERVER}/${checkToken}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(getResponceServe);
}

export { registerApi, signInApi, checkTokenApi };
