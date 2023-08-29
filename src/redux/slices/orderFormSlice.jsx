import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const ofSlice = createSlice({
  name: "of",
  initialState,
  reducers: {
    co: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.authState = action.payload;
    },
    mutateValueAvatar: (state, action) => {
      state.authState.avapic = action.payload;
    },
  },
});

export const { co, logout, mutateValueAvatar } = ofSlice.actions;

export default ofSlice.reducer;
