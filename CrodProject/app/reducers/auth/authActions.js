/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict';
import { Actions, ActionConst } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import { api } from '../../lib/Api';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} = require('../../lib/constants').default;


/*############## Login Section ##############*/
export function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());
    return api.login(username, password)

    .then((json) => {
      return saveToken(json.token)
        .then(() => {
          dispatch(loginSuccess(json));
          // navigate to Home
          Actions.home({ type: ActionConst.REFRESH });
        });
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    payload: json
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
}

/*############## Register Section ##############*/
export function register(username, email, email2, password) {
  return dispatch => {
    dispatch(registerRequest());
    return api.register(username, email, email2, password)

    .then((json) => {
          dispatch(registerSuccess(json));
          // navigate to login
          Actions.login({ type: ActionConst.REFRESH });
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
  };
}

export function registerRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

export function registerSuccess(json) {
  return {
    type: SIGNUP_SUCCESS,
    payload: json
  };
}

export function registerFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    payload: error
  };
}

/*############## Token Section ##############*/
export function saveToken(token) {
   return store.save('TOKEN_KEY', token);
}

export function getToken() {
  return store.get('TOKEN_KEY');
}
export function redirect() {
  return () => {
    return getToken()
      .then((token) => {
        if (token) {
          //dispatch(sessionTokenRequestSuccess(token))
          Actions.home({ type: ActionConst.REFRESH });
        } else {
          //dispatch(sessionTokenRequestFailure())
          Actions.login({ type: ActionConst.REFRESH });
        }
      })
      .catch(() => {
        //dispatch(sessionTokenRequestFailure(error))
        Actions.login({ type: ActionConst.REFRESH });
      });
  };
}
