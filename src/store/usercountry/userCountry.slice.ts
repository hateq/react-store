import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IUserCountry {
	country: string
}
const localStorageUserCountry = JSON.parse(localStorage.getItem('user-country')!) || {country: null}
const initialState: IUserCountry = {country: localStorageUserCountry.country || 'Russia'}
export const userCountrySlice = createSlice({
	name: 'user-country',
	initialState,
	reducers: {
		setUserCountry: (state, {payload: country}: PayloadAction<string>) => {
			state.country = country
			localStorage.setItem('user-country', JSON.stringify(state))
		}
	}
})