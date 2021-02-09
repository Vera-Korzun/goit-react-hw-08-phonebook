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

// import {
//   SETERROR,
//   SETLOADING,
//   SIGNIN,
//   SIGNOUT,
//   SIGNUP,
// } from "../constants/authConstants";

const initialState = {
  email: "",
  token: "",
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
      isloading: false,
    }),
    [signInError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [signOutRequest]: (state, action) => ({
      ...state,
      isloading: true,
    }),
    [signOutSuccess]: (state, action) => ({
      ...state,
      isloading: false,
    }),
    [signOutError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  }
);

export { authReducer };

// const authReducer = (state = { ...initialState }, action) => {
//   switch (type) {
//     case SIGNUP:
//       return state;
//     case SIGNIN:
//       return state;
//     case SIGNOUT:
//       return state;
//     case SETLOADING:
//       return { ...state, isloading: !state.isloading };
//     case SETERROR:
//       return { ...state, error: action.payload };

//     default:
//       return state;
//   }
// };

//export { authReducer };
