import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metadata: {
    user_id: 0,
    status_id: 0,
    account_id: 0,
    payment_id: 0,
    variant: 0,
    unit: 0,
    amount: 0,
    shipping: 0,
    total: 0,
  },
  dataset: [],
};

export const aofSlice = createSlice({
  name: "aof",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.metadata = action.payload;
    },
    addUser: (state, action) => {
      state.metadata.user_id = action.payload;
    },
    addStatus: (state, action) => {
      state.metadata.status_id = action.payload;
    },
    addNorek: (state, action) => {
      state.metadata.account_id = action.payload;
    },
    addPay: (state, action) => {
      state.metadata.payment_id = action.payload;
    },
    addShipping: (state, action) => {
      state.metadata.shipping = action.payload;
      state.metadata.total = state.metadata.amount + state.metadata.shipping;
    },
    addDataset: (state, action) => {
      state.dataset = action.payload;
      const sumAmount = state.dataset.reduce((total, obj) => obj.amount + total,0)
      const sumQty = state.dataset.reduce((total, obj) => obj.qty + total,0)
      const sumVariant = state.dataset.length;
      state.metadata.amount = sumAmount;
      state.metadata.unit = sumQty;
      state.metadata.variant = sumVariant;
      state.metadata.total = state.metadata.amount + state.metadata.shipping;
    },
    updateDataset: (state, action) => {
      const stateI = state.dataset.findIndex((item) => {
        return item.product_id === action.payload.product_id
      });
      state.dataset[stateI].qty = action.payload.qty;
      state.dataset[stateI].amount = action.payload.amount;
      const sumAmount = state.dataset.reduce((total, obj) => obj.amount + total,0)
      const sumQty = state.dataset.reduce((total, obj) => obj.qty + total,0)
      const sumVariant = state.dataset.length;
      state.metadata.amount = sumAmount;
      state.metadata.unit = sumQty;
      state.metadata.variant = sumVariant;
      state.metadata.total = state.metadata.amount + state.metadata.shipping;
    },
    mutateValueAvatar: (state, action) => {
      state.authState.avapic = action.payload;
    },
  },
});

export const {
  addInfo,
  addUser,
  addStatus,
  addNorek,
  addPay,
  addShipping,
  addDataset,
  updateDataset,
  mutateValueAvatar,
} = aofSlice.actions;

export default aofSlice.reducer;
