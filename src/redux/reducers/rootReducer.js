import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { formReducer } from "./formReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
});

export { rootReducer };
