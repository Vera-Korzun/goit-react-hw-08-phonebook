import axios from "axios";
import {
  signInError,
  signInRequest,
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOutRequest,
  signOutSuccess,
  signOutError,
  signInSuccess,
} from "../actions/authActions";

const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    //console.log("response", response);
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error));
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    //console.log("response", response);
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error));
  }
};

export { signUpOperation, signInOperation };
