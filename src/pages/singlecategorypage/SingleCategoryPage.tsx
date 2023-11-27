import { useSelectedCategory } from '../../hooks/useSelectedCategory'
import './singleCategoryPage.scss'

const SingleCategoryPage = () => {
	const { selectedCategory } = useSelectedCategory()
	return (
		<>
			<h2 style={{ color: 'white' }}>
				{selectedCategory?.selectedCategory?.name}
			</h2>
		</>
	)
}

export default SingleCategoryPage
