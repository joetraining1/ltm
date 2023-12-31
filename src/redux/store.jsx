import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './slices/ItemSlice';
import authReducer from './slices/authSlice'
import showcaseReducer from './slices/ShowSlice'
import ofReducer from './slices/orderFormSlice'
import aofReducer from './slices/adminOFSlice'


export const store = configureStore({
    reducer: {
        item: itemReducer,
        auth: authReducer,
        showcase: showcaseReducer,
        of: ofReducer,
        aof: aofReducer
    }
});