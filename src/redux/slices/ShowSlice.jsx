import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    ctg_id: "",
    ctg: "",
  },
  dataset: []
};

export const showSlice = createSlice({
  name: "showcase",
  initialState,
  reducers: {
    activeCtg: (state, action) => {
      state.value = action.payload;
    },
    addData: (state, action) => {
      state.dataset = action.payload;
    },
    mutateValueAvatar: (state, action) => {
      state.authState.avapic = action.payload;
    },
  },
});

export const { activeCtg, addData, mutateValueAvatar } = showSlice.actions;

export default showSlice.reducer;
