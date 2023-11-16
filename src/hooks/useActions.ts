import {useMemo} from 'react'
import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { cartSlice } from '../store/cart/cart.slice'

const rootActions = {
	...cartSlice.actions
}
export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}