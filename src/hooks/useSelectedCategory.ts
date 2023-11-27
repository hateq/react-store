import { useTypedSelector } from './useTypedSelector'

export const useSelectedCategory = () => {
	const selectedCategory = useTypedSelector(state => state.selectedCategory)
	return {selectedCategory}
}