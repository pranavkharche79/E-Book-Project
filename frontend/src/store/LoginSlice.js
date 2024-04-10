import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isloggedin: false, isgoogle: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isloggedin = action.payload.loggedIn;
      state.isgoogle = action.payload.isgoogle;
    },
    logout: (state) => {
      state.user = null;
      state.isloggedin = false;
      state.isgoogle = false;
      localStorage.clear();
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
