import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./LoginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
