import * as actionType from "./action-type";
import { 
  pageLoading, 
  alertError, 
  alertSuccess 
} from "./alert-actions";
import User from "../tools/user-service";
import axios from 'axios';
import { appConstants } from '../helpers/constants';

export const userLogin = (token, username) => {
  const type = actionType.IS_LOGIN;
  User.setToken(token);
  User.setUserInfo('email');
  return { type, token };
};

export const userClear = () => {
  const type = actionType.IS_LOGIN;
  User.clearData();
  return { type, token: null };
};

export function LoginSuccess(response){
  User.setToken(response.token)
  return {
      type: actionType.LOGIN_SUCCESS,
      payload: {
        response
      }
  }
}

export function LoginError(response){
  return {
      type: actionType.LOGIN_ERROR,
      payload: {
        response
      }
  }
}

export function signUpSuccess(response){
  User.setToken(response.token)
  return {
      type: actionType.SIGNUP_SUCCESS,
      payload: {
        response
      }
  }
}

export function signUpError(response){
  return {
      type: actionType.SIGNUP_ERROR,
      payload: {
        response
      }
  }
}

export function findFactorialSuccess(response){
  return {
      type: actionType.FIND_FACTORIAL_SUCCESS,
      payload: {
        response
      }
  }
}

export function findFactorialError(response){
  return {
      type: actionType.FIND_FACTORIAL_ERROR,
      payload: {
        response
      }
  }
}
// export const userLoginSubmit = (values) => {
//   return dispatch => {
//     dispatch(pageLoading());
//     if (User.loginAttempt(values.email, values.password)) {
//       dispatch(userLogin(Math.random(), values.email));
//       return dispatch(
//         alertSuccess("Registration Successfull...")
//       );
//     }
//     return dispatch(alertError("Error!!!"));
//   };
// };

export function  userLoginSubmit(values) {
  return  function (dispatch) {
    dispatch(alertSuccess('Successfull login'))
    User.setUserInfo(values.email)
    dispatch(LoginSuccess({
      status: 'success',
      token: '123',
      message: 'message'
    }))
    // axios.post(`${appConstants.WEB_SERVICE_URL}/api/users/login`,{"email": values.email ,"password": values.password})
    //   .then(function (response) {
    //     // if api calling is return success then response is dispatch to reducer via createSuccess method
    //     dispatch(userLogin(response))
    //   })
    // .catch(error => { 
    //   // otherwise createError will handle error
    //     dispatch(alertError("Error!!!"));
    //  });
  };
}

export function  userSignUpSubmit(values) {
  return  function (dispatch) {
    dispatch(alertSuccess("Registration Successfull..."))
    User.setUserInfo(values.email)
    dispatch(signUpSuccess({
      status: 'success',
      message: 'message',
      token: 'sdfsd'
    }))
    // axios.post(`${appConstants.WEB_SERVICE_URL}/api/users/login`,values)
    //   .then(function (response) {
    //     // if api calling is return success then response is dispatch to reducer via createSuccess method
    //     dispatch(userLogin(response))
    //   })
    // .catch(error => { 
    //   // otherwise createError will handle error
    //     dispatch(alertError("Error!!!"));
    //  });
  };
}

export function  findFactorialValue(values) {
  return  function (dispatch) {
    dispatch(findFactorialSuccess({
      status: 'success',
      message: 'message',
      value: 1452
    }))
    // axios.post(`${appConstants.WEB_SERVICE_URL}/api/users/login`,values)
    //   .then(function (response) {
    //     // if api calling is return success then response is dispatch to reducer via createSuccess method
    //     dispatch(userLogin(response))
    //   })
    // .catch(error => { 
    //   // otherwise createError will handle error
    //     dispatch(alertError("Error!!!"));
    //  });
  };
}

export const userLogout = () => {
  return dispatch => {
    /*dispatch(userPassword("1"));*/
    dispatch(alertSuccess("Logout!!!"));
    dispatch(userClear());
  };
};
