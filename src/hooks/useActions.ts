import {useMemo} from 'react'
import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { cartSlice } from '../store/cart/cart.slice'
import { userCountrySlice } from '../store/usercountry/userCountry.slice'
import { selectedCategorySlice } from '../store/selectedcategory/selectedCategory.slice'
import { inputValueSlice } from '../store/inputvalue/inputValue.slice'

const rootActions = {
	...cartSlice.actions,
	...userCountrySlice.actions,
	...selectedCategorySlice.actions,
	...inputValueSlice.actions
}
export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}