import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./reducers/infoReducer";
import educationReducer from "./reducers/educationReducer";
import workExerienceReducer from "./reducers/workExerienceReducer";

const store = configureStore({
  reducer: {
    info: infoReducer,
    education: educationReducer,
    workExperience: workExerienceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
