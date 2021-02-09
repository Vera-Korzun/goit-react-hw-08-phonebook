import axios from "axios";
import { signUpError, signUpRequest } from "../actions/authActions";

const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
    });
    console.log("response", response);
    //dispatch(signUpSuccess({ }));
  } catch (error) {
    dispatch(signUpError(error));
    //dispatch(addNewContactError(error));
  }
};

export { signUpOperation };
