import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/Reducer";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});
