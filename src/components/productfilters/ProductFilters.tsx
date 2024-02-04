import RangeSlider from '../../UI/rangeSlider/RangeSlider'
import { useGetCategoriesListQuery } from '../../store/api/api'
import './productFilters.scss'
import {FC, Dispatch, SetStateAction, ChangeEvent, useEffect} from 'react'
interface IProductFiltersProps {
	minPrice: number | null
	maxPrice: number | null
	setMinPrice: Dispatch<SetStateAction<number | null>>
	setMaxPrice: Dispatch<SetStateAction<number | null>>
	category: string | null
	setCategory: Dispatch<SetStateAction<string | null>>
	isHighRating: boolean
	setIsHighRating: Dispatch<SetStateAction<boolean>>
	filtersCounter: string[]
	setFiltersCounter: Dispatch<SetStateAction<string[]>>
}
const ProductFilters: FC<IProductFiltersProps> = ({minPrice, maxPrice, setMinPrice, setMaxPrice, category, setCategory, isHighRating, setIsHighRating, filtersCounter, setFiltersCounter}) => {
	const categoriesList = useGetCategoriesListQuery(null)
	useEffect(() => {
		if (minPrice == 0 && maxPrice == 1000) {
			setFiltersCounter(filtersCounter.filter(item => item !== 'price'))
		}
	}, [minPrice])
	useEffect(() => {
		if (maxPrice == 1000 && minPrice == 0) {
			setFiltersCounter(filtersCounter.filter(item => item !== 'price'))
		}
	}, [maxPrice])
	useEffect(() => {
		if (!filtersCounter.includes('price') && maxPrice) {
			setFiltersCounter([...filtersCounter, 'price'])
		}
	}, [minPrice, maxPrice])
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
				if (!maxPrice) {
					setMaxPrice(maxPrice || 1000)
				}
				} 
		} max={1000} min={0}/>
			<input type="number" value={maxPrice == null ? 1000 : maxPrice} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				if (parseFloat(e.target.value) >= (minPrice || 0)) {
					setMaxPrice(parseFloat(e.target.value) > 1000 ? maxPrice : parseFloat(e.target.value))}
					if (!minPrice) {
						setMinPrice(minPrice || 0)
					}
				} 
		} max={1000} min={0}/>
		</div>
		<h2>Category</h2>
			</div>
		<div className="select-wrapper">
		<select onChange={(e: ChangeEvent<HTMLSelectElement>) => {
			const selectedCategory = e.target.value || null
				setCategory(selectedCategory)
				if (!category) {
					setFiltersCounter([...filtersCounter, 'category'])
				}
				if (category) {
					setFiltersCounter(filtersCounter.filter(item => item !== 'category'))
				}
		}}>
			<option value=''>No category</option>
			{
				categoriesList.data?.map((category: string) => {
					return <option key={category} value={category}>{category}</option>
				})
			}
		</select>
		</div>
		<div className="set-rating">
		<h2>Only high rating (more than 4.5)</h2>
		<input type="checkbox" checked={isHighRating} onChange={() => {
			setIsHighRating(!isHighRating)
			if (!isHighRating) {
				setFiltersCounter([...filtersCounter, 'rating'])
			}
			if (isHighRating) {
				setFiltersCounter(filtersCounter.filter(item => item !== 'rating'))
			}
		}} />
		</div>
		</div>
	 );
}
 
export default ProductFilters;