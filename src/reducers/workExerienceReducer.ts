import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WorkExperienceState {
  company: string;
  jobTitle: string;
  description: string;
  startYear: string;
  endYear?: string;
  onGoing: boolean;
}

const initialState: WorkExperienceState[] = [];

const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    addWorkExperience(state, action: PayloadAction<WorkExperienceState>) {
      console.log(action);
      return [...state, action.payload];
    },
    removeWorkExperience(state, action: PayloadAction<WorkExperienceState>) {
      return state.filter(
        (selection) =>
          selection.jobTitle === action.payload.jobTitle &&
          selection.company === action.payload.company
      );
    },
  },
});

export const { addWorkExperience, removeWorkExperience } =
  workExperienceSlice.actions;

export default workExperienceSlice.reducer;
