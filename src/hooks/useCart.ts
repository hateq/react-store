import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const cart = useTypedSelector(state => state.cart)
	return {cart}
}