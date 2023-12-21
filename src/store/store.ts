import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import { cartSlice } from './cart/cart.slice'
import { userCountrySlice } from './usercountry/userCountry.slice'
import { selectedCategorySlice } from './selectedcategory/selectedCategory.slice';
import { inputValueSlice } from './inputvalue/inputValue.slice'

const reducers = combineReducers({
	cart: cartSlice.reducer,
	userCountry: userCountrySlice.reducer,
	selectedCategory: selectedCategorySlice.reducer,
	inputValue: inputValueSlice.reducer,
	[api.reducerPath]: api.reducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>