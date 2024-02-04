import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.types'

const initialState: IProduct[] = JSON.parse(localStorage.getItem('cart-items')!) || []
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart: (state, {payload: product}: PayloadAction<IProduct>) => {
			const isExists = (state.some(p => p.id == product.id))
			if (isExists) {
				const index = state.findIndex(item => item.id == product.id)
				state.splice(index, 1)
			} else {
				state.push(product)
			}
			localStorage.setItem('cart-items', JSON.stringify(state))
		}
	}
})
