import { createReducer } from "@reduxjs/toolkit";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
} from "../actions/authActions";

const initialState = {
  email: "",
  name: "",
  idToken: "",
  refreshToken: "",
  isAuth: false,
  localId: "",
  error: "",
};
const authReducer = createReducer(
  { ...initialState },
  {
    [signUpRequest]: (state, action) => ({
      ...state,
      isloading: true,
    }),
    [signUpSuccess]: (state, action) => ({
      ...state,
      email: action.payload.email,
      //name: action.payload.name,
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
      isAuth: true,
      localId: action.payload.localId,
      isloading: false,
    }),
    [signUpError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [signInRequest]: (state, action) => ({
      ...state,
      isloading: true,
    }),
    [signInSuccess]: (state, action) => ({
      ...state,
      email: action.payload.email,
      //name: action.payload.name,
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
      isAuth: true,
      localId: action.payload.localId,
      isloading: false,
    }),
    [signInError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    // [signOutRequest]: (state, action) => ({
    //   ...state,
    //   isloading: true,
    // }),
    [signOutSuccess]: () => ({
      ...initialState,
    }),
    // [signOutError]: (state, action) => ({
    //   ...state,
    //   error: action.payload,
    // }),
  }
);

export { authReducer };
