import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import { cartSlice } from './cart/cart.slice'

const reducers = combineReducers({
	cart: cartSlice.reducer,
	[api.reducerPath]: api.reducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})