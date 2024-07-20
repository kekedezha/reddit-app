import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../../api/reddit";
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
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.posts = state.posts.map((post) => ({
          ...post,
          showingComments: false,
          comments: [],
          loadingComments: false,
          errorComments: false,
        }));
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchComments.pending, (state, action) => {
        const index = action.meta.arg.index;
        state.posts[index].showingComments =
          !state.posts[index].showingComments;
        if (!state.posts[index].showingComments) {
          return;
        }
        state.posts[index].loadingComments = true;
        state.posts[index].errorComments = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { index, comments } = action.payload;
        state.posts[index].loadingComments = false;
        state.posts[index].comments = comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        const index = action.payload.index;
        state.posts[index].loadingComments = false;
        state.posts[index].errorComments = true;
      });
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

export const fetchPosts = createAsyncThunk(
  "reddit/fetchPosts",
  async (subreddit) => {
    return await getSubredditPosts(subreddit);
  }
);

export const fetchComments = createAsyncThunk(
  "reddit/fetchComments",
  async ({ index, permalink }, { rejectWithValue }) => {
    try {
      const comments = await getPostComments(permalink);
      return { index, comments };
    } catch (error) {
      return rejectWithValue({ index, error: error.message });
    }
  }
);

export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;
const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== "") {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }
);
