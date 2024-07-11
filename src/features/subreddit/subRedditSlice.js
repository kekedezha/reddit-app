import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  subReddits: [],
  error: false,
};

const subRedditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
});

export default subRedditSlice.reducer;
//   export const {} = subRedditSlice.actions;
