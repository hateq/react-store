import RangeSlider from '../../UI/rangeSlider/RangeSlider'
import { useGetCategoriesListQuery } from '../../store/api/api'
import './productFilters.scss'
import {FC, Dispatch, SetStateAction, ChangeEvent} from 'react'
interface IProductFiltersProps {
	minPrice: number | null
	maxPrice: number | null
	setMinPrice: Dispatch<SetStateAction<number | null>>
	setMaxPrice: Dispatch<SetStateAction<number | null>>
	setCategory: Dispatch<SetStateAction<string | null>>
}
const ProductFilters: FC<IProductFiltersProps> = ({minPrice, maxPrice, setMinPrice, setMaxPrice, setCategory}) => {
	const categoriesList = useGetCategoriesListQuery(null)
	return ( 
		<div className="product-filters">
			<div className="set-price">
				<h2>Price</h2>
		<RangeSlider setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} min={0} max={1000} minPrice={minPrice} maxPrice={maxPrice}/>
		<div className="inputs-wrapper">
		<input type="number" value={minPrice == null ? 0 : minPrice} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				if (parseFloat(e.target.value) <= (maxPrice || 1000)) {
					setMinPrice(parseFloat(e.target.value))
				}
				} 
		} max={1000} min={0}/>
			<input type="number" value={maxPrice == null ? 1000 : maxPrice} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				if (parseFloat(e.target.value) >= (minPrice || 0)) {
					setMaxPrice(parseFloat(e.target.value) > 1000 ? maxPrice : parseFloat(e.target.value))}
				} 
		} max={1000} min={0}/>
		</div>
		<h2>Category</h2>
			</div>
		<div className="select-wrapper">
		<select onChange={(e: ChangeEvent<HTMLSelectElement>) => {
			const selectedCategory = e.target.value || null
				setCategory(selectedCategory)
		}}>
			<option value=''>No category</option>
			{
				categoriesList.data?.map((category: string) => {
					return <option key={category} value={category}>{category}</option>
				})
			}
		</select>
		</div>
		</div>
	 );
}
 
export default ProductFilters;