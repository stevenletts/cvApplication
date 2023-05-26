import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EducationState {
  schoolName: string;
  titleOfStudy: string;
  startYear: string;
  endYear?: string;
  onGoing: boolean;
}

const initialState: EducationState[] = [];

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation(state, action: PayloadAction<EducationState>) {
      return [...state, action.payload];
    },
    removeEducation(state, action: PayloadAction<EducationState>) {
      return state.filter(
        (selection) =>
          selection.schoolName === action.payload.schoolName &&
          selection.titleOfStudy === action.payload.titleOfStudy
      );
    },
  },
});

export const { addEducation, removeEducation } = educationSlice.actions;

export default educationSlice.reducer;
