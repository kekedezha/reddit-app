import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  subReddits: [],
  error: false,
};

const subRedditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {
    loadSubreddits: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loadSubredditsSuccess: (state, action) => {
      state.isLoading = false;
      state.subReddits = action.payload;
    },
    loadSubredditsFail: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default subRedditSlice.reducer;
export const { loadSubreddits, loadSubredditsSuccess, loadSubredditsFail } =
  subRedditSlice.actions;
