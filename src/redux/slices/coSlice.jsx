import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user_id: "",
    avapic: "",
    user: "",
    type: "",
    cart_id: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authState = action.payload
    },
    logout: (state, action) => {
      state.authState = action.payload;
    },
    mutateValueAvatar: (state, action) => {
      state.authState.avapic = action.payload;
    },
  },
});

export const { login, logout, mutateValueAvatar } = authSlice.actions;

export default authSlice.reducer;
