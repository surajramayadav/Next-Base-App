import { createSlice } from "@reduxjs/toolkit";

export const themeslice = createSlice({
  name: "dark",
  initialState: {
    Dark: false,
  },
  reducers: {
    setDark: (state, action) => {
      state.Dark = action.payload;
    },
  },
});

//actions
export const { setDark } = themeslice.actions;

export default themeslice.reducer;
