import ProductsList from '../../components/productslist/ProductsList'
import SelectedProductCard from '../../components/selectedproductcard/SelectedProductCard'
import MyModal from '../../UI/myModal/MyModal'
import { useSelectedCategory } from '../../hooks/useSelectedCategory'
import './singleCategoryPage.scss'
import { useState } from 'react'
import { IProduct, IProductCart } from '../../types/product.types'
import { useGetProductsListQuery } from '../../store/api/api'
const SingleCategoryPage = () => {
	const { selectedCategory } = useSelectedCategory()
	const products = useGetProductsListQuery(null).data?.filter((p: IProduct) => p.category == selectedCategory.selectedCategory)
	const [isProductOpen, setIsProductOpen] = useState<boolean>(false)
	const [selectedProduct, setSelectedProduct] = useState<null | IProductCart>(null)
	return (
		<>
			<h2 className='category-title'>
				{selectedCategory?.selectedCategory}
			</h2>
			<ProductsList products={products} setIsOpen={setIsProductOpen} setProduct={setSelectedProduct}/>
			<MyModal isOpen={isProductOpen} setIsOpen={setIsProductOpen}>
		<SelectedProductCard product={selectedProduct}/>
			</MyModal>
		</>
	)
}

export default SingleCategoryPage
