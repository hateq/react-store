import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type TypeSelectedCategory =  {
	selectedCategory: string | null
}
const localStorageSelectedCategory = localStorage.getItem('selected-category')
const initialState: TypeSelectedCategory = {selectedCategory: localStorageSelectedCategory || null }
export const selectedCategorySlice = createSlice({
	name: 'selected-category',
	initialState,
	reducers: {
		setSelectedCategory: (state, {payload: category}: PayloadAction<string>) => {
			state.selectedCategory = category
			localStorage.setItem('selected-category', category)
		}
	}
})