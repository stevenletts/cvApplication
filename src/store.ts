import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./reducers/infoReducer";

const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
