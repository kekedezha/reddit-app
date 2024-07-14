import { combineReducers } from "@reduxjs/toolkit";
import redditSliceReducer from "../features/reddit/redditSlice";
import subRedditSliceReducer from "../features/subreddit/subRedditSlice";

const rootReducer = combineReducers({
  //Define a top-level state field name handled by the imported reducer
  reddit: redditSliceReducer,
  subReddit: subRedditSliceReducer,
});

export default rootReducer;
