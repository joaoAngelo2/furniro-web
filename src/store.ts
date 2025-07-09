import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./slices/cartSlice";
import cartModalReducer from './slices/cartModalSlice';

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        cartModal: cartModalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;