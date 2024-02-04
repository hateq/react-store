import './productsPage.scss'
import { useInputValue } from '../../hooks/useInputValue'
import FiltersIcon from '../../../images/icons/filters.svg'
import { useState, ChangeEvent } from 'react'
import { useGetProductsListQuery } from '../../store/api/api'
import MyLoader from '../../UI/myLoader/MyLoader'
import MyModal from '../../UI/myModal/MyModal'
import ProductFilters from '../productfilters/ProductFilters'
import { IProduct } from '../../types/product.types'
import ProductsList from '../productslist/ProductsList'
import SelectedProductCard from '../selectedproductcard/SelectedProductCard'

const ProductsPage = () => {
	const {inputValue} = useInputValue()
	const allProducts = useGetProductsListQuery(null).data
	const [minPrice, setMinPrice] = useState<number | null>(null)
	const [maxPrice, setMaxPrice] = useState<number | null>(null)
	const [category, setCategory] = useState<string | null>(null)
	const [isHighRating, setIsHighRating] = useState<boolean>(false)
	const [selectedSort, setSelectedSort] = useState<string>('')
	const [selectedProduct, setSelectedProduct] = useState<null | IProduct>(null)
	const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)
	const [isProductOpen, setIsProductOpen] = useState<boolean>(false)
	const [filtersCounter, setFiltersCounter] = useState<string[]>([]);
	const filterProductsList = (productsList: IProduct[]) => {
		const sortProductsList = (productsListFilter: IProduct[]) => {
			if (selectedSort == '') {
				return productsListFilter
			} else {
				return productsListFilter.sort((a, b) => selectedSort == 'price-to-high' ? a.price - b.price : -a.price - -b.price)
			}
		}
		const filteredProductsList = productsList?.filter((product) => product.title.toLowerCase().includes(inputValue.value.toLowerCase()))?.filter(product => minPrice! | maxPrice! ? product.price > minPrice! && product.price < maxPrice! : product).filter(product => category ? product.category == category : product).filter(product => isHighRating ? product.rating.rate >= 4.5 : product)
		return sortProductsList(filteredProductsList)
	}
	const allProductsList = filterProductsList(allProducts)
	// console.log(allProductsList)
	return ( 
		<div className="products">
			<div className="products-top">
		<div className="products-top__filters"><img src={FiltersIcon} alt="" onClick={() => setIsFiltersOpen(true)} /><p>{filtersCounter.length}</p></div>
		<div className="products-top__results">
		<p>We found {allProductsList ? allProductsList.length : 'many'} results</p>
		</div>
		<div className="products-top__sort">
		<select onChange={(e:ChangeEvent<HTMLSelectElement>) => {
			setSelectedSort(e.target.value)
		}}>
			<option value="">Sort by default</option>
			<option value="price-to-high">Sort by price to high</option>
			<option value="price-to-low">Sort by price to low</option>
		</select>
		</div>
			</div>
			{allProductsList ? <ProductsList products={allProductsList} setIsOpen={setIsProductOpen} setProduct={setSelectedProduct}/> : <MyLoader/>}
			<MyModal isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen}>
				<ProductFilters minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} category={category} setCategory={setCategory} isHighRating={isHighRating} setIsHighRating={setIsHighRating} filtersCounter={filtersCounter} setFiltersCounter={setFiltersCounter} />
			</MyModal>
			<MyModal isOpen={isProductOpen} setIsOpen={setIsProductOpen}>
		<SelectedProductCard product={selectedProduct}/>
			</MyModal>
		</div>
	 );
}
 
export default ProductsPage;