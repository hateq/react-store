import { createSlice } from '@reduxjs/toolkit'

type TypeIsLogedIn = {
	isLogedIn: boolean
}
const localStorageIsLogedIn = JSON.parse(localStorage.getItem('is-logedin')!)
const initialState: TypeIsLogedIn = {
	isLogedIn: localStorageIsLogedIn || false,
}
export const isLogedInSlice = createSlice({
	name: 'is-logedin',
	initialState,
	reducers: {
		setIsLogedIn: state => {
			const newValue = state.isLogedIn == true ? false : true
			state.isLogedIn = newValue
			localStorage.setItem('is-logedin', JSON.stringify(newValue))
		},
	},
})
