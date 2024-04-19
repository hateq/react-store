import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserAccount  {
	userLogin: null | string
	userPassword: null | string
	userName: null | string
	userSurname: null| string
}
const localStorageUserAccount = JSON.parse(localStorage.getItem('user-account')!)
const initialState:IUserAccount = localStorageUserAccount || {userLogin: null, userPassword: null, userName: null, userSurname: null}
export const userAccountSlice = createSlice({
	name: 'user-account',
	initialState,
	reducers: {
		setUserAccount: (state, {payload: userData}: PayloadAction<{userLogin: string, userPassword: string, userName: string, userSurname: string}>) => {
			state.userLogin = userData.userLogin
			state.userPassword = userData.userLogin
			state.userName = userData.userName
			state.userSurname = userData.userSurname
			localStorage.setItem('user-account', JSON.stringify(state))
		},
	},
})