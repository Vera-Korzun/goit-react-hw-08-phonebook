import axios from "axios";
import {
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "../actions/formActions";

const addContactOperation = (contact) => async (dispatch, getState) => {
  dispatch(addNewContactRequest());
  const idToken = getState().auth.idToken;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/contacts.json?auth=${idToken}`,
      contact
    );
    dispatch(addNewContactSuccess({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(addNewContactError(error));
  }
};

const getContactsOperation = () => async (dispatch, getState) => {
  dispatch(getContactsRequest());
  const idToken = getState().auth.idToken;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/contacts.json?auth=${idToken}`
    );
    const contacts = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    dispatch(getContactsSuccess(contacts));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const deleteContactOperation = (id) => (dispatch, getState) => {
  dispatch(deleteContactRequest());
  const idToken = getState().auth.idToken;

  try {
    axios
      .delete(
        `${process.env.REACT_APP_BASE_URL}/contacts/${id}.json?auth=${idToken}`
      )
      .then(() => dispatch(deleteContactSuccess(id)));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
export { addContactOperation, getContactsOperation, deleteContactOperation };
