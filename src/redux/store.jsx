import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './slices/ItemSlice';


export const store = configureStore({
    reducer: {
        item: itemReducer,
    }
});