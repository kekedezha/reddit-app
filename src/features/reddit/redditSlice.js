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
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default redditSlice.reducer;
export const { setSearchTerm } = redditSlice.actions;
