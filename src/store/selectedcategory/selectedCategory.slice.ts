import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ISelectedCategory {
	id: number, name: string
}
type TypeSelectedCategory =  {
	selectedCategory: ISelectedCategory | null
}
const localStorageSelectedCategory = JSON.parse(localStorage.getItem('selected-category')!)
const initialState: TypeSelectedCategory = {selectedCategory: localStorageSelectedCategory || null }
export const selectedCategorySlice = createSlice({
	name: 'selected-category',
	initialState,
	reducers: {
		setSelectedCategory: (state, {payload: category}: PayloadAction<ISelectedCategory>) => {
			state.selectedCategory = category
			localStorage.setItem('selected-category', JSON.stringify(category))
		}
	}
})