import { useTypedSelector } from './useTypedSelector'

export const useIsLogedIn = () => {
	const isLogedIn = useTypedSelector(state => state.isLogedIn)
	return {isLogedIn}
}