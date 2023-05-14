import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Create the redux store using the root reducer and export it
const store = configureStore({
  reducer: rootReducer,
});

export default store;
