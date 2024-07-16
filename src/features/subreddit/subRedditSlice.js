import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/reddit";

const initialState = {
  isLoading: false,
  subReddits: [],
  error: false,
};

const subRedditSlice = createSlice({
  name: "subreddits",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubReddits.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchSubReddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subReddits = action.payload;
      })
      .addCase(fetchSubReddits.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default subRedditSlice.reducer;

// Async Thunk to retrieve subreddits from the Reddit API
export const fetchSubReddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  () => {
    getSubreddits();
  }
);
