import './productsPage.scss'
import { useInputValue } from '../../hooks/useInputValue'
import FiltersIcon from '../../../images/icons/filters.svg'
import { useState, ChangeEvent } from 'react'
import { useGetProductsListQuery } from '../../store/api/api'
import MyLoader from '../../UI/myLoader/MyLoader'
import MyModal from '../../UI/myModal/MyModal'
import ProductFilters from '../productfilters/ProductFilters'
import { IProduct } from '../../types/product.types'

const ProductsPage = () => {
	const {inputValue} = useInputValue()
	const [productsLimit, setProductsLimit] = useState<number>(10)
	const currentProductsList = useGetProductsListQuery(productsLimit).data?.filter((product: IProduct) => product.title.toLowerCase().includes(inputValue.value.toLowerCase()))
	const allProductsList = useGetProductsListQuery(20).data?.filter((product: IProduct) => product.title.toLowerCase().includes(inputValue.value.toLowerCase()))
	const [minPrice, setMinPrice] = useState<number | null>(null)
	const [maxPrice, setMaxPrice] = useState<number | null>(null)
	const [category, setCategory] = useState<string | null>(null)
	const [isHighRating, setIsHighRating] = useState<boolean>(false)
	const [offset, setOffset] = useState<number>(0)
	const [selectedSort, setSelectedSort] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return ( 
		<div className="products">
			<div className="products-top">
		<div className="products-top__filters"><img src={FiltersIcon} alt="" onClick={() => setIsOpen(true)} /></div>
		<div className="products-top__results">
		<p>We found {allProductsList ? allProductsList.length : 'many'} results</p>
		</div>
		<div className="products-top__sort">
		<select onChange={(e:ChangeEvent<HTMLSelectElement>) => console.log(e.target.value)}>
			<option value="">Sort by default</option>
			<option value="price-to-high">Sort by price to high</option>
			<option value="price-to-low">Sort by price to low</option>
		</select>
		</div>
			</div>
			<MyLoader/>
			<MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
				<ProductFilters minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setCategory={setCategory}/>
			</MyModal>
		</div>
	 );
}
 
export default ProductsPage;