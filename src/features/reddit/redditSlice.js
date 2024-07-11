import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  posts: [],
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
  error: false,
};

const redditSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {},
});

export default redditSlice.reducer;
// export const {} = redditSlice.actions;
