// store.js
import { configureStore } from "@reduxjs/toolkit";
// import root reducer
import rootReducer from "./rootReducer";

// Store configuration with all slices created.
const store = configureStore({
  reducer: rootReducer,
});

export default store;
