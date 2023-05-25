import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InfoState {
  [key: string]: string;
}

const initialState: InfoState = { name: "", email: "", phoneNumber: "" };

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      return { ...state, name: action.payload };
    },
    setEmail(state, action: PayloadAction<string>) {
      return { ...state, email: action.payload };
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      return { ...state, phoneNumber: action.payload };
    },
    setAll(state, action: PayloadAction<object>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setName, setEmail, setPhoneNumber, setAll } = infoSlice.actions;

export default infoSlice.reducer;
