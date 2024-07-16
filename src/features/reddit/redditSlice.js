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
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    postsLoading: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    postsLoadingSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    postsLoadingFail: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
});

export default redditSlice.reducer;
export const {
  setSearchTerm,
  setPosts,
  postsLoading,
  postsLoadingSuccess,
  postsLoadingFail,
  setSelectedSubreddit,
} = redditSlice.actions;
