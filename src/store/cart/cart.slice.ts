import {createSlice} from '@reduxjs/toolkit'
import { IProduct } from '../../types/IProduct'

const initialState: IProduct[] = []
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		
	}
})
