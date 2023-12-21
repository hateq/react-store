import { useTypedSelector } from './useTypedSelector'

export const useInputValue = () => {
	const inputValue = useTypedSelector(state => state.inputValue)
	return {inputValue}
}