import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInputValue {
	value: string
}
const initialState: IInputValue = {
	value: ''
}
export const inputValueSlice = createSlice({
	name: 'input-value',
	initialState,
	reducers: {
		setInputValue: (state, {payload: value}: PayloadAction<string>) => {
			state.value = value
		}
	}
})