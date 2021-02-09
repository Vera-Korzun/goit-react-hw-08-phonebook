//import { formReducer } from "./reducers/formReducer";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export { store };
