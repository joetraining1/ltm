import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    qty: 0
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addOne: (state) => {
            state.qty += 1;
        },
        rmvOne: (state) => {
            state.qty -= 1;
        },
        addByNumber: (state, action) => {
            console.log(action.payload)
            state.qty += action.payload;
        },
    }
})

export const { addOne, rmvOne, addByNumber } = itemSlice.actions;

export default itemSlice.reducer;