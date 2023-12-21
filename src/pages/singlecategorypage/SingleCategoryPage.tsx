import { useSelectedCategory } from '../../hooks/useSelectedCategory'
import './singleCategoryPage.scss'

const SingleCategoryPage = () => {
	const { selectedCategory } = useSelectedCategory()
	return (
		<>
			<h2 style={{ color: 'black' }}>
				{selectedCategory?.selectedCategory}
			</h2>
		</>
	)
}

export default SingleCategoryPage
