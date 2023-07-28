import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './slices/ItemSlice';
import authReducer from './slices/authSlice'


export const store = configureStore({
    reducer: {
        item: itemReducer,
        auth: authReducer,
    }
});