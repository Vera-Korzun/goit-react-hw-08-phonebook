//import { formReducer } from "./reducers/formReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
  persistStore,
} from "redux-persist";
import { rootReducer } from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  //===================================================https://github.com/rt2zz/redux-persist/issues/988
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

export { store };

export const persistor = persistStore(store);
