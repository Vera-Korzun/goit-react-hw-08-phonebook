import { createAction } from "@reduxjs/toolkit";
// import {
//   SIGNUP,
//   SIGNIN,
//   SIGNOUT,
//   SETLOADING,
//   SETERROR,
// } from "../constants/authConstants";

// const signUp = (user) => ({ type: SIGNUP, payload: user });
// const signIn = (user) => ({ type: SIGNIN, payload: user });
// const signOut = () => ({ type: SIGNOUT });
// const setLoading = () => ({ type: SETLOADING });
// const setError = (error) => ({ type: SETERROR, payload: error });

// export { signUp, signIn, signOut, setLoading, setError };

const signUpRequest = createAction("@auth/signUpRequest");
const signUpSuccess = createAction("@auth/signUpSuccess");
const signUpError = createAction("@auth/signUpError");

const signInRequest = createAction("@auth/signInRequest");
const signInSuccess = createAction("@auth/signInSuccess");
const signInError = createAction("@auth/signInError");

const signOutRequest = createAction("@auth/signOutRequest");
const signOutSuccess = createAction("@auth/signOutSuccess");
const signOutError = createAction("@auth/signOutError");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
};

//Напиши Redux-операции для работы с асинхронными запросами по паттерну request, success и error
