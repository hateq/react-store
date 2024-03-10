import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductCart } from '../../types/product.types'
let initialState: IProductCart[] =
	JSON.parse(localStorage.getItem('cart-items')!) || []
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart: (state, { payload: product }: PayloadAction<IProductCart>) => {
			const isExists = state.some(p => p.id == product.id)
			if (isExists) {
				const index = state.findIndex(item => item.id == product.id)
				state.splice(index, 1)
			} else {
				state.push(product)
			}
			localStorage.setItem('cart-items', JSON.stringify(state))
		},
		updateQuantity: (
			state,
			{
				payload: quantity,
			}: PayloadAction<{ product: IProductCart; quantity: number }>
		) => {
			const currentIndex = state.findIndex(
				i => i.title == quantity.product.title
			)
			state[currentIndex] = {
				...state[currentIndex],
				quantity: quantity.quantity,
			}
		},
	},
})
